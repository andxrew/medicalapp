import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request)
{
    

    const openai = new OpenAI({
        apiKey: "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"
    })

const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {
            role: "system",
            content:"Act as if you are a qualified doctor that will take user inputs that relate to themselves such as Age, weight, height, sex, family history and ethnicity and then comparing statistic such as from the NHS, you will then assess the users health risks and let them know if they need to see a doctor in a simple concise manner."
        },
        {
            role: "user"
            // content: "Variables of user"
        }
    ],
    temperature: 0,
    max_tokens: 512,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
})

    return NextResponse.json(response);

}