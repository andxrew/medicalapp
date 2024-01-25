/* you will need to download this on your version to run it
 "npm install openai" */
import { NextResponse } from "next/server";
import OpenAI from "openai";


export async function POST(request){

    // tests that the dynamic environment key is reachable
    // console.log(process.env.REACT_APP_NOT_SECRET_CODE);

    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_NOT_SECRET_CODE
    })

    
    // sends message
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {   // directed at ai
                role: "system",
                content:"Act as if you are a qualified doctor that will take user inputs that relate to themselves such as Age, weight, height, sex, family history and ethnicity and then comparing statistic such as from the NHS, you will then assess the users health risks and let them know if they need to see a doctor in a simple concise manner."
            },
            {   // directed from user
                role: "user",
                content: "I am 19 years old i weight 70kg and eat take away twice a week. I am also from pakistani. What health conditions will i be at risk from?"
            }
        ],
        temperature: 0,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
    
    return NextResponse.json(response);
    
}


