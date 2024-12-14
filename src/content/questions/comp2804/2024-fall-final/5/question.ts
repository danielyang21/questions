import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Professor M's class has 20 International students and 50 Canadian students. How many subsets of these students are there that contain exactly 12 international students (any any number of Canadian students) or exactly 12 Canadian students (and any number of International students)?`;

const label1 = String.raw`$\binom{20}{12} + \binom{50}{12}$`;
const label2 = String.raw`$\binom{20}{12} + \binom{50}{12} - \binom{20}{12} \cdot \binom{50}{12}$`;
const label3 = String.raw`$\binom{20}{12} \cdot 2^{50} + \binom{50}{12} \cdot 2^{20}$`;
const label4 = String.raw`$\binom{20}{12} \cdot 2^{50} + \binom{50}{12} \cdot 2^{20} - \binom{20}{12} \cdot \binom{50}{12}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
