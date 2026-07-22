import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  // Process body.selectedValue
  return NextResponse.json({ status: 'ok' });
}