const aiSubject = {
  id: 'ai',
  name: 'Foundation of Artificial Intelligence',
  shortName: 'AI',
  icon: 'BrainCircuit',
  accent: 'indigo',
  description:
    'Intelligent agents, search strategies, CSPs, adversarial search, logic-based knowledge representation, and planning.',
  units: [
    {
      id: 'u1',
      name: 'Unit 1: Introduction to AI',
      topics:
        'Definition of AI, AI vs Human Intelligence, History of AI, Turing Test, Applications of AI, Intelligent Agents, Rationality, PEAS description, Types of Agents (Simple Reflex, Model-based, Goal-based, Utility-based), Properties of Task Environment.',
      questions: [
        {
          id: 'q1',
          question:
            'Define Artificial Intelligence. State and explain the four approaches of AI?',
          answer:
            'Artificial Intelligence (AI) is the branch of computer science focused on building systems capable of performing tasks that typically require human intelligence, such as learning, reasoning, and decision-making.\nThe four approaches of AI (Russell & Norvig) are:\n1. Thinking Humanly (Cognitive Modeling): Building machines that model human cognitive processes.\n2. Acting Humanly (Turing Test): Creating systems that behave indistinguishably from humans.\n3. Thinking Rationally (Laws of Thought): Using formal logic to draw correct inferences.\n4. Acting Rationally (Rational Agent): Designing agents that take actions to maximize expected goal achievement.',
        },
        {
          id: 'q2',
          question: 'Explain the advantages, risks and benefits of AI.',
          answer:
            'Advantages & Benefits of AI:\n1. Automation & Efficiency: Performs repetitive and complex tasks rapidly with minimal human error.\n2. 24/7 Availability & Decision Support: Enables real-time analytics in healthcare, finance, and robotics.\n3. Safety: Handles hazardous environments like mining and space exploration.\n\nRisks of AI:\n1. Job Displacement: Automation may replace routine human labor.\n2. Bias & Privacy Issues: Models can inherit dataset biases and misuse personal data.\n3. Security & Autonomous Risks: Vulnerable to adversarial attacks, deepfakes, and lack of accountability.',
        },
        {
          id: 'q3',
          question:
            'What is an Intelligent Agent? Explain the structure of an agent and give a PEAS description. Explain the significance of PEAS.',
          answer:
            'An Intelligent Agent is an entity that perceives its environment through sensors and acts upon it using actuators to achieve goals.\nStructure: Agent = Architecture (computing hardware with sensors/actuators) + Agent Program (maps percept sequences to actions).\nPEAS stands for Performance measure, Environment, Actuators, and Sensors.\nExample (Automated Taxi): Performance (safety, speed, profit), Environment (roads, traffic, pedestrians), Actuators (steering, accelerator, brake), Sensors (cameras, LiDAR, GPS).\nSignificance: PEAS provides a structured specification to define task requirements before designing an agent.',
        },
        {
          id: 'q4',
          question:
            'Explain the different types/forms of agents with examples. Explain the Simple Reflex Agent with schematic diagram or pseudo code, and differentiate Model-based vs Utility-based agents.',
          answer:
            'Types of Agents:\n1. Simple Reflex Agent: Acts only on current percept using condition-action rules (e.g., thermostat).\n2. Model-Based Reflex Agent: Maintains internal state for partially observable environments.\n3. Goal-Based Agent: Uses goal information to plan actions.\n4. Utility-Based Agent: Maximizes a utility function measuring preference/happiness.\n5. Learning Agent: Improves performance from experience.\n\nSimple Reflex Pseudo-code:\nfunction SIMPLE-REFLEX-AGENT(percept): state = INTERPRET-INPUT(percept); rule = RULE-MATCH(state, rules); return rule.ACTION.\n\nModel-based vs Utility-based: Model-based tracks world state to satisfy rules, whereas Utility-based evaluates multiple outcomes numerically to pick the optimal action.',
        },
        {
          id: 'q5',
          question:
            'Draw and explain the architecture of a General Learning Agent with its components.',
          answer:
            'A General Learning Agent improves its behavior over time and consists of four main components:\n1. Performance Element: Selects external actions based on percepts (the core agent).\n2. Critic: Evaluates the agent’s performance against a fixed performance standard and provides feedback.\n3. Learning Element: Uses feedback from the critic to modify and improve the performance element.\n4. Problem Generator: Suggests exploratory actions leading to new, informative experiences rather than repeating known optimal moves.\nFlow: Sensors -> Performance Element -> Actuators; Sensors -> Critic -> Learning Element -> Problem Generator.',
        },
        {
          id: 'q6',
          question:
            'What is a task environment? Explain the various types of environments with examples.',
          answer:
            'A task environment is the problem domain (PEAS) in which an intelligent agent operates.\nTypes of Task Environments:\n1. Fully vs Partially Observable: Chess (fully) vs Poker/Driving (partially).\n2. Single-agent vs Multi-agent: Crossword (single) vs Chess (multi-agent).\n3. Deterministic vs Stochastic: 8-puzzle (deterministic) vs Taxi driving (stochastic).\n4. Episodic vs Sequential: Image classification (episodic) vs Chess (sequential).\n5. Static vs Dynamic: Crossword (static) vs Automated driving (dynamic).\n6. Discrete vs Continuous: Chess (discrete) vs Robot navigation (continuous).',
        },
        {
          id: 'q7',
          question:
            'Explain the concept of Rationality and what makes an agent rational.',
          answer:
            'Rationality means selecting actions that are expected to maximize a performance measure, given the evidence provided by the percept sequence and built-in knowledge.\nWhat makes an agent rational depends on four factors:\n1. The performance measure defining the criterion of success.\n2. The agent’s prior knowledge of the environment.\n3. The actions the agent can perform.\n4. The agent’s percept sequence to date.\nNote: Rationality is not omniscience (knowing actual outcomes) or perfection; a rational agent explores and learns to maximize expected utility.',
        },
        {
          id: 'q8',
          question:
            'Explain the Wumpus World environment and give its PEAS description.',
          answer:
            'The Wumpus World is a classic 4×4 grid cave containing a deadly Wumpus, bottomless pits, and gold, used to test logical reasoning under partial observability.\nPEAS Description:\n1. Performance Measure: +1000 for climbing out with gold, -1000 for falling into a pit or being eaten by Wumpus, -1 per action, -10 for using the arrow.\n2. Environment: 4×4 grid of rooms; agent starts at [1,1] facing right.\n3. Actuators: Turn Left, Turn Right, Forward, Grab, Shoot, Climb.\n4. Sensors: Stench (near Wumpus), Breeze (near pit), Glitter (on gold), Bump (wall), Scream (Wumpus killed).',
        },
      ],
    },
    {
      id: 'u2',
      name: 'Unit 2: Problem Solving based on Searching',
      topics:
        'Problem Formulation, Uninformed Search (BFS, DFS, UCS, IDDFS), Informed (Heuristic) Search (Heuristic functions, Greedy Best-First, A*), Performance Metrics.',
      questions: [
        {
          id: 'q1',
          question:
            'Define a problem-solving agent. Write and explain the five components of a well-defined problem with a suitable example.',
          answer:
            'A problem-solving agent is a goal-based agent that decides what sequence of actions to take to reach a desirable goal state.\nFive components of a well-defined problem (Example: 8-Puzzle / Route Finding):\n1. Initial State: The starting state of the agent (e.g., Arad city or starting tile layout).\n2. Actions: Possible operations available in a state (e.g., move Blank Left/Right/Up/Down).\n3. Transition Model: Function RESULT(s, a) returning the next state after action a.\n4. Goal Test: Checks whether a given state satisfies the goal (e.g., reaching Bucharest).\n5. Path Cost: Numeric cost assigned to a path (e.g., sum of step distances).',
        },
        {
          id: 'q2',
          question:
            'Differentiate between informed and uninformed search strategies. Explain Depth-Limited Search and Iterative Deepening DFS, comparing them on completeness, optimality, time and space complexity.',
          answer:
            'Uninformed (Blind) Search uses only problem definition without domain knowledge (e.g., BFS, DFS), whereas Informed (Heuristic) Search uses heuristic function h(n) to estimate goal proximity (e.g., A*).\nDepth-Limited Search (DLS): DFS bounded by depth limit l. Fails if solution depth d > l.\nIterative Deepening DFS (IDDFS): Repeatedly runs DLS with increasing limits (0, 1, 2, ...).\n\nComparison (branching factor b, depth d, limit l):\n- Completeness: DLS is incomplete if d > l; IDDFS is complete.\n- Optimality: Both optimal only if step costs are identical (IDDFS yes, DLS no if l > d).\n- Time: DLS O(b^l); IDDFS O(b^d).\n- Space: DLS O(b·l); IDDFS O(b·d).',
        },
        {
          id: 'q3',
          question:
            'Explain the A* algorithm with pseudo code and a suitable example.',
          answer:
            'A* is an informed best-first search that evaluates nodes using f(n) = g(n) + h(n), where g(n) is the actual path cost from start to n, and h(n) is the estimated heuristic cost from n to goal.\nPseudo-code:\n1. Initialize OPEN (priority queue sorted by f) with Start, CLOSED = {}.\n2. Loop while OPEN not empty: pop node n with lowest f(n).\n3. If n is Goal, return path. Add n to CLOSED.\n4. For each neighbor m: compute g(m), f(m)=g(m)+h(m). Update OPEN if better path found.\nExample: In Romania map (Arad to Bucharest), straight-line distance h(n) plus road distance g(n) guides A* through Sibiu -> Rimnicu Vilcea -> Pitesti -> Bucharest.',
        },
        {
          id: 'q4',
          question:
            'Define a heuristic function. Explain its significance in informed search with a suitable example.',
          answer:
            'A heuristic function h(n) estimates the minimum cost of the cheapest path from the current state at node n to a goal state.\nSignificance:\n1. Guides search toward promising paths, drastically reducing explored nodes and execution time.\n2. An admissible heuristic (never overestimates true cost, h(n) ≤ h*(n)) guarantees optimal solutions in A*.\n3. A consistent heuristic ensures monotonic f(n) values.\nExample: In the 8-Puzzle, h₁(n) = number of misplaced tiles, and h₂(n) = sum of Manhattan distances of tiles from goal positions.',
        },
        {
          id: 'q5',
          question:
            'Explain the Hill Climbing algorithm. Explain local maxima, global maxima, plateau and ridge with an example.',
          answer:
            'Hill Climbing is a greedy local search algorithm that continuously moves in the direction of increasing value (uphill) to find a peak, terminating when no neighbor has a higher value.\nDrawbacks in State-Space Landscape:\n1. Local Maxima: A peak higher than all neighbors but lower than the global maximum (search gets stuck).\n2. Global Maxima: The highest overall peak representing the optimal solution.\n3. Plateau: A flat region where neighboring states have identical evaluation values, offering no uphill direction.\n4. Ridge: A sequence of local maxima angled such that single-step moves go downhill.\nExample: 8-Queens problem getting stuck with 1 attacking pair.',
        },
      ],
    },
    {
      id: 'u3',
      name: 'Unit 3: Constraint Satisfaction Problems and Adversarial Search',
      topics:
        'Adversarial Search, Minimax algorithm, Alpha-Beta Pruning, Evaluation functions, Constraint Satisfaction Problem (CSP), Graph Coloring problem, Water Jug Problem.',
      questions: [
        {
          id: 'q1',
          question:
            'Define Constraint Satisfaction Problem (CSP). Explain its components, types of constraints, issues in solving CSP efficiently and their solutions. Explain the graph colouring problem with an example.',
          answer:
            'A CSP finds values for variables satisfying given constraints.\nComponents: Variables (X), Domains (D), and Constraints (C).\nTypes of Constraints: Unary (single variable), Binary (two variables), Global/Higher-order (e.g., AllDiff).\nIssues & Solutions: Backtracking thrashing is solved via MRV (Minimum Remaining Values), Degree heuristic, Least Constraining Value, Forward Checking, and Arc Consistency (AC-3).\nGraph Colouring Example: Map of Australia with regions {WA, NT, SA, Q, NSW, V, T}, Domain {Red, Green, Blue}, and binary constraints that adjacent regions must have different colors (e.g., WA ≠ NT, WA ≠ SA).',
        },
        {
          id: 'q2',
          question:
            'Define CSP and solve the cryptarithmetic puzzle SEND + MORE = MONEY.',
          answer:
            'A CSP assigns domain values {0..9} to distinct letters without leading zeros.\nSolving SEND + MORE = MONEY:\n1. Adding two 4-digit numbers gives a 5-digit result, so M = 1.\n2. S + 1 + carry ≥ 10 → S = 9 (or 8) and O = 0 (since 9+1=10).\n3. E + 0 = N (with carry from N + R) → N = E + 1.\n4. Working through columns with distinct digits yields:\n   S=9, E=5, N=6, D=7, M=1, O=0, R=8, Y=2.\nVerification: 9567 + 1085 = 10652.',
        },
        {
          id: 'q3',
          question:
            'Explain the Min-Max algorithm and Alpha-Beta pruning (cutoff procedure) with a solved example tree. State two advantages of Alpha-Beta over Min-Max.',
          answer:
            'Min-Max computes the optimal move for two-player zero-sum games: MAX maximizes utility, MIN minimizes it.\nAlpha-Beta Pruning optimizes Min-Max by tracking α (best MAX option) and β (best MIN option), pruning branches whenever α ≥ β.\nExample Tree: Root MAX has MIN children B and C. B evaluates leaves (3, 5) → min=3 (α=3). C sees first leaf=2 → C’s value ≤ 2. Since α=3 ≥ β=2, C’s remaining leaves are pruned.\nAdvantages:\n1. Dramatically reduces time complexity from O(b^m) to O(b^(m/2)) with optimal ordering.\n2. Produces the exact same optimal move as standard Min-Max.',
        },
        {
          id: 'q4',
          question:
            'Explain the heuristic (evaluation) function used for cutting off search in games. What are the limitations of game search algorithms?',
          answer:
            'In complex games like Chess, searching to terminal states is infeasible, so a cutoff test stops search at depth d and applies an evaluation function Eval(s) to estimate expected utility from game features (e.g., piece values, board control).\nLimitations of Game Search Algorithms:\n1. Horizon Effect: Pushing an unavoidable bad event just beyond the search depth limit.\n2. Exponential Branching: High branching factors (e.g., Go) limit search depth.\n3. Imperfect Evaluation: Heuristic functions may misjudge quiet vs tactical positions.\n4. Assumes Optimal Opponent: Standard Minimax assumes the opponent never makes mistakes.',
        },
        {
          id: 'q5',
          question:
            'How is an AI technique used to solve the Tic-Tac-Toe problem? Explain with game tree / evaluation approach.',
          answer:
            'Tic-Tac-Toe is a deterministic, two-player zero-sum game solved using the Minimax algorithm over its game tree.\n1. State Representation: 3×3 board; MAX (X) tries to win (+1), MIN (O) tries to win (-1), Draw = 0.\n2. Game Tree Generation: From the root empty board (9 moves), alternate MAX and MIN layers until terminal win/draw states.\n3. Evaluation Function (for depth-limited search): Eval(s) = (number of open winning lines for X) − (number of open winning lines for O).\n4. Minimax backs up terminal utilities to pick optimal center/corner moves, guaranteeing at least a draw.',
        },
      ],
    },
    {
      id: 'u4',
      name: 'Unit 4: Knowledge Representation And Reasoning',
      topics:
        'Propositional Logic, First Order Logic, Inference in First Order Logic (Unification, Forward Chaining, Backward Chaining, Resolution), Quantifying Uncertainty (Bayes Rule).',
      questions: [
        {
          id: 'q1',
          question:
            'What are the various approaches to knowledge representation? Explain Knowledge Representation structures and compare them.',
          answer:
            'Major Knowledge Representation (KR) approaches:\n1. Logical Representation: Uses Propositional and First-Order Logic (formal syntax/semantics, exact inference).\n2. Semantic Networks: Graph of nodes (objects) and labeled edges (relationships like is-a, has-a).\n3. Frames: Object-oriented record structures with slots and fillers supporting inheritance.\n4. Production Rules: IF-THEN rules used in expert systems.\n\nComparison: Logic offers high expressive power and soundness but can be computationally slow. Semantic nets and frames enable intuitive inheritance and fast retrieval, while production rules modularize procedural knowledge.',
        },
        {
          id: 'q2',
          question:
            'Differentiate between Propositional Logic and First Order Logic. Write propositional logic for “All birds fly” and “Every man respects his parents”.',
          answer:
            'Differences:\n1. Propositional Logic (PL) uses atomic statements (True/False), whereas First-Order Logic (FOL) uses objects, predicates, functions, and quantifiers (∀, ∃).\n2. PL cannot express relationships among objects; FOL models general rules cleanly.\n\nLogic Representations:\nNote: Because PL lacks quantifiers, universal statements are represented as atomic propositions or FOL:\n- “All birds fly”: PL: P (where P = "All birds fly") or B → F; in FOL: ∀x (Bird(x) → Flies(x)).\n- “Every man respects his parents”: PL: Q (or M → R); in FOL: ∀x (Man(x) → Respects(x, Parents(x))).',
        },
        {
          id: 'q3',
          question:
            'List and explain the inference rules in First Order Logic with suitable examples.',
          answer:
            'Key Inference Rules in FOL:\n1. Universal Instantiation (UI): From ∀x P(x), infer P(c) for any constant c. Example: ∀x King(x) → Greedy(x) yields King(John) → Greedy(John).\n2. Existential Instantiation (EI): From ∃x P(x), infer P(k) using a new Skolem constant k.\n3. Universal Generalization (UG): From P(c) for arbitrary c, infer ∀x P(x).\n4. Existential Generalization (EG): From P(c), infer ∃x P(x).\n5. Generalized Modus Ponens (GMP): Given P₁\', ..., Pₙ\' and (P₁ ∧ ... ∧ Pₙ → Q) with substitution θ such that Subst(θ, Pᵢ\') = Subst(θ, Pᵢ), infer Subst(θ, Q).',
        },
        {
          id: 'q4',
          question:
            'Detail the algorithm for deciding entailment in propositional logic. Explain the reasoning patterns in propositional logic.',
          answer:
            'Entailment (KB ⊨ α) means α is true in every model where KB is true.\nTruth-Table Enumeration Algorithm (TT-ENTAILS):\n1. Extract all proposition symbols from KB and α.\n2. Recursively assign True/False to every symbol (2^n models).\n3. Whenever KB evaluates to True in a model, verify α is also True; if α is False, return False.\n\nReasoning Patterns:\n1. Modus Ponens: From α → β and α, infer β.\n2. And-Elimination: From α ∧ β, infer α.\n3. Unit Resolution: From α ∨ β and ¬β, infer α.\n4. De Morgan’s & Contraposition equivalences.',
        },
        {
          id: 'q5',
          question:
            'Explain the Forward Chaining algorithm (including efficient forward chaining and its usage) with an example.',
          answer:
            'Forward Chaining is a data-driven reasoning method that starts from known facts in the KB and applies Modus Ponens to derive new facts until the query is proven.\nEfficient Forward Chaining improvements:\n1. Incremental matching (Rete algorithm) avoids re-checking unchanged facts.\n2. Indexing rules by predicates and ordering conjuncts (most constrained first).\n\nExample: Given facts American(West), Missile(M1), Owns(Nono, M1) and rule American(x) ∧ Weapon(y) ∧ Sells(x,y,z) ∧ Hostile(z) → Criminal(x), forward chaining fires matching rules step-by-step to prove Criminal(West). Used in expert systems and monitoring.',
        },
        {
          id: 'q6',
          question:
            'Explain the Backward Chaining algorithm with the help of an example.',
          answer:
            'Backward Chaining is a goal-driven reasoning algorithm that begins with the target query and works backward through implication rules to match known facts.\nAlgorithm:\n1. Check if goal matches an existing fact in KB.\n2. Otherwise, find rules whose consequent unifies with the goal.\n3. Recursively prove each premise (sub-goal) in the rule’s antecedent using depth-first search.\n\nExample: To prove Criminal(West), it matches the rule consequent, creating sub-goals American(West), Weapon(y), Sells(West,y,z), Hostile(z), and resolves each down to base facts. Widely used in Prolog and diagnostic systems.',
        },
        {
          id: 'q7',
          question:
            'Explain the Unification algorithm with an example. Write a short note on Resolution.',
          answer:
            'Unification finds a substitution θ (Most General Unifier, MGU) that makes two logical expressions identical.\nAlgorithm UNIFY(x, y, θ): Recursively compares terms; if one is a variable, binds it (after an occur-check); if compound predicates, unifies functors and arguments.\nExample: Unifying Knows(John, x) and Knows(y, Mother(y)) yields θ = {y/John, x/Mother(John)}.\n\nResolution: A sound, refutation-complete inference rule used after converting KB ∧ ¬α to Conjunctive Normal Form (CNF). Two clauses with complementary literals (e.g., A ∨ B and ¬B ∨ C) resolve to A ∨ C until an empty clause (contradiction) proves α.',
        },
      ],
    },
    {
      id: 'u5',
      name: 'Unit 5: AI Applications and Future Trends',
      topics:
        'Applications of AI (Robotics, NLP, Expert Systems, etc.), Emerging Trends (XAI, Federated Learning, Generative AI, LLMs, Prompt Engineering).',
      questions: [
        {
          id: 'q1',
          question:
            'What is knowledge engineering? Write and explain its steps. Explain the ontology of situation calculus, and write a note on categories and objects.',
          answer:
            'Knowledge Engineering is the process of building a knowledge base by investigating a domain, selecting key concepts, and formalizing axioms.\nSteps: 1. Identify the task, 2. Assemble relevant knowledge, 3. Decide on vocabulary of predicates/functions, 4. Encode general knowledge, 5. Encode problem instance, 6. Pose queries, 7. Debug KB.\nSituation Calculus Ontology: Models dynamic worlds using Actions, Situations (states resulting from actions via Result(a, s)), and Fluents (properties that change over time).\nCategories & Objects: Categories group objects with shared properties (e.g., Member(x, Basket)) organized into taxonomies with inheritance.',
        },
        {
          id: 'q2',
          question:
            'Write a short note on a planning agent, goal and action representation (STRIPS/PDDL). Explain the different components of a planning system.',
          answer:
            'A Planning Agent uses factored state representations and action schemas to construct a sequence of actions transforming an initial state into a goal state.\nSTRIPS / PDDL Action Representation:\n1. Action Name & Parameters (e.g., Fly(p, from, to)).\n2. Precondition: Conjunction of literals that must hold before execution.\n3. Effect (Add/Delete lists): Literals made true or false after execution.\n\nComponents of a Planning System: Initial State description, Goal State specification, Action Schema library, and a Planner/Search Engine (e.g., forward/backward state-space search or GraphPlan).',
        },
        {
          id: 'q3',
          question:
            'What are the types of planning? Analyze the various planning approaches. Explain Classical Planning and its advantages with an example.',
          answer:
            'Types of Planning: Classical Planning, Hierarchical Task Network (HTN) Planning, Conditional Planning, and Continuous/Temporal Planning.\nApproaches: Forward State-Space (Progression), Backward Relevant-States (Regression), Planning Graphs (GraphPlan), and SAT-based Planning.\nClassical Planning assumes a fully observable, deterministic, static, and discrete environment.\nAdvantages: Enables domain-independent heuristics, compact PDDL representations, and efficient goal-directed search.\nExample (Blocks World): Moving block A from table onto B using Pickup(A) and Stack(A, B) operators to satisfy On(A, B).',
        },
        {
          id: 'q4',
          question:
            'Write a note on Hierarchical Task Network (HTN) planning. Explain time, schedules and resources in the temporal domain with an example.',
          answer:
            'Hierarchical Task Network (HTN) planning decomposes high-level compound tasks into smaller sub-tasks using refinement methods until only primitive executable actions remain (e.g., "Build House" → "Lay Foundation", "Build Walls").\nTemporal Domain (Time, Schedules, Resources): Real-world planning requires scheduling actions with durations, start/end deadlines, and limited reusable or consumable resources (e.g., fuel, machines, workers).\nExample (Car Assembly): Engine installation (30 mins) and wheel mounting (15 mins) share tools; a temporal scheduler aligns precedence constraints and resource capacities to minimize total assembly time.',
        },
        {
          id: 'q5',
          question:
            'Discuss AI and its ethical concerns and limitations. Explain the components of AI and AI architecture with a suitable diagram.',
          answer:
            'Ethical Concerns & Limitations: Algorithmic bias, privacy erosion, lack of explainability (black-box LLMs/neural nets), hallucination, autonomous weapon risks, and workforce disruption.\nComponents & AI Architecture:\n1. Perception Layer: Sensors, NLP, and Computer Vision extracting structured features.\n2. Knowledge & Reasoning Layer: Knowledge base, inference engine, and ML/LLM models.\n3. Learning & Adaptation Layer: Feedback loops (RL, Federated Learning, XAI).\n4. Action/Interface Layer: Actuators, robotics, or user-facing APIs.\nFlow: Environment → [Perception] → [Knowledge + Learning Core] → [Decision/Action] → Environment.',
        },
      ],
    },
  ],
};

export default aiSubject;
