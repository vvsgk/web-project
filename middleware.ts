import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verify } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value

  if (request.nextUrl.pathname.startsWith("/pu_data")) {
    if (token) {
      try {
        verify(token, JWT_SECRET)
        return NextResponse.next()
      } catch {
        return NextResponse.redirect(new URL("/login", request.url))
      }
    }
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

