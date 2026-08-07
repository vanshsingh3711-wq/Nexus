"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Send, Bot, User, Code, Check, Loader2, ChevronDown, MessageSquare, Plus, RefreshCw, Layers } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Repository {
  id: string;
  name: string;
  owner: string;
  status: string;
  githubRepositoryId: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatPage() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isLoading]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("/api/repositories");
        if (res.ok) {
          const data = await res.json();
          // Filter out failed repos if needed, but for now show all
          setRepositories(data);
          
          // Select the first READY repository by default
          const readyRepo = data.find((r: Repository) => r.status === "READY");
          if (readyRepo) setSelectedRepo(readyRepo);
        }
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      }
    };
    fetchRepos();
  }, []);

  const handleSend = async () => {
    if (!input.trim() || !selectedRepo || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userQuery: userMessage.content,
          repositoryId: selectedRepo.id,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const aiMessage: Message = { role: "assistant", content: data.answer || "No response received." };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        const err = await res.json();
        const errorMessage: Message = { role: "assistant", content: `**Error:** ${err.error || "Failed to generate answer"}` };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "**Error:** Failed to connect to the server." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "READY": return "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20";
      case "INDEXING": return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
      case "FAILED": return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
      default: return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-background/50 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden relative">
      
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-border/40 bg-background/80 z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground text-sm">Repository Assistant</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Ask anything about your codebase</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {repositories.length > 0 ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent/50 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                <Layers className="w-4 h-4 text-muted-foreground" />
                <span className="max-w-[120px] truncate">
                  {selectedRepo ? selectedRepo.name : "Select Repository"}
                </span>
                <ChevronDown className="w-4 h-4 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[240px]">
                {repositories.map((repo) => (
                  <DropdownMenuItem 
                    key={repo.id} 
                    onClick={() => setSelectedRepo(repo)}
                    className="flex flex-col items-start gap-1 p-2"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-medium">{repo.name}</span>
                      {selectedRepo?.id === repo.id && <Check className="w-4 h-4 text-primary" />}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                        {repo.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{repo.owner}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" size="sm" disabled className="h-9">
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Loading Repos...
            </Button>
          )}

          {selectedRepo && (
            <Badge variant="outline" className={`px-2 py-0.5 ${getStatusColor(selectedRepo.status)}`}>
              <span className="flex items-center gap-1.5">
                {selectedRepo.status === "INDEXING" && <RefreshCw className="w-3 h-3 animate-spin" />}
                {selectedRepo.status}
              </span>
            </Badge>
          )}
        </div>
      </div>

      {/* Chat Area */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 bg-background/20 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto space-y-6 pb-24">
          
          {/* Empty State */}
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-primary/20 shadow-inner">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-2">How can I help you?</h2>
              <p className="text-muted-foreground max-w-[400px] text-sm leading-relaxed mb-8">
                I'm ready to answer questions, explain code, or help you find specific implementations in your selected repository.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-[600px]">
                {[
                  "Explain the authentication flow",
                  "Where is the database schema defined?",
                  "How are errors handled in the API?",
                  "Show me the main React components"
                ].map((prompt, i) => (
                  <Button 
                    key={i} 
                    variant="outline" 
                    className="h-auto py-3 px-4 justify-start text-left text-sm text-muted-foreground hover:text-foreground border-border/50 bg-background/50 hover:bg-accent/50"
                    onClick={() => {
                      setInput(prompt);
                    }}
                  >
                    <Plus className="w-4 h-4 mr-2 opacity-50 flex-shrink-0" />
                    <span className="truncate">{prompt}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === "user" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "bg-muted text-muted-foreground border border-border"
              }`}>
                {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              
              <div className={`flex-1 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed shadow-sm ${
                  msg.role === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card border border-border/50 text-card-foreground prose prose-invert prose-sm max-w-none"
                }`}>
                  {msg.role === "user" ? (
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  ) : (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ node, inline, className, children, ...props }: any) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <div className="relative group mt-4 mb-4 rounded-lg overflow-hidden border border-border/50">
                              <div className="flex items-center justify-between px-4 py-1.5 bg-[#1e1e1e] border-b border-[#2d2d2d]">
                                <span className="text-xs text-zinc-400 font-mono lowercase">{match[1]}</span>
                                <button 
                                  onClick={() => navigator.clipboard.writeText(String(children).replace(/\n$/, ""))}
                                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                                  title="Copy code"
                                >
                                  <Code className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <SyntaxHighlighter
                                {...props}
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                customStyle={{ margin: 0, padding: "1rem", backgroundColor: "#1e1e1e" }}
                                codeTagProps={{ className: "text-sm font-mono" }}
                              >
                                {String(children).replace(/\n$/, "")}
                              </SyntaxHighlighter>
                            </div>
                          ) : (
                            <code {...props} className="bg-muted px-1.5 py-0.5 rounded-md font-mono text-xs text-primary/90">
                              {children}
                            </code>
                          );
                        },
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-4 flex-row animate-in fade-in slide-in-from-bottom-2 duration-300">
               <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-muted text-muted-foreground border border-border">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-card border border-border/50 text-card-foreground rounded-2xl px-5 py-4 shadow-sm flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-background via-background/95 to-transparent z-20">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition duration-500" />
          <div className="relative flex items-end gap-2 bg-background border border-border shadow-lg rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-primary/50 transition-all duration-300 p-2">
            
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={selectedRepo ? `Ask about ${selectedRepo.name}...` : "Select a repository to start chatting"}
              disabled={!selectedRepo || isLoading}
              className="min-h-[52px] max-h-[200px] resize-none border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent py-3 px-3 text-sm leading-relaxed"
              rows={1}
            />
            
            <div className="flex-shrink-0 flex items-center mb-1 mr-1">
              <Button 
                size="icon" 
                className={`w-10 h-10 rounded-lg transition-all ${input.trim() ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                disabled={!input.trim() || !selectedRepo || isLoading}
                onClick={handleSend}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4 ml-0.5" />
                )}
              </Button>
            </div>
            
          </div>
          <div className="flex justify-center mt-2 opacity-50">
            <span className="text-[10px] text-muted-foreground flex items-center gap-1 font-medium">
              <span className="border border-border rounded px-1 py-0.5 bg-background shadow-sm">Enter</span> to send, 
              <span className="border border-border rounded px-1 py-0.5 bg-background shadow-sm">Shift + Enter</span> for new line
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
}
