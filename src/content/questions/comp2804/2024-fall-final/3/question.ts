import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Consider strings of length 85, in which each character is one of the letters $a,b,c,d$. How many such strings contain exactly 15 occurrences of the letter $a$ and exactly 30 occurrences of the letter $d$?`;

const label1 = String.raw`$\binom{85}{30} \cdot \binom{55}{15} \cdot 2^{40}$`;
const label2 = String.raw`$\binom{85}{30} \cdot \binom{55}{15} \cdot 3^{40}$`;
const label3 = String.raw`$\binom{85}{30} \cdot \binom{55}{15} \cdot 4^{40}$`;
const label4 = String.raw`$\binom{85}{30} \cdot \binom{55}{15} \cdot 5^{40}$`;
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
