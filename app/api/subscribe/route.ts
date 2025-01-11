import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send welcome email
    await resend.emails.send({
      from: 'MicroSaaS Challenge <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to the MicroSaaS Challenge!',
      html: `
        <h1>Welcome to the MicroSaaS Challenge!</h1>
        <p>Thank you for joining our community of builders and entrepreneurs.</p>
        <p>You'll receive bi-weekly project prompts and updates about the challenge.</p>
        <p>Get ready to start building your micro-SaaS empire!</p>
      `,
    });

    // Here you would typically also save the email to your database
    // await db.insert({ email, subscribedAt: new Date() }).into('subscribers');

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Error subscribing to newsletter' },
      { status: 500 }
    );
  }
} 