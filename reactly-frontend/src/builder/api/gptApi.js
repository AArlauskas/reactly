const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
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
