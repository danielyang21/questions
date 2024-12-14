import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Consider strings of length 85, in which each character is one of the letters $a,b,c,d$. How many such strings contain exactly 10 occurrences of the letter $a$?`;

const label1 = String.raw`$\binom{85}{10} \cdot 3^{75}$`;
const label2 = String.raw`$\binom{85}{10} \cdot 3^{85}$`;
const label3 = String.raw`$\binom{85}{10} \cdot 4^{75}$`;
const label4 = String.raw`$\binom{85}{10} \cdot 4^{85}$`;
const label5 = String.raw`None of the above`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
