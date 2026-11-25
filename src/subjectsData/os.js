const osSubject = {
  id: 'os',
  name: 'Operating Systems',
  shortName: 'OS',
  icon: 'Settings',
  accent: 'cyan',
  description:
    'OS architectures, process management & scheduling, synchronization, deadlocks, virtual memory, and file & I/O systems.',
  units: [
    {
      id: 'u1',
      name: 'Unit 1: Introduction to Operating System',
      topics:
        'OS Functions, Types of OS, Monolithic vs Microkernel, System Calls, Layered & Modular Design, Resource Manager, Multitasking/Multiprogramming/Multiprocessing, User vs Kernel Mode, Booting, Virtual Machines.',
      questions: [
        {
          id: 'q1',
          question:
            'Define an Operating System. Explain its various functions.',
          answer:
            'An Operating System (OS) is system software that acts as an intermediary between computer hardware and user applications, managing resources and providing a convenient execution environment.\nCore Functions:\n1. Process Management: Creation, scheduling, synchronization, and termination of processes.\n2. Memory Management: Allocation, deallocation, and virtual memory mapping.\n3. File & Storage Management: Organizing directories, permissions, and disk blocks.\n4. I/O Device Management: Coordinating device drivers and buffering.\n5. Security & Protection: Authenticating users and isolating processes.',
        },
        {
          id: 'q2',
          question:
            'Explain the different types of operating systems with examples (Batch, Time-Sharing, Real-Time, Distributed, etc.).',
          answer:
            '1. Batch OS: Groups similar jobs into batches for sequential execution without user interaction (e.g., IBM OS/360).\n2. Time-Sharing (Multitasking) OS: Rapidly switches CPU among users/tasks for interactive response (e.g., UNIX, Linux, Windows).\n3. Real-Time OS (RTOS): Guarantees strict timing deadlines—Hard RTOS (airbags, VxWorks) and Soft RTOS (multimedia).\n4. Distributed OS: Coordinates independent networked machines to appear as a single system (e.g., Amoeba, LOCUS).\n5. Mobile/Embedded OS: Optimized for battery and touch/IoT (e.g., Android, iOS).',
        },
        {
          id: 'q3',
          question:
            'Differentiate between a monolithic kernel and a microkernel.',
          answer:
            '1. Architecture: A Monolithic Kernel runs all OS services (process, memory, file system, device drivers) in a single shared kernel address space; a Microkernel keeps only minimal IPC, scheduling, and basic memory management in kernel space, moving drivers/FS to user space.\n2. Performance: Monolithic is faster due to direct function calls; Microkernel incurs IPC message-passing overhead.\n3. Reliability & Extensibility: Microkernel is more fault-isolated and modular (driver crashes don’t crash the OS).\n4. Examples: Linux, MS-DOS (Monolithic) vs QNX, Mach, Minix (Microkernel).',
        },
        {
          id: 'q4',
          question:
            'Explain the concept of system calls. What are the different types of system calls?',
          answer:
            'A System Call is a programmatic interface (software interrupt/trap) allowing user-mode processes to safely request privileged services from the OS kernel.\nTypes of System Calls:\n1. Process Control: fork(), exec(), exit(), wait().\n2. File Management: open(), read(), write(), close(), unlink().\n3. Device Management: ioctl(), read(), write(), request/release device.\n4. Information Maintenance: getpid(), time(), alarm(), sleep().\n5. Communications: pipe(), shmget(), socket(), send(), recv().\n6. Protection: chmod(), chown(), setuid().',
        },
        {
          id: 'q5',
          question: 'Explain the layered and modular approach to OS design.',
          answer:
            '1. Layered Approach: Divides the OS into hierarchical layers (Layer 0: Hardware, up to Layer N: User Interface). Each layer uses services only from the layer immediately below it, simplifying debugging and verification, though defining strict boundaries and call overhead can degrade performance.\n2. Modular Approach (Loadable Kernel Modules): Modern OS design (e.g., Linux, Solaris) featuring a core kernel with dynamically loadable modules (drivers, filesystems) via well-defined interfaces. Combines layered modularity with monolithic speed without requiring kernel recompilation.',
        },
        {
          id: 'q6',
          question: 'What is the role of an OS as a resource manager? Explain.',
          answer:
            'As a Resource Manager, the OS acts as an impartial allocator and coordinator of competing hardware and software resources (CPU cycles, RAM, disk space, I/O devices, network bandwidth) across multiple processes.\nKey Responsibilities:\n1. Tracking Status: Monitors which process holds each resource and what is free.\n2. Fair & Efficient Allocation: Uses CPU scheduling and memory policies to maximize throughput and avoid starvation.\n3. Conflict Resolution & Reclamation: Handles deadlocks, enforces mutual exclusion, and reclaims resources upon process termination.',
        },
        {
          id: 'q7',
          question:
            'Explain the concepts of multitasking, multiprogramming, and multiprocessing.',
          answer:
            '1. Multiprogramming: Keeps multiple programs in memory simultaneously; when one waits for I/O, the OS switches the CPU to another to maximize CPU utilization.\n2. Multitasking (Time-Sharing): An extension of multiprogramming where the CPU switches rapidly among active tasks using fixed time slices (quanta), providing interactive responsiveness to users.\n3. Multiprocessing: Uses two or more physical CPUs/cores within a single computer system to execute multiple instructions truly in parallel (e.g., Symmetric Multiprocessing, SMP).',
        },
        {
          id: 'q8',
          question:
            'Differentiate between User Mode and Kernel Mode. Why is this separation necessary?',
          answer:
            '1. User Mode (Mode bit = 1): Restricted execution mode for application programs; direct access to hardware, I/O ports, and kernel memory is prohibited.\n2. Kernel Mode (Mode bit = 0): Privileged mode where the OS executes with unrestricted access to all hardware and privileged CPU instructions.\n\nWhy Separation is Necessary: Without dual-mode operation, a buggy or malicious user program could overwrite OS memory, halt the CPU, corrupt disks, or bypass security isolation between processes. System calls safely transition CPU control from User to Kernel mode.',
        },
        {
          id: 'q9',
          question: 'Explain the booting process of an operating system.',
          answer:
            'Booting is the startup sequence that loads the OS kernel into RAM when a computer powers on:\n1. Power-On & POST: CPU jumps to firmware (BIOS/UEFI) in ROM, which runs Power-On Self-Test (POST) to verify RAM, keyboard, and storage.\n2. Bootloader Loading: Firmware reads the Master Boot Record (MBR) or EFI System Partition to load the bootloader (e.g., GRUB, Windows Boot Manager).\n3. Kernel Initialization: Bootloader loads the OS kernel and initial RAM disk (initrd) into memory.\n4. Init/Systemd: Kernel mounts the root filesystem and starts the first user-space process (PID 1) to launch services and login.',
        },
        {
          id: 'q10',
          question: 'Write a short note on Virtual Machines.',
          answer:
            'A Virtual Machine (VM) is a software emulation of a physical computer that runs an independent guest OS and applications isolated from the host.\nManaged by a Hypervisor:\n1. Type 1 (Bare-Metal): Runs directly on hardware (e.g., VMware ESXi, KVM, Xen).\n2. Type 2 (Hosted): Runs atop a host OS (e.g., VirtualBox, VMware Workstation).\nBenefits: Strong fault/security isolation, running multiple OSes simultaneously on one server, snapshot/rollback capability, and cloud hardware consolidation.',
        },
      ],
    },
    {
      id: 'u2',
      name: 'Unit 2: Process Management',
      topics:
        'Process States & Transition Diagram, PCB, Process vs Thread, Context Switching, Process Schedulers, CPU Scheduling (FCFS, SJF, Round Robin, Priority), Critical Section, Producer-Consumer.',
      questions: [
        {
          id: 'q1',
          question:
            'Define a Process. Explain the different states of a process with a state transition diagram.',
          answer:
            'A Process is a program in execution, comprising program code (text), current activity (PC/registers), stack, data, and heap.\nFive Process States:\n1. New: Process is being created.\n2. Ready: Loaded in RAM, waiting for CPU assignment.\n3. Running: Instructions are currently executing on CPU.\n4. Waiting (Blocked): Paused waiting for an I/O completion or event.\n5. Terminated: Execution finished; resources are reclaimed.\nTransitions: New→Ready (Admitted), Ready↔Running (Dispatch/Preempt), Running→Waiting (I/O wait), Waiting→Ready (I/O complete), Running→Terminated (Exit).',
        },
        {
          id: 'q2',
          question:
            'What is a Process Control Block (PCB)? What information does it contain?',
          answer:
            'A Process Control Block (PCB) is a kernel data structure serving as the OS’s repository for all runtime information about a specific process.\nContents of a PCB:\n1. Process ID (PID) & Parent PID.\n2. Process State (New, Ready, Running, Waiting, Terminated).\n3. Program Counter (PC) & CPU Registers (saved during context switch).\n4. CPU Scheduling Info (priority, scheduling queue pointers).\n5. Memory Management Info (page tables, base/limit registers).\n6. Accounting & I/O Status Info (CPU time used, open file descriptors, allocated devices).',
        },
        {
          id: 'q3',
          question: 'Differentiate between a process and a thread.',
          answer:
            '1. Definition: A process is an independent executing program; a thread is the smallest lightweight unit of CPU execution inside a process.\n2. Memory Space: Processes have isolated virtual address spaces; threads of the same process share code, data, heap, and open files (each has only its own stack, registers, and PC).\n3. Context Switch Overhead: Process switching is heavy (requires TLB/memory map flush); thread switching is fast.\n4. Communication: Processes require IPC (pipes/sockets); threads communicate directly via shared memory.',
        },
        {
          id: 'q4',
          question: 'Explain the concept of Context Switching.',
          answer:
            'Context Switching is the kernel mechanism of suspending a currently running process/thread and resuming another on the CPU.\nSteps:\n1. An interrupt or system call triggers kernel mode.\n2. The OS saves the current process’s execution context (Program Counter, CPU registers, state) into its PCB.\n3. The scheduler selects the next Ready process.\n4. The OS restores the new process’s saved state from its PCB into CPU registers and updates memory management mappings.\nNote: Context switch time is pure overhead; minimizing unnecessary switches improves throughput.',
        },
        {
          id: 'q5',
          question:
            'What is a Process Scheduler? Explain the different levels of scheduling.',
          answer:
            'A Process Scheduler selects which ready or waiting process gets access to memory and CPU next.\nThree Levels of Scheduling:\n1. Long-Term (Job) Scheduler: Selects jobs from disk pool and loads them into RAM (controls degree of multiprogramming; runs infrequently).\n2. Medium-Term Scheduler: Swaps partially executed processes out of RAM to disk (and back) to relieve memory pressure.\n3. Short-Term (CPU) Scheduler: Picks one Ready process from the ready queue and assigns it to the CPU (runs every few milliseconds).',
        },
        {
          id: 'q6',
          question:
            'Explain the following scheduling algorithms with examples: FCFS, SJF, and Round Robin.',
          answer:
            '1. FCFS (First-Come, First-Served): Non-preemptive; executes processes in arrival order. Simple, but suffers from Convoy Effect (short jobs wait behind long ones). Example: P1(24), P2(3) → P1 runs 0–24, P2 runs 24–27.\n2. SJF (Shortest Job First): Schedules process with smallest CPU burst next. Minimizes average waiting time, though burst prediction is hard and starvation can occur.\n3. Round Robin (RR): Preemptive; gives each process a fixed time quantum q (e.g., 4 ms) cyclically. Fair and responsive for time-sharing.',
        },
        {
          id: 'q7',
          question:
            'Explain the concept of preemptive and non-preemptive scheduling.',
          answer:
            '1. Non-Preemptive Scheduling: Once the CPU is allocated to a process, it keeps the CPU until it voluntarily terminates or enters a Waiting state (e.g., FCFS, Non-preemptive SJF). Simple and low context-switch overhead, but poor interactive response.\n2. Preemptive Scheduling: The OS can forcibly interrupt and suspend a running process (e.g., on timer expiry or arrival of a higher-priority process) to allocate the CPU elsewhere (e.g., Round Robin, SRTF, Preemptive Priority). Ensures fairness and real-time responsiveness, requiring synchronization for shared data.',
        },
        {
          id: 'q8',
          question:
            'What is a critical section? What are the requirements for a solution to the critical section problem?',
          answer:
            'A Critical Section is a code segment where a process accesses shared resources (variables, files, tables) that must not be concurrently modified by multiple processes to avoid race conditions.\nThree Mandatory Requirements for a Valid Solution:\n1. Mutual Exclusion: At most one process can execute inside its critical section at any time.\n2. Progress: If no process is in the critical section and some wish to enter, selection cannot be postponed indefinitely.\n3. Bounded Waiting: There is a strict upper bound on how many times other processes can enter before a waiting request is granted.',
        },
        {
          id: 'q9',
          question:
            'Explain the Producer-Consumer problem and its solution using semaphores.',
          answer:
            'The Producer-Consumer (Bounded Buffer) problem coordinates a Producer adding items to a fixed-size N buffer and a Consumer removing them without overflow, underflow, or race conditions.\nSemaphore Solution (mutex=1, empty=N, full=0):\n- Producer: wait(empty); wait(mutex); /* add item to buffer */; signal(mutex); signal(full);\n- Consumer: wait(full); wait(mutex); /* remove item */; signal(mutex); signal(empty);\nExplanation: `empty` blocks producer if full, `full` blocks consumer if empty, and `mutex` ensures mutually exclusive buffer access.',
        },
        {
          id: 'q10',
          question:
            'Calculate average waiting time and turnaround time for a given set of processes using Priority Scheduling (preemptive).',
          answer:
            'Method & Solved Example (Lower number = higher priority):\nSuppose P1(AT=0, BT=4, Pri=2), P2(AT=1, BT=3, Pri=1), P3(AT=2, BT=1, Pri=3).\nGantt Chart:\n- t=0..1: P1 runs (remaining BT=3).\n- t=1..4: P2 arrives with Pri=1 < 2, preempts P1 and finishes at t=4.\n- t=4..7: P1 resumes and finishes at t=7.\n- t=7..8: P3 runs and finishes at t=8.\n\nMetrics (TAT = CT − AT, WT = TAT − BT):\n- P1: CT=7, TAT=7, WT=3 | P2: CT=4, TAT=3, WT=0 | P3: CT=8, TAT=6, WT=5.\nAverage TAT = (7+3+6)/3 = 5.33; Average WT = (3+0+5)/3 = 2.67.',
        },
      ],
    },
    {
      id: 'u3',
      name: 'Unit 3: Process Synchronization and Deadlocks',
      topics:
        'Process Synchronization, Semaphores (Binary & Counting), Dining Philosophers, Deadlock Conditions, Prevention vs Avoidance, RAG, Banker’s Algorithm, Detection & Recovery, Starvation, Monitors.',
      questions: [
        {
          id: 'q1',
          question: 'Define Process Synchronization. Why is it needed?',
          answer:
            'Process Synchronization is the coordination of concurrent processes or threads sharing resources so they execute in a predictable, consistent order without interfering with each other.\nWhy It Is Needed:\n1. Prevent Race Conditions: Ensures shared variables aren’t corrupted by interleaved read-modify-write operations.\n2. Maintain Data Consistency: Guarantees atomic updates in databases, buffers, and OS tables.\n3. Enforce Execution Ordering: Coordinates dependent tasks (e.g., Producer must produce before Consumer reads).',
        },
        {
          id: 'q2',
          question:
            'Explain the concept of a semaphore. Differentiate between binary and counting semaphores.',
          answer:
            'A Semaphore (Dijkstra) is an integer synchronization variable accessed only via two atomic operations: wait(S) (P: decrements S, blocks if S < 0) and signal(S) (V: increments S, wakes a waiting process).\n\nBinary vs Counting Semaphore:\n1. Value Range: Binary semaphore takes only 0 or 1; Counting semaphore can take any non-negative integer (0 to N).\n2. Purpose: Binary acts like a mutex lock for mutual exclusion of 1 resource; Counting tracks availability across N identical resource instances (e.g., connection pool or buffer slots).',
        },
        {
          id: 'q3',
          question:
            'Explain the Dining Philosophers problem and its solution.',
          answer:
            'Five philosophers sit around a circular table with 5 chopsticks (one between each pair). A philosopher alternates between thinking and eating, needing both left and right chopsticks.\nIssue: If all grab their left chopstick simultaneously, deadlock occurs.\nSemaphore Solutions (chopstick[5] initialized to 1):\n1. Asymmetric Ordering: Even-numbered philosophers pick up left then right; odd-numbered pick up right then left, breaking circular wait.\n2. Limit Diners: Allow at most 4 philosophers at the table using a room semaphore(4).\n3. Atomic Pickup: Use a Monitor so both chopsticks are acquired together.',
        },
        {
          id: 'q4',
          question:
            'What is a deadlock? State the four necessary conditions for a deadlock to occur.',
          answer:
            'A Deadlock is a permanent blocking state where a set of processes are each waiting for a resource held by another process in the same set, so none can proceed.\nFour Necessary Coffman Conditions (all must hold simultaneously):\n1. Mutual Exclusion: At least one resource is non-shareable.\n2. Hold and Wait: A process holds at least one resource while waiting for additional ones.\n3. No Preemption: Resources cannot be forcibly taken away; only released voluntarily.\n4. Circular Wait: A closed cycle of processes exists where each waits for a resource held by the next.',
        },
        {
          id: 'q5',
          question:
            'Explain the difference between deadlock prevention and deadlock avoidance.',
          answer:
            '1. Deadlock Prevention: Statically designs the system to violate at least one of the 4 Coffman conditions (e.g., disallow Hold & Wait by requesting all resources upfront, or enforce global resource ordering to prevent Circular Wait). Simple but causes low resource utilization.\n2. Deadlock Avoidance: Dynamically evaluates every resource request before granting it (using advance info on maximum needs, e.g., Banker’s Algorithm) to verify the system stays in a Safe State. Offers higher resource utilization with runtime checking overhead.',
        },
        {
          id: 'q6',
          question:
            'Explain the Resource Allocation Graph with an example for a deadlock state.',
          answer:
            'A Resource Allocation Graph (RAG) is a directed graph with vertices for Processes (circles, P) and Resources (rectangles with instance dots, R).\nEdges:\n- Request Edge (Pᵢ → Rⱼ): Process Pᵢ is waiting for Rⱼ.\n- Assignment Edge (Rⱼ → Pᵢ): An instance of Rⱼ is allocated to Pᵢ.\nDeadlock Rule: No cycle → no deadlock. If each resource has 1 instance, a cycle guarantees deadlock.\nExample: P1 holds R1 and requests R2 (R1→P1→R2), while P2 holds R2 and requests R1 (R2→P2→R1), forming a closed cycle and deadlock.',
        },
        {
          id: 'q7',
          question: "Explain the Banker's Algorithm for deadlock avoidance.",
          answer:
            'Banker’s Algorithm (Dijkstra) tests resource allocation safety before granting requests using matrices: Available, Max, Allocation, and Need (= Max − Allocation).\nAlgorithm Steps:\n1. Safety Check: Look for a process Pᵢ whose Needᵢ ≤ Work (initialized to Available). Simulate granting it, then add Allocationᵢ back to Work. Repeat until all processes finish (Safe State) or none can proceed (Unsafe).\n2. Resource-Request: When Pᵢ requests R, verify R ≤ Needᵢ and R ≤ Available, tentatively allocate, and run Safety Check. Grant only if Safe; otherwise Pᵢ waits.',
        },
        {
          id: 'q8',
          question: 'Explain the concept of deadlock detection and recovery.',
          answer:
            'Deadlock Detection periodically checks whether a deadlock has occurred (using Wait-For Graphs for single-instance resources or a Banker-like detection algorithm for multi-instance resources).\nDeadlock Recovery Strategies:\n1. Process Termination: Abort all deadlocked processes, or abort one process at a time (lowest priority/least work done) until the cycle breaks.\n2. Resource Preemption: Temporarily take resources from selected victim processes, roll back the victim to a safe checkpoint, and prevent starvation by limiting how often the same victim is chosen.',
        },
        {
          id: 'q9',
          question: 'What is starvation? How is it different from deadlock?',
          answer:
            'Starvation (Indefinite Blocking) occurs when a ready process is perpetually denied necessary CPU or resources because scheduling/allocation policies favor higher-priority processes.\nKey Differences:\n1. Cause: Deadlock is caused by circular waiting among blocked processes; Starvation is caused by unfair priority/scheduling policies.\n2. Progress: In Deadlock, none of the involved processes can progress; in Starvation, high-priority processes progress while the victim waits.\n3. Resolution: Deadlock requires external intervention (abort/preempt); Starvation is solved via Aging (gradually boosting priority over wait time).',
        },
        {
          id: 'q10',
          question: 'Write a short note on Monitors.',
          answer:
            'A Monitor is a high-level language synchronization construct (e.g., Java `synchronized`, C# `lock`) that encapsulates shared data, operations (procedures), and synchronization into a single abstract module.\nKey Features:\n1. Implicit Mutual Exclusion: Only one process/thread can be active inside a monitor at any instant, eliminating manual semaphore placement errors.\n2. Condition Variables: Uses wait() and signal() on condition queues (x.wait(), x.signal()) so threads can suspend safely while waiting for a condition and release the monitor lock temporarily.',
        },
      ],
    },
    {
      id: 'u4',
      name: 'Unit 4: Memory Management',
      topics:
        'Logical vs Physical Address, Paging & Page Table, Segmentation, Internal & External Fragmentation, Virtual Memory, Page Replacement (FIFO, LRU, Optimal), Thrashing, Demand Paging, TLB.',
      questions: [
        {
          id: 'q1',
          question: 'Differentiate between logical and physical addresses.',
          answer:
            '1. Generator: A Logical (Virtual) Address is generated by the CPU during program execution; a Physical Address is the actual location loaded into the RAM Memory Address Register (MAR).\n2. Visibility: User programs see and manipulate logical addresses; physical addresses are invisible to user code.\n3. Address Space: Logical address space is the set of all virtual addresses a process can generate; physical address space corresponds to installed RAM.\n4. Translation: The Memory Management Unit (MMU) dynamically translates logical addresses into physical addresses at runtime.',
        },
        {
          id: 'q2',
          question:
            'Explain the concept of paging. How is address translation performed using a page table?',
          answer:
            'Paging is a non-contiguous memory management scheme that divides physical memory into fixed-size blocks called Frames and logical memory into equal-sized blocks called Pages, eliminating external fragmentation.\nAddress Translation:\n1. A logical address (m bits) is split into Page Number (p, high-order bits) and Page Offset (d, low-order bits).\n2. The Page Table Base Register points to the process’s Page Table. Entry `p` yields the corresponding Frame Number (f).\n3. Physical Address = (f × frame_size) + d (simply concatenating f and d).',
        },
        {
          id: 'q3',
          question:
            'Explain the concept of segmentation. Differentiate between paging and segmentation.',
          answer:
            'Segmentation divides a program’s logical address space into variable-sized logical units (segments) matching programmer views—such as Code, Data, Stack, and Heap—identified by <segment-number, offset> and mapped via a Segment Table (base + limit).\n\nPaging vs Segmentation:\n1. Block Size: Paging uses fixed-size pages; Segmentation uses variable-sized logical segments.\n2. Fragmentation: Paging suffers internal fragmentation; Segmentation suffers external fragmentation.\n3. User Visibility: Paging is transparent to the programmer; Segmentation aligns with program structure and simplifies per-segment protection/sharing.',
        },
        {
          id: 'q4',
          question:
            'What is fragmentation? Explain internal and external fragmentation.',
          answer:
            'Fragmentation occurs when free memory becomes broken into unusable small pieces or wasted within allocated blocks, reducing memory efficiency.\n1. Internal Fragmentation: Memory allocated to a process exceeds its actual requirement, leaving unused space INSIDE the allocated partition/page (e.g., allocating a 4 KB page for 3.2 KB wastes 0.8 KB). Fixed partitions and paging experience this.\n2. External Fragmentation: Total free memory is sufficient to satisfy a request, but it is scattered in non-contiguous small holes BETWEEN allocated blocks (solved by compaction or paging).',
        },
        {
          id: 'q5',
          question:
            'Explain the concept of virtual memory. What are its advantages?',
          answer:
            'Virtual Memory separates a user’s logical memory from physical RAM using disk backing storage (swap/pagefile), allowing execution of processes whose total size exceeds available physical RAM.\nAdvantages:\n1. Run Large Programs: Only active pages need to reside in RAM at any moment.\n2. Higher Multiprogramming: More processes fit in memory simultaneously, increasing CPU utilization.\n3. Simplified Programming & Isolation: Each process gets a clean, private contiguous virtual address space.\n4. Easy Sharing: Libraries and pages can be shared safely across processes.',
        },
        {
          id: 'q6',
          question:
            'Explain the different page replacement algorithms: FIFO, LRU, and Optimal.',
          answer:
            'Page replacement picks a victim frame in RAM when a page fault occurs and memory is full:\n1. FIFO (First-In, First-Out): Replaces the oldest loaded page using a queue. Simple, but ignores usage frequency and suffers Belady’s Anomaly.\n2. Optimal (OPT): Replaces the page that will not be used for the longest time in the future. Yields the theoretical minimum page faults (used as a benchmark since future knowledge isn’t available).\n3. LRU (Least Recently Used): Replaces the page unused for the longest past duration, exploiting temporal locality cleanly.',
        },
        {
          id: 'q7',
          question:
            'Consider a page reference string and calculate the number of page faults using the LRU algorithm (with 3 frames).',
          answer:
            'Worked Example with 3 frames for Reference String: `7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2`:\n- 7 → [7] (Fault 1)\n- 0 → [7, 0] (Fault 2)\n- 1 → [7, 0, 1] (Fault 3)\n- 2 → replaces 7 → [2, 0, 1] (Fault 4)\n- 0 → Hit [2, 0, 1]\n- 3 → replaces 1 → [2, 0, 3] (Fault 5)\n- 0 → Hit [2, 0, 3]\n- 4 → replaces 2 → [4, 0, 3] (Fault 6)\n- 2 → replaces 3 → [4, 0, 2] (Fault 7)\n- 3 → replaces 0 → [4, 3, 2] (Fault 8)\n- 0 → replaces 4 → [0, 3, 2] (Fault 9)\n- 3 → Hit | 2 → Hit.\nTotal Page Faults = 9.',
        },
        {
          id: 'q8',
          question:
            'What is thrashing? What are its causes and how can it be resolved?',
          answer:
            'Thrashing is a severe performance collapse where the system spends almost all its time swapping pages between RAM and disk rather than executing instructions, causing CPU utilization to plummet.\nCauses: Over-allocating processes (degree of multiprogramming too high) so each process lacks enough frames for its active working set.\nResolutions:\n1. Working-Set Model: Ensure each process receives frames covering its active working set.\n2. Page-Fault Frequency (PFF) Control: Suspend/swap out processes if fault rate exceeds an upper threshold.',
        },
        {
          id: 'q9',
          question: 'Explain the concept of demand paging.',
          answer:
            'Demand Paging is a lazy-loading virtual memory technique where pages are loaded into physical RAM ONLY when referenced during execution, never in advance.\nWorking:\n1. Page table entries use a Valid/Invalid bit (v = in RAM, i = on disk).\n2. Accessing an invalid page triggers a Page Fault trap to the OS.\n3. The OS locates the page on disk, finds a free RAM frame (or runs page replacement), loads the page, sets the bit to Valid, and restarts the interrupted instruction.\nBenefits: Fast startup and lower memory waste.',
        },
        {
          id: 'q10',
          question:
            'Explain the working of a Translation Lookaside Buffer (TLB).',
          answer:
            'A Translation Lookaside Buffer (TLB) is a small, ultra-fast associative hardware cache inside the MMU that stores recent virtual-to-physical page table translations.\nWorking:\n1. CPU generates logical address (p, d); MMU searches all TLB entries in parallel for page `p`.\n2. TLB Hit (~95%+): Frame number `f` is retrieved in ~1 cycle, forming physical address (f, d) without touching RAM.\n3. TLB Miss: MMU reads the page table in RAM, fetches `f`, and updates the TLB for future accesses.\nDramatically reduces Effective Memory Access Time (EMAT).',
        },
      ],
    },
    {
      id: 'u5',
      name: 'Unit 5: File Systems and I/O Management',
      topics:
        'File Attributes & Operations, Allocation Methods (Contiguous, Linked, Indexed), Directories, File System Structure, Disk Scheduling (FCFS, SSTF, SCAN, C-SCAN), RAID (0, 1, 5), Block vs Character Devices, Spooling, Free Space.',
      questions: [
        {
          id: 'q1',
          question:
            'Define a file. Explain the various file attributes and operations.',
          answer:
            'A File is a named collection of related persistent information recorded on secondary storage.\nFile Attributes: Name, Identifier (inode/tag), Type, Location (pointer on disk), Size, Protection (rwx permissions), and Timestamps/User ID.\nFile Operations:\n1. Create: Allocate space and add directory entry.\n2. Open/Close: Cache file metadata in open-file table.\n3. Read/Write: Transfer data at current file-position pointer.\n4. Reposition (Seek): Move file pointer without I/O.\n5. Delete & Truncate: Reclaim disk blocks or clear contents.',
        },
        {
          id: 'q2',
          question:
            'Explain the different file allocation methods: Contiguous, Linked, and Indexed.',
          answer:
            '1. Contiguous Allocation: Each file occupies consecutive disk blocks (start, length). Supports fast sequential and random access, but suffers external fragmentation and difficulty growing files.\n2. Linked Allocation: Blocks are scattered and linked via next-block pointers (e.g., FAT). Eliminates external fragmentation and allows easy growth, but random access is slow O(n) and pointers consume space.\n3. Indexed Allocation: Stores all block pointers together in a dedicated Index Block (like UNIX inodes). Supports fast direct access without external fragmentation.',
        },
        {
          id: 'q3',
          question:
            'Explain the concept of a directory. What are the different directory structures?',
          answer:
            'A Directory is a symbol table translating human-readable file names into internal file identifiers (inodes/metadata) on disk.\nDirectory Structures:\n1. Single-Level: All files in one global directory; causes name collisions across users.\n2. Two-Level: Separate directory per user; isolates names but hinders sharing.\n3. Tree-Structured: Hierarchical folders/subdirectories (modern standard); enables grouping and pathnames.\n4. Acyclic-Graph: Tree extended with shared files/links (shortcuts/symlinks) without cycles.\n5. General Graph: Allows cycles, requiring garbage collection.',
        },
        {
          id: 'q4',
          question:
            'What is a File System? Explain the structure of a file system.',
          answer:
            'A File System is the OS subsystem that organizes, stores, retrieves, and secures files on storage media.\nLayered File System Structure (Top → Bottom):\n1. Application Programs\n2. Logical File System: Manages metadata, directory structures, FCBs/inodes, and permissions.\n3. File-Organization Module: Translates logical file blocks into physical disk block addresses and manages free space.\n4. Basic File System: Issues generic commands to device drivers to read/write physical blocks.\n5. I/O Control & Hardware Devices: Device drivers and interrupt handlers communicating directly with the disk controller.',
        },
        {
          id: 'q5',
          question:
            'Explain the different disk scheduling algorithms: FCFS, SSTF, SCAN, and C-SCAN.',
          answer:
            'Disk scheduling orders pending I/O requests to minimize disk head seek time:\n1. FCFS: Services requests in arrival order. Fair, no starvation, but high head movement.\n2. SSTF (Shortest Seek Time First): Picks the request closest to current head position. Reduces seeks, but distant requests risk starvation.\n3. SCAN (Elevator): Head sweeps from one disk end to the other, servicing requests along the way, then reverses.\n4. C-SCAN (Circular SCAN): Sweeps in one direction only; upon reaching the end, jumps back to the start without servicing during return, giving uniform wait times.',
        },
        {
          id: 'q6',
          question:
            'Calculate the total head movement for a given sequence of disk requests using the SSTF algorithm.',
          answer:
            'Worked Example (Disk tracks 0–199, Initial Head = 53, Queue: 98, 183, 37, 122, 14, 124, 65, 67):\nSSTF always picks the nearest unvisited track:\n1. 53 → 65 (12)\n2. 65 → 67 (2)\n3. 67 → 37 (30)\n4. 37 → 14 (23)\n5. 14 → 98 (84)\n6. 98 → 122 (24)\n7. 122 → 124 (2)\n8. 124 → 183 (59).\nTotal Head Movement = 12 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = 236 cylinders.',
        },
        {
          id: 'q7',
          question:
            'Explain the concept of RAID. Briefly describe RAID levels 0, 1, and 5.',
          answer:
            'RAID (Redundant Array of Independent Disks) combines multiple physical drives into a logical unit to improve performance, capacity, and fault tolerance.\n1. RAID 0 (Striping): Splits data across disks without parity/mirroring. Maximum speed and 100% capacity, but zero fault tolerance.\n2. RAID 1 (Mirroring): Duplicates identical data onto paired disks. High read speed and survives 1 disk failure, at 50% storage efficiency.\n3. RAID 5 (Distributed Parity): Stripes data and parity blocks across ≥3 disks. Survives 1 drive failure with (N−1)/N capacity efficiency.',
        },
        {
          id: 'q8',
          question:
            'Differentiate between a block device and a character device.',
          answer:
            '1. Data Transfer Unit: Block devices transfer data in fixed-size blocks (e.g., 512 B or 4 KB); Character devices transfer a continuous stream of individual bytes/characters.\n2. Addressing & Seeking: Block devices are randomly addressable (support lseek() to any block); Character devices are sequential (no random seeking).\n3. Buffering: Block devices rely heavily on OS buffer/page caching; Character devices generally bypass block caches.\n4. Examples: HDD, SSD, USB Flash (Block) vs Keyboard, Mouse, Serial Port, Printer (Character).',
        },
        {
          id: 'q9',
          question: 'Explain the concept of spooling.',
          answer:
            'SPOOL (Simultaneous Peripheral Operations On-Line) uses high-speed disk storage as an intermediate buffer to queue I/O jobs between a fast CPU and slow peripheral devices.\nWorking (e.g., Printing): Instead of waiting for a slow printer, applications write print jobs to spool files on disk at CPU speed and continue working immediately. A background print spooler daemon sequentially feeds queued jobs to the printer.\nBenefits: Prevents CPU idling, enables multiple applications to share a single non-shareable device safely, and improves throughput.',
        },
        {
          id: 'q10',
          question: 'Write a short note on free space management.',
          answer:
            'The OS maintains a Free-Space List tracking unallocated disk blocks so new files can quickly claim storage.\nFour Common Techniques:\n1. Bit Vector (Bitmap): 1 bit per block (1 = free, 0 = allocated); compact and fast to find contiguous runs using CPU bit operations.\n2. Linked List: Chains all free blocks via pointers; zero extra metadata overhead, though traversing is slow.\n3. Grouping: Stores addresses of n free blocks in the first free block (last pointer points to next group).\n4. Counting: Stores (starting block, count) pairs for contiguous free clusters.',
        },
      ],
    },
  ],
};

export default osSubject;
