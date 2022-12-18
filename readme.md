# OpenAI Image Generator API

This is a simple image generator built with Node.js and Express that uses [OpenAI's Dall-E models](https://beta.openai.com/docs/guides/images) to generate images.

## Usage

Generate an API KEY at [OpenAI](https://beta.openai.com/) and add a new controllers/config.json file

```json
{
  "API_KEY": "YOUR_KEY"
}
```

Change cors options in the index.js file to your allowed origins

Install the dependencies

```bash
npm install
```

Run server

```bash
npm run dev
```

The endpoint is at `POST http://localhost:3000/openai/generateimage`.
