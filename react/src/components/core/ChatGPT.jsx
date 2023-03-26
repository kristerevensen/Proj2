import React, { useState } from 'react';
import openai from 'openai';



export default function ChatGPT({ promptText = null }) {
  const [response, setResponse] = useState('');
  
  const apiKey = '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';
  async function generateCompletion() {
    try {
      const completion = await openai.Completion.create({
        engine: 'gpt-3.5-turbo',
        prompt: `User: ${promptText}\nAssistant:`,
        max_tokens: 100,
        n: 1,
        stop: null,
        temperature: 0.8,
      });
      setResponse(completion.choices[0].text);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Call the generateCompletion function when the component mounts if promptText is provided
  React.useEffect(() => {
    if (promptText) {
      generateCompletion();
    }
  }, [promptText]);

  return (
    {response}
  );
}
