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
  }
];
