import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  console.log("Данные с фронтенда:", data) 
    
  return NextResponse.json({ message: "Success! We got your request." })
}