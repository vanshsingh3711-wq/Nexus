import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "SSE endpoint not implemented yet",
  });
}