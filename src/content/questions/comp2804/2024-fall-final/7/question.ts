import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Consider the following statement: For any integers $m \geq 2$ and $n \geq 2$, \\ $\binom{m+2}{2} = \binom{m}{2} + \binom{n}{2} + m \cdot n$`;

const label1 = String.raw`The statement is false`;
const label2 = String.raw`The statement is true`;
const label3 = String.raw`None of the above`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
  ],
};
