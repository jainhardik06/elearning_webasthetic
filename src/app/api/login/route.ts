import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // TODO: Implement actual authentication logic here (database check, etc.)
    console.log('Login attempt:', { email, password });

    if (email === 'test@example.com' && password === 'password') {
      return NextResponse.json({ message: 'Login successful', token: 'dummy-token' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
