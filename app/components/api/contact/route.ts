import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const { name, email, message }: ContactForm = await request.json();

        // Validate the data
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: "All fields are required." },
                { status: 400 }
            );
        }

        // Set up Nodemailer transporter for Outlook
        const transporter = nodemailer.createTransport({
            host: "smtp.office365.com", // Outlook SMTP server
            port: 587, // TLS port
            secure: false, // Use STARTTLS
            auth: {
                user: process.env.EMAIL_USER, // Environment variable for email
                pass: process.env.EMAIL_PASS, // Environment variable for password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender email
            to: process.env.RECIPIENT_EMAIL || "recipient-email@outlook.com", // Replace with recipient email
            subject: `New message from ${name}`,
            text: `From: ${name}\nEmail: ${email}\n\n${message}`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
