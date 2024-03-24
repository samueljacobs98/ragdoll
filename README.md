# RAG API

This is a TypeScript, Express, Node.js API project that showcases how to implement RAG (Retrieval-Augmented Generation) using OpenAI embeddings and completions.

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/samueljacobs98/ragdoll.git
   ```

2. Install dependencies:

   ```bash
   cd ragdoll
   npm install
   ```

3. Set up OpenAI API credentials:

   - Sign up for an OpenAI account and obtain an API key.
   - Create a `.env` file in the project root directory.
   - Add the following line to the `.env` file, replacing `YOUR_API_KEY` with your actual API key:

     ```plaintext
     OPENAI_API_KEY=YOUR_API_KEY
     ```

4. Start the server:

   ```bash
   npm run dev
   ```

5. Use the API:

- Send a POST request to `http://localhost:3000/v1/rag` and provide form-data with the following fields:

  - `files` - Up to 10 files containing the context for the question (note that there is a maximum token limit and therefore the extracted data may be truncated).
  - `query` - The question you want to ask.

- The API will use OpenAI embeddings and completions to generate an answer to the question based on the given context.

## License

This project is licensed under the [MIT License](LICENSE).
