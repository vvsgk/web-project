import { NextResponse } from "next/server"

const students = [
  {
    RollNo: "1",
    EnrollmentNo: "2203031240005",
    StudentName: "AAVULA NITISH",
    PhoneStudent1: "9391719714",
    StudentProgram: "PIET-1 - BTech - AI",
    Email: "nitishyadav449@gmail.com",
    Semester: "2",
    DivisionCode: "2B1_AI_202223",
    Gender: "M",
  },
  {
    RollNo: "2",
    EnrollmentNo: "2203031240006",
    StudentName: "JOHN DOE",
    PhoneStudent1: "9876543210",
    StudentProgram: "PIET-1 - BTech - CS",
    Email: "johndoe@example.com",
    Semester: "2",
    DivisionCode: "2B1_CS_202223",
    Gender: "M",
  },
  {
    RollNo: "3",
    EnrollmentNo: "2203031240007",
    StudentName: "JANE SMITH",
    PhoneStudent1: "9876543211",
    StudentProgram: "PIET-1 - BTech - AI",
    Email: "janesmith@example.com",
    Semester: "2",
    DivisionCode: "2B1_AI_202223",
    Gender: "F",
  },
  // Add more student objects as needed...
]

export async function GET() {
  return NextResponse.json(students)
}

