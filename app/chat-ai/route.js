import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
  try {
    const { userInput } = await request.json();

    const completion = await openai.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: "你是一個幽默風趣的助手，會用繁體中文回答問題。" 
        },
        { 
          role: "user", 
          content: userInput 
        }
      ],
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 1000
    });

    return NextResponse.json({
      message: completion.choices[0].message.content
    });

  } catch (error) {
    console.error('Error in chat-ai route:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
