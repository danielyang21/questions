Consider a set with $m+n$ elements. Then the left side of the statement is counting the number of 2 element subsets of this set.

From an $m+n$ element set, we can get a 2 element subset by choosing 2 elements from the set with $m$ elements,  we can choose 2 elements from the set with $n$ elements, or we can choose 1 element from either.

This can be denoted by $\binom{m}{2} + \binom{n}{2} + \binom{m}{1} \cdot \binom{n}{1}$

$\implies \binom{m}{2} + \binom{n}{2} + m \cdot n$

Therefore $LHS = RHS$ and the statement is true.