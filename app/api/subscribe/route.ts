import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
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

    // Check if email already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 400 }
      );
    }

    // Save to database
    await prisma.subscriber.create({
      data: {
        email,
        subscribedAt: new Date(),
      },
    });

    // Send welcome email
    await resend.emails.send({
      from: 'MicroSaaS Challenge <challenge@25microsaas.com>',
      to: email,
      subject: 'Welcome to the MicroSaaS Challenge!',
      html: `
        <h1>Welcome to the MicroSaaS Challenge!</h1>
        <p>Thank you for joining our community of builders and entrepreneurs.</p>
        <p>You'll receive bi-weekly project prompts and updates about the challenge.</p>
        <p>Get ready to start building your micro-SaaS empire!</p>
      `,
    });

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