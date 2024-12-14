String has 85 letters, we need 30 $d$'s, there are $\binom{85}{30}$ ways for these $d$'s to appear in the string.

For the remaining 55 spots, we need 15 of them to be $a$'s, so multiply by the ways we can place the $a$'s. $\binom{55}{15}$.

Then for the last 40 spots, we have 2 options either $b$ or $c$, which results in $\binom{85}{30} \cdot \binom{55}{15} \cdot 2^{40}$.