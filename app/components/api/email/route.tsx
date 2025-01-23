'use client'

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
        const { name, email, message } = await request.json();
console.log(`${name} ${email} ${message}`);
         if (!name || !email || !message) {
        return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD,
            },
            pool: true,
        });

        const mailOptions: Mail.Options = {
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: `Message from ${name} (${email})`,
            text: message,
        };
    try{
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email successfully sent.' });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}