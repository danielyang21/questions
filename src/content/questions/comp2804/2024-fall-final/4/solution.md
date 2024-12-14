String has 85 letters, there are $\binom{85}{15}$ ways to place 15 $a$'s, then for the other 70 letters there are 3 options each, so we get $\binom{85}{15} \cdot 3^{70}$ 

Then add strings which have exactly 30 $d$'s, there are $\binom{85}{30}$ ways to place 30 $d$'s, then for the other 55 letters there are 3 options each, so we get $\binom{85}{30} \cdot 3^{55}$.

Using the principle of inclusion exclusion, we see that we are overcounting strings which have exactly 15 $a$'s AND 30 $d$'s.

The number of these strings is $\binom{85}{15} \cdot \binom{70}{30} \cdot 2^{40}$, so subtract this amount.

So we get $\binom{85}{15} \cdot 3^{70} + \binom{85}{30} \cdot 3^{55} - \binom{85}{15} \cdot \binom{70}{30} \cdot 2^{40}$