import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Consider strings of length 85, in which each character is one of the letters $a,b,c,d$. How many such strings contain exactly 15 occurrences of the letter $a$ or exactly 30 occurrences of the letter $d$?`;

const label1 = String.raw`$\binom{85}{15} \cdot 3^{70} + \binom{85}{30} \cdot 3^{55}$`;
const label2 = String.raw`$\binom{85}{15} \cdot 3^{70} + \binom{85}{30} \cdot 3^{55} - \binom{85}{15} \cdot \binom{70}{30} \cdot 2^{40}$`;
const label3 = String.raw`$\binom{85}{15} \cdot 4^{70} + \binom{85}{30} \cdot 4^{55}$`;
const label4 = String.raw`None of the above`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
