Since we are trying to get the subsets with at least 3 International students, we can interpret this as the total subsets of all students, minus the subsets with 0 Internationl students, then the ones with 1 International students, then minus the subsets with 2 International students.

So the subsets with only Canadian students is $2^{50}$.

So the total number of subsets is $2^{70}$, the number of subsets with 1 International student is the number of ways to choose 1 International student, then for each Canadian student we need to decide to include or not. So we get $\binom{20}{1} \cdot 2^{50}$.

Using this logic, for the subsets with 2 International students we get $\binom{20}{2} \cdot 2^{50}$.

Then we get: $2^{70} - \binom{20}{1} \cdot 2^{50} - \binom{20}{2} \cdot 2^{50}$

$\implies 2^{70} - 2^{50} - 20 \cdot 2^{50} - \binom{20}{2} \cdot 2^{50}$

$\implies 2^{70} - 2^{50}(1 + 20 + \binom{20}{2})$

$\implies 2^{70} - 2^{50}(21 + \binom{20}{2})$