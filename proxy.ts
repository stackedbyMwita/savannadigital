import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Only run on routes you want to protect in future
    // '/dashboard/:path*',
    // '/admin/:path*',
  ],
};
