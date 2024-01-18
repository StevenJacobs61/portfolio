"use server";
import { getErrorMessage } from "@/lib/utils";
// import { validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.EMAIL_API_KEY);

export const sendEmail = async (formData : FormData) => {
    let message = formData.get("message");
    let senderEmail = formData.get("senderEmail");

    if(!senderEmail || typeof senderEmail !== 'string' || senderEmail.length > 500){
        throw new Error("Invalid sender email");
    }
    if(!message || typeof message !== 'string' || message.length > 5000){
        throw new Error("Invalid email message");
    }
   let data;
    try {
        data = await resend.emails.send({
            from: `onboarding@resend.dev`,
            to: "stevenjacobs61@gmail.com",
            subject: "Message from portfolio contact form",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {message:message as string, senderEmail: senderEmail as string})
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        }
    }
    return {
        data
    }
}