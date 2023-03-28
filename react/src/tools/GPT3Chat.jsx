const openai = require('openai');

openai.apiKey = process.env.OPENAI_API_KEY;

async function GPT3Chat({ promptText }) {
  try {
    const completion = await openai.Completion.create({
      engine: 'gpt-3.5-turbo',
      prompt: promptText,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.8,
    });
    console.log(completion.choices[0].text);
  } catch (error) {
    console.error('Error:', error);
  }
}

GPT3Chat();