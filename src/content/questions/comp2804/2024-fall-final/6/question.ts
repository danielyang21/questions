import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Professor M's class has 20 International students and 50 Canadian students. How many subsets of these students are there that contain at least 3 International students (any any number of Canadian students)?`;

const label1 = String.raw`$2^{70} - 2^{50} - 20 - \binom{20}{2}$`;
const label2 = String.raw`$2^{70} - (21 + \binom{20}{2})2^{50}$`;
const label3 = String.raw`$2^{70} - 2^{50} - 20 \cdot 2^{50}$`;
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
