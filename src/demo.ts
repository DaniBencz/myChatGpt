import dotenv from 'dotenv-safe';
import { ChatGPTAPIBrowser } from 'chatgpt';

dotenv.config();

async function example() {
    const api = new ChatGPTAPIBrowser({
        email: process.env.OPENAI_EMAIL || '',
        password: process.env.OPENAI_PASSWORD || '',
    });

    await api.initSession();

    // send a message and wait for the response
    const response = await api.sendMessage(
        'Write a typescript version of bubble sort.'
    );

    // response is a markdown-formatted string
    console.log(response);
}

try {
    await example();
} catch (err) {
    console.error(err);
    process.exit(1);
}
