"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"

interface Student {
  RollNo: string
  EnrollmentNo: string
  StudentName: string
  StudentProgram: string
  Email: string
  PhoneStudent1: string
  Semester: string
  DivisionCode: string
  Gender: string
}

export default function PUDataPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("")

  const programs = Array.from(new Set(students.map((s) => s.StudentProgram)))

  useEffect(() => {
    if (authenticated) {
      fetchStudents()
    }
  }, [authenticated])

  useEffect(() => {
    filterStudents()
  }, [students, searchTerm, selectedProgram]) //This hook specifies more dependencies than necessary: students, searchTerm, selectedProgram

  const fetchStudents = async () => {
    try {
      const response = await fetch("/api/students")
      if (response.ok) {
        const data = await response.json()
        setStudents(data)
      } else {
        console.error("Failed to fetch students")
      }
    } catch (error) {
      console.error("Error fetching students:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAuthentication = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this password to the server for verification
    if (password === "your-secret-password") {
      setAuthenticated(true)
    } else {
      alert("Incorrect password")
    }
  }

  const filterStudents = () => {
    let filtered = students
    if (searchTerm) {
      filtered = filtered.filter((student) =>
        Object.values(student).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }
    if (selectedProgram) {
      filtered = filtered.filter((student) => student.StudentProgram === selectedProgram)
    }
    setFilteredStudents(filtered)
  }

  if (!authenticated) {
    return (
      <div className="container mx-auto flex h-screen items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Enter Password</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuthentication} className="space-y-4">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Student Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex space-x-4">
            <Input
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Select value={selectedProgram} onValueChange={setSelectedProgram}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Programs</SelectItem>{" "}
                {/*Select Item must have a value prop that is not an empty string. Please modify the default value prop to be a non-empty string.*/}
                {programs.map((program) => (
                  <SelectItem key={program} value={program}>
                    {program}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {loading ? (
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {filteredStudents.map((student) => (
                <AccordionItem key={student.EnrollmentNo} value={student.EnrollmentNo}>
                  <AccordionTrigger>{student.StudentName}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>
                        <strong>Roll No:</strong> {student.RollNo}
                      </p>
                      <p>
                        <strong>Enrollment No:</strong> {student.EnrollmentNo}
                      </p>
                      <p>
                        <strong>Program:</strong> {student.StudentProgram}
                      </p>
                      <p>
                        <strong>Email:</strong> {student.Email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {student.PhoneStudent1}
                      </p>
                      <p>
                        <strong>Semester:</strong> {student.Semester}
                      </p>
                      <p>
                        <strong>Division:</strong> {student.DivisionCode}
                      </p>
                      <p>
                        <strong>Gender:</strong> {student.Gender}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

