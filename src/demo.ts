import dotenv from 'dotenv-safe';
import { ChatGPTAPI } from 'chatgpt';

dotenv.config();

async function example() {
    // sessionToken is required; see below for details
    const api = new ChatGPTAPI({
        sessionToken: process.env.SESSION_TOKEN || '',
    });

    // ensure the API is properly authenticated
    await api.ensureAuth();

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
