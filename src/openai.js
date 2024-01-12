const {Configuration,OpenAIApi} = require('openai')
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
  const res = await openai.createCompleteion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.7,
    max_token: 256,
    top_p: 1,
    frequency_penalty: 0,
    presense_penalty: 0,
  });
  return res.data.choices[0].text;
}
