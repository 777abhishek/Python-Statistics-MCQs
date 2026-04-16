const CNIP_DATA = [
  {
    "id": "W0Q1",
    "question": "Which scheduler in the operating system is responsible for swapping processes from the waiting queue to and from secondary memory?",
    "options": {
      "a": "Medium Term scheduler",
      "b": "Long Term scheduler",
      "c": "Short Term scheduler",
      "d": "None of above"
    },
    "correct_answer": "a",
    "explanation": "Medium term scheduler is responsible for swapping process from waiting and ready queue to and from secondary memory."
  },
  {
    "id": "W0Q2",
    "question": "What is the function of the umask command in Linux?",
    "options": {
      "a": "To alter file ownership",
      "b": "To adjust file permissions",
      "c": "To establish default file permission mask",
      "d": "To reveal hidden files"
    },
    "correct_answer": "c",
    "explanation": "The umask command establishes the default permission mask for newly generated files and folders. It specifies the permissions that are not automatically conferred."
  },
  {
    "id": "W0Q3",
    "question": "What is the 'response time' of a process in CPU scheduling? '-' indicates the minus sign.",
    "options": {
      "a": "Initial response time - Arrival time",
      "b": "Completion time - Burst duration",
      "c": "Turnaround time - Burst duration",
      "d": "First response time - Waiting duration"
    },
    "correct_answer": "a",
    "explanation": "Response time is the duration between a process's arrival in the ready queue to its first allocation of CPU for execution. Response Time = Time of Initial Response - Arrival Time."
  },
  {
    "id": "W0Q4",
    "question": "Identify the octal expression of the file permission -rw-r-xr--.",
    "options": {
      "a": "654",
      "b": "564",
      "c": "444",
      "d": "555"
    },
    "correct_answer": "a",
    "explanation": "read(r) represented by 4, write(w) represented by 2 and execute(x) represented by 1 so, it will be 654."
  },
  {
    "id": "W0Q5",
    "question": "In Linux, which command is used to print system date and time?",
    "options": {
      "a": "datetime",
      "b": "sysdatetime",
      "c": "time",
      "d": "date"
    },
    "correct_answer": "d",
    "explanation": "date command will show system date, time and time zone."
  },
  {
    "id": "W0Q6",
    "question": "In a system with a single-level page table, the TLB access time is 20 nanoseconds, and the main memory access time is 80 nanoseconds. If the TLB hit ratio is 95%, what is the effective memory access time (EMAT) in nanoseconds?",
    "options": {
      "a": "94",
      "b": "96",
      "c": "100",
      "d": "98"
    },
    "correct_answer": "b",
    "explanation": "EMAT = Hit(TLB access time + Main Memory access time) + Miss(TLB access time + Page table access time + Main Memory access time). EMAT = 0.95(20+80) + 0.05(20+80+80) = 0.95(100) + 0.05(180) = 95 + 9 = 96 nanoseconds."
  },
  {
    "id": "W0Q7",
    "question": "What occurs if signal() is called on a semaphore without a matching wait()?",
    "options": {
      "a": "The semaphore value reaches zero.",
      "b": "The semaphore value is increased, and no error transpires.",
      "c": "The process will await the semaphore value to reach 0.",
      "d": "An error has occurred."
    },
    "correct_answer": "b",
    "explanation": "The use of signal() increases the semaphore's value, regardless of whether a matching wait() has been executed. This is legitimate, and no errors are present."
  },
  {
    "id": "W0Q8",
    "question": "Identify the full form of HTTP?",
    "options": {
      "a": "Hypertext Transfer Protocol",
      "b": "Hypertext Transfer Package",
      "c": "Hyper Transfer Text Package",
      "d": "Hyper Transfer Text Practice"
    },
    "correct_answer": "a",
    "explanation": "HTTP stands for Hypertext Transfer Protocol."
  },
  {
    "id": "W0Q9",
    "question": "What mathematical operation denotes the time complexity of Shortest Job First (SJF) scheduling for a queue of n processes?",
    "options": {
      "a": "O(n)",
      "b": "O(n log n)",
      "c": "O(n²)",
      "d": "O(1)"
    },
    "correct_answer": "b",
    "explanation": "The Shortest Job First (SJF) scheduling algorithm necessitates the arrangement of processes based on their burst durations, resulting in a temporal complexity of O(n log n)."
  },
  {
    "id": "W0Q10",
    "question": "Which of the following statements is/are true for an inverted page table in case of memory management strategies of the operating system? (i) Searching time is more than conventional page table (ii) Saves memory in RAM than conventional page table",
    "options": {
      "a": "Only (i)",
      "b": "Only (ii)",
      "c": "Both (i) and (ii)",
      "d": "Neither (i) nor (ii)"
    },
    "correct_answer": "c",
    "explanation": "Both statements are true for an inverted page table."
  },
  {
    "id": "W1Q1",
    "question": "Map the devices with their associated layer in the TCP/IP model. A. NIC  1. Physical Layer  B. Router  2. Data Link Layer  C. Bridge  3. Network Layer  D. Hub  4. Transport Layer",
    "options": {
      "a": "A-2, B-3, C-2, and D-1",
      "b": "A-3, B-3, C-2, and D-1",
      "c": "A-3, B-3, C-1, and D-2",
      "d": "A-2, B-3, C-2, and D-2"
    },
    "correct_answer": "a",
    "explanation": "Hub operates at Layer 1, while Bridge, NIC, and Switch(L2) work with MAC addresses at Layer 2. A Router works with IP addresses and operates in the network layer."
  },
  {
    "id": "W1Q2",
    "question": "Which of the following is/are true with respect to Bridge? (i) Also called 'smarter hub' (ii) It filters network traffic based on MAC address",
    "options": {
      "a": "Only (i)",
      "b": "Only (ii)",
      "c": "Both (i) and (ii)",
      "d": "Either (i) or (ii)"
    },
    "correct_answer": "c",
    "explanation": "A bridge is often called a smarter hub because it forwards and filters network traffic intelligently using MAC addresses, making both statements true."
  },
  {
    "id": "W1Q3",
    "question": "Which of the following statement(s) are concerned with encapsulation in computer networks? I. It involves an addition of a header and trailer to the actual data as it moves down in the TCP/IP protocol stack. II. At the transport layer, encapsulation includes port numbers and at the network layer, encapsulation includes IP addresses.",
    "options": {
      "a": "Only (I)",
      "b": "Only (II)",
      "c": "Both (I) and (II)",
      "d": "Neither (I) nor (II)"
    },
    "correct_answer": "c",
    "explanation": "Encapsulation is the process of addition of a header and trailer while moving down from upper layer to lower layer like adding source and destination port numbers to the application layer data, adding source and destination IP addresses to the transport layer segment etc."
  },
  {
    "id": "W1Q4",
    "question": "Which of the following is NOT a disadvantage of the circuit switching technique over the packet switching technique in computer networks?",
    "options": {
      "a": "Delay in the establishment of a dedicated connection between two hosts",
      "b": "Inefficient utilization of the resources",
      "c": "Less scalable",
      "d": "Provides a dedicated communication path between two end hosts"
    },
    "correct_answer": "d",
    "explanation": "Circuit switching techniques establish a dedicated path for communication (which is an advantage), although it remains unutilised in case of no data transmission."
  },
  {
    "id": "W1Q5",
    "question": "What is socket address?",
    "options": {
      "a": "Combination of port and IP address",
      "b": "Combination of MAC and IP address",
      "c": "IP address only",
      "d": "None of this"
    },
    "correct_answer": "a",
    "explanation": "Socket address is the combination of port and IP address. A socket is an internal terminal for transferring and receiving data/packets at a single node in a computer network."
  },
  {
    "id": "W1Q6",
    "question": "Which layer collects a stream of bits into a frame?",
    "options": {
      "a": "Physical Layer",
      "b": "Network Layer",
      "c": "Data Link Layer",
      "d": "Session Layer"
    },
    "correct_answer": "c",
    "explanation": "The Data Link Layer (Layer 2) of the OSI model is responsible for collecting a stream of bits from the physical layer and assembling them into a meaningful unit called a frame."
  },
  {
    "id": "W1Q7",
    "question": "Which transport layer protocol will be chosen by an application that does not require any reliability?",
    "options": {
      "a": "TCP",
      "b": "UDP"
    },
    "correct_answer": "b",
    "explanation": "User Datagram Protocol (UDP) is a connectionless-oriented protocol and provides no reliability."
  },
  {
    "id": "W1Q8",
    "question": "What is the First search-engine?",
    "options": {
      "a": "Chrome",
      "b": "Internet Explorer",
      "c": "HotBot",
      "d": "Archie"
    },
    "correct_answer": "d",
    "explanation": "Archie was the first search engine."
  },
  {
    "id": "W1Q9",
    "question": "Choose the statement(s) that correctly describe(s) the roles and responsibilities of the Network Interface Card (NIC) in the computer networks. I. NIC takes over the responsibility of segmenting large chunks of data into smaller packets that can be transmitted over the networks. II. It converts digital data from the computer's processor to an analog signal.",
    "options": {
      "a": "Only (I)",
      "b": "Only (II)",
      "c": "Both (I) and (II)",
      "d": "Neither (I) nor (II)"
    },
    "correct_answer": "c",
    "explanation": "The NIC's primary role at the Data Link Layer includes framing, MAC addressing, error detection, flow control, and managing access to the transmission medium. NIC can segment large data into smaller packets via TCP segmentation offload (TSO) and converts digital signals for transmission."
  },
  {
    "id": "W1Q10",
    "question": "What is the size of IP address (IPv4) in bytes?",
    "options": {
      "a": "4",
      "b": "32",
      "c": "16",
      "d": "10"
    },
    "correct_answer": "a",
    "explanation": "IP (IPv4) address is 32 bits long, that is 4 bytes."
  },
  {
    "id": "W2Q1",
    "question": "Is host.xyz.com. a fully qualified domain name?",
    "options": {
      "a": "True",
      "b": "False"
    },
    "correct_answer": "a",
    "explanation": "The given domain name ends in a 'dot'. So it is fully qualified."
  },
  {
    "id": "W2Q2",
    "question": "What makes FTP more secure than TFTP (Trivial File Transfer Protocol)?",
    "options": {
      "a": "TFTP lacks features like user authentication and secure data transfer mechanisms.",
      "b": "TFTP allows simultaneous connections without encryption.",
      "c": "TFTP uses TCP, which is inherently less secure than UDP.",
      "d": "TFTP is designed for unreliable networks, making it inherently less secure."
    },
    "correct_answer": "a",
    "explanation": "Compared to FTP, which uses TCP and has authentication mechanisms, TFTP is less dependable and safe since it lacks crucial security features like user authentication and runs on UDP."
  },
  {
    "id": "W2Q3",
    "question": "In the HTTP architecture, which of the following best describes a Uniform Resource Locator (URL)?",
    "options": {
      "a": "A secure protocol for encrypting HTTP communication.",
      "b": "A client-side scripting language for web development.",
      "c": "A unique identifier for resources, including the protocol, hostname, and path.",
      "d": "A header that allows caching of web pages for better performance."
    },
    "correct_answer": "c",
    "explanation": "A URL uniquely identifies resources on the web, specifying the protocol (e.g., HTTP or HTTPS), hostname (e.g., example.com), port (if applicable), and the path to the resource."
  },
  {
    "id": "W2Q4",
    "question": "Which of the following is the correct syntax for anchor tags in HTML?",
    "options": {
      "a": "<p>…</p>",
      "b": "<ar>…</ar>",
      "c": "<a>…</a>",
      "d": "<b>…</b>"
    },
    "correct_answer": "c",
    "explanation": "Example: <a href=http://host.xyz.com> Link </a>"
  },
  {
    "id": "W2Q5",
    "question": "Which of the following is correct for statements P, Q and R? P: HTTP uses TCP port 80 for communication. Q: TELNET transmits data in an encrypted format. R: DNS can operate on both TCP and UDP.",
    "options": {
      "a": "Both P and R is False, Only Q is True",
      "b": "Both P and R is True, Q is False",
      "c": "Only Q is True",
      "d": "Only R is False"
    },
    "correct_answer": "b",
    "explanation": "P: True - HTTP uses TCP port 80. Q: False - TELNET transmits data in plaintext (unencrypted). R: True - DNS typically runs on UDP for queries but switches to TCP for zone transfers or large responses."
  },
  {
    "id": "W2Q6",
    "question": "What is the correct syntax to be written in the command line to initiate a Telnet connection to the web server of www.iitkgp.ac.in?",
    "options": {
      "a": "telnet//www.iitkgp.ac.in",
      "b": "telnet:www.iitkgp.ac.in",
      "c": "telnet://www.iitkgp.ac.in",
      "d": "telnet www.iitkgp.ac.in"
    },
    "correct_answer": "d",
    "explanation": "The command starts with Telnet, followed by the hostname or IP address."
  },
  {
    "id": "W2Q7",
    "question": "Which of the following protocols allow non-ASCII data to be sent over email?",
    "options": {
      "a": "IMAP4",
      "b": "TELNET",
      "c": "MIME",
      "d": "POP3"
    },
    "correct_answer": "c",
    "explanation": "MIME transforms data into a format that SMTP can transmit, such as Base64 encoding for binary files, allowing non-ASCII data to be sent over email."
  },
  {
    "id": "W2Q8",
    "question": "Which of the following is true about the mail transfer protocol? S1: Can send image files with the help of IMAP4. S2: Can send image files with the help of POP3. S3: IMAP4 is more secure than POP3.",
    "options": {
      "a": "Only S1",
      "b": "Only S2",
      "c": "S2 and S3 only",
      "d": "S3 Only"
    },
    "correct_answer": "d",
    "explanation": "S1 is incorrect (SMTP needs MIME, not IMAP4, for image files). S2 is incorrect (POP3 is for retrieving, not sending, emails). S3 is correct - IMAP4 is generally more secure than POP3 because it supports encrypted communication and better mailbox management."
  },
  {
    "id": "W2Q9",
    "question": "Which of the following is/are not an Application Layer protocol(s)?",
    "options": {
      "a": "HTTP",
      "b": "SFTP",
      "c": "UDP",
      "d": "SNMP"
    },
    "correct_answer": "c",
    "explanation": "UDP is a Transport Layer protocol."
  },
  {
    "id": "W2Q10",
    "question": "What is the command used by DNS to translate a fully qualified domain name into its corresponding IP address?",
    "options": {
      "a": "iplookup",
      "b": "nssearch",
      "c": "ipconfig",
      "d": "nslookup"
    },
    "correct_answer": "d",
    "explanation": "nslookup translates fully qualified domain names to corresponding IP addresses."
  },
  {
    "id": "W3Q1",
    "question": "Flow control is mainly implemented in",
    "options": {
      "a": "Physical Layer",
      "b": "Application Layer",
      "c": "Transport Layer",
      "d": "Session Layer"
    },
    "correct_answer": "c",
    "explanation": "Flow control is mainly a function of the Transport Layer."
  },
  {
    "id": "W3Q2",
    "question": "What kind of sequence number does TCP use?",
    "options": {
      "a": "byte-oriented sequence number",
      "b": "packet-oriented sequence number",
      "c": "Randomly generated fixed sequence numbers",
      "d": "none of them"
    },
    "correct_answer": "a",
    "explanation": "TCP uses byte-oriented sequence numbering to ensure reliable, ordered, and efficient data transmission over a network."
  },
  {
    "id": "W3Q3",
    "question": "Which of the following services is NOT supported by the transport layer?",
    "options": {
      "a": "End-to-end packet delivery",
      "b": "Ordered packet delivery",
      "c": "Reliable data delivery",
      "d": "Forwarding the datagram from one hop to another hop in the network"
    },
    "correct_answer": "d",
    "explanation": "The transport layer provides services like End-to-end packet delivery, Ordered packet delivery, Reliable data delivery, Connection establishment, and Flow & Congestion control. The hop-to-hop network packet forwarding is supported by data link layer and network layer."
  },
  {
    "id": "W3Q4",
    "question": "Transport layer is implemented in the Firmware of a computer system.",
    "options": {
      "a": "True",
      "b": "False"
    },
    "correct_answer": "b",
    "explanation": "Transport layer is implemented in the kernel."
  },
  {
    "id": "W3Q5",
    "question": "A data of 40 bytes need to be delivered using TCP protocol but a sender can send a segment of maximum size 12 bytes only. Identify the sequence number of the last segment formed if the sequence number field uses 5 bits only? [Assume sequence number starts from 0]",
    "options": {
      "a": "1",
      "b": "4",
      "c": "12",
      "d": "31"
    },
    "correct_answer": "b",
    "explanation": "With 5 bits, sequence numbers range from 0 to 31. Segment 1 (12 bytes): seq 0-11. Segment 2 (12 bytes): seq 12-23. Segment 3 (12 bytes): seq 24-31 & 0-3 (wraps). Segment 4 (4 bytes): seq 4-7. The last segment starts at sequence number 4."
  },
  {
    "id": "W3Q6",
    "question": "Timestamping a network packet is necessary for (i) Enabling time synchronization across router in network layer (ii) For defining packet lifetime.",
    "options": {
      "a": "Only (i)",
      "b": "Only (ii)",
      "c": "Both (i) and (ii)",
      "d": "None of above"
    },
    "correct_answer": "c",
    "explanation": "Timestamping is required for both defining packet lifetime and ensuring time synchronization across router in network layer."
  },
  {
    "id": "W3Q7",
    "question": "Determine whether the following information is True or False? 'During the three-way handshaking of connection establishment procedure (from Host 1 to Host 2), Delayed duplicate SYN can be handled by TCP at Host 2 simply by ignoring it, as the sequence number is invalid'",
    "options": {
      "a": "True",
      "b": "False"
    },
    "correct_answer": "a",
    "explanation": "A delayed duplicate SYN will have an outdated sequence number that doesn't match the current connection state at Host 2 and can be ignored as an invalid sequence number."
  },
  {
    "id": "W3Q8",
    "question": "TCP instance uses a sliding window protocol in the noisy channel. A timeout occurs due to the loss of a segment (or the acknowledgement). Mark the RIGHT statement among the following.",
    "options": {
      "a": "In Go-Back-N ARQ, if any segment is lost, all segments of the sliding window are retransmitted; in Selective Repeat ARQ, only the lost packets are selectively transmitted.",
      "b": "In Go-Back-N ARQ, if any segment is lost, only the lost packets are selectively retransmitted; in Selective Repeat ARQ, all packets are retransmitted.",
      "c": "In both Go-Back-N ARQ and Selective Repeat ARQ, all packets of the sliding window are retransmitted.",
      "d": "In both Go-Back-N ARQ and Selective Repeat ARQ, only lost packets of the sliding window are selectively retransmitted."
    },
    "correct_answer": "a",
    "explanation": "In Go-Back-N ARQ, if any segment of the sliding window is lost, all segments of the corresponding sliding window are retransmitted, while in Selective Repeat ARQ, only the lost packets are selectively transmitted."
  },
  {
    "id": "W3Q9",
    "question": "What is known as outstanding frames?",
    "options": {
      "a": "Frames that are yet to be transmitted",
      "b": "Frames that have been transmitted, but not yet acknowledged",
      "c": "Acknowledged frames",
      "d": "None of the above"
    },
    "correct_answer": "b",
    "explanation": "Frames that have been transmitted, but not yet acknowledged are known as outstanding frames."
  },
  {
    "id": "W3Q10",
    "question": "A client and a server establish a connection using TCP's three-way handshake. Initial sequence number of the client: 100, server: 300. RTT: 80ms. Each TCP segment carries 40 bytes of header. The ACK segment from the client is delayed due to congestion, taking 100ms. How much time does it take to establish the connection?",
    "options": {
      "a": "100ms",
      "b": "280ms",
      "c": "180ms",
      "d": "260ms"
    },
    "correct_answer": "c",
    "explanation": "RTT = 80ms so one-way transmission = 40ms. Total = SYN (40ms) + SYN+ACK (40ms) + ACK (100ms, delayed) = 180ms."
  },
  {
    "id": "W4Q1",
    "question": "Let the maximum TCP payload be given 1450 Bytes; then what is the maximum network layer payload in Bytes?",
    "options": {
      "a": "1450 Bytes",
      "b": "1470 Bytes",
      "c": "1430 Bytes",
      "d": "1480 Bytes"
    },
    "correct_answer": "b",
    "explanation": "The TCP header size is 20 Bytes. So, the maximum network layer payload is (Max TCP payload + TCP header size) = 1450 + 20 = 1470 Bytes."
  },
  {
    "id": "W4Q2",
    "question": "In a distributed system, a server advertises a receiver window of 0 due to lack of buffer space. However, the application frees up space, but the updated acknowledgment is lost. What should the client do to prevent deadlock?",
    "options": {
      "a": "Wait indefinitely until the server sends a new acknowledgment.",
      "b": "Resend data packets at periodic intervals to elicit a response.",
      "c": "Use a keep-alive mechanism to periodically check the buffer status.",
      "d": "Close the connection and restart communication."
    },
    "correct_answer": "c",
    "explanation": "A keep-alive mechanism allows the client to periodically probe the server for updated buffer availability without retransmitting data, preventing deadlock."
  },
  {
    "id": "W4Q3",
    "question": "Which of the following statement(s) is/are true for the Transport Layer? (i) The transport layer protocol should be Stateful. (ii) Uses FTP protocols for ensuring flow control.",
    "options": {
      "a": "Only (i)",
      "b": "Only (ii)",
      "c": "Both (i) and (ii)",
      "d": "None of the above"
    },
    "correct_answer": "a",
    "explanation": "The transport layer needs to remember the state of the pipe so that appropriate actions can be taken. We need a stateful protocol for the transport layer. ARQ protocols (not FTP) are used to ensure flow control."
  },
  {
    "id": "W4Q4",
    "question": "A TCP connection is experiencing high delays and packet reordering. Which features of TCP help maintain reliable and ordered communication in this scenario? (i) Sequence numbers in the TCP header. (ii) Acknowledgment numbers indicating the next expected byte. (iii) The urgent pointer to prioritize packets. (iv) Sliding window flow control.",
    "options": {
      "a": "(i), (iii), (iv)",
      "b": "(i), (ii), (iii)",
      "c": "(ii), (iii), (iv)",
      "d": "(i), (ii), (iv)"
    },
    "correct_answer": "d",
    "explanation": "Sequence and acknowledgment numbers allow TCP to reorder out-of-order packets and ensure reliable delivery. Sliding window flow control ensures efficient data transfer despite delays. The urgent pointer is unrelated to packet reordering or delays."
  },
  {
    "id": "W4Q5",
    "question": "In the TCP connection release process, why does the active closer enter the TIME-WAIT state after receiving the final acknowledgment?",
    "options": {
      "a": "To confirm that the other host has received the FIN message.",
      "b": "To allow the passive closer to resend data if needed.",
      "c": "To ensure that any delayed packets in the network are discarded.",
      "d": "To avoid reusing the same port for a new connection."
    },
    "correct_answer": "c",
    "explanation": "The TIME-WAIT state ensures that all delayed packets in the network from the just-closed connection are discarded. This prevents any potential interference with subsequent connections that might reuse the same port and sequence numbers."
  },
  {
    "id": "W4Q6",
    "question": "Consider a network with a link bandwidth of 1 Mbps, a delay of 1ms, and a segment size of 1 KB (1024 bytes). Which of the following relationships is between BDP and segment size?",
    "options": {
      "a": "BDP = 8 x (segment size)",
      "b": "BDP/4 = segment size",
      "c": "BDP/8 = segment size",
      "d": "BDP x 8 = segment size"
    },
    "correct_answer": "d",
    "explanation": "BDP = 1 Mbps x 1 ms = 1 Kb; segment size = 1 KB = 8 x 1 Kb = 8 x BDP. Therefore BDP x 8 = segment size."
  },
  {
    "id": "W4Q7",
    "question": "The use of a cryptographic function to generate sequence numbers for TCP connection is helpful to avoid",
    "options": {
      "a": "TCP Congestion Overflow",
      "b": "DoS attack",
      "c": "TCP SYN flood attack",
      "d": "None of these"
    },
    "correct_answer": "c",
    "explanation": "TCP SYN flood attacks can be prevented by generating sequence numbers using cryptographic functions."
  },
  {
    "id": "W4Q8",
    "question": "A transport-layer protocol using AIMD starts with an initial sending rate of 1 Mbps. After four successful additive increases (each adding 0.5 Mbps), it detects packet loss. If the multiplicative decrease factor is 0.5, what will be the new sending rate?",
    "options": {
      "a": "2.5 Mbps",
      "b": "1 Mbps",
      "c": "3 Mbps",
      "d": "1.5 Mbps"
    },
    "correct_answer": "d",
    "explanation": "Initial rate: 1 Mbps. Four additive increases: 1 + 4×0.5 = 3 Mbps. Multiplicative decrease: 3 × 0.5 = 1.5 Mbps."
  },
  {
    "id": "W4Q9",
    "question": "Which of the following conditions does not influence the segment size in TCP?",
    "options": {
      "a": "Maximum Transmission Unit (MTU) of the underlying link.",
      "b": "Receiver's advertised window size.",
      "c": "Network congestion window size.",
      "d": "Header length of the IP protocol."
    },
    "correct_answer": "d",
    "explanation": "The Header Length of the IP Protocol does not directly affect the TCP segment size. Instead, it impacts the total size of the network packet but is unrelated to the TCP segmentation process."
  },
  {
    "id": "W4Q10",
    "question": "In the case of a simultaneous TCP open (both hosts initiate a connection at the same time), which of the following are true? (i) Both hosts will transition to the SYN-RECEIVED state after exchanging SYN messages. (ii) The three-way handshake completes with the exchange of SYN+ACK messages. (iii) Both hosts will immediately move to the ESTABLISHED state after receiving SYN messages. (iv) Simultaneous open is less secure due to lack of proper sequence number synchronization.",
    "options": {
      "a": "(i) and (ii)",
      "b": "(iii) and (iv)",
      "c": "All are True",
      "d": "All are False"
    },
    "correct_answer": "a",
    "explanation": "In a simultaneous open, both hosts send SYN packets and transition to the SYN-RECEIVED state. The handshake proceeds as normal ensuring proper synchronization. Security is not compromised because sequence numbers are negotiated during the handshake."
  },
  {
    "id": "W5Q1",
    "question": "Sender Window in TCP can be given as:",
    "options": {
      "a": "Sender Window = max(Congestion Window, Receiver Window)",
      "b": "Sender Window = Congestion Window",
      "c": "Sender Window = Receiver Window",
      "d": "Sender Window = min(Congestion Window, Receiver Window)"
    },
    "correct_answer": "d",
    "explanation": "The Sender Window is computed as the minimum of the Congestion Window and the Receiver Window."
  },
  {
    "id": "W5Q2",
    "question": "What is the advantage of an iterative server over a concurrent server?",
    "options": {
      "a": "It handles multiple requests faster.",
      "b": "It is easier to implement and debug.",
      "c": "It supports asynchronous I/O.",
      "d": "It has lower response times for high-traffic scenarios."
    },
    "correct_answer": "b",
    "explanation": "An iterative server is simpler to implement and debug due to its sequential nature, making it easier to manage than concurrent server models."
  },
  {
    "id": "W5Q3",
    "question": "Which of the following uses UDP?",
    "options": {
      "a": "DNS",
      "b": "POP",
      "c": "HTTP",
      "d": "FTP"
    },
    "correct_answer": "a",
    "explanation": "DNS primarily uses UDP on port 53 for speed and efficiency. DNS queries are generally small and fit within a single packet, so UDP avoids the overhead of establishing a connection, allowing for rapid, low-latency lookups."
  },
  {
    "id": "W5Q4",
    "question": "What impact does a higher α value have on Jacobson's algorithm?",
    "options": {
      "a": "It makes SRTT more sensitive to sudden RTT changes.",
      "b": "It reduces the impact of new RTT measurements on SRTT.",
      "c": "It increases the weight of RTTVAR in the RTO calculation.",
      "d": "It eliminates the need for RTTVAR."
    },
    "correct_answer": "b",
    "explanation": "In Jacobson's algorithm, α controls the smoothing of SRTT. A higher α places more emphasis on historical RTT values, reducing the influence of new RTT measurements. This leads to slower adaptation to sudden RTT changes, providing more stability but less responsiveness."
  },
  {
    "id": "W5Q5",
    "question": "FD_ZERO is used for",
    "options": {
      "a": "tests to see if a file descriptor is part of the set",
      "b": "Initializes the file descriptor set FD_SET – a bitmap of fixed size",
      "c": "Set a file descriptor as a part of an fd_set",
      "d": "None of the above"
    },
    "correct_answer": "b",
    "explanation": "FD_ZERO initializes an fd_set by clearing all bits, so the set starts empty. It prepares the descriptor set before adding any file descriptors with FD_SET."
  },
  {
    "id": "W5Q6",
    "question": "SOCK_DGRAM represents",
    "options": {
      "a": "UDP-based Datagram Socket",
      "b": "TCP-based Stream Socket",
      "c": "QUIC-based Stream Socket",
      "d": "None of the above"
    },
    "correct_answer": "a",
    "explanation": "SOCK_DGRAM represents a UDP-based Datagram Socket."
  },
  {
    "id": "W5Q7",
    "question": "select() system call returns one when?",
    "options": {
      "a": "Exactly one monitored file descriptor becomes ready for read/write or reports an error condition.",
      "b": "This means the call timed out without any event ready for the sockets monitored.",
      "c": "Zero is the number of sockets that have events pending (read, write, exception).",
      "d": "OS kills the process."
    },
    "correct_answer": "a",
    "explanation": "select() returns 1 when exactly one file descriptor is ready for I/O or has an exceptional (error) condition. It counts that FD as 'ready,' so the return value becomes 1."
  },
  {
    "id": "W5Q8",
    "question": "What does the listen() function do in socket programming?",
    "options": {
      "a": "It binds a socket to an address.",
      "b": "It puts the socket into a passive mode to wait for incoming connections.",
      "c": "It actively connects to a server socket.",
      "d": "It sends data over the socket."
    },
    "correct_answer": "b",
    "explanation": "The listen() function sets up a socket to accept incoming connections by placing it in passive listening mode."
  },
  {
    "id": "W5Q9",
    "question": "Which of the following is false?",
    "options": {
      "a": "TCP uses congestion control",
      "b": "TCP uses both flow control and congestion control",
      "c": "TCP uses flow control",
      "d": "TCP doesn't have any flow control, congestion control"
    },
    "correct_answer": "d",
    "explanation": "TCP has both flow control and congestion control. So option (d) is false."
  },
  {
    "id": "W5Q10",
    "question": "Which function can be used to configure socket options like timeout or buffer size?",
    "options": {
      "a": "setsockopt()",
      "b": "sockopt()",
      "c": "configure()",
      "d": "options()"
    },
    "correct_answer": "a",
    "explanation": "The setsockopt() function is used to configure various socket options, such as timeout values, buffer sizes, and other protocol-specific settings."
  },
  {
    "id": "W6Q1",
    "question": "In communication over an ISP, which of the following is responsible for determining the best path for packet delivery?",
    "options": {
      "a": "Transport Layer",
      "b": "Network Layer",
      "c": "Data Link Layer",
      "d": "Application Layer"
    },
    "correct_answer": "b",
    "explanation": "The network layer, using routing protocols and IP, determines the best path for packet delivery."
  },
  {
    "id": "W6Q2",
    "question": "You need 500 subnets, each with about 100 usable host addresses per subnet. What network mask will you assign using a class B network address?",
    "options": {
      "a": "255.255.255.252",
      "b": "255.255.255.128",
      "c": "255.255.255.0",
      "d": "255.255.254.0"
    },
    "correct_answer": "b",
    "explanation": "Class B default netmask is 255.255.0.0. To have 500 subnets, nine more bits are required. The netmask will be 255.255.255.128 (11111111 11111111 11111111 10000000). Each subnet has 7 bits for the host part, sufficient for 100 hosts."
  },
  {
    "id": "W6Q3",
    "question": "What type of address is '0.0.0.0' in IPv4?",
    "options": {
      "a": "Loopback address",
      "b": "Default route address",
      "c": "Broadcast address",
      "d": "Unspecified address"
    },
    "correct_answer": "d",
    "explanation": "'0.0.0.0' is used to indicate an unspecified address, often during the bootstrapping process."
  },
  {
    "id": "W6Q4",
    "question": "What is the primary function of the network layer in the TCP/IP model?",
    "options": {
      "a": "Establish end-to-end connections between nodes.",
      "b": "Ensure reliable data transfer between devices.",
      "c": "Handle logical addressing and routing of data.",
      "d": "Encrypt and decrypt data for secure transmission."
    },
    "correct_answer": "c",
    "explanation": "The network layer is responsible for logical addressing (e.g., IP addresses) and routing data packets across networks."
  },
  {
    "id": "W6Q5",
    "question": "When communicating between two nodes, what role does the transport layer protocol play?",
    "options": {
      "a": "Routing the data packets.",
      "b": "Providing logical addressing to the communicating devices.",
      "c": "Ensuring reliable or fast data delivery based on protocol choice.",
      "d": "Forwarding the data to the next hop through the LAN."
    },
    "correct_answer": "c",
    "explanation": "Transport layer protocols like TCP ensure reliable delivery, while UDP provides faster but less reliable delivery."
  },
  {
    "id": "W6Q6",
    "question": "Which of the following is/are not a valid IPv6 address?",
    "options": {
      "a": "AE82::1:800:23E7:F5DB",
      "b": "FC80:2:7:1:800:23E7:A:F5DB",
      "c": "DE62:6A42:1:5AC::800:23E7:F5DB",
      "d": "FE80:2030:31:24"
    },
    "correct_answer": "d",
    "explanation": "Option (d) is invalid because an IPv6 address must have 8 groups, but FE80:2030:31:24 has only 4 groups, making it incomplete. Option (a) is valid because the :: compresses consecutive zero groups."
  },
  {
    "id": "W6Q7",
    "question": "What is the maximum number of hosts under class B addresses?",
    "options": {
      "a": "254",
      "b": "65534",
      "c": "65535",
      "d": "65536"
    },
    "correct_answer": "b",
    "explanation": "In a Class B IP address, the host portion has 16 bits, giving 2^16 = 65,536 combinations. Subtracting 2 reserved addresses (network and broadcast), the maximum number of hosts is 65,534."
  },
  {
    "id": "W6Q8",
    "question": "The header length of the IPv6 datagram is",
    "options": {
      "a": "10 bytes",
      "b": "20 bytes",
      "c": "30 bytes",
      "d": "40 bytes"
    },
    "correct_answer": "d",
    "explanation": "IPv6 has a fixed 40 bytes header length."
  },
  {
    "id": "W6Q9",
    "question": "What is the CIDR notation for a supernet that aggregates 192.168.0.0/24 and 192.168.1.0/24?",
    "options": {
      "a": "/23",
      "b": "/24",
      "c": "/25",
      "d": "/22"
    },
    "correct_answer": "a",
    "explanation": "The supernet 192.168.0.0/23 includes both 192.168.0.0/24 and 192.168.1.0/24."
  },
  {
    "id": "W6Q10",
    "question": "How does a Layer 3 switch differ from a Layer 2 switch?",
    "options": {
      "a": "It uses MAC addresses for packet forwarding.",
      "b": "It performs routing based on IP addresses.",
      "c": "It cannot be used in VLAN environments.",
      "d": "It only operates in the physical layer."
    },
    "correct_answer": "b",
    "explanation": "A Layer 3 switch performs routing using IP addresses, unlike a Layer 2 switch that relies on MAC addresses for forwarding."
  },
  {
    "id": "W7Q1",
    "question": "What is the transmission delay for pushing a packet of size 1MB through a network with a bandwidth 16Mbps?",
    "options": {
      "a": "2 seconds",
      "b": "0.5 seconds",
      "c": "1 second",
      "d": "10 second"
    },
    "correct_answer": "b",
    "explanation": "Since network bandwidth is 16Mbps so for sending 8Mb of data through the network it will take 0.5 seconds."
  },
  {
    "id": "W7Q2",
    "question": "File transfer applications require non–real-time variable bit rate (NRT-VBR). Is this statement true or false?",
    "options": {
      "a": "True",
      "b": "False"
    },
    "correct_answer": "b",
    "explanation": "File transfer is an available bit-rate (best-effort) application."
  },
  {
    "id": "W7Q3",
    "question": "The primary goal of QoS is",
    "options": {
      "a": "Degrade loss characteristics.",
      "b": "Control jitter",
      "c": "Increase communication latency",
      "d": "Reduce network security mechanisms"
    },
    "correct_answer": "b",
    "explanation": "The primary goal of QoS is to control jitter, improve loss characteristics and decrease communication latency."
  },
  {
    "id": "W7Q4",
    "question": "Which of the following statements is TRUE?",
    "options": {
      "a": "TCP is Inelastic Traffic and therefore not preferred for real-time video streaming.",
      "b": "TCP is Elastic Traffic and therefore preferred for real-time video streaming.",
      "c": "UDP is Elastic Traffic and therefore preferred for real-time video streaming.",
      "d": "UDP is Inelastic Traffic and therefore preferred for real-time video streaming."
    },
    "correct_answer": "d"
  },
  {
    "id": "W7Q5",
    "question": "Based on QoS requirements, video conferencing comes under which class of application?",
    "options": {
      "a": "Constant bit rate",
      "b": "Real-time variable bit rate",
      "c": "Non-real-time variable bitrate",
      "d": "Available bit rate or best-effort"
    },
    "correct_answer": "b"
  },
  {
    "id": "W7Q6",
    "question": "Which of the following is not a benefit of traffic shaping?",
    "options": {
      "a": "Reducing network congestion",
      "b": "Controlling the rate of traffic flow",
      "c": "Improving network efficiency",
      "d": "Prioritizing certain types of traffic"
    },
    "correct_answer": "d",
    "explanation": "Buffering packets to smooth out bursts of traffic is an example of a traffic shaping technique. It helps to ensure that the network does not become congested with sudden spikes in traffic."
  },
  {
    "id": "W7Q7",
    "question": "Which of the following is an example of a traffic scheduling algorithm?",
    "options": {
      "a": "Weighted Fair Queuing (WFQ)",
      "b": "Leaky Bucket",
      "c": "Token Bucket",
      "d": "Random Early Detection (RED)"
    },
    "correct_answer": "a",
    "explanation": "Weighted Fair Queuing (WFQ) is an example of a traffic scheduling algorithm. It assigns weights to different types of traffic to ensure that they are delivered fairly based on their importance."
  },
  {
    "id": "W7Q8",
    "question": "Consider the token bucket algorithm, with token arrival rate = packet arrival rate = r per second. Bucket size is b. What is the maximum burst size (MBS) and the output rate?",
    "options": {
      "a": "rb and r+b",
      "b": "No burst and rb",
      "c": "No burst and r",
      "d": "r + b and rb"
    },
    "correct_answer": "c",
    "explanation": "Since the rate of token arrival is the same as the rate of packet arrival, the bucket will always have enough token to send the packets at the same rate they arrive. Therefore there will not be any burst."
  },
  {
    "id": "W7Q9",
    "question": "Which of the following statements about Resource Reservation Protocol (RSVP) is FALSE?",
    "options": {
      "a": "RSVP is difficult to implement on the internet because it requires coordination among intermediate routers.",
      "b": "All the RSVP daemons in all the intermediate routers in an end-to-end path need to coordinate with each other.",
      "c": "RSVP uses differentiated services fields in the IP header for traffic classification.",
      "d": "RSVP is a protocol of the Integrated Service (IntServ) QoS architecture."
    },
    "correct_answer": "c"
  },
  {
    "id": "W7Q10",
    "question": "In a network with a maximum queue size of 100 packets and a minimum threshold of 40 packets, what is the drop probability when the current queue size is 70 packets and the maximum threshold is set to 90 packets using the RED algorithm?",
    "options": {
      "a": "20%",
      "b": "40%",
      "c": "60%",
      "d": "80%"
    },
    "correct_answer": "a",
    "explanation": "The RED algorithm calculates the drop probability based on the current queue size and the thresholds set for the queue. In this case, the minimum threshold is 40 packets and the maximum threshold is 90 packets, so the range is 50 packets. When the current queue size is 70 packets, the midpoint of the range is 65 packets [(40 + 90) / 2]. The drop probability is calculated as a function of the distance from the midpoint, using a curve that starts at 0% when the queue is at the minimum threshold and reaches 100% when the queue is at the maximum threshold. At a distance of 5 packets from the midpoint, the drop probability is typically around 20%, so the answer is A."
  },
  {
    "id": "W8Q1",
    "question": "Which is NOT one of the LLC services?",
    "options": {
      "a": "Connection mode service",
      "b": "Acknowledged connectionless service",
      "c": "Intermediate switching service",
      "d": "Unacknowledged connectionless service"
    },
    "correct_answer": "c",
    "explanation": "LLC layer provides three services: connection mode service, acknowledged connectionless service, and unacknowledged connectionless service. Intermediate switching service is not defined as an LLC service."
  },
  {
    "id": "W8Q2",
    "question": "IEEE 802.1 is concerned with which issue in LANs and MANs?",
    "options": {
      "a": "Error handling",
      "b": "Networking",
      "c": "Internetworking",
      "d": "Flow control"
    },
    "correct_answer": "c",
    "explanation": "IEEE 802.1 deals with internetworking issues in LANs and MANs, such as bridging, VLANs, and network management."
  },
  {
    "id": "W8Q3",
    "question": "Which sublayer of the data link layer performs data link functions that depend upon the type of medium?",
    "options": {
      "a": "Logical link control sublayer",
      "b": "Media access control sublayer",
      "c": "Network interface control sublayer",
      "d": "Error control sublayer"
    },
    "correct_answer": "b",
    "explanation": "The MAC sublayer of the data link layer handles functions that depend on the physical transmission medium, such as frame addressing and controlling access to the shared medium like CSMA/CD."
  },
  {
    "id": "W8Q4",
    "question": "In 10Base-T and 100Base-T Ethernet technology, what does the letter “T” represent?",
    "options": {
      "a": "Transmission",
      "b": "Twisted Pair",
      "c": "Total utilization",
      "d": "Top Speed"
    },
    "correct_answer": "b",
    "explanation": "In 10Base-T and 100Base-T Ethernet, the “T” stands for Twisted Pair, meaning the network uses twisted-pair copper cables for data transmission."
  },
  {
    "id": "W8Q5",
    "question": "In Go-Back-N ARQ, if the window size is 63, what is the range of sequence numbers?",
    "options": {
      "a": "1 to 63",
      "b": "1 to 64",
      "c": "0 to 63",
      "d": "0 to 64"
    },
    "correct_answer": "c",
    "explanation": "In Go-Back-N ARQ, if the window size is 2^m -1, the sequence numbers range from 0 to 2^m - 1. For window size 63, the sequence numbers are 0 to 63."
  },
  {
    "id": "W8Q6",
    "question": "When 2 or more bits in a data unit have been changed during the transmission, the error is called ____________.",
    "options": {
      "a": "Random error",
      "b": "Burst error",
      "c": "Inverted error",
      "d": "Double error"
    },
    "correct_answer": "b",
    "explanation": "When a single bit error occurs in a data, it is called single bit error. When more than a single bit of data is corrupted or has an error, it is called burst error."
  },
  {
    "id": "W8Q7",
    "question": "Which of the following are correct about Asynchronous MAC techniques? I. Reservation method is suited for streaming voice traffic. II. Contention method is suitable for continuous traffic.",
    "options": {
      "a": "Only I",
      "b": "Only II",
      "c": "Both I and II",
      "d": "Neither I nor II"
    },
    "correct_answer": "a",
    "explanation": "The reservation method works well for continuous or real time traffic, while contention methods are better suited for bursty traffic, not continuous traffic."
  },
  {
    "id": "W8Q8",
    "question": "A pure ALOHA network transmits 200 bit frames on a shared channel with a data rate of 200 kbps. If the system (all stations together) generates 250 frames per second, what is the throughput of the network (in frames per second)?",
    "options": {
      "a": "38 frames",
      "b": "48 frames",
      "c": "96 frames",
      "d": "126 frames"
    },
    "correct_answer": "a",
    "explanation": "If the system creates 250 frames per second, or 1/4 frames per millisecond, then G = 1⁄4. S = [G × e^(-2G)] = 0.152 ; Throughput = 250 × 0.152 = 38. Only 38 frames out of 250 will survive."
  },
  {
    "id": "W8Q9",
    "question": "Which of the following is/are true? I. In full-duplex switched Ethernet, there is no need for the CSMA/CD method. II. Ethernet is best utilized when the load is heavy. III. Slotted ALOHA has lower maximum utilization compared to pure ALOHA. IV. Random backoff in CSMA/CD reduces the probability that stations retransmit at the same time after a collision.",
    "options": {
      "a": "I and IV",
      "b": "I and III",
      "c": "II and III",
      "d": "II and IV"
    },
    "correct_answer": "a",
    "explanation": "In full-duplex switched Ethernet, collisions do not occur, so CSMA/CD is not needed, making statement I true. Ethernet works best under light load, so II is false. Slotted ALOHA(≈36.8%) has higher utilization than pure ALOHA(≈18.4%), so III is false. Random backoff in CSMA/CD prevents repeated collisions, making IV true."
  },
  {
    "id": "W8Q10",
    "question": "A network using CSMA/CD has a bandwidth of 10 Mbps. If the maximum propagation delay is 25.6 μs, what is the minimum frame size required to detect collisions?",
    "options": {
      "a": "128 bytes",
      "b": "32 bytes",
      "c": "16 bytes",
      "d": "64 bytes"
    },
    "correct_answer": "d",
    "explanation": "In CSMA/CD, the frame transmission time must be at least 2 × propagation delay = 51.2 μs. At 10 Mbps, the minimum frame size = 51.2 μs × 10 Mbps = 512 bits. This corresponds to 512 bits = 64 bytes."
  },
  {
    "id": "W9Q1",
    "question": "Which component of SDN is responsible for communicating with the controller?",
    "options": {
      "a": "Data plane",
      "b": "Control plane",
      "c": "Management plane",
      "d": "Forwarding plane"
    },
    "correct_answer": "b",
    "explanation": "The control plane is responsible for communicating with the controller and managing the flow of network traffic"
  },
  {
    "id": "W9Q2",
    "question": "A subset of a network that includes all the routers but contains no loops is called ________",
    "options": {
      "a": "Spanning tree",
      "b": "Spider structure",
      "c": "Spider tree",
      "d": "Special tree"
    },
    "correct_answer": "a",
    "explanation": "A spanning tree is a subset of a network that connects all nodes while eliminating loops. In Ethernet networks, Spanning Tree Protocol (STP) creates a loop free logical topology among switches/bridges."
  },
  {
    "id": "W9Q3",
    "question": "Which classes are used for connection-less socket programming?",
    "options": {
      "a": "Datagram Socket",
      "b": "Datagram Packet",
      "c": "Both Datagram Socket & Datagram Packet",
      "d": "Server Socket"
    },
    "correct_answer": "c",
    "explanation": "Datagram is basically some information travelling between the sender and the receiver, but there is no guarantee of its content, arrival or arrival time. Datagram Socket, Datagram Packet are used for connection-less socket programming, while Server Socket is used for connection-oriented socket programming."
  },
  {
    "id": "W9Q4",
    "question": "Which of the following is NOT a function of a router?",
    "options": {
      "a": "Path determination",
      "b": "Packet forwarding",
      "c": "Packet filtering",
      "d": "Packet retransmission"
    },
    "correct_answer": "d",
    "explanation": "Packet retransmission is a function of the transport layer, specifically the TCP protocol. Routers do not perform packet retransmission, but rather forward packets to their destination based on the routing table and other factors."
  },
  {
    "id": "W9Q5",
    "question": "What is the role of the OpenFlow protocol in SDN?",
    "options": {
      "a": "To enable communication between the control plane and data plane",
      "b": "To provide encryption for network traffic",
      "c": "To monitor network performance and traffic",
      "d": "To manage network security"
    },
    "correct_answer": "a",
    "explanation": "The OpenFlow protocol is used to enable communication between the control plane and data plane in an SDN environment."
  },
  {
    "id": "W9Q6",
    "question": "Which type of Ethernet framing is used for TCP/IP and DEC net?",
    "options": {
      "a": "Ethernet 802.3",
      "b": "Ethernet 802.2",
      "c": "Ethernet II",
      "d": "Ethernet SNAP"
    },
    "correct_answer": "c",
    "explanation": "The Ethernet 802.3 framing is used for NetWare versions 2 to 3.11, and the Ethernet 802.2 framing is used for NetWare versions 3.12 and later plus OSI routing, Ethernet II is used with TCP/IP and DEC net, and Ethernet SNAP is used with TCP/IP and AppleTalk. The type field in Ethernet 802.2 frame is replaced by a length field in Ethernet 802.3."
  },
  {
    "id": "W9Q7",
    "question": "Which of the following is not true regarding Forward Information Base(FIB)?",
    "options": {
      "a": "The FIB mirrors the Routing Information Base(RIB)",
      "b": "Responsible for merging the data plane and control plane together",
      "c": "Routing decisions are taken from FIB and not RIB",
      "d": "It is stored in TCAM Hardware"
    },
    "correct_answer": "b",
    "explanation": "The presence of FIB allows the Data plane and Control Plane to be separated thus allowing them to run independently."
  },
  {
    "id": "W9Q8",
    "question": "What is the role of the northbound interface in SDN?",
    "options": {
      "a": "To manage and configure network devices",
      "b": "To enable communication between the controller and applications",
      "c": "To monitor network performance and traffic",
      "d": "To provide network services to end users"
    },
    "correct_answer": "b",
    "explanation": "The northbound interface is used to enable communication between the controller and applications in an SDN environment. It provides a standardized interface that allows applications to request network services and receive information about the network state."
  },
  {
    "id": "W9Q9",
    "question": "A network 192.168.10.0/24 needs at least 12 subnets. Which subnet mask should be used?",
    "options": {
      "a": "255.255.255.224",
      "b": "255.255.255.240",
      "c": "255.255.255.192",
      "d": "255.255.255.248"
    },
    "correct_answer": "b",
    "explanation": "2^4=16 subnets - borrow 4 bits, new prefix = /28, i.e, 255.255.255.240"
  },
  {
    "id": "W9Q10",
    "question": "Which of the following statements are true regarding the command : ip route 172.16.4.0 255.255.255.0 192.168.4.2 ? I. The command is used to establish a static route. II. The default administrative distance is used. III. The command is used to configure the default route. IV. The subnet mask for the source address is 255.255.255.0.",
    "options": {
      "a": "I and II",
      "b": "II and IV",
      "c": "III and IV",
      "d": "I, II, III and IV"
    },
    "correct_answer": "a",
    "explanation": "Although answer d almost seems right, it is not; the mask is the mask used on the remote network, not the source network. Since there is no number at the end of the static route, it is using the default administrative distance of 1"
  },
  {
    "id": "W10Q1",
    "question": "How does the router decide the destination if multiple entries in routing tables match the destination address?",
    "options": {
      "a": "It picks the first one",
      "b": "It picks the destination with the longest prefix matching",
      "c": "It picks the destination with the shortest prefix matching",
      "d": "It picks the last matched destination"
    },
    "correct_answer": "b"
  },
  {
    "id": "W10Q2",
    "question": "Which routing protocol is used for intra-domain routing in the Internet?",
    "options": {
      "a": "Border Gateway Protocol (BGP)",
      "b": "Routing Information Protocol (RIP)",
      "c": "Open Shortest Path First (OSPF)",
      "d": "Enhanced Interior Gateway Routing Protocol (EIGRP)"
    },
    "correct_answer": "c",
    "explanation": "Open Shortest Path First (OSPF) is a routing protocol used for intra-domain routing in the Internet. It is a link-state routing protocol that calculates the shortest path between routers based on the network topology."
  },
  {
    "id": "W10Q3",
    "question": "In the BGP protocol, UPDATE and NOTIFICATION messages are used for:",
    "options": {
      "a": "Exchanging reachability information and to notify an error.",
      "b": "Exchanging reachability information and Confirming a BGP connection",
      "c": "Ensuring that a BGP neighbor is still alive and Confirming a BGP connection",
      "d": "Opening a BGP connection and Closing a BGP connection"
    },
    "correct_answer": "a"
  },
  {
    "id": "W10Q4",
    "question": "Why do we consider dividing an IP address into network address and host address?",
    "options": {
      "a": "To increase the total number of IP addresses possible.",
      "b": "Routers route the packets based on the host address.",
      "c": "To avoid the overhead of storing all possible host IP addresses in each router.",
      "d": "For resolving IP addresses from the domain name."
    },
    "correct_answer": "c",
    "explanation": "By using the network address, routers can forward packets like the postal system (country, state, city,..), by looking at the relevant network address only instead of the entire host address. Thus routers do not need to store all possible host IP addresses."
  },
  {
    "id": "W10Q5",
    "question": "Consider a network with three routers, A, B, and C. The routing table for router A has the following entries: Destination: 192.168.1.0/24, Next Hop: B. Destination: 192.168.1.128/28, Next Hop : D. Destination: 192.168.2.0/24, Next Hop: C. If router A receives an IP packet with a destination address of 192.168.1.10, what will be the next hop for this packet?",
    "options": {
      "a": "D",
      "b": "B",
      "c": "C",
      "d": "Broadcast to all routers"
    },
    "correct_answer": "b",
    "explanation": "Since the destination address of the IP packet is in the 192.168.1.0/24 subnet, router A will forward the packet to the next hop router B."
  },
  {
    "id": "W10Q6",
    "question": "When you connect your personal computer (end device/host) to the internet, how does it know its own IP address, and the Gateway IP address to use for sending packets to remote hosts, without any manual configuration?",
    "options": {
      "a": "Domain Name System (DNS)",
      "b": "From its own routing table.",
      "c": "Address Resolution Protocol (ARP)",
      "d": "Dynamic Host Configuration Protocol (DHCP)"
    },
    "correct_answer": "d"
  },
  {
    "id": "W10Q7",
    "question": "Which of the following data structures are used for speeding up the Longest Prefix Matching based Forwarding algorithms in routers?",
    "options": {
      "a": "Double Linked List",
      "b": "Segment Trees",
      "c": "Red Black Trees",
      "d": "Patricia Trees"
    },
    "correct_answer": "d",
    "explanation": "Patricia Trees are useful for computing the longest prefix search efficiently by storing the routes bit by bit starting from the root to the leaves. Different types of traffic to ensure that they are delivered fairly based on their importance."
  },
  {
    "id": "W10Q8",
    "question": "Which is TRUE about BGP routing protocol?",
    "options": {
      "a": "It is an Intradomain routing protocol.",
      "b": "It is a type of Link State routing protocol",
      "c": "BGP relies on IGP for packet forwarding between IBGP peers.",
      "d": "BGP replaces the IGP protocol in an AS."
    },
    "correct_answer": "c",
    "explanation": "Since the rate of token arrival is the same as the rate of packet arrival, the bucket will always have enough token to send the packets at the same rate they arrive. Therefore there will not be any burst."
  },
  {
    "id": "W10Q9",
    "question": "Suppose we have n number of routes in a routing table. A Packet bearing a certain IP arrives at the router and requires it to be routed to the appropriate next hop location. Assuming that the router maintains a Patricia Tree for the routing table and we are using IPV4 addresses, what is the time complexity of this forwarding?",
    "options": {
      "a": "O(n²)",
      "b": "O(32)",
      "c": "O(n)",
      "d": "O(logn)"
    },
    "correct_answer": "b",
    "explanation": "For finding the Longest Prefix Match we need to travel from the root of the Patricia Tree down to the node bearing the longest matching prefix. Since for this we need to travel at most the height of the tree. This is the utmost number of bits in address i.e. 32. So O(32)."
  },
  {
    "id": "W10Q10",
    "question": "Consider in distance vector routing protocol, router A has the routing table (only the relevant portion of the table is shown): To Cost Next Hop Z 8 B .... .... .... After this, A receives the routing table information from C with the following: To Cost Z 6 .... .... After this, A also receives the routing table information from D with the following: To Cost Z 8 .... .... What will be Cost and Next Hop for Z in the routing table of A after this? Consider the cost of each link is 1. (cost = number of hops required)",
    "options": {
      "a": "8, B",
      "b": "6, C",
      "c": "9, D",
      "d": "7, C"
    },
    "correct_answer": "d",
    "explanation": "The lowest cost to Z is coming from C which is 6. So, Cost(Z from A) = Cost(Z from C) + Cost(C from A) = 6 + 1 = 7."
  },
  {
    "id": "W11Q1",
    "question": "Which of the following addresses is used in Ethernet broadcast for ARP requests?",
    "options": {
      "a": "255.255.255.255",
      "b": "255.255.255.254",
      "c": "FF:FF:FF:FF:FF:FF",
      "d": "255.255.255.251"
    },
    "correct_answer": "c",
    "explanation": "When a host sends an ARP request, it does not know the destination MAC address, so it sends the frame to all devices in the LAN using the broadcast MAC address: FF:FF:FF:FF:FF:FF."
  },
  {
    "id": "W11Q2",
    "question": "Which field in an ARP packet is not filled in ARP Request but filled in ARP Reply?",
    "options": {
      "a": "Target protocol address",
      "b": "Target hardware address",
      "c": "Sender protocol address",
      "d": "Sender hardware address"
    },
    "correct_answer": "b",
    "explanation": "In an ARP request, the sender already knows its own IP and MAC address and also the target IP address, but it does not know the target MAC address. Therefore, the target hardware address field is left empty in the request and is filled in the ARP reply."
  },
  {
    "id": "W11Q3",
    "question": "Which protocol does DHCP use at the Transport layer?",
    "options": {
      "a": "IP",
      "b": "ARP",
      "c": "UDP",
      "d": "TCP"
    },
    "correct_answer": "c",
    "explanation": "DHCP operates at the application layer but uses the UDP protocol at the transport layer for communication (ports 67 for server and 68 for client), since it requires connectionless and fast message exchange."
  },
  {
    "id": "W11Q4",
    "question": "Which of the following is/are correct about RARP?",
    "options": {
      "a": "RARP replies are broadcast.",
      "b": "RARP is often used on thin-client workstations.",
      "c": "In an RARP Request packet, the sender hardware address field is not filled.",
      "d": "RARP has been replaced by DHCP."
    },
    "correct_answer": "b, d",
    "explanation": "RARP replies are unicast, not broadcast, and the sender hardware address is included in the request. It was used by thin clients and has been replaced by DHCP."
  },
  {
    "id": "W11Q5",
    "question": "To deal with hidden terminal and exposed station problems, all implementations of 802.11 WLAN must mandatorily support ____________.",
    "options": {
      "a": "DCF",
      "b": "PCF",
      "c": "Both are mandatory",
      "d": "Both are optional"
    },
    "correct_answer": "a",
    "explanation": "In IEEE 802.11 WLAN, DCF (Distributed Coordination Function) is mandatory and uses mechanisms like CSMA/CA to handle hidden and exposed terminal problems. PCF is optional and not required in all implementations."
  },
  {
    "id": "W11Q6",
    "question": "When a new trunk link is configured on an IOS-based switch, which VLANs are allowed over the link?",
    "options": {
      "a": "By default, all VLANs are allowed on the trunk.",
      "b": "No VLAN's are allowed, you must configure each VLAN by hand.",
      "c": "Only configured VLAN's are allowed on the link.",
      "d": "Only extended VLAN's are allowed by default."
    },
    "correct_answer": "a",
    "explanation": "On an IOS-based switch, when a trunk link is configured, all VLANs are allowed by default unless explicitly restricted by configuration."
  },
  {
    "id": "W11Q7",
    "question": "Which VLAN technique is used when a single link needs to carry traffic for multiple VLANs?",
    "options": {
      "a": "Tailing",
      "b": "Trunking",
      "c": "Trading",
      "d": "Tapping"
    },
    "correct_answer": "b",
    "explanation": "When a single link needs to carry traffic for multiple VLANs, trunking is used, which allows multiple VLAN frames to pass over the same physical link using tagging."
  },
  {
    "id": "W11Q8",
    "question": "A switch has been configured for three different VLANs: VLAN2, VLAN3, and VLAN4. A router has been added to provide communication between the VLANs. What type of interface is necessary on the router if only one connection is to be made between the router and the switch?",
    "options": {
      "a": "10Mbps Ethernet",
      "b": "56Kbps Serial",
      "c": "100Mbps Ethernet",
      "d": "1Gbps Ethernet"
    },
    "correct_answer": "c",
    "explanation": "For inter-VLAN communication using a single link between the switch and router (router-on-a-stick), the link must support trunking and sufficient bandwidth. A 100 Mbps Ethernet interface is the minimum suitable option."
  },
  {
    "id": "W11Q9",
    "question": "Which of the following specifies a set of media access control (MAC) and physical layer specifications for implementing WLANs?",
    "options": {
      "a": "IEEE 802.16",
      "b": "IEEE 802.3",
      "c": "IEEE 802.11",
      "d": "IEEE 802.15"
    },
    "correct_answer": "c",
    "explanation": "IEEE 802.11 is a set of media access control and physical layer specification for implementing WLAN computer communication. It was founded in 1987 to begin standardization of spread spectrum WLANs for use in the ISM bands"
  },
  {
    "id": "W11Q10",
    "question": "In a LAN of 100 hosts, each host sends an ARP request once every 10 seconds. Each ARP packet is 64 bytes (including Ethernet frame). What is the total ARP traffic generated per second?",
    "options": {
      "a": "320 bytes/sec",
      "b": "640 bytes/sec",
      "c": "1280 bytes/sec",
      "d": "6400 bytes/sec"
    },
    "correct_answer": "b",
    "explanation": "Packet per second = (100/10) = 10 packet/sec. Total traffic = (10x64) = 640 bytes/sec."
  },
  {
    "id": "W12Q1",
    "question": "If there are n signal sources, each transmitting at the same data rate, how many time slots are required in a Time Division Multiplexing (TDM) link?",
    "options": {
      "a": "n/2",
      "b": "2n",
      "c": "n",
      "d": "n²"
    },
    "correct_answer": "c",
    "explanation": "In Time Division Multiplexing (TDM), the time dimension is divided. If there are n signal sources transmitting at the same data rate, one time slot is allocated for each source, leading to n time slots in a frame."
  },
  {
    "id": "W12Q2",
    "question": "Suppose we have a HDTV screen with screen resolution 1600 X 1200 and the screen is renewed 50 times per second. Considering a colored pixel needs 24 bits to be represented, what is the HDTV bit rate?",
    "options": {
      "a": "1.3 Gbps",
      "b": "2.3 Gbps",
      "c": "3.3 Gbps",
      "d": "4.3 Gbps"
    },
    "correct_answer": "b",
    "explanation": "Bit rate = (1600 * 1200 pixels) * 50 frames/sec * 24 bits/pixel = 2,304,000,000 bps ≈ 2.3 Gbps."
  },
  {
    "id": "W12Q3",
    "question": "A composite signal contains frequencies 300, 500, 800, 1000 and 1500 Hz. What is the bandwidth?",
    "options": {
      "a": "1000 Hz",
      "b": "2000 Hz",
      "c": "1200 Hz",
      "d": "500 Hz"
    },
    "correct_answer": "c",
    "explanation": "Bandwidth is the difference between the highest and lowest frequencies of a composite signal. Bandwidth = 1500 Hz - 300 Hz = 1200 Hz."
  },
  {
    "id": "W12Q4",
    "question": "Which component is included in IP security?",
    "options": {
      "a": "Authentication Header (AH)",
      "b": "Encapsulating Security Payload (ESP)",
      "c": "Internet Key Exchange (IKE)",
      "d": "All of the mentioned"
    },
    "correct_answer": "d",
    "explanation": "IP Security (IPsec) is a suite of protocols that includes the Authentication Header (AH), Encapsulating Security Payload (ESP), and Internet Key Exchange (IKE)."
  },
  {
    "id": "W12Q5",
    "question": "Which of the following is NOT a cause of transmission impairment?",
    "options": {
      "a": "Attenuation",
      "b": "Noise",
      "c": "Distortion",
      "d": "Congestion"
    },
    "correct_answer": "d",
    "explanation": "Causes of transmission impairment at the physical layer include attenuation, distortion, and noise. Congestion occurs at the network layer and is not a transmission impairment."
  },
  {
    "id": "W12Q6",
    "question": "Which of the following is/are NOT true about modulation techniques?",
    "options": {
      "a": "One amplitude in ASK is zero.",
      "b": "BFSK is more susceptible to error than ASK.",
      "c": "In Binary PSK, presence and absence of the carrier signal represents two binary digits.",
      "d": "QAM is a combination of ASK and PSK"
    },
    "correct_answer": "b, c",
    "explanation": "BFSK is less susceptible to noise than ASK. In Binary PSK, two different phases (e.g., 0 and 180 degrees) represent the binary digits, rather than the presence and absence of the carrier signal (which happens in OOK/ASK)."
  },
  {
    "id": "W12Q7",
    "question": "Which of the following attacks can actively modify communications or data?",
    "options": {
      "a": "Both active and passive attacks",
      "b": "Neither active and passive attacks",
      "c": "Active attacks",
      "d": "Passive attacks"
    },
    "correct_answer": "c",
    "explanation": "Active attacks involve some modification of the data stream or the creation of a false stream, whereas passive attacks only involve eavesdropping or monitoring of transmissions without alteration."
  },
  {
    "id": "W12Q8",
    "question": "Which one is used in parts of the cellular telephone system and for some satellite communication?",
    "options": {
      "a": "CDM",
      "b": "TDM",
      "c": "FDM",
      "d": "WDM"
    },
    "correct_answer": "a",
    "explanation": "Code Division Multiplexing (CDM), especially CDMA technology, is widely used in cellular telephone systems and for some satellite communications to allow multiple users to transmit simultaneously."
  },
  {
    "id": "W12Q9",
    "question": "Which of the following statements is/are correct?",
    "options": {
      "a": "NAT is a proxy server",
      "b": "NAT can also act as a firewall.",
      "c": "NAT needs to recalculate both IP and TCP checksum as it modifies the IP header and port number.",
      "d": "IP masquerading is done by NAT."
    },
    "correct_answer": "b, c, d",
    "explanation": "NAT naturally limits inbound connections, providing firewall capabilities. It also requires checksum updates after altering headers and performs IP masquerading to hide internal hosts."
  },
  {
    "id": "W12Q10",
    "question": "If the frequency spectrum of a signal has a bandwidth of 500 Hz with the highest frequency at 600 Hz, what should be the sampling rate according to the Nyquist theorem?",
    "options": {
      "a": "200 samples/sec",
      "b": "500 samples/sec",
      "c": "1000 samples/sec",
      "d": "1200 samples/sec"
    },
    "correct_answer": "d",
    "explanation": "The Nyquist theorem states that the sampling rate must be at least twice the highest frequency. Since the highest frequency is 600 Hz, the minimum sampling rate is 2 * 600 = 1200 samples/sec."
  }
];
