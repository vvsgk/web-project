import { NextResponse } from "next/server"
import { sign } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function POST(req: Request) {
  const { username, password } = await req.json()

  // Replace this with actual user authentication logic
  if (username === "admin" && password === "password") {
    const token = sign({ username }, JWT_SECRET, { expiresIn: "1h" })
    return NextResponse.json({ token })
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }
}

