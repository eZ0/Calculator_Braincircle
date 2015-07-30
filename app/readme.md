My first thought concerning the App was that the user should enter the 3 internal forces  like Normal Force (N), Moment (M) and Shear force (V).
However this would be complicated for the user and would probably lead to nonsensical input.
A better way is when the App calculates the internal forces itself by the use of a beam on 2 supports loaded with an uniform distributed load (q-load) only.
The input from the user is now, beam length, q-load and profile depth.
This mechanical scheme will leads to 2 simple formulas to calculate the M and the V. In this situation there will be no N.

###### Example 

User data entry:

1. beam length, L,  (i.e. ranging from 18 - 30m)

2. the q-load, q, (i.e. ranging from 6 šC 12 kN/m)

3. profile depth, h (selection from 500mm or 625mm or750mm or 1000mm)

 
App calculates the M by using:  (1/8) * q * L^2
App calculates the V by using: (1/2)* q *L
 
Based on the M and V and h, the App should find the lightest beam (in weight: kg/m) in the provided GLP-table,
which has

1. the specified h (profile depth) and
2. the M (table) value  ¡Ý  to calculated M and
3. the V (table) value ¡Ý to calculated V
4. choose the lightest beam among them and show the result

If the chosen, L, q and h does not lead to a valid beam then display: ¡°No beam could be found, choose beam with bigger h¡±

###### Example 
L = 20m
q = 6.5 kN/m
h= 500mm
 
Calculation by app
M = 325 kNm
V= 65 kN
The App should select and show: ¡°GLP option is GLP500/3 -200/10, weight: 45.6 kg/m¡±
 
And the same procedure should be done on the provided hot rolled table based on above calculated M and V and the result should be the lightest hot rolled section.
In this example the App should select and show: ¡°hot rolled option is IPE450, weight: 79.1 kg/m¡±
 
Then the App should calculate the following percentage based on chosen beams:
Weight of selected hot rolled in kg/m šC Weight of selected GLP Beam in kg/m  divided by the Weight of selected hot rolled
In this example:
(79.1 šC 45.6) / 79.1 = 42%
Which should be shown as ¡°Weight saving percentage by using GLP is 42 %¡±