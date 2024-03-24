/**
 * Reference: https://platform.openai.com/tokenizer
 * A helpful rule of thumb is that one token generally corresponds to ~4 characters of text for common English text.
 * This translates to roughly ¾ of a word (so 100 tokens ~= 75 words).
 *
 * @param text
 * @returns number of tokens
 */
const countTokens = (text: string): number => {
  const characterCount = text.length;
  return Math.ceil(characterCount / 4);
};

export { countTokens };
