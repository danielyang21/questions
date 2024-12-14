import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`A string that is obtained by rearranging the letters of the word CHEESY is called $wicked$, if the string does not contain the substring EE. Thus, CHEYSE is wicked, whereas SEECHY is not wicked. What is the number of wicked strings?`;

const label1 = String.raw`$6 \cdot \binom{5}{2} \ cdot 3 \cdot 2$`;
const label2 = String.raw`$(6 \cdot \binom{5}{2} \cdot 3 \cdot 2) - 5!$`;
const label3 = String.raw`$6! - 5!$`;
const label4 = String.raw`$(6 \cdot \binom{5}{2} \cdot 3) - 5!$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
