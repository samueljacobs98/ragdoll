import { config } from "../../api/config";
import { RagSource } from "../../api/core/types";

const ragInstruction = `
  Read the provided information carefully to understand the context of the user's query.
  Synthesize the information from the sources to generate a comprehensive, accurate, and concise response.
  Aim to directly address the user's query with relevant details and insights, ensuring the response is informative and easy to understand.
  If the information from different sources appears conflicting, present a balanced view and highlight the discrepancies. Always adhere to factual accuracy and uphold a neutral tone.
  Where possible, provide explanations or rationale for the conclusions drawn to enrich the user's understanding of the topic.
`;

class RagPromptBuilder {
  private _system: string = ragInstruction;

  private _query: string;
  private _information: RagSource[];

  constructor(query: string, information: RagSource[]) {
    this._query = query;
    this._information = information;
  }

  build() {
    this._information.forEach((i) => console.log(i.tokenCount));
    const { information, tokenCount } = this._information.reduce(
      (acc, info) => {
        if (acc.tokenCount + info.tokenCount < config.app.promptTokenLimit) {
          return {
            information: `${acc.information}\nSource: ${info.source}\nContents:\n\t${info.contents}`,
            tokenCount: acc.tokenCount + info.tokenCount,
          };
        }
        return acc;
      },
      { information: "", tokenCount: 0 }
    );

    const prompt = `
      User query:
      ${this._query}
      
      Information:
      ${information}
    `;

    return { system: this._system, user: prompt };
  }
}

export { RagPromptBuilder };
