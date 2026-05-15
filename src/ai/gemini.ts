import { GoogleGenAI } from '@google/genai';

let _client: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
    if (!_client) {
        const apiKey = process.env.GOOGLE_GENAI_API_KEY;

        if (!apiKey) {
            throw new Error("GOOGLE_GENAI_API_KEY environment variable not configured.");
        }

        _client = new GoogleGenAI({ apiKey });
    }
    return _client;
}

export interface GenerateProductDetailsInput {
    title: string;
    category: string;
    dimensions: string;
    price: number;
    story?: string;
}

export interface GenerateProductDetailsOutput {
    description: string;
    suggestedPrice: number;
    craftStory: string;
}

export async function generateProductDetails(
    input: GenerateProductDetailsInput
): Promise<GenerateProductDetailsOutput> {
    const prompt = `You are an expert in crafting compelling product listings for artisan goods.

Based on the following product details, generate a detailed product description, a suggested price in USD (as a number), and a short craft story.
Return your response ONLY as a valid JSON object with the following keys:
"description" (string), "suggestedPrice" (number), and "craftStory" (string).

Title: ${input.title}
Category: ${input.category}
Dimensions: ${input.dimensions}
Price: ${input.price}
Story: ${input.story || 'None provided'}
`;

    try {
        console.log("Calling GCP service: Gemini (generateProductDetails)");
        const response = await getGeminiClient().models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        const textCompletion = response.text ?? '';
        console.log("GCP call success");

        // Attempt to parse JSON from the text
        const jsonMatch = textCompletion.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            return {
                description: parsed.description || input.title,
                suggestedPrice: Number(parsed.suggestedPrice) || input.price,
                craftStory: parsed.craftStory || input.story || 'A beautifully crafted item.',
            };
        }

        throw new Error('Failed to parse Gemini output into JSON');
    } catch (error: any) {
        console.error("GCP error:", error);
        throw new Error('Could not generate product details. Internal server error.');
    }
}
