const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "ENTER_YOUR_API_KEY_HERE",
});
const openai = new OpenAIApi(configuration);

export const getTextAnswer = (textInput) =>
  openai.createCompletion({
    model: "text-davinci-003",
    prompt: textInput,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
