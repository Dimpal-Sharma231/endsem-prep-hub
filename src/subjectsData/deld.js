const deldSubject = {
  id: 'deld',
  name: 'Digital Electronics and Logic Design (DELD)',
  shortName: 'DELD',
  icon: 'Cpu',
  accent: 'emerald',
  description:
    'Logic families, number systems, combinational & sequential circuits, flip-flops, counters, computer architecture, and memory.',
  units: [
    {
      id: 'u1',
      name: 'Unit 1: Introduction To Digital Electronics',
      topics:
        'Digital ICs, TTL & CMOS logic families, Signed number representations, IEEE 754 floating-point, Number base conversions, BCD, Excess-3, Gray code, IC parameters.',
      questions: [
        {
          id: 'q1',
          question:
            'Explain the characteristics of Digital ICs. Compare TTL and CMOS logic families.',
          answer:
            'Key Digital IC Characteristics: Fan-in, Fan-out, Propagation Delay, Power Dissipation, Noise Margin, and Figure of Merit (Delay × Power).\n\nTTL vs CMOS Comparison:\n1. Devices Used: TTL uses Bipolar Junction Transistors (BJTs); CMOS uses complementary nMOS and pMOS FETs.\n2. Power Consumption: TTL consumes higher static power (~10 mW/gate); CMOS consumes ultra-low static power (~0.01 mW).\n3. Speed: Standard TTL is faster (~10 ns) than older CMOS, though high-speed CMOS matches TTL.\n4. Noise Immunity & Fan-out: CMOS offers higher noise margin (30–45% of VDD) and higher fan-out (>50) compared to TTL (fan-out ~10).',
        },
        {
          id: 'q2',
          question:
            'Explain the operation of a standard TTL NAND gate with a neat circuit diagram.',
          answer:
            'A standard 2-input TTL NAND gate consists of three stages:\n1. Input Stage (Multi-emitter Transistor Q1): Acts as an AND gate. When any input is LOW (0V), Q1’s base-emitter junction conducts, pulling Q2’s base LOW.\n2. Phase Splitter (Q2): Driven by Q1’s collector to generate complementary signals.\n3. Totem-Pole Output Stage (Q3, D1, Q4): Provides active pull-up and pull-down.\nOperation: If ANY input is 0 → Q1 conducts → Q2 & Q4 turn OFF, Q3 turns ON → Output Y = HIGH (1). If ALL inputs are 1 → Q1’s B-C junction conducts → Q2 & Q4 turn ON, Q3 OFF → Output Y = LOW (0).',
        },
        {
          id: 'q3',
          question:
            'Explain the operation of a CMOS NAND gate. What are the advantages of CMOS over TTL?',
          answer:
            'A 2-input CMOS NAND gate uses two pMOS transistors (P1, P2) connected in parallel to VDD (pull-up network) and two nMOS transistors (N1, N2) connected in series to GND (pull-down network).\nOperation:\n- When A=1 and B=1: Both N1, N2 are ON and P1, P2 are OFF → Output Y = 0.\n- When either A=0 or B=0: At least one pMOS is ON and one nMOS is OFF → Output Y = 1.\nAdvantages of CMOS over TTL: Extremely low static power dissipation, wide supply voltage range (3V–15V), high noise immunity, high fan-out, and higher packing density.',
        },
        {
          id: 'q4',
          question:
            "Represent the following in Sign Magnitude, 1's complement, and 2's complement: -25.",
          answer:
            'First convert +25 to 8-bit binary: 25 = 16 + 8 + 1 = (00011001)₂.\nFor -25 in 8-bit representation (MSB = 1 indicates negative):\n1. Sign-Magnitude: Keep magnitude bits, set MSB = 1 → (10011001)₂.\n2. 1’s Complement: Invert all bits of +25 (00011001) → (11100110)₂.\n3. 2’s Complement: Add 1 to the 1’s complement → 11100110 + 1 = (11100111)₂.',
        },
        {
          id: 'q5',
          question:
            "Perform the following arithmetic operations using 2's complement method: (i) 25 - 13 (ii) -15 - 10.",
          answer:
            'Using 8-bit 2’s complement arithmetic:\n(i) 25 - 13 = 25 + (-13):\n+25 = 00011001; +13 = 00001101 → -13 = 11110011.\nSum: 00011001 + 11110011 = 1 00001100. Discard end-around carry → 00001100 = +12.\n\n(ii) -15 - 10 = (-15) + (-10):\n+15 = 00001111 → -15 = 11110001.\n+10 = 00001010 → -10 = 11110110.\nSum: 11110001 + 11110110 = 1 11100111. Discard carry; MSB is 1 (negative) → 2’s complement of 11100111 is 00011001 (25), so result = -25.',
        },
        {
          id: 'q6',
          question:
            'Explain the IEEE 754 standard for floating-point number representation with an example.',
          answer:
            'IEEE 754 Single Precision (32-bit) represents real numbers as (−1)^S × 1.M × 2^(E−127) using three fields:\n1. Sign (S): 1 bit (0 = positive, 1 = negative).\n2. Biased Exponent (E): 8 bits with bias 127.\n3. Mantissa/Fraction (M): 23 bits (normalized with implicit leading 1).\n\nExample: Represent -12.5:\n- Sign S = 1.\n- 12.5₁₀ = 1100.1₂ = 1.1001 × 2³.\n- Biased Exponent E = 3 + 127 = 130 = 10000010₂.\n- Mantissa M = 10010000000000000000000.\nFinal 32-bit format: 1 10000010 1001000...0.',
        },
        {
          id: 'q7',
          question:
            'Convert the following: (a) (1011.01)₂ to decimal (b) (25.5)₁₀ to binary (c) (1101)₂ to Gray code.',
          answer:
            '(a) (1011.01)₂ to Decimal:\n= (1×2³) + (0×2²) + (1×2¹) + (1×2⁰) + (0×2⁻¹) + (1×2⁻²)\n= 8 + 0 + 2 + 1 + 0 + 0.25 = (11.25)₁₀.\n\n(b) (25.5)₁₀ to Binary:\nInteger 25 ÷ 2 repeatedly → 11001₂. Fraction 0.5 × 2 = 1.0 → .1₂.\nResult = (11001.1)₂.\n\n(c) (1101)₂ to Gray Code:\nG₃ = B₃ = 1; G₂ = 1⊕1 = 0; G₁ = 1⊕0 = 1; G₀ = 0⊕1 = 1.\nResult = (1011)_Gray.',
        },
        {
          id: 'q8',
          question:
            'Explain the Excess-3 and BCD codes with examples. Perform BCD addition for 15 + 27.',
          answer:
            'BCD (8421 Code): Weighted code representing each decimal digit (0–9) with its 4-bit binary equivalent (e.g., 25 → 0010 0101).\nExcess-3 Code: Unweighted, self-complementing code formed by adding 3 (0011) to each BCD digit (e.g., 4 → 0100 + 0011 = 0111).\n\nBCD Addition (15 + 27):\n15 → 0001 0101; 27 → 0010 0111.\n- Units: 0101 + 0111 = 1100 (12 > 9, invalid BCD). Add 0110 (6) → 1 0010 (sum=2, carry=1).\n- Tens: 0001 + 0010 + 1(carry) = 0100 (4).\nResult = 0100 0010 = (42)₁₀.',
        },
        {
          id: 'q9',
          question:
            'List the advantages of Gray code. Convert the binary number 101101 to Gray code and vice-versa.',
          answer:
            'Advantages of Gray Code:\n1. Unit-Distance Code: Only 1 bit changes between consecutive numbers, minimizing glitch errors in rotary encoders and ADC.\n2. Useful in K-maps for adjacent cell grouping and low-power state transitions.\n\nBinary (101101)₂ to Gray:\nG₅=1, G₄=1⊕0=1, G₃=0⊕1=1, G₂=1⊕1=0, G₁=1⊕0=1, G₀=0⊕1=1 → (111011)_Gray.\n\nGray (111011) back to Binary:\nB₅=1, B₄=1⊕1=0, B₃=0⊕1=1, B₂=1⊕0=1, B₁=1⊕1=0, B₀=0⊕1=1 → (101101)₂.',
        },
        {
          id: 'q10',
          question:
            'Explain the terms: Fan-in, Fan-out, Propagation Delay, and Noise Margin.',
          answer:
            '1. Fan-in: The maximum number of inputs a logic gate can accept (e.g., a 4-input NAND has fan-in = 4).\n2. Fan-out: The maximum number of standard gate inputs of the same family that a gate output can reliably drive without logic degradation.\n3. Propagation Delay (t_pd): Average time taken for an output transition to respond to an input change: (t_PHL + t_PLH) / 2.\n4. Noise Margin: The maximum unwanted noise voltage a gate input can tolerate without causing false switching (NM_H = V_OH − V_IH, NM_L = V_IL − V_OL).',
        },
      ],
    },
    {
      id: 'u2',
      name: 'Unit 2: Combinational Logic Design',
      topics:
        'De Morgan’s theorems, K-map simplification, SOP & POS forms, Adders, Subtractors, Multiplexers (IC 74153, 74151), Decoders (IC 74138, 7447), BCD Adder (IC 7483).',
      questions: [
        {
          id: 'q1',
          question:
            "State and explain De Morgan's theorems. Prove them using a truth table.",
          answer:
            'De Morgan’s Theorems simplify complemented Boolean expressions:\n1. First Theorem: (A + B)\' = A\' · B\' (NOR equals bubbled AND).\n2. Second Theorem: (A · B)\' = A\' + B\' (NAND equals bubbled OR).\n\nTruth Table Verification:\n- A=0, B=0: (A+B)\'=1, A\'·B\'=1 | (A·B)\'=1, A\'+B\'=1.\n- A=0, B=1: (A+B)\'=0, A\'·B\'=0 | (A·B)\'=1, A\'+B\'=1.\n- A=1, B=0: (A+B)\'=0, A\'·B\'=0 | (A·B)\'=1, A\'+B\'=1.\n- A=1, B=1: (A+B)\'=0, A\'·B\'=0 | (A·B)\'=0, A\'+B\'=0.\nSince columns match for all combinations, both theorems are proved.',
        },
        {
          id: 'q2',
          question:
            'Simplify the Boolean expression using a K-map: F(A,B,C,D) = Σm(0,1,2,5,8,9,10) and implement using basic gates.',
          answer:
            'Plotting minterms on a 4-variable K-map (AB rows, CD cols):\n1. Quad 1 (m0, m1, m8, m9): Eliminates A and D → B\'C\'.\n2. Quad 2 (m0, m2, m8, m10): Eliminates A and C → B\'D\'.\n3. Pair (m1, m5): Eliminates B → A\'C\'D.\n\nMinimized SOP Expression: F(A,B,C,D) = B\'C\' + B\'D\' + A\'C\'D.\nGate Implementation: Use NOT gates for A\', B\', C\', D\'; three AND gates for B\'C\', B\'D\', and A\'C\'D; and one 3-input OR gate to produce F.',
        },
        {
          id: 'q3',
          question:
            'Differentiate between SOP and POS forms. Convert a given SOP expression into its equivalent POS form.',
          answer:
            'SOP (Sum of Products) is an OR of AND product terms (minterms, where output = 1), e.g., AB + A\'C. POS (Product of Sums) is an AND of OR sum terms (maxterms, where output = 0), e.g., (A+B)(A\'+C).\n\nConversion (SOP → POS):\n1. Expand SOP into canonical minterm list Σm(...).\n2. Identify all missing indices (0 to 2^n − 1) as maxterms ΠM(...).\n3. Write each maxterm by complementing 1s and keeping 0s uncomplemented.\nExample: F(A,B) = Σm(1,2,3) → missing m0 → F = ΠM(0) = (A + B).',
        },
        {
          id: 'q4',
          question:
            'Design a Full Adder using two Half Adders and an OR gate. Write its truth table and Boolean expressions.',
          answer:
            'A Full Adder adds three 1-bit inputs (A, B, C_in) to produce Sum (S) and Carry-out (C_out).\nEquations:\n- S = A ⊕ B ⊕ C_in\n- C_out = AB + C_in(A ⊕ B)\n\nDesign using two Half Adders (HA1, HA2) & OR gate:\n- HA1 inputs: A, B → Sum₁ = A ⊕ B, Carry₁ = AB.\n- HA2 inputs: Sum₁, C_in → Final Sum S = (A ⊕ B) ⊕ C_in, Carry₂ = C_in(A ⊕ B).\n- OR gate combines Carry₁ + Carry₂ → C_out.\nTruth Table Summary: S=1 when odd number of inputs are 1; C_out=1 when ≥2 inputs are 1.',
        },
        {
          id: 'q5',
          question: 'Design a Full Subtractor and explain its working.',
          answer:
            'A Full Subtractor subtracts three bits: Minuend (A), Subtrahend (B), and Borrow-in (B_in), generating Difference (D) and Borrow-out (B_out).\nBoolean Expressions:\n- Difference D = A ⊕ B ⊕ B_in\n- Borrow-out B_out = A\'B + B_in(A ⊕ B)\'\n\nWorking & Implementation: Built using two Half Subtractors and an OR gate. HS1 computes (A − B) giving D₁ = A ⊕ B and Borrow₁ = A\'B. HS2 subtracts B_in from D₁ giving final D and Borrow₂ = B_in·(A ⊕ B)\'. An OR gate combines Borrow₁ + Borrow₂ to output B_out.',
        },
        {
          id: 'q6',
          question:
            'Explain the working of a 4:1 Multiplexer (IC 74153) and implement the function F(A,B,C) = Σm(1,3,5,6) using it.',
          answer:
            'A 4:1 Multiplexer selects one of 4 data inputs (D₀–D₃) onto output Y based on 2 select lines (S₁, S₀): Y = S₁\'S₀\'D₀ + S₁\'S₀D₁ + S₁S₀\'D₂ + S₁S₀D₃. IC 74153 is a dual 4:1 MUX with active-LOW enable.\n\nImplementing F(A,B,C) = Σm(1,3,5,6):\nConnect A, B to select lines S₁, S₀ and evaluate C for each pair:\n- AB=00 (m0,m1=1): D₀ = C\n- AB=01 (m2,m3=1): D₁ = C\n- AB=10 (m4,m5=1): D₂ = C\n- AB=11 (m6=1,m7=0): D₃ = C\'.\nConnect D₀=D₁=D₂=C and D₃=C\'.',
        },
        {
          id: 'q7',
          question:
            'Explain the working of a 3-to-8 Decoder (IC 74138) with a truth table.',
          answer:
            'A 3-to-8 Decoder activates exactly one of 8 output lines corresponding to a 3-bit binary input (A, B, C).\nIC 74138 Features:\n- 3 Select Inputs: A (LSB), B, C (MSB).\n- 3 Enable Pins: G1 (active HIGH), G2A\' and G2B\' (active LOW). All three must be active to enable decoding.\n- 8 Active-LOW Outputs (Y₀\' to Y₇\').\n\nTruth Table (when enabled): CBA=000 → Y₀\'=0; 001 → Y₁\'=0; ...; 111 → Y₇\'=0 (all other outputs remain 1). When disabled, all Y₀\'–Y₇\' = 1.',
        },
        {
          id: 'q8',
          question:
            'Design a BCD to 7-segment decoder driver (IC 7447) and explain its operation.',
          answer:
            'A BCD to 7-segment decoder converts a 4-bit BCD digit (0–9) into 7 control signals (a, b, c, d, e, f, g) to illuminate digits on a display.\nIC 7447 Operation:\n- Designed for Common-Anode 7-segment LEDs (outputs a–g are active-LOW; 0 lights a segment).\n- Inputs: 4 BCD lines (D, C, B, A) plus control pins LT\' (Lamp Test), RBI\' (Ripple Blanking Input), and BI\'/RBO\'.\n- Example: For BCD 0000 (0), segments a,b,c,d,e,f are LOW (ON) and g is HIGH (OFF). For 0001 (1), only b and c are LOW.',
        },
        {
          id: 'q9',
          question:
            'Design a BCD adder using IC 7483. Explain the need for correction logic.',
          answer:
            'IC 7483 is a 4-bit binary parallel adder. When adding two BCD digits (0–9), the binary sum can range from 0 to 19 (with carry-in). However, valid BCD digits only span 0–9 (0000–1001).\nNeed for Correction Logic: Whenever the binary sum exceeds 9 (1010–1111) or generates an auxiliary carry C_out = 1 (sums 16–19), the output is invalid BCD and must be corrected by adding 6 (0110) to skip the 6 invalid states.\nCorrection Condition: Y = C_out + S₃S₂ + S₃S₁. When Y = 1, a second IC 7483 adds 0110 to the 4-bit sum.',
        },
        {
          id: 'q10',
          question:
            'Implement the Boolean function F(A,B,C,D) = Σm(0,2,4,6,8,10,12,14) using an 8:1 multiplexer (IC 74151).',
          answer:
            'IC 74151 is an 8:1 MUX with 3 select lines (S₂, S₁, S₀) and 8 inputs (D₀–D₇).\nAssign A, B, C to select lines S₂, S₁, S₀, and evaluate input D as a function of the LSB variable D:\n- ABC=000 (m0=1, m1=0) → D₀ = D\'\n- ABC=001 (m2=1, m3=0) → D₁ = D\'\n- ABC=010 (m4=1, m5=0) → D₂ = D\'\n- ABC=011 (m6=1, m7=0) → D₃ = D\'\n- Similarly for m8, m10, m12, m14 → D₄ = D₅ = D₆ = D₇ = D\'.\nTie all D₀–D₇ inputs to D\' (equivalent to F = D\').',
        },
      ],
    },
    {
      id: 'u3',
      name: 'Unit 3: Flip Flops and their Applications',
      topics:
        'Combinational vs Sequential logic, SR Latch, JK Flip-Flop, Master-Slave JK, Excitation tables, Flip-flop conversions, Synchronous & Asynchronous Counters, IC 7490.',
      questions: [
        {
          id: 'q1',
          question:
            'Differentiate between combinational and sequential logic circuits.',
          answer:
            '1. Dependency: Combinational output depends only on present inputs; Sequential output depends on both present inputs and past history (present state).\n2. Memory: Combinational circuits have no memory elements; Sequential circuits contain memory (latches/flip-flops).\n3. Clock & Feedback: Combinational circuits have no clock or feedback paths; Sequential circuits typically use clock signals and feedback loops.\n4. Examples: Adders, MUX, Decoders (Combinational) vs Flip-flops, Counters, Shift Registers (Sequential).',
        },
        {
          id: 'q2',
          question:
            'Explain the working of an SR latch using NOR gates. What is the race condition?',
          answer:
            'An active-HIGH SR latch consists of two cross-coupled NOR gates with inputs S (Set) and R (Reset) and outputs Q, Q\'.\nOperation:\n- S=0, R=0: Hold state (memory).\n- S=1, R=0: Set (Q=1, Q\'=0).\n- S=0, R=1: Reset (Q=0, Q\'=1).\n- S=1, R=1: Forbidden/Invalid state (forces both Q=0 and Q\'=0).\n\nRace Condition: In level-triggered SR or JK flip-flops, when S=R=1 (or J=K=1) and the clock pulse width exceeds the propagation delay, the output toggles continuously and unpredictably during the active clock level.',
        },
        {
          id: 'q3',
          question:
            'Explain the construction and working of a JK flip-flop. How does it solve the race condition of an SR flip-flop?',
          answer:
            'A JK flip-flop modifies a clocked SR flip-flop by feeding outputs Q\' and Q back to the J (Set) and K (Reset) input AND/NAND gates respectively.\nTruth Table:\n- J=0, K=0 → No Change\n- J=0, K=1 → Reset (Q=0)\n- J=1, K=0 → Set (Q=1)\n- J=1, K=1 → Toggle (Q_next = Q\').\n\nSolving the Invalid/Race Condition: By eliminating the indeterminate S=R=1 state via feedback, J=K=1 deterministically toggles Q. Using edge triggering or a Master-Slave configuration ensures only one toggle per clock cycle, preventing race-around.',
        },
        {
          id: 'q4',
          question:
            'Differentiate between a latch and a flip-flop. Explain the concept of edge triggering.',
          answer:
            'Latch vs Flip-Flop:\n1. Triggering: A latch is level-triggered (transparent whenever Enable is active); a flip-flop is edge-triggered (samples inputs only at a clock transition).\n2. Clocking: Latches do not strictly require a clock; flip-flops are synchronous clocked devices.\n3. Speed & Complexity: Latches are faster with fewer gates; flip-flops prevent glitches in synchronous designs.\n\nEdge Triggering: The circuit responds exclusively to the rising (positive, 0→1) or falling (negative, 1→0) edge of the clock pulse, eliminating unwanted mid-cycle output changes.',
        },
        {
          id: 'q5',
          question:
            'Draw the truth table and excitation table for SR, JK, D, and T flip-flops.',
          answer:
            'Characteristic / Truth Summary (Q_n → Q_n+1):\n1. SR: 00→Q_n, 01→0, 10→1, 11→Invalid. Excitation (Q_n→Q_n+1: S,R): 0→0(0,X), 0→1(1,0), 1→0(0,1), 1→1(X,0).\n2. JK: 00→Q_n, 01→0, 10→1, 11→Q_n\'. Excitation (J,K): 0→0(0,X), 0→1(1,X), 1→0(X,1), 1→1(X,0).\n3. D: Q_n+1 = D. Excitation: D = Q_n+1 (0, 1, 0, 1).\n4. T: T=0→Q_n, T=1→Q_n\'. Excitation: T = Q_n ⊕ Q_n+1 (0, 1, 1, 0).',
        },
        {
          id: 'q6',
          question:
            'Explain the working of a Master-Slave JK flip-flop with a timing diagram.',
          answer:
            'A Master-Slave JK flip-flop cascades two gated latches: a Master (clocked by CLK) and a Slave (clocked by inverted CLK\') with feedback from Slave Q/Q\' to Master inputs.\nWorking:\n1. When CLK = 1 (HIGH): Master is enabled and responds to J, K inputs; Slave is disabled and holds its previous output.\n2. When CLK = 0 (LOW, falling edge): Master is disabled (latches its state), and Slave is enabled, copying Master’s output to Q.\nResult: The output Q changes strictly once per clock cycle on the falling edge, completely eliminating the race-around condition.',
        },
        {
          id: 'q7',
          question:
            'Convert a JK flip-flop into a D flip-flop and a T flip-flop. Show the conversion tables.',
          answer:
            '1. JK to D Flip-Flop:\nGoal: Q_n+1 = D. Using JK excitation table for (Q_n, D):\n- D=0, Q_n=0 → J=0, K=X; D=0, Q_n=1 → J=X, K=1\n- D=1, Q_n=0 → J=1, K=X; D=1, Q_n=1 → J=X, K=0.\nK-map yields J = D and K = D\'. Connect D directly to J and via an inverter to K.\n\n2. JK to T Flip-Flop:\nGoal: Toggle when T=1, Hold when T=0.\n- T=0 → J=0, K=0; T=1 → J=1, K=1.\nK-map yields J = T and K = T. Short J and K together as input T.',
        },
        {
          id: 'q8',
          question:
            'What is the difference between synchronous and asynchronous counters? Explain the working of a 4-bit asynchronous (ripple) counter.',
          answer:
            'Asynchronous (Ripple) vs Synchronous Counters:\n1. Clock: Ripple counters clock only the first FF externally (subsequent FFs are clocked by the previous FF’s output); Synchronous counters apply the same clock to all FFs simultaneously.\n2. Speed: Synchronous counters are much faster with no cumulative propagation delay.\n\n4-bit Asynchronous Ripple Counter: Uses 4 negative-edge-triggered JK (or T) flip-flops with J=K=1 (toggle mode). External clock drives FF₀ (Q₀). Q₀ drives FF₁, Q₁ drives FF₂, and Q₂ drives FF₃. Counts from 0000 to 1111 (MOD-16) and resets.',
        },
        {
          id: 'q9',
          question:
            'Explain the working of a synchronous decade counter using JK flip-flops. Draw the timing diagram.',
          answer:
            'A Synchronous Decade (MOD-10) Counter counts 10 states (0000 to 1001) with all 4 JK flip-flops sharing a common clock.\nExcitation Equations (Q₃ MSB, Q₀ LSB):\n- J₀ = K₀ = 1 (toggles every clock)\n- J₁ = K₁ = Q₀·Q₃\'\n- J₂ = K₂ = Q₀·Q₁\n- J₃ = Q₀·Q₁·Q₂, K₃ = Q₀.\nWorking: Advances sequentially 0→1→...→9. At count 9 (1001), Q₃=1 disables FF₁ (J₁=0) and K₃=Q₀=1 resets Q₃ to 0 while Q₀ toggles to 0, cleanly returning to 0000 on the 10th clock edge.',
        },
        {
          id: 'q10',
          question: 'Design a MOD-6 synchronous counter using IC 7490.',
          answer:
            'IC 7490 is a decade counter containing an internal MOD-2 (FF A) and MOD-5 (FFs B, C, D) section, plus gated Reset-to-Zero pins (R₀(1), R₀(2)) and Reset-to-Nine pins (R₉(1), R₉(2)).\nMOD-6 Counter Connections:\n1. Connect Clock input to Input A (pin 14) and tie Q_A (pin 12) to Input B (pin 1) to form a ripple BCD counter.\n2. Tie R₉(1) and R₉(2) to GND.\n3. For MOD-6 (counts 0000 to 0101, resets on 6 = 0110): Connect Q_C (pin 8) and Q_B (pin 9) to R₀(1) and R₀(2). When count reaches 0110, both reset pins go HIGH, resetting to 0000.',
        },
      ],
    },
    {
      id: 'u4',
      name: 'Unit 4: Introduction to Computer Architecture & Sequential Logic Design',
      topics:
        'Registers vs Counters, Shift Registers (SISO, PIPO, Universal), Basic Computer Organization, Von Neumann vs Harvard, Bus System, ALU, Instruction Cycle, Tri-state Buffer.',
      questions: [
        {
          id: 'q1',
          question: 'Explain the difference between a register and a counter.',
          answer:
            '1. Function: A register stores and shifts multi-bit binary data; a counter steps through a predetermined sequence of binary states upon clock pulses.\n2. Inputs: Registers take external parallel or serial data inputs; counters typically only require a clock (and optional mode/reset inputs).\n3. Flip-Flop Type: Registers commonly use D flip-flops; counters usually use JK or T flip-flops.\n4. Applications: Registers serve as CPU temporary storage and data buffers; counters are used for frequency division, timers, and program counters.',
        },
        {
          id: 'q2',
          question:
            'Explain the working of a 4-bit Serial-In Serial-Out (SISO) shift register.',
          answer:
            'A 4-bit SISO shift register consists of four D flip-flops (FF₀–FF₃) connected in cascade, where the Q output of each FF feeds the D input of the next, all sharing a common clock.\nWorking (e.g., shifting 1011):\n- Data is fed 1 bit at a time into D₀ (Serial In).\n- On each active clock edge, every bit shifts one stage right (FF₀ → FF₁ → FF₂ → FF₃).\n- After 4 clock pulses, the 4-bit word is loaded; subsequent 4 clock pulses shift it out serially at Q₃ (Serial Out).',
        },
        {
          id: 'q3',
          question:
            'Explain the working of a 4-bit Parallel-In Parallel-Out (PIPO) shift register.',
          answer:
            'A 4-bit PIPO register uses four D flip-flops (FF₀–FF₃) wired independently without serial interconnection between stages, all sharing a common clock and Clear line.\nWorking:\n1. Parallel Load: Four input bits (D₃, D₂, D₁, D₀) are applied simultaneously to the D inputs.\n2. Clock Trigger: On a single active clock edge, all four bits are latched simultaneously.\n3. Parallel Output: All stored bits appear immediately at outputs (Q₃, Q₂, Q₁, Q₀).\nPIPO registers act as high-speed temporary storage buffers in 1 clock cycle.',
        },
        {
          id: 'q4',
          question:
            'What is a Universal Shift Register? Explain its various modes of operation.',
          answer:
            'A Universal Shift Register (e.g., IC 74194) is a bidirectional register capable of shifting data both left and right, loading data in parallel, and holding its state, controlled by two mode select pins (S₁, S₀) and 4:1 multiplexers ahead of each D flip-flop.\nFour Modes of Operation:\n1. S₁=0, S₀=0 (Hold / No Change): Clock is inhibited or Q feeds back to D.\n2. S₁=0, S₀=1 (Shift Right): Data shifts from MSB toward LSB.\n3. S₁=1, S₀=0 (Shift Left): Data shifts from LSB toward MSB.\n4. S₁=1, S₀=1 (Parallel Load): All 4 external data inputs load simultaneously.',
        },
        {
          id: 'q5',
          question:
            'Explain the organization of a basic computer system with a block diagram.',
          answer:
            'A basic computer system comprises five functional units interconnected via system buses:\n1. Input Unit: Converts external data/instructions into binary (keyboard, sensors).\n2. Memory Unit: Stores programs and data (Primary RAM/ROM & Secondary storage).\n3. Arithmetic Logic Unit (ALU): Performs arithmetic (+, −) and logical (AND, OR, NOT) operations.\n4. Control Unit (CU): Fetches, decodes instructions, and generates timing/control signals.\n5. Output Unit: Presents processed results to the user.\nNote: ALU + CU + Registers together form the Central Processing Unit (CPU).',
        },
        {
          id: 'q6',
          question:
            'Differentiate between Von Neumann and Harvard architecture.',
          answer:
            '1. Memory Space: Von Neumann uses a single shared memory for both instructions and data; Harvard uses physically separate memories for instructions and data.\n2. Buses: Von Neumann shares one common address/data bus (creating the Von Neumann bottleneck); Harvard provides separate buses enabling simultaneous instruction fetch and data access.\n3. Speed & Complexity: Harvard is faster and deterministic; Von Neumann has simpler hardware design and flexible memory allocation.\n4. Usage: Von Neumann is used in general-purpose PCs; Harvard is common in DSPs and microcontrollers (e.g., AVR, PIC).',
        },
        {
          id: 'q7',
          question:
            'Explain the concept of a bus system in a computer. What are the types of buses?',
          answer:
            'A bus is a shared communication pathway (set of parallel electrical lines) that transfers data, addresses, and control signals between CPU, memory, and I/O devices.\nThree Types of System Buses:\n1. Data Bus (Bidirectional): Carries actual data/instructions between components; width (e.g., 32/64 bits) determines word transfer size.\n2. Address Bus (Unidirectional): Carries memory/I/O addresses from CPU to target locations; n lines address 2^n locations.\n3. Control Bus (Bidirectional): Carries timing and command signals such as Read, Write, Clock, and Interrupt Requests.',
        },
        {
          id: 'q8',
          question: 'Write a short note on the Arithmetic Logic Unit (ALU).',
          answer:
            'The Arithmetic Logic Unit (ALU) is the core computational circuit inside the CPU responsible for executing all arithmetic and bitwise logic operations.\nKey Operations:\n1. Arithmetic: Addition, subtraction, increment, decrement, and multiplication/division.\n2. Logic: Bitwise AND, OR, XOR, NOT, and comparisons.\n3. Shift/Rotate: Logical and arithmetic bit shifts.\nStructure: Accepts two operand inputs (from registers/accumulator), a control/opcode signal from the Control Unit selecting the operation, outputs the result, and updates Status Flags (Zero, Carry, Sign, Overflow).',
        },
        {
          id: 'q9',
          question:
            'Explain the instruction cycle in a computer system. What are the different phases?',
          answer:
            'The Instruction Cycle (Fetch–Decode–Execute cycle) is the sequence of steps the CPU performs to process a single machine instruction.\nPhases:\n1. Fetch: Program Counter (PC) sends instruction address to memory; instruction is loaded into Instruction Register (IR), and PC increments.\n2. Decode: Control Unit decodes the opcode in IR and identifies addressing mode/operands.\n3. Effective Address / Operand Fetch (if indirect/memory operand): Fetches required data from memory/registers.\n4. Execute: ALU or CU performs the specified operation and stores the result. (Interrupt check follows if enabled).',
        },
        {
          id: 'q10',
          question: 'Design a 4-bit Buffer Register with a tri-state output.',
          answer:
            'A 4-bit Tri-State Buffer Register stores 4 bits and connects cleanly to a shared data bus without bus contention.\nDesign:\n1. Storage Stage: Four D flip-flops (D₀–D₃) share a common Clock and Load/Clear signal to latch 4-bit input data.\n2. Output Stage: Each flip-flop’s Q output connects to a tri-state buffer controlled by a common Output Enable (OE\') line.\nWorking: When OE\' = 0 (active), stored bits drive the bus (0 or 1). When OE\' = 1, outputs enter High-Impedance (Hi-Z) state, electrically disconnecting from the bus.',
        },
      ],
    },
    {
      id: 'u5',
      name: 'Unit 5: Memory and Programmable Logic (General Topics)',
      topics:
        'RAM vs ROM, SRAM, DRAM, Programmable Logic Array (PLA), PAL vs PLA, CPLD, FPGA, Cache Memory, Memory Hierarchy, ROM types.',
      questions: [
        {
          id: 'q1',
          question: 'Differentiate between RAM and ROM.',
          answer:
            '1. Volatility: RAM (Random Access Memory) is volatile (loses data on power off); ROM (Read-Only Memory) is non-volatile.\n2. Operations: RAM supports fast read and write operations; ROM is primarily read-only (written once or infrequently).\n3. Speed & Cost: RAM is faster and more expensive per bit than ROM.\n4. Usage: RAM stores active OS, apps, and working data; ROM stores permanent firmware/BIOS/bootloaders.',
        },
        {
          id: 'q2',
          question: 'Explain the working of a Static RAM (SRAM) cell.',
          answer:
            'An SRAM cell stores 1 bit using a bistable flip-flop latch (typically a 6-transistor CMOS cell: 4 transistors forming two cross-coupled inverters and 2 access transistors).\nWorking:\n- Word Line (WL) controls the two access transistors connecting the latch to complementary Bit Lines (BL, BL\').\n- Read: BL and BL\' are precharged; asserting WL transfers the stored Q and Q\' values onto BL/BL\' for a sense amplifier.\n- Write: Desired data and its complement are driven onto BL/BL\', and asserting WL overwrites the latch.\nSRAM retains data indefinitely while powered without refreshing.',
        },
        {
          id: 'q3',
          question:
            'Explain the working of a Dynamic RAM (DRAM) cell. Why does DRAM need refreshing?',
          answer:
            'A DRAM cell uses just 1 MOSFET (access transistor) and 1 tiny storage capacitor (1T1C).\nWorking:\n- Word Line turns ON the MOSFET. During Write, the bit line charges (logic 1) or discharges (logic 0) the capacitor. During Read, charge sharing is detected by a sense amplifier.\nWhy Refreshing is Needed: The microscopic capacitor gradually loses charge due to leakage currents (~milliseconds). Therefore, a memory controller must periodically read and rewrite (refresh) every row every few milliseconds to preserve stored data.',
        },
        {
          id: 'q4',
          question:
            'Explain the architecture of a Programmable Logic Array (PLA).',
          answer:
            'A Programmable Logic Array (PLA) is a PLD used to implement combinational SOP functions using two programmable arrays:\n1. Input Buffers & Inverters: Provide true and complemented literals for each input.\n2. Programmable AND Array: Generates desired product terms (minterms/implicants) via programmable fusible links.\n3. Programmable OR Array: Combines selected product terms into multiple sum-of-products outputs.\n4. Optional Output Inverters (XOR): Allow active-HIGH or active-LOW output polarity.\nPLAs maximize product-term sharing across multiple outputs.',
        },
        {
          id: 'q5',
          question: 'What is the difference between a PAL and a PLA?',
          answer:
            '1. Array Programmability: PAL (Programmable Array Logic) has a programmable AND array and a FIXED OR array; PLA has BOTH programmable AND and programmable OR arrays.\n2. Cost & Speed: PAL is cheaper, simpler to manufacture, and faster (fewer programmable fuses in the signal path); PLA is slower and costlier.\n3. Flexibility: PLA allows arbitrary sharing of product terms among outputs; in PAL, product terms are dedicated to specific OR gates.',
        },
        {
          id: 'q6',
          question:
            'Explain the working of a Complex Programmable Logic Device (CPLD).',
          answer:
            'A CPLD integrates multiple PAL-like Logic Array Blocks (LABs / Macrocells) on a single chip connected through a centralized Programmable Interconnect Array (PIA) and surrounded by I/O blocks.\nWorking:\n- Each macrocell contains programmable AND/OR logic plus a configurable D flip-flop for sequential circuits.\n- The PIA routes signals predictably between any macrocells.\n- Uses non-volatile configuration memory (EEPROM/Flash), making CPLDs instant-on at power-up with deterministic timing—ideal for glue logic and control interfaces.',
        },
        {
          id: 'q7',
          question:
            'Explain the working of a Field Programmable Gate Array (FPGA).',
          answer:
            'An FPGA is a high-density reconfigurable IC consisting of a 2D matrix of Configurable Logic Blocks (CLBs) embedded in a programmable routing mesh and surrounded by I/O pads.\nWorking:\n- Each CLB uses Look-Up Tables (LUTs) to implement arbitrary logic functions, along with multiplexers and flip-flops.\n- Usually SRAM-based (configured from external Flash on boot), enabling virtually unlimited reprogramming.\n- Supports parallel hardware execution, DSP blocks, and high gate counts—widely used in prototyping, AI accelerators, and telecommunications.',
        },
        {
          id: 'q8',
          question: 'Write a short note on Cache Memory.',
          answer:
            'Cache Memory is a small, ultra-fast SRAM placed between the CPU and main memory (DRAM) to bridge the CPU-memory speed gap.\nPrinciple: Exploits Locality of Reference—Temporal (recently accessed data is likely reused) and Spatial (nearby memory addresses are accessed together).\nOperation: On a CPU read, cache is checked first. A Cache Hit delivers data in nanoseconds; a Cache Miss fetches a block from RAM into cache. Modern CPUs use multi-level caches (L1, L2, L3) with mapping strategies (Direct, Associative, Set-Associative).',
        },
        {
          id: 'q9',
          question: 'Explain the concept of memory hierarchy with a diagram.',
          answer:
            'Memory Hierarchy organizes storage levels in a pyramid balancing speed, capacity, and cost per bit:\nTop (Fastest, Smallest, Costliest) → Bottom (Slowest, Largest, Cheapest):\n1. CPU Registers (bytes, <1 ns)\n2. Cache Memory L1/L2/L3 (KB–MB, 1–15 ns)\n3. Main Memory / RAM (GB, ~50–100 ns)\n4. Secondary Storage / SSD & HDD (TB, μs–ms)\n5. Tertiary / Magnetic Tape & Cloud Archive.\nBy keeping active data near the top, the system achieves near-cache speed at near-disk cost.',
        },
        {
          id: 'q10',
          question:
            'Explain the working of a Read-Only Memory (ROM) and its types.',
          answer:
            'ROM consists of a fixed address decoder (AND matrix) connected to a programmable OR matrix that outputs a stored binary word for every input address.\nTypes of ROM:\n1. Mask ROM: Permanently programmed during semiconductor fabrication.\n2. PROM (Programmable ROM): User-programmable once using fusible links.\n3. EPROM (Erasable PROM): Erased by UV light through a quartz window and reprogrammed.\n4. EEPROM (Electrically Erasable PROM): Erased and rewritten byte-by-byte electrically.\n5. Flash Memory: High-density block-erasable EEPROM used in USB drives and SSDs.',
        },
      ],
    },
  ],
};

export default deldSubject;
