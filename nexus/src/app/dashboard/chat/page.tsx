"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send, User, Code, Check, Loader2, ChevronDown,
  Sparkles, Layers, Copy, TerminalSquare
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import TextareaAutosize from 'react-textarea-autosize'; // Highly recommended: npm i react-textarea-autosize

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
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

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
          setRepositories(data);
          const readyRepo = data.find((r: Repository) => r.status === "READY" || r.status === "Connected");
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
        body: JSON.stringify({ userQuery: userMessage.content, repositoryId: selectedRepo.id }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [...prev, { role: "assistant", content: data.answer || "No response received." }]);
      } else {
        const err = await res.json();
        setMessages((prev) => [...prev, { role: "assistant", content: `**Error:** ${err.error || "Failed to generate answer"}` }]);
      }
    } catch (error) {
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

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[#09090B] relative font-sans">

      {/* Top Navbar / Header (Mimicking the mockup's top left repo selector) */}
      <div className="h-14 flex items-center justify-between px-6 border-b border-[#27272A] bg-[#09090B]/80 backdrop-blur-md z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-[#7C3AED]/20">
            <Layers className="w-3.5 h-3.5 text-[#7C3AED]" />
          </div>

          {repositories.length > 0 ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium text-[#FAFAFA] hover:text-[#7C3AED] transition-colors outline-none group">
                {selectedRepo ? selectedRepo.name : "Select Repository"}
                <ChevronDown className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#7C3AED] transition-colors" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[240px] bg-[#18181B] border-[#27272A] text-[#FAFAFA] p-1.5 rounded-xl">
                {repositories.map((repo) => (
                  <DropdownMenuItem
                    key={repo.id}
                    onClick={() => setSelectedRepo(repo)}
                    className="flex items-center justify-between p-2 rounded-lg focus:bg-[#27272A]/80 cursor-pointer outline-none"
                  >
                    <span className="text-sm truncate">{repo.name}</span>
                    {selectedRepo?.id === repo.id && <Check className="w-4 h-4 text-[#7C3AED]" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <span className="text-sm text-[#A1A1AA] flex items-center gap-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin" /> Loading context...
            </span>
          )}
        </div>

        {/* Connection Status Indicator */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
          <span className="text-xs text-[#A1A1AA] font-medium tracking-wide">AI ACTIVE</span>
        </div>
      </div>

      {/* Main Chat Scroll Area */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 px-4 sm:px-8 pt-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Abstract Empty State (Mimicking the visual nodes from your screenshot) */}
          <AnimatePresence>
            {messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center pt-20 pb-10"
              >
                {/* Node Graph CSS Art */}
                <div className="relative w-64 h-64 flex items-center justify-center mb-8 pointer-events-none">
                  <div className="absolute inset-0 border border-[#27272A] rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-4 border border-[#27272A]/50 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />

                  {/* Surrounding Nodes */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#3B82F6] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-[#F59E0B] rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#22C55E] rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-[#EC4899] rounded-full shadow-[0_0_15px_rgba(236,72,153,0.5)]" />

                  {/* Center Nexus Node */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.4)]">
                    <span className="text-white font-bold text-xl">N</span>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-[#FAFAFA] tracking-tight mb-2">Nexus Intelligence</h2>
                <p className="text-[#A1A1AA] text-sm text-center max-w-md">
                  I have analyzed your codebase structure. Ask me anything about components, database schemas, or routing logic.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* IDE-Style Threaded Messages */}
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-4 group ${msg.role === "user" ? "text-[#A1A1AA]" : "text-[#FAFAFA]"}`}
            >
              {/* Avatar Column */}
              <div className="flex-shrink-0 mt-1">
                {msg.role === "user" ? (
                  <div className="w-6 h-6 rounded bg-[#27272A] flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-[#FAFAFA]" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.3)]">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </div>

              {/* Content Column */}
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-[#FAFAFA]">
                    {msg.role === "user" ? "You" : "Nexus AI"}
                  </span>
                </div>

                {msg.role === "user" ? (
                  <div className="text-sm font-medium leading-relaxed">
                    {msg.content}
                  </div>
                ) : (
                  <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:p-0 prose-pre:bg-transparent prose-pre:my-6 prose-a:text-[#7C3AED] prose-a:no-underline hover:prose-a:underline">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ node, inline, className, children, ...props }: any) {
                          const match = /language-(\w+)/.exec(className || "");
                          const codeString = String(children).replace(/\n$/, "");
                          const isCopied = copiedCode === codeString;

                          return !inline && match ? (
                            <div className="rounded-xl overflow-hidden border border-[#27272A] bg-[#09090B] my-4 shadow-lg">
                              <div className="flex items-center justify-between px-4 py-2 bg-[#18181B] border-b border-[#27272A]">
                                <div className="flex items-center gap-2">
                                  <TerminalSquare className="w-4 h-4 text-[#A1A1AA]" />
                                  <span className="text-xs text-[#A1A1AA] font-mono lowercase">{match[1]}</span>
                                </div>
                                <button
                                  onClick={() => handleCopyCode(codeString)}
                                  className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                                >
                                  {isCopied ? <Check className="w-3.5 h-3.5 text-[#22C55E]" /> : <Copy className="w-3.5 h-3.5" />}
                                </button>
                              </div>
                              <SyntaxHighlighter
                                {...props}
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                customStyle={{ margin: 0, padding: "1.25rem", backgroundColor: "transparent" }}
                                codeTagProps={{ className: "text-sm font-mono leading-relaxed" }}
                              >
                                {codeString}
                              </SyntaxHighlighter>
                            </div>
                          ) : (
                            <code {...props} className="bg-[#27272A]/50 px-1.5 py-0.5 rounded text-[#7C3AED] font-mono text-[13px] border border-[#27272A]">
                              {children}
                            </code>
                          );
                        }
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Typing Indicator */}
          {isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.3)]">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
              <div className="flex-1 flex items-center gap-1.5 h-8">
                <span className="text-xs text-[#7C3AED] font-medium mr-2">Nexus is typing</span>
                <motion.div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} />
                <motion.div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
                <motion.div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
              </div>
            </motion.div>
          )}
        </div>
      </ScrollArea>

      {/* Floating Command Bar Input */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 z-30">
        <div className="relative group flex items-end gap-2 bg-[#18181B]/90 backdrop-blur-xl border border-[#27272A] p-2 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] focus-within:border-[#7C3AED]/50 transition-all duration-300">

          <TextareaAutosize
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={selectedRepo ? "Ask anything..." : "Select a repository to chat"}
            disabled={!selectedRepo || isLoading}
            maxRows={8}
            className="w-full resize-none border-0 bg-transparent py-3 px-3 text-sm text-[#FAFAFA] placeholder:text-[#A1A1AA] outline-none focus:ring-0 leading-relaxed"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl transition-colors ${input.trim() && selectedRepo && !isLoading
              ? "bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:bg-[#6D28D9]"
              : "bg-[#27272A] text-[#A1A1AA] cursor-not-allowed"
              }`}
            disabled={!input.trim() || !selectedRepo || isLoading}
            onClick={handleSend}
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 ml-0.5" />}
          </motion.button>
        </div>
      </div>

    </div>
  );
}