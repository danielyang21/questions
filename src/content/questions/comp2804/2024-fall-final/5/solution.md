Starting with sets with exactly 12 international students. There are $\binom{20}{12}$ ways to pick 12 of the international students, then for each Canadian student we need to decide to include it within the set or not. So 2 options, 50 times. So we get $\binom{20}{12} \cdot 2^{50}$ sets with exactly 12 international students.

Using this same logic we can add the sets with exactly 12 Canadian students: $\binom{50}{12} \cdot 2^{20}$

Using the principle of inclusion exclusion we can see that we are overcounting sets which have exactly 12 Internationals and exactly 12 Canadians. So subtract $\binom{20}{12} \cdot \binom{50}{12}$.

