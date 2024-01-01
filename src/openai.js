import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: 'Your_api',
    dangerouslyAllowBrowser: true,
});

export async function main(message) {
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: message }],
            model: 'gpt-3.5-turbo',
        });

        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.log(error.message);
    }
}