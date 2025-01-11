"use server";

import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

const sql = neon(process.env.DATABASE_URL!);

export async function subscribeToNewsletter(email: string) {
  try {
    // Check if email already exists
    const existingSubscriber = await sql`
      SELECT email FROM subscribers 
      WHERE email = ${email}
    `;

    if (existingSubscriber.length > 0) {
      throw new Error("Email already subscribed");
    }

    // Insert new subscriber
    await sql`
      INSERT INTO subscribers (email, subscribed_at, status)
      VALUES (${email}, NOW(), 'active')
    `;

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
}

export async function getSubscriberCount() {
  try {
    const result = await sql`
      SELECT COUNT(*) as count 
      FROM subscribers 
      WHERE status = 'active'
    `;
    return result[0].count;
  } catch (error) {
    console.error("Error getting subscriber count:", error);
    return 0;
  }
}

export async function getRecentSubscribers(limit = 5) {
  try {
    const subscribers = await sql`
      SELECT email, subscribed_at 
      FROM subscribers 
      WHERE status = 'active' 
      ORDER BY subscribed_at DESC 
      LIMIT ${limit}
    `;
    return subscribers;
  } catch (error) {
    console.error("Error getting recent subscribers:", error);
    return [];
  }
} 