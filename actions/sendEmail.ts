"use server";
import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export const sendEmail = async (formData : FormData) => {
    const message = formData.get("message");
    const senderEmail = formData.get("senderEmail");

    if(!validateString(senderEmail, 500)){
        return {
            error: "Invalid sender email"
        }
    }
    if(!validateString(message, 5000)){
        return {
            error: "Invalid message"
        }
    }
    try {
        await resend.emails.send({
            from: senderEmail as string,
            to: "stevenjacobs61@gmail.com",
            subject: "Message from portfolio contact form",
            reply_to: senderEmail as string,
            text: message as string
        })
    } catch (error) {
        console.error(error)
    }
}