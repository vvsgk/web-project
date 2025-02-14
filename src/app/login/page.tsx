"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const username = "admin" // Fixed username

    // Redirect to API login page with username and password
    router.push(`/api/login?username=${username}&password=${password}`)
  }

  return (
    <div className="container mx-auto flex h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-lg bg-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-700">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Display Fixed Username */}
            <div className="text-lg font-semibold text-gray-600 text-center">
              Username: <span className="text-blue-600">admin</span>
            </div>

            {/* Password Field */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}