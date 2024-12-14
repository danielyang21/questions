import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Christmas is coming and I'm buying 25 scarves to give away. The scarves come in 7 different colours. How many ways are there to choose the colours of the scarves I will buy?`;

const label1 = String.raw`$\binom{31}{6}$`;
const label2 = String.raw`$\binom{31}{7}$`;
const label3 = String.raw`$\binom{32}{6}$`;
const label4 = String.raw`$\binom{32}{7}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
