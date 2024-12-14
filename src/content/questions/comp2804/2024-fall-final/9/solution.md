First let's list out our letters, we have:
- 1 C
- 2 E
- 1 H
- 1 S
- 1 Y

The number of strings which do not contain the substring EE can be counted by counting the total number of strings when rearranging CHEESY minus the strings which contain EE.

The total number of strings can be counted by first choosing place for our C, so $\binom{6}{1}$, then choosing 2 positions to place our E's, so $\binom{5}{2}$, etc.

We get $6 \cdot \binom{5}{2} \cdot 3 \cdot 2$.

Then, the number of strings which contain EE can be counted by considering EE to be a group, leaving us with 5 entities to arrange. Since all these entities are unique, this is counted by 5!.

So we get: $(6 \cdot \binom{5}{2} \cdot 3 \cdot 2) - 5!$