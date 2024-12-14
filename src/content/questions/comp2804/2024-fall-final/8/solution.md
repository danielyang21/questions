Let's say we have the colours $c_1,c_2,c_3,c_4,c_5,c_6,c_7$, where $c_1, \dots, c_7$ represent how many scarves of each colour there are.

Since we have a total of 25 scarves we can say that $c_1 + c_2 + c_3 + c_4 + c_5 + c_6 + c_7 = 25$. This is the classic stars and bars question.

We can visualize this by representing the scarves with stars, and the addition signs with bars.

$*** | *** | ** | **** | ** | ***** | ***$

Basically we need to choose 6 places, to divide the scarves into the 7 colours.

All together this is 31 "things" and we need to choose where the 6 bars go: $\binom{31}{6}$.