import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Consider bitstrings that do not contain 110. Let $S_n$ be the number of such strings having length $n$. Which of the following is true for any $n \geq 4$?`;

const label1 = String.raw`$S_n = S_{n-1} + S_{n-2} + S_{n-3}$`;
const label2 = String.raw`$S_n = S_{n-1} + S_{n-2}$`;
const label3 = String.raw`$S_n = S_{n-1} + S_{n-2} + 1$`;
const label4 = String.raw`$S_n$ is the $n$th Fibonacci number $f_n$`;
const label5 = String.raw`$S_n$ is the $(n+1)$th Fibonacci number $f_{n+1}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
