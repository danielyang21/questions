A bitstring can start with either 1 or 0.

If it starts with a 0, then we have $0[n-1]$ where $[n-1]$ denotes the remaining bitstring of length $n-1$. Since 0 does not contain 110, the result of the bitstring is just $S_{n-1}$.

If it starts with a 1, it can still contain 110, so we need to go further.

If it starts with 10, then we have $0[n-2]$ where $[n-2]$ denotes the remaining bitstring of length $n-2$. Since 10 does not contain 110, the result of the bitstring is just $S_{n-2}$.

If it starts with 11, we then have the situation where, to avoid 110, we must have another 1. But then to avoid 110 again we must have another 1. So we just get the bitstring with $11111\dots 111$, there is only 1 string of length $n$ which is all 1's.

So in total we have that $S_n = S_{n-1} + S_{n-2} + 1$.

