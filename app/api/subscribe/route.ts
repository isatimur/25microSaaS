import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { subscribeToNewsletter } from '@/app/actions';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    await subscribeToNewsletter(email);

    await resend.emails.send({
      from: 'AI Agent Challenge <challenge@25microsaas.com>',
      to: email,
      subject: 'Welcome to the AI Agent Challenge!',
      html: `
        <h1>Welcome to the AI Agent Challenge!</h1>
        <p>You're now following our journey building 25 autonomous AI agents in 50 weeks.</p>
        <p>Every two weeks, we ship a new AI agent designed to generate $200+/month in real revenue.</p>
        <p>You'll get:</p>
        <ul>
          <li>Weekly build logs with architecture and code</li>
          <li>Revenue numbers and unit economics</li>
          <li>Lessons learned and what we'd do differently</li>
        </ul>
        <p>Let's build AI that makes money.</p>
      `,
    });

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    if (error instanceof Error && error.message === 'Email already subscribed') {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Error subscribing to newsletter' },
      { status: 500 }
    );
  }
}
