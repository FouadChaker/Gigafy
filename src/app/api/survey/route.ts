import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("Survey Data:", data);
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
