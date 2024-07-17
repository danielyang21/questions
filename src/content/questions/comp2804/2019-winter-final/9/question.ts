import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider bitstrings that do not contain 011 and have 1 at every even position.
		(The positions are numbered $1,2,3,...$). Let $S_n$ be the number of such strings having
		length $n$. Which of the following is true for any $n \geq 3$?
`;

const label1 = String.raw`$S_n = 1 + S_{n - 1}$`;
const label2 = String.raw`$S_n = 1 + S_{n - 2}$`;
const label3 = String.raw`$S_n = S_{n - 1} + S_{n - 3}$`;
const label4 = String.raw`$S_n = S_{n - 2} + S_{n - 3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};