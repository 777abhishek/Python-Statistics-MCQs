const MOCK_DATA = [
  {
    "id": "M1Q1",
    "question": "Which of the following is defined as a set of rules that govern how data is formatted, transmitted, and received between network entities?",
    "options": {
      "a": "Network Architecture",
      "b": "Protocol",
      "c": "Collision Domain",
      "d": "Broadcast Domain"
    },
    "correct_answer": "b",
    "explanation": "A protocol is a set of rules that govern how data is formatted, transmitted, and received between network entities.",
    "difficulty": "Easy"
  },
  {
    "id": "M1Q2",
    "question": "What is the primary function of a Layer 2 switch in a network?",
    "options": {
      "a": "To connect different networks and route traffic between them.",
      "b": "To create a single, large collision domain for all connected devices.",
      "c": "To create separate collision domains for each connected device.",
      "d": "To convert digital data into analog signals for transmission."
    },
    "correct_answer": "c",
    "explanation": "A Layer 2 switch creates separate collision domains for each connected device, improving network performance by reducing collisions.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q3",
    "question": "In the TCP/IP model, which layer is responsible for process-to-process communication and uses port numbers to identify applications?",
    "options": {
      "a": "Application Layer",
      "b": "Transport Layer",
      "c": "Network Layer",
      "d": "Data Link Layer"
    },
    "correct_answer": "b",
    "explanation": "The Transport Layer is responsible for process-to-process communication and uses port numbers to identify applications.",
    "difficulty": "Easy"
  },
  {
    "id": "M1Q4",
    "question": "Which of the following is a key advantage of Packet Switching over Circuit Switching?",
    "options": {
      "a": "Guaranteed bandwidth for the entire duration of communication.",
      "b": "Dedicated, end-to-end communication path established before data transfer.",
      "c": "Superior efficiency and flexibility by allowing dynamic sharing of network resources.",
      "d": "Constant data rate and predictable delay for real-time applications."
    },
    "correct_answer": "c",
    "explanation": "Packet switching offers superior efficiency and flexibility by allowing dynamic sharing of network resources among multiple users.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q5",
    "question": "What is the primary purpose of the `Service Interface` in a layered architecture?",
    "options": {
      "a": "To define the message exchange between two corresponding layers on different systems.",
      "b": "To govern the operations a higher layer can request from a lower layer within the same system.",
      "c": "To encapsulate data from a higher layer into the data unit of a lower layer.",
      "d": "To provide end-user applications with network services."
    },
    "correct_answer": "b",
    "explanation": "The Service Interface governs the operations a higher layer can request from a lower layer within the same system.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q6",
    "question": "Which protocol is primarily used for translating human-friendly domain names into machine-readable IP addresses?",
    "options": {
      "a": "HTTP",
      "b": "FTP",
      "c": "DNS",
      "d": "SMTP"
    },
    "correct_answer": "c",
    "explanation": "DNS (Domain Name System) is primarily used for translating human-friendly domain names into machine-readable IP addresses.",
    "difficulty": "Easy"
  },
  {
    "id": "M1Q7",
    "question": "What is the role of the `MAC Address` in the Data Link Layer?",
    "options": {
      "a": "To identify a specific application on a host computer.",
      "b": "To provide a global address for routing across the internet.",
      "c": "To uniquely identify a device on a local network segment.",
      "d": "To define a logical area where broadcast frames are forwarded."
    },
    "correct_answer": "c",
    "explanation": "The MAC Address uniquely identifies a device on a local network segment at the Data Link Layer.",
    "difficulty": "Easy"
  },
  {
    "id": "M1Q8",
    "question": "In CSMA/CD, what action does a station take immediately after detecting a collision?",
    "options": {
      "a": "It immediately retransmits its frame.",
      "b": "It sends a brief 'jam sequence' to ensure all other stations are aware of the collision.",
      "c": "It waits for a random backoff period and then transmits again without listening.",
      "d": "It forwards the corrupted data to the next hop."
    },
    "correct_answer": "b",
    "explanation": "After detecting a collision in CSMA/CD, a station sends a brief 'jam sequence' to ensure all other stations are aware of the collision.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q9",
    "question": "Why is the minimum Ethernet frame size 64 bytes?",
    "options": {
      "a": "To accommodate the maximum possible header and trailer information.",
      "b": "To ensure a station can detect a collision at the furthest point of the network before it finishes transmitting.",
      "c": "To provide enough space for IP and TCP headers in a typical packet.",
      "d": "It is an arbitrary standard set by IEEE 802.3."
    },
    "correct_answer": "b",
    "explanation": "The minimum Ethernet frame size of 64 bytes ensures a station can detect a collision at the furthest point of the network before it finishes transmitting.",
    "difficulty": "Hard"
  },
  {
    "id": "M1Q10",
    "question": "Which ARQ protocol is considered the most bandwidth-efficient because it retransmits only the specific frames that were lost?",
    "options": {
      "a": "Stop-and-Wait ARQ",
      "b": "Go-Back-N ARQ",
      "c": "Selective Repeat ARQ",
      "d": "Sliding Window ARQ"
    },
    "correct_answer": "c",
    "explanation": "Selective Repeat ARQ is the most bandwidth-efficient because it retransmits only the specific frames that were lost, rather than retransmitting all subsequent frames.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q11",
    "question": "What is the primary function of ARP (Address Resolution Protocol)?",
    "options": {
      "a": "To assign IP addresses dynamically to hosts.",
      "b": "To map a known IP address to its corresponding MAC address.",
      "c": "To map a known MAC address to its corresponding IP address.",
      "d": "To provide a default gateway for hosts on a local network."
    },
    "correct_answer": "b",
    "explanation": "ARP maps a known IP address to its corresponding MAC address on a local network.",
    "difficulty": "Easy"
  },
  {
    "id": "M1Q12",
    "question": "During the DHCP lease process, at what percentage of its duration does a client first attempt to renew its lease by sending a unicast DHCPREQUEST to the original server?",
    "options": {
      "a": "25%",
      "b": "50%",
      "c": "75%",
      "d": "87.5%"
    },
    "correct_answer": "b",
    "explanation": "A DHCP client first attempts to renew its lease at 50% of its duration by sending a unicast DHCPREQUEST to the original server.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q13",
    "question": "Which protocol is essential for preventing network loops in a bridged Ethernet network by logically blocking redundant paths?",
    "options": {
      "a": "VLAN Tagging",
      "b": "Spanning Tree Protocol (STP)",
      "c": "Address Resolution Protocol (ARP)",
      "d": "Dynamic Host Configuration Protocol (DHCP)"
    },
    "correct_answer": "b",
    "explanation": "Spanning Tree Protocol (STP) is essential for preventing network loops in a bridged Ethernet network by logically blocking redundant paths.",
    "difficulty": "Easy"
  },
  {
    "id": "M1Q14",
    "question": "The 'Hidden Station Problem' in wireless networks is primarily addressed by which mechanism?",
    "options": {
      "a": "Carrier Sense Multiple Access with Collision Detection (CSMA/CD)",
      "b": "Request to Send / Clear to Send (RTS/CTS) handshake.",
      "c": "Physical carrier sensing alone.",
      "d": "Using a hub instead of an Access Point."
    },
    "correct_answer": "b",
    "explanation": "The Hidden Station Problem in wireless networks is primarily addressed by the Request to Send / Clear to Send (RTS/CTS) handshake mechanism.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q15",
    "question": "What is the primary function of a Modem at the Physical Layer?",
    "options": {
      "a": "To regenerate signals to their original strength over long distances.",
      "b": "To connect multiple devices in a LAN and broadcast all traffic.",
      "c": "To convert digital signals from a computer into analog signals for transmission over an analog medium and vice-versa.",
      "d": "To filter and forward traffic based on MAC addresses."
    },
    "correct_answer": "c",
    "explanation": "A Modem converts digital signals from a computer into analog signals for transmission over an analog medium and vice-versa at the Physical Layer.",
    "difficulty": "Easy"
  },
  {
    "id": "M1Q16",
    "question": "According to Shannon's Capacity formula, what is the theoretical maximum capacity (C) of a 1 MHz channel with an SNR of 63?",
    "options": {
      "a": "1 Mbps",
      "b": "6 Mbps",
      "c": "63 Mbps",
      "d": "126 Mbps"
    },
    "correct_answer": "b",
    "explanation": "Shannon's Capacity formula: C = B × log2(1 + SNR). For B = 1 MHz and SNR = 63, C = 1 × log2(64) = 1 × 6 = 6 Mbps.",
    "difficulty": "Hard"
  },
  {
    "id": "M1Q17",
    "question": "Which multiplexing technique assigns each sender a unique mathematical 'chip' code, allowing all users to transmit simultaneously on the same frequency?",
    "options": {
      "a": "Frequency Division Multiplexing (FDM)",
      "b": "Time Division Multiplexing (TDM)",
      "c": "Wavelength Division Multiplexing (WDM)",
      "d": "Code Division Multiplexing (CDM/CDMA)"
    },
    "correct_answer": "d",
    "explanation": "Code Division Multiplexing (CDM/CDMA) assigns each sender a unique mathematical 'chip' code, allowing all users to transmit simultaneously on the same frequency.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q18",
    "question": "Which of the following is an attack on 'Confidentiality'?",
    "options": {
      "a": "Interruption",
      "b": "Interception",
      "c": "Modification",
      "d": "Fabrication"
    },
    "correct_answer": "b",
    "explanation": "Interception is an attack on confidentiality, where an unauthorized party gains access to sensitive information.",
    "difficulty": "Easy"
  },
  {
    "id": "M1Q19",
    "question": "What is the primary security benefit of Network Address Translation (NAT)?",
    "options": {
      "a": "It encrypts all traffic leaving the private network.",
      "b": "It hides internal network structures by allowing external hosts to initiate connections only to the NAT device.",
      "c": "It provides application-layer content filtering.",
      "d": "It acts as an alarm system to detect malicious activity."
    },
    "correct_answer": "b",
    "explanation": "NAT hides internal network structures by allowing external hosts to initiate connections only to the NAT device, providing security through obscurity.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q20",
    "question": "In IPSec, which mode encrypts and/or authenticates the *entire* original IP packet (header and payload) and wraps it in a *new* IP header?",
    "options": {
      "a": "Transport Mode",
      "b": "Tunnel Mode",
      "c": "Application Mode",
      "d": "Gateway Mode"
    },
    "correct_answer": "b",
    "explanation": "In IPSec, Tunnel Mode encrypts and/or authenticates the entire original IP packet (header and payload) and wraps it in a new IP header.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q21",
    "question": "Which of the following is NOT a characteristic of HTTP?",
    "options": {
      "a": "It is a stateless protocol.",
      "b": "It primarily runs over UDP.",
      "c": "It operates on a client-server model.",
      "d": "It uses a request-response message exchange."
    },
    "correct_answer": "b",
    "explanation": "HTTP primarily runs over TCP, not UDP. It is a stateless protocol that operates on a client-server model using request-response message exchange.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q22",
    "question": "What is the purpose of the `IAC` (Interpret as Command) character in the TELNET protocol?",
    "options": {
      "a": "To signal the end of a data transmission.",
      "b": "To negotiate the character set between client and server.",
      "c": "To distinguish control information from user data.",
      "d": "To indicate a successful login to the remote system."
    },
    "correct_answer": "c",
    "explanation": "The IAC (Interpret as Command) character in TELNET is used to distinguish control information from user data.",
    "difficulty": "Hard"
  },
  {
    "id": "M1Q23",
    "question": "Which of the following is a primary function of the Transport Layer?",
    "options": {
      "a": "To route packets between different networks.",
      "b": "To manage the physical transmission of bits over a medium.",
      "c": "To provide logical, end-to-end communication services for applications.",
      "d": "To resolve IP addresses to MAC addresses on a local network."
    },
    "correct_answer": "c",
    "explanation": "The Transport Layer provides logical, end-to-end communication services for applications, including reliability, flow control, and congestion control.",
    "difficulty": "Easy"
  },
  {
    "id": "M1Q24",
    "question": "The 'Two-Army Problem' illustrates the impossibility of achieving what over an unreliable communication channel?",
    "options": {
      "a": "Perfect flow control.",
      "b": "Perfectly reliable symmetric connection release.",
      "c": "Guaranteed packet delivery.",
      "d": "Optimal congestion control."
    },
    "correct_answer": "b",
    "explanation": "The Two-Army Problem illustrates the impossibility of achieving perfectly reliable symmetric connection release over an unreliable communication channel.",
    "difficulty": "Hard"
  },
  {
    "id": "M1Q25",
    "question": "What is the primary reason for the inefficiency of the Stop-and-Wait ARQ protocol?",
    "options": {
      "a": "It uses cumulative acknowledgments.",
      "b": "It retransmits all subsequent frames after an error.",
      "c": "It forces the sender to wait for an ACK for every single packet, leaving the channel idle.",
      "d": "It requires complex receiver buffering for out-of-order packets."
    },
    "correct_answer": "c",
    "explanation": "Stop-and-Wait ARQ is inefficient because it forces the sender to wait for an ACK for every single packet, leaving the channel idle during transmission and propagation delays.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q26",
    "question": "For a `n`-bit sequence number space, what is the maximum window size (W) for Selective Repeat ARQ to avoid ambiguity?",
    "options": {
      "a": "W < 2^n",
      "b": "W <= 2^(n-1)",
      "c": "W = 2^n",
      "d": "W = 2n"
    },
    "correct_answer": "b",
    "explanation": "For Selective Repeat ARQ, the maximum window size must be W <= 2^(n-1) to avoid ambiguity between old and new sequence numbers.",
    "difficulty": "Hard"
  },
  {
    "id": "M1Q27",
    "question": "What is the optimal window size (W) for a sliding window protocol to achieve maximum link utilization, given a Bandwidth-Delay Product (BDP)?",
    "options": {
      "a": "W = BDP",
      "b": "W = 2 * BDP",
      "c": "W = 2 * BDP + 1",
      "d": "W = BDP / RTT"
    },
    "correct_answer": "c",
    "explanation": "The optimal window size for maximum link utilization is W = 2 * BDP + 1, where BDP is the Bandwidth-Delay Product.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q28",
    "question": "Which algorithm is the foundational principle used by TCP to achieve efficiency and max-min fairness in a distributed manner, ensuring flows converge on an optimal operating point?",
    "options": {
      "a": "First-In-First-Out (FIFO)",
      "b": "Additive Increase, Multiplicative Decrease (AIMD)",
      "c": "Round Robin",
      "d": "Weighted Fair Queuing (WFQ)"
    },
    "correct_answer": "b",
    "explanation": "Additive Increase, Multiplicative Decrease (AIMD) is the foundational principle used by TCP for congestion control, achieving efficiency and max-min fairness in a distributed manner.",
    "difficulty": "Medium"
  },
  {
    "id": "M1Q29",
    "question": "What is the primary reason TCP uses a 3-Way Handshake for connection establishment?",
    "options": {
      "a": "To encrypt the initial communication.",
      "b": "To quickly transfer a small amount of data.",
      "c": "To ensure both parties are ready to communicate and agree on initial sequence numbers, effectively filtering out delayed duplicates.",
      "d": "To negotiate the Maximum Segment Size (MSS)."
    },
    "correct_answer": "c",
    "explanation": "TCP uses a 3-Way Handshake to ensure both parties are ready to communicate and agree on initial sequence numbers, effectively filtering out delayed duplicate packets.",
    "difficulty": "Hard"
  },
  {
    "id": "M1Q30",
    "question": "What is the main purpose of Nagle's Algorithm?",
    "options": {
      "a": "To prevent a fast sender from overwhelming a slow receiver.",
      "b": "To calculate the Retransmission Timeout (RTO) dynamically.",
      "c": "To prevent the network from being flooded with tiny, inefficient packets.",
      "d": "To solve the Silly Window Syndrome."
    },
    "correct_answer": "c",
    "explanation": "Nagle's Algorithm prevents the network from being flooded with tiny, inefficient packets by buffering small amounts of data before transmission.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q1",
    "question": "Which of the following is defined as a set of rules that govern how data is formatted, transmitted, and received between network entities?",
    "options": {
      "a": "Network Architecture",
      "b": "Protocol",
      "c": "Collision Domain",
      "d": "Broadcast Domain"
    },
    "correct_answer": "b",
    "explanation": "A protocol is a set of rules that govern how data is formatted, transmitted, and received between network entities.",
    "difficulty": "Easy"
  },
  {
    "id": "M2Q2",
    "question": "What is the primary function of a Layer 2 switch in a network?",
    "options": {
      "a": "To connect different networks and route traffic between them.",
      "b": "To create a single, large collision domain for all connected devices.",
      "c": "To create separate collision domains for each connected device.",
      "d": "To convert digital data into analog signals for transmission."
    },
    "correct_answer": "c",
    "explanation": "A Layer 2 switch creates separate collision domains for each connected device, improving network performance by reducing collisions.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q3",
    "question": "In the TCP/IP model, which layer is responsible for process-to-process communication and uses port numbers to identify applications?",
    "options": {
      "a": "Application Layer",
      "b": "Transport Layer",
      "c": "Network Layer",
      "d": "Data Link Layer"
    },
    "correct_answer": "b",
    "explanation": "The Transport Layer is responsible for process-to-process communication and uses port numbers to identify applications.",
    "difficulty": "Easy"
  },
  {
    "id": "M2Q4",
    "question": "Which of the following is a key advantage of Packet Switching over Circuit Switching?",
    "options": {
      "a": "Guaranteed bandwidth for the entire duration of communication.",
      "b": "Dedicated, end-to-end communication path established before data transfer.",
      "c": "Superior efficiency and flexibility by allowing dynamic sharing of network resources.",
      "d": "Constant data rate and predictable delay for real-time applications."
    },
    "correct_answer": "c",
    "explanation": "Packet switching offers superior efficiency and flexibility by allowing dynamic sharing of network resources among multiple users.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q5",
    "question": "What is the primary purpose of the `Service Interface` in a layered architecture?",
    "options": {
      "a": "To define the message exchange between two corresponding layers on different systems.",
      "b": "To govern the operations a higher layer can request from a lower layer within the same system.",
      "c": "To encapsulate data from a higher layer into the data unit of a lower layer.",
      "d": "To provide end-user applications with network services."
    },
    "correct_answer": "b",
    "explanation": "The Service Interface governs the operations a higher layer can request from a lower layer within the same system.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q6",
    "question": "Which protocol is primarily used for translating human-friendly domain names into machine-readable IP addresses?",
    "options": {
      "a": "HTTP",
      "b": "FTP",
      "c": "DNS",
      "d": "SMTP"
    },
    "correct_answer": "c",
    "explanation": "DNS (Domain Name System) is primarily used for translating human-friendly domain names into machine-readable IP addresses.",
    "difficulty": "Easy"
  },
  {
    "id": "M2Q7",
    "question": "What is the role of the `MAC Address` in the Data Link Layer?",
    "options": {
      "a": "To identify a specific application on a host computer.",
      "b": "To provide a global address for routing across the internet.",
      "c": "To uniquely identify a device on a local network segment.",
      "d": "To define a logical area where broadcast frames are forwarded."
    },
    "correct_answer": "c",
    "explanation": "The MAC Address uniquely identifies a device on a local network segment at the Data Link Layer.",
    "difficulty": "Easy"
  },
  {
    "id": "M2Q8",
    "question": "In CSMA/CD, what action does a station take immediately after detecting a collision?",
    "options": {
      "a": "It immediately retransmits its frame.",
      "b": "It sends a brief 'jam sequence' to ensure all other stations are aware of the collision.",
      "c": "It waits for a random backoff period and then transmits again without listening.",
      "d": "It forwards the corrupted data to the next hop."
    },
    "correct_answer": "b",
    "explanation": "After detecting a collision in CSMA/CD, a station sends a brief 'jam sequence' to ensure all other stations are aware of the collision.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q9",
    "question": "Why is the minimum Ethernet frame size 64 bytes?",
    "options": {
      "a": "To accommodate the maximum possible header and trailer information.",
      "b": "To ensure a station can detect a collision at the furthest point of the network before it finishes transmitting.",
      "c": "To provide enough space for IP and TCP headers in a typical packet.",
      "d": "It is an arbitrary standard set by IEEE 802.3."
    },
    "correct_answer": "b",
    "explanation": "The minimum Ethernet frame size of 64 bytes ensures a station can detect a collision at the furthest point of the network before it finishes transmitting.",
    "difficulty": "Hard"
  },
  {
    "id": "M2Q10",
    "question": "Which ARQ protocol is considered the most bandwidth-efficient because it retransmits only the specific frames that were lost?",
    "options": {
      "a": "Stop-and-Wait ARQ",
      "b": "Go-Back-N ARQ",
      "c": "Selective Repeat ARQ",
      "d": "Sliding Window ARQ"
    },
    "correct_answer": "c",
    "explanation": "Selective Repeat ARQ is the most bandwidth-efficient because it retransmits only the specific frames that were lost, rather than retransmitting all subsequent frames.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q11",
    "question": "What is the primary function of ARP (Address Resolution Protocol)?",
    "options": {
      "a": "To assign IP addresses dynamically to hosts.",
      "b": "To map a known IP address to its corresponding MAC address.",
      "c": "To map a known MAC address to its corresponding IP address.",
      "d": "To provide a default gateway for hosts on a local network."
    },
    "correct_answer": "b",
    "explanation": "ARP maps a known IP address to its corresponding MAC address on a local network.",
    "difficulty": "Easy"
  },
  {
    "id": "M2Q12",
    "question": "During the DHCP lease process, at what percentage of its duration does a client first attempt to renew its lease by sending a unicast DHCPREQUEST to the original server?",
    "options": {
      "a": "25%",
      "b": "50%",
      "c": "75%",
      "d": "87.5%"
    },
    "correct_answer": "b",
    "explanation": "A DHCP client first attempts to renew its lease at 50% of its duration by sending a unicast DHCPREQUEST to the original server.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q13",
    "question": "Which protocol is essential for preventing network loops in a bridged Ethernet network by logically blocking redundant paths?",
    "options": {
      "a": "VLAN Tagging",
      "b": "Spanning Tree Protocol (STP)",
      "c": "Address Resolution Protocol (ARP)",
      "d": "Dynamic Host Configuration Protocol (DHCP)"
    },
    "correct_answer": "b",
    "explanation": "Spanning Tree Protocol (STP) is essential for preventing network loops in a bridged Ethernet network by logically blocking redundant paths.",
    "difficulty": "Easy"
  },
  {
    "id": "M2Q14",
    "question": "The 'Hidden Station Problem' in wireless networks is primarily addressed by which mechanism?",
    "options": {
      "a": "Carrier Sense Multiple Access with Collision Detection (CSMA/CD)",
      "b": "Request to Send / Clear to Send (RTS/CTS) handshake.",
      "c": "Physical carrier sensing alone.",
      "d": "Using a hub instead of an Access Point."
    },
    "correct_answer": "b",
    "explanation": "The Hidden Station Problem in wireless networks is primarily addressed by the Request to Send / Clear to Send (RTS/CTS) handshake mechanism.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q15",
    "question": "What is the primary function of a Modem at the Physical Layer?",
    "options": {
      "a": "To regenerate signals to their original strength over long distances.",
      "b": "To connect multiple devices in a LAN and broadcast all traffic.",
      "c": "To convert digital signals from a computer into analog signals for transmission over an analog medium and vice-versa.",
      "d": "To filter and forward traffic based on MAC addresses."
    },
    "correct_answer": "c",
    "explanation": "A Modem converts digital signals from a computer into analog signals for transmission over an analog medium and vice-versa at the Physical Layer.",
    "difficulty": "Easy"
  },
  {
    "id": "M2Q16",
    "question": "According to Shannon's Capacity formula, what is the theoretical maximum capacity (C) of a 1 MHz channel with an SNR of 63?",
    "options": {
      "a": "1 Mbps",
      "b": "6 Mbps",
      "c": "63 Mbps",
      "d": "126 Mbps"
    },
    "correct_answer": "b",
    "explanation": "Shannon's Capacity formula: C = B × log2(1 + SNR). For B = 1 MHz and SNR = 63, C = 1 × log2(64) = 1 × 6 = 6 Mbps.",
    "difficulty": "Hard"
  },
  {
    "id": "M2Q17",
    "question": "Which multiplexing technique assigns each sender a unique mathematical 'chip' code, allowing all users to transmit simultaneously on the same frequency?",
    "options": {
      "a": "Frequency Division Multiplexing (FDM)",
      "b": "Time Division Multiplexing (TDM)",
      "c": "Wavelength Division Multiplexing (WDM)",
      "d": "Code Division Multiplexing (CDM/CDMA)"
    },
    "correct_answer": "d",
    "explanation": "Code Division Multiplexing (CDM/CDMA) assigns each sender a unique mathematical 'chip' code, allowing all users to transmit simultaneously on the same frequency.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q18",
    "question": "Which of the following is an attack on 'Confidentiality'?",
    "options": {
      "a": "Interruption",
      "b": "Interception",
      "c": "Modification",
      "d": "Fabrication"
    },
    "correct_answer": "b",
    "explanation": "Interception is an attack on confidentiality, where an unauthorized party gains access to sensitive information.",
    "difficulty": "Easy"
  },
  {
    "id": "M2Q19",
    "question": "What is the primary security benefit of Network Address Translation (NAT)?",
    "options": {
      "a": "It encrypts all traffic leaving the private network.",
      "b": "It hides internal network structures by allowing external hosts to initiate connections only to the NAT device.",
      "c": "It provides application-layer content filtering.",
      "d": "It acts as an alarm system to detect malicious activity."
    },
    "correct_answer": "b",
    "explanation": "NAT hides internal network structures by allowing external hosts to initiate connections only to the NAT device, providing security through obscurity.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q20",
    "question": "In IPSec, which mode encrypts and/or authenticates the *entire* original IP packet (header and payload) and wraps it in a *new* IP header?",
    "options": {
      "a": "Transport Mode",
      "b": "Tunnel Mode",
      "c": "Application Mode",
      "d": "Gateway Mode"
    },
    "correct_answer": "b",
    "explanation": "In IPSec, Tunnel Mode encrypts and/or authenticates the entire original IP packet (header and payload) and wraps it in a new IP header.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q21",
    "question": "Which of the following is NOT a characteristic of HTTP?",
    "options": {
      "a": "It is a stateless protocol.",
      "b": "It primarily runs over UDP.",
      "c": "It operates on a client-server model.",
      "d": "It uses a request-response message exchange."
    },
    "correct_answer": "b",
    "explanation": "HTTP primarily runs over TCP, not UDP. It is a stateless protocol that operates on a client-server model using request-response message exchange.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q22",
    "question": "What is the purpose of the `IAC` (Interpret as Command) character in the TELNET protocol?",
    "options": {
      "a": "To signal the end of a data transmission.",
      "b": "To negotiate the character set between client and server.",
      "c": "To distinguish control information from user data.",
      "d": "To indicate a successful login to the remote system."
    },
    "correct_answer": "c",
    "explanation": "The IAC (Interpret as Command) character in TELNET is used to distinguish control information from user data.",
    "difficulty": "Hard"
  },
  {
    "id": "M2Q23",
    "question": "Which of the following is a primary function of the Transport Layer?",
    "options": {
      "a": "To route packets between different networks.",
      "b": "To manage the physical transmission of bits over a medium.",
      "c": "To provide logical, end-to-end communication services for applications.",
      "d": "To resolve IP addresses to MAC addresses on a local network."
    },
    "correct_answer": "c",
    "explanation": "The Transport Layer provides logical, end-to-end communication services for applications, including reliability, flow control, and congestion control.",
    "difficulty": "Easy"
  },
  {
    "id": "M2Q24",
    "question": "The 'Two-Army Problem' illustrates the impossibility of achieving what over an unreliable communication channel?",
    "options": {
      "a": "Perfect flow control.",
      "b": "Perfectly reliable symmetric connection release.",
      "c": "Guaranteed packet delivery.",
      "d": "Optimal congestion control."
    },
    "correct_answer": "b",
    "explanation": "The Two-Army Problem illustrates the impossibility of achieving perfectly reliable symmetric connection release over an unreliable communication channel.",
    "difficulty": "Hard"
  },
  {
    "id": "M2Q25",
    "question": "What is the primary reason for the inefficiency of the Stop-and-Wait ARQ protocol?",
    "options": {
      "a": "It uses cumulative acknowledgments.",
      "b": "It retransmits all subsequent frames after an error.",
      "c": "It forces the sender to wait for an ACK for every single packet, leaving the channel idle.",
      "d": "It requires complex receiver buffering for out-of-order packets."
    },
    "correct_answer": "c",
    "explanation": "Stop-and-Wait ARQ is inefficient because it forces the sender to wait for an ACK for every single packet, leaving the channel idle during transmission and propagation delays.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q26",
    "question": "For a `n`-bit sequence number space, what is the maximum window size (W) for Selective Repeat ARQ to avoid ambiguity?",
    "options": {
      "a": "W < 2^n",
      "b": "W <= 2^(n-1)",
      "c": "W = 2^n",
      "d": "W = 2n"
    },
    "correct_answer": "b",
    "explanation": "For Selective Repeat ARQ, the maximum window size must be W <= 2^(n-1) to avoid ambiguity between old and new sequence numbers.",
    "difficulty": "Hard"
  },
  {
    "id": "M2Q27",
    "question": "What is the optimal window size (W) for a sliding window protocol to achieve maximum link utilization, given a Bandwidth-Delay Product (BDP)?",
    "options": {
      "a": "W = BDP",
      "b": "W = 2 * BDP",
      "c": "W = 2 * BDP + 1",
      "d": "W = BDP / RTT"
    },
    "correct_answer": "c",
    "explanation": "The optimal window size for maximum link utilization is W = 2 * BDP + 1, where BDP is the Bandwidth-Delay Product.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q28",
    "question": "Which algorithm is the foundational principle used by TCP to achieve efficiency and max-min fairness in a distributed manner, ensuring flows converge on an optimal operating point?",
    "options": {
      "a": "First-In-First-Out (FIFO)",
      "b": "Additive Increase, Multiplicative Decrease (AIMD)",
      "c": "Round Robin",
      "d": "Weighted Fair Queuing (WFQ)"
    },
    "correct_answer": "b",
    "explanation": "Additive Increase, Multiplicative Decrease (AIMD) is the foundational principle used by TCP for congestion control, achieving efficiency and max-min fairness in a distributed manner.",
    "difficulty": "Medium"
  },
  {
    "id": "M2Q29",
    "question": "What is the primary reason TCP uses a 3-Way Handshake for connection establishment?",
    "options": {
      "a": "To encrypt the initial communication.",
      "b": "To quickly transfer a small amount of data.",
      "c": "To ensure both parties are ready to communicate and agree on initial sequence numbers, effectively filtering out delayed duplicates.",
      "d": "To negotiate the Maximum Segment Size (MSS)."
    },
    "correct_answer": "c",
    "explanation": "TCP uses a 3-Way Handshake to ensure both parties are ready to communicate and agree on initial sequence numbers, effectively filtering out delayed duplicate packets.",
    "difficulty": "Hard"
  },
  {
    "id": "M2Q30",
    "question": "What is the main purpose of Nagle's Algorithm?",
    "options": {
      "a": "To prevent a fast sender from overwhelming a slow receiver.",
      "b": "To calculate the Retransmission Timeout (RTO) dynamically.",
      "c": "To prevent the network from being flooded with tiny, inefficient packets.",
      "d": "To solve the Silly Window Syndrome."
    },
    "correct_answer": "c",
    "explanation": "Nagle's Algorithm prevents the network from being flooded with tiny, inefficient packets by buffering small amounts of data before transmission.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q1",
    "question": "Which network device operates at Layer 1 of the TCP/IP stack?",
    "options": {
      "a": "Switch",
      "b": "Router",
      "c": "Hub",
      "d": "Bridge"
    },
    "correct_answer": "c",
    "explanation": "A hub operates at Layer 1 (Physical Layer) of the TCP/IP stack, simply regenerating and forwarding signals to all connected devices.",
    "difficulty": "Easy"
  },
  {
    "id": "M3Q2",
    "question": "What is the primary function of a Layer 2 switch in a network?",
    "options": {
      "a": "To connect different networks and route traffic between them.",
      "b": "To create separate collision domains for each connected device.",
      "c": "To forward broadcast frames to all connected devices in separate broadcast domains.",
      "d": "To convert digital data into analog signals for transmission."
    },
    "correct_answer": "b",
    "explanation": "A Layer 2 switch creates separate collision domains for each connected device, improving network performance by reducing collisions.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q3",
    "question": "What is the process called where data from a higher layer is wrapped inside a header by the next lower layer?",
    "options": {
      "a": "Decapsulation",
      "b": "Multiplexing",
      "c": "Encapsulation",
      "d": "Segmentation"
    },
    "correct_answer": "c",
    "explanation": "Encapsulation is the process where data from a higher layer is wrapped inside a header by the next lower layer as it moves down the protocol stack.",
    "difficulty": "Easy"
  },
  {
    "id": "M3Q4",
    "question": "Which statement accurately describes the relationship between the OSI model and the TCP/IP model according to the lecture?",
    "options": {
      "a": "The OSI model is the practical, implemented model, while TCP/IP is a theoretical guide.",
      "b": "The TCP/IP model is a 7-layer theoretical guide, while the OSI model is the protocol suite actually used.",
      "c": "The OSI model is a 7-layer theoretical guide, while the 4/5-layer TCP/IP model is the protocol suite actually used to build the internet.",
      "d": "Both models are equally implemented in modern networks."
    },
    "correct_answer": "c",
    "explanation": "The OSI model is a 7-layer theoretical reference model, while the 4/5-layer TCP/IP model is the protocol suite actually implemented and used to build the internet.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q5",
    "question": "Which networking method establishes a dedicated, end-to-end communication path before data transfer begins?",
    "options": {
      "a": "Packet Switching",
      "b": "Datagram Approach",
      "c": "Circuit Switching",
      "d": "Virtual Circuit Approach"
    },
    "correct_answer": "c",
    "explanation": "Circuit switching establishes a dedicated, end-to-end communication path before any data transfer begins, reserving resources for the entire duration.",
    "difficulty": "Easy"
  },
  {
    "id": "M3Q6",
    "question": "Which layer of the TCP/IP model is responsible for process-to-process communication using port numbers?",
    "options": {
      "a": "Application Layer",
      "b": "Transport Layer",
      "c": "Network Layer",
      "d": "Data Link Layer"
    },
    "correct_answer": "b",
    "explanation": "The Transport Layer is responsible for process-to-process communication and uses port numbers to identify different applications.",
    "difficulty": "Easy"
  },
  {
    "id": "M3Q7",
    "question": "A router operates at which layer of the TCP/IP model and uses what type of address for its primary function?",
    "options": {
      "a": "Layer 2, MAC addresses",
      "b": "Layer 3, IP addresses",
      "c": "Layer 4, Port numbers",
      "d": "Layer 1, Physical addresses"
    },
    "correct_answer": "b",
    "explanation": "A router operates at Layer 3 (Network Layer) of the TCP/IP model and uses IP addresses to route packets between different networks.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q8",
    "question": "What is the primary function of DNS?",
    "options": {
      "a": "To transfer files between clients and servers.",
      "b": "To translate human-friendly domain names into machine-readable IP addresses.",
      "c": "To provide reliable, connection-oriented communication.",
      "d": "To manage network devices."
    },
    "correct_answer": "b",
    "explanation": "DNS (Domain Name System) primarily translates human-friendly domain names into machine-readable IP addresses.",
    "difficulty": "Easy"
  },
  {
    "id": "M3Q9",
    "question": "Which of the following protocols primarily uses UDP for its operation?",
    "options": {
      "a": "HTTP",
      "b": "FTP",
      "c": "SMTP",
      "d": "DNS"
    },
    "correct_answer": "d",
    "explanation": "DNS primarily uses UDP for its queries because it requires low latency and the queries are typically small enough to fit in a single UDP packet.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q10",
    "question": "What is the primary responsibility of the Data Link Layer?",
    "options": {
      "a": "End-to-end reliability",
      "b": "Global routing",
      "c": "Hop-to-hop data transfer",
      "d": "User application services"
    },
    "correct_answer": "c",
    "explanation": "The Data Link Layer is responsible for hop-to-hop data transfer between directly connected nodes on the same network segment.",
    "difficulty": "Easy"
  },
  {
    "id": "M3Q11",
    "question": "In CSMA/CD, what action does a station take immediately after detecting a collision?",
    "options": {
      "a": "It retransmits the frame immediately.",
      "b": "It sends a jam signal.",
      "c": "It waits for a fixed period before retransmitting.",
      "d": "It informs the Network Layer of the collision."
    },
    "correct_answer": "b",
    "explanation": "After detecting a collision in CSMA/CD, a station sends a jam signal to ensure all other stations are aware of the collision.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q12",
    "question": "Compare CSMA/CD and Token Passing protocols. Which statement is most accurate regarding their efficiency under different network loads?",
    "options": {
      "a": "CSMA/CD is more efficient under heavy loads, while Token Passing is better for light loads.",
      "b": "Token Passing is more efficient under heavy loads, while CSMA/CD is better for light to moderate loads.",
      "c": "Both protocols have similar efficiency regardless of network load.",
      "d": "CSMA/CD avoids collisions entirely, while Token Passing manages them."
    },
    "correct_answer": "b",
    "explanation": "Token Passing is more efficient under heavy loads because it prevents collisions, while CSMA/CD performs better under light to moderate loads where collisions are infrequent.",
    "difficulty": "Hard"
  },
  {
    "id": "M3Q13",
    "question": "What is the significance of the 64-byte minimum frame size in classic Ethernet?",
    "options": {
      "a": "It ensures enough space for the IP header.",
      "b": "It is the maximum size allowed for efficient transmission.",
      "c": "It ensures a transmitting node can detect a collision at the farthest point of the network.",
      "d": "It prevents buffer overflow at the receiving end."
    },
    "correct_answer": "c",
    "explanation": "The 64-byte minimum frame size ensures that a transmitting node can detect a collision at the farthest point of the network before it finishes transmitting the frame.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q14",
    "question": "How did the introduction of full-duplex switched Ethernet fundamentally change the role of CSMA/CD?",
    "options": {
      "a": "It made CSMA/CD more efficient by reducing the backoff time.",
      "b": "It eliminated the need for CSMA/CD on the link by preventing collisions.",
      "c": "It allowed CSMA/CD to operate at higher speeds.",
      "d": "It replaced CSMA/CD with CSMA/CA."
    },
    "correct_answer": "b",
    "explanation": "Full-duplex switched Ethernet eliminated the need for CSMA/CD on the link because dedicated point-to-point connections prevent collisions entirely.",
    "difficulty": "Hard"
  },
  {
    "id": "M3Q15",
    "question": "Which ARQ protocol is most efficient in terms of bandwidth utilization by retransmitting only the specific frames that were lost?",
    "options": {
      "a": "Stop-and-Wait ARQ",
      "b": "Go-Back-N ARQ",
      "c": "Selective Repeat ARQ",
      "d": "Positive Acknowledgment ARQ"
    },
    "correct_answer": "c",
    "explanation": "Selective Repeat ARQ is the most bandwidth-efficient because it retransmits only the specific frames that were lost, rather than retransmitting all subsequent frames.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q16",
    "question": "For Selective Repeat ARQ with an `n`-bit sequence number, what is the maximum window size `W` to avoid ambiguity?",
    "options": {
      "a": "W < 2^n",
      "b": "W <= 2^n",
      "c": "W < 2^(n-1)",
      "d": "W <= 2^(n-1)"
    },
    "correct_answer": "d",
    "explanation": "For Selective Repeat ARQ, the maximum window size must be W <= 2^(n-1) to avoid ambiguity between old and new sequence numbers.",
    "difficulty": "Hard"
  },
  {
    "id": "M3Q17",
    "question": "What is the primary function of ARP?",
    "options": {
      "a": "To assign IP addresses dynamically.",
      "b": "To map an IP address to its corresponding MAC address.",
      "c": "To map a MAC address to its corresponding IP address.",
      "d": "To route packets between different networks."
    },
    "correct_answer": "b",
    "explanation": "ARP (Address Resolution Protocol) maps a known IP address to its corresponding MAC address on a local network.",
    "difficulty": "Easy"
  },
  {
    "id": "M3Q18",
    "question": "Which DHCP message does a client broadcast to find any available DHCP servers on the network?",
    "options": {
      "a": "DHCPOFFER",
      "b": "DHCPREQUEST",
      "c": "DHCPACK",
      "d": "DHCPDISCOVER"
    },
    "correct_answer": "d",
    "explanation": "A DHCP client broadcasts a DHCPDISCOVER message to find any available DHCP servers on the network.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q19",
    "question": "A DHCP client's lease reaches 87.5% of its duration, and its renewal attempt to the original server failed. What is the next action the client takes?",
    "options": {
      "a": "It immediately stops using the IP address.",
      "b": "It broadcasts a DHCPREQUEST to any available DHCP server.",
      "c": "It sends a DHCPRELEASE message.",
      "d": "It restarts the DORA process from DHCPDISCOVER."
    },
    "correct_answer": "b",
    "explanation": "When the lease reaches 87.5% and renewal to the original server fails, the client broadcasts a DHCPREQUEST to any available DHCP server to obtain a new lease.",
    "difficulty": "Hard"
  },
  {
    "id": "M3Q20",
    "question": "What is the primary purpose of the Spanning Tree Protocol (STP)?",
    "options": {
      "a": "To create separate broadcast domains.",
      "b": "To allow physical redundancy while preventing network loops.",
      "c": "To route traffic between different VLANs.",
      "d": "To assign IP addresses to devices."
    },
    "correct_answer": "b",
    "explanation": "STP allows physical redundancy in network topology while preventing network loops by logically blocking redundant paths.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q21",
    "question": "Which mechanism in CSMA/CA is used to solve the Hidden Station Problem?",
    "options": {
      "a": "Carrier Sense",
      "b": "Random Backoff",
      "c": "RTS/CTS handshake",
      "d": "DIFS"
    },
    "correct_answer": "c",
    "explanation": "The RTS/CTS handshake mechanism in CSMA/CA is used to solve the Hidden Station Problem in wireless networks.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q22",
    "question": "A communication channel has a bandwidth of 1 MHz and an SNR of 63. According to Shannon's Capacity formula, what is the theoretical maximum capacity of this channel?",
    "options": {
      "a": "1 Mbps",
      "b": "6 Mbps",
      "c": "63 Mbps",
      "d": "126 Mbps"
    },
    "correct_answer": "b",
    "explanation": "Shannon's Capacity formula: C = B × log2(1 + SNR). For B = 1 MHz and SNR = 63, C = 1 × log2(64) = 1 × 6 = 6 Mbps.",
    "difficulty": "Hard"
  },
  {
    "id": "M3Q23",
    "question": "Which modulation technique is a hybrid of ASK and PSK, allowing multiple bits to be transmitted per signal element and is widely used in modern wireless standards?",
    "options": {
      "a": "FSK",
      "b": "BPSK",
      "c": "QAM",
      "d": "NRZ-L"
    },
    "correct_answer": "c",
    "explanation": "QAM (Quadrature Amplitude Modulation) is a hybrid of ASK and PSK that allows multiple bits to be transmitted per signal element and is widely used in modern wireless standards.",
    "difficulty": "Hard"
  },
  {
    "id": "M3Q24",
    "question": "Which principle of the CIA Triad ensures that data and resources are accessible to authorized users when they need them?",
    "options": {
      "a": "Confidentiality",
      "b": "Integrity",
      "c": "Availability",
      "d": "Non-repudiation"
    },
    "correct_answer": "c",
    "explanation": "Availability is the principle of the CIA Triad that ensures data and resources are accessible to authorized users when they need them.",
    "difficulty": "Easy"
  },
  {
    "id": "M3Q25",
    "question": "What is the primary function of a firewall in network security?",
    "options": {
      "a": "To detect and log malicious activity without blocking it.",
      "b": "To prevent unauthorized access by filtering traffic based on security policies.",
      "c": "To attract and trap cyberattackers for analysis.",
      "d": "To simulate cyberattacks to find vulnerabilities."
    },
    "correct_answer": "b",
    "explanation": "A firewall's primary function is to prevent unauthorized access by filtering network traffic based on predefined security policies.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q26",
    "question": "In IPSec, which mode encrypts and/or authenticates the *entire* original IP packet (header and payload) and wraps it in a *new* IP header?",
    "options": {
      "a": "Transport Mode",
      "b": "Tunnel Mode",
      "c": "Application Mode",
      "d": "Gateway Mode"
    },
    "correct_answer": "b",
    "explanation": "In IPSec, Tunnel Mode encrypts and/or authenticates the entire original IP packet (header and payload) and wraps it in a new IP header.",
    "difficulty": "Hard"
  },
  {
    "id": "M3Q27",
    "question": "Which type of DNS resolution requires the client's resolver to perform each step of the lookup itself, receiving referrals from servers?",
    "options": {
      "a": "Recursive Resolution",
      "b": "Iterative Resolution",
      "c": "Authoritative Resolution",
      "d": "Cached Resolution"
    },
    "correct_answer": "b",
    "explanation": "Iterative resolution requires the client's resolver to perform each step of the lookup itself, receiving referrals from servers along the way.",
    "difficulty": "Medium"
  },
  {
    "id": "M3Q28",
    "question": "What is the default port number for HTTP?",
    "options": {
      "a": "21",
      "b": "23",
      "c": "80",
      "d": "443"
    },
    "correct_answer": "c",
    "explanation": "The default port number for HTTP is 80.",
    "difficulty": "Easy"
  },
  {
    "id": "M3Q29",
    "question": "What is the primary reason for the `TIME_WAIT` state in TCP connection termination?",
    "options": {
      "a": "To retransmit any lost FIN messages.",
      "b": "To ensure the final ACK was received by the server and catch delayed packets.",
      "c": "To allow the client to send any remaining buffered data.",
      "d": "To prevent the server from immediately reusing the port number."
    },
    "correct_answer": "b",
    "explanation": "The TIME_WAIT state ensures the final ACK was received by the server and allows time for any delayed packets to be discarded before the port can be reused.",
    "difficulty": "Hard"
  },
  {
    "id": "M3Q30",
    "question": "What is the default port number for FTP's control connection?",
    "options": {
      "a": "20",
      "b": "21",
      "c": "80",
      "d": "443"
    },
    "correct_answer": "b",
    "explanation": "The default port number for FTP's control connection is 21.",
    "difficulty": "Easy"
  },
  {
    "id": "M4Q1",
    "question": "What is the primary purpose of a \"Protocol\" in computer networking?",
    "options": {
      "a": "To define the physical cabling standards.",
      "b": "To create a standardized \"language\" for communication between network entities.",
      "c": "To manage power consumption of network devices.",
      "d": "To encrypt all data transmissions."
    },
    "correct_answer": "b",
    "explanation": "A protocol creates a standardized \"language\" for communication between network entities, defining how data is formatted, transmitted, and received.",
    "difficulty": "Easy"
  },
  {
    "id": "M4Q2",
    "question": "Which layer of the TCP/IP stack is responsible for converting digital data into analog signals for transmission over a physical medium?",
    "options": {
      "a": "Application Layer",
      "b": "Transport Layer",
      "c": "Network Layer",
      "d": "Physical Layer"
    },
    "correct_answer": "d",
    "explanation": "The Physical Layer is responsible for converting digital data into analog signals for transmission over a physical medium.",
    "difficulty": "Easy"
  },
  {
    "id": "M4Q3",
    "question": "Which model is the dominant protocol suite for the internet?",
    "options": {
      "a": "OSI Model",
      "b": "TCP/IP Model",
      "c": "ATM Model",
      "d": "X.25 Model"
    },
    "correct_answer": "b",
    "explanation": "The TCP/IP Model is the dominant protocol suite for the internet, forming the foundation of modern networking.",
    "difficulty": "Easy"
  },
  {
    "id": "M4Q4",
    "question": "What is the primary characteristic of Circuit Switching?",
    "options": {
      "a": "Data is broken into small, independent packets.",
      "b": "A dedicated, end-to-end communication path is established before data transfer.",
      "c": "Resources are shared dynamically among multiple users.",
      "d": "Packets may take different routes and arrive out of order."
    },
    "correct_answer": "b",
    "explanation": "Circuit switching establishes a dedicated, end-to-end communication path before any data transfer begins.",
    "difficulty": "Easy"
  },
  {
    "id": "M4Q5",
    "question": "Which layer of the protocol stack provides services directly to end-user applications?",
    "options": {
      "a": "Transport Layer",
      "b": "Network Layer",
      "c": "Application Layer",
      "d": "Data Link Layer"
    },
    "correct_answer": "c",
    "explanation": "The Application Layer provides services directly to end-user applications, including protocols like HTTP, FTP, and SMTP.",
    "difficulty": "Easy"
  },
  {
    "id": "M4Q6",
    "question": "What is the primary function of DNS?",
    "options": {
      "a": "To encrypt web traffic.",
      "b": "To translate human-friendly domain names into machine-readable IP addresses.",
      "c": "To manage network congestion.",
      "d": "To transfer files between clients and servers."
    },
    "correct_answer": "b",
    "explanation": "DNS (Domain Name System) translates human-friendly domain names into machine-readable IP addresses.",
    "difficulty": "Easy"
  },
  {
    "id": "M4Q7",
    "question": "What is a MAC Address primarily used for?",
    "options": {
      "a": "Global routing across the internet.",
      "b": "Identifying a specific application on a host.",
      "c": "Local communication within a LAN segment.",
      "d": "Encrypting data at the physical layer."
    },
    "correct_answer": "c",
    "explanation": "A MAC Address is primarily used for local communication within a LAN segment to uniquely identify devices.",
    "difficulty": "Easy"
  },
  {
    "id": "M4Q8",
    "question": "Which networking device operates at the Physical Layer and simply repeats any signal it receives to all other connected ports, creating a single collision domain?",
    "options": {
      "a": "Router",
      "b": "Switch",
      "c": "Hub",
      "d": "Bridge"
    },
    "correct_answer": "c",
    "explanation": "A hub operates at the Physical Layer and repeats any signal it receives to all other connected ports, creating a single collision domain.",
    "difficulty": "Easy"
  },
  {
    "id": "M4Q9",
    "question": "Which security principle aims to keep data and resources hidden from unauthorized access?",
    "options": {
      "a": "Integrity",
      "b": "Availability",
      "c": "Confidentiality",
      "d": "Non-repudiation"
    },
    "correct_answer": "c",
    "explanation": "Confidentiality is the security principle that aims to keep data and resources hidden from unauthorized access.",
    "difficulty": "Easy"
  },
  {
    "id": "M4Q10",
    "question": "What is the default port number for HTTP?",
    "options": {
      "a": "21",
      "b": "23",
      "c": "25",
      "d": "80"
    },
    "correct_answer": "d",
    "explanation": "The default port number for HTTP is 80.",
    "difficulty": "Easy"
  },
  {
    "id": "M4Q11",
    "question": "In the TCP/IP stack, what is the process called where data from a higher layer is wrapped inside a header by the next lower layer?",
    "options": {
      "a": "Decapsulation",
      "b": "Segmentation",
      "c": "Encapsulation",
      "d": "Multiplexing"
    },
    "correct_answer": "c",
    "explanation": "Encapsulation is the process where data from a higher layer is wrapped inside a header by the next lower layer.",
    "difficulty": "Medium"
  },
  {
    "id": "M4Q12",
    "question": "A Layer 2 switch is intelligent enough to create separate collision domains for each connected device. What is its limitation regarding broadcast domains?",
    "options": {
      "a": "It creates a separate broadcast domain for each port.",
      "b": "All devices connected to the switch are still in the same broadcast domain.",
      "c": "It eliminates broadcast domains entirely.",
      "d": "It forwards broadcast messages only to the destination device."
    },
    "correct_answer": "b",
    "explanation": "A Layer 2 switch creates separate collision domains but all devices connected to the switch are still in the same broadcast domain.",
    "difficulty": "Medium"
  },
  {
    "id": "M4Q13",
    "question": "In Packet Switching, which approach treats each packet as an independent unit, allowing them to take different routes and arrive out of order?",
    "options": {
      "a": "Virtual Circuit Approach",
      "b": "Circuit Switching Approach",
      "c": "Datagram Approach",
      "d": "Connection-Oriented Approach"
    },
    "correct_answer": "c",
    "explanation": "The Datagram Approach treats each packet as an independent unit, allowing them to take different routes and arrive out of order.",
    "difficulty": "Medium"
  },
  {
    "id": "M4Q14",
    "question": "Which Transport Layer protocol would be most suitable for an application that prioritizes speed and low latency over perfect reliability, such as live video streaming or online gaming?",
    "options": {
      "a": "TCP",
      "b": "UDP",
      "c": "SMTP",
      "d": "HTTP"
    },
    "correct_answer": "b",
    "explanation": "UDP is most suitable for applications that prioritize speed and low latency over perfect reliability, such as live video streaming or online gaming.",
    "difficulty": "Medium"
  },
  {
    "id": "M4Q15",
    "question": "What is the unique characteristic of FTP's connection architecture?",
    "options": {
      "a": "It uses a single UDP connection for both control and data.",
      "b": "It uses two separate TCP connections: one for control commands and one for data transfer.",
      "c": "It uses a single TCP connection for both control and data, but with different port numbers.",
      "d": "It uses a single connectionless protocol for all communications."
    },
    "correct_answer": "b",
    "explanation": "FTP uses two separate TCP connections: one for control commands (port 21) and one for data transfer (port 20).",
    "difficulty": "Medium"
  },
  {
    "id": "M4Q16",
    "question": "What is the primary mechanism used by CSMA/CD to manage access to a shared medium?",
    "options": {
      "a": "Token passing to grant transmission rights.",
      "b": "Listening to the medium before transmitting and detecting collisions while transmitting.",
      "c": "Centralized control by a master device.",
      "d": "Pre-allocating time slots for each device."
    },
    "correct_answer": "b",
    "explanation": "CSMA/CD manages access to a shared medium by listening before transmitting and detecting collisions while transmitting.",
    "difficulty": "Medium"
  },
  {
    "id": "M4Q17",
    "question": "What is the purpose of ARP (Address Resolution Protocol)?",
    "options": {
      "a": "To translate domain names to IP addresses.",
      "b": "To map a known IP address to its corresponding MAC address.",
      "c": "To assign IP addresses dynamically to hosts.",
      "d": "To encrypt communication between two hosts."
    },
    "correct_answer": "b",
    "explanation": "ARP maps a known IP address to its corresponding MAC address on a local network.",
    "difficulty": "Medium"
  },
  {
    "id": "M4Q18",
    "question": "In the DHCP DORA process, which message does a client broadcast to find any available DHCP servers on the network?",
    "options": {
      "a": "DHCPOFFER",
      "b": "DHCPREQUEST",
      "c": "DHCPACK",
      "d": "DHCPDISCOVER"
    },
    "correct_answer": "d",
    "explanation": "In the DHCP DORA process, the client broadcasts a DHCPDISCOVER message to find any available DHCP servers on the network.",
    "difficulty": "Medium"
  },
  {
    "id": "M4Q19",
    "question": "What is the primary function of the Spanning Tree Protocol (STP)?",
    "options": {
      "a": "To encrypt traffic between switches.",
      "b": "To ensure a loop-free topology in bridged Ethernet networks by logically blocking redundant paths.",
      "c": "To dynamically assign IP addresses to switches.",
      "d": "To prioritize traffic based on VLAN tags."
    },
    "correct_answer": "b",
    "explanation": "STP ensures a loop-free topology in bridged Ethernet networks by logically blocking redundant paths.",
    "difficulty": "Medium"
  },
  {
    "id": "M4Q20",
    "question": "What is the \"Hidden Station Problem\" in wireless networks?",
    "options": {
      "a": "A station is physically obstructed from receiving signals.",
      "b": "A node is hidden from another node's transmission, but both communicate with a third node, causing collisions at the receiver.",
      "c": "A station's MAC address is not discoverable.",
      "d": "A station is intentionally not broadcasting its presence."
    },
    "correct_answer": "b",
    "explanation": "The Hidden Station Problem occurs when a node is hidden from another node's transmission, but both communicate with a third node, causing collisions at the receiver.",
    "difficulty": "Medium"
  },
  {
    "id": "M4Q21",
    "question": "What is the primary purpose of Multiplexing at the Physical Layer?",
    "options": {
      "a": "To encrypt data for secure transmission.",
      "b": "To combine multiple signals to be carried simultaneously across a single physical medium.",
      "c": "To detect and correct errors in data transmission.",
      "d": "To convert analog signals to digital data."
    },
    "correct_answer": "b",
    "explanation": "Multiplexing at the Physical Layer combines multiple signals to be carried simultaneously across a single physical medium.",
    "difficulty": "Medium"
  },
  {
    "id": "M4Q22",
    "question": "TCP views data as a continuous, unstructured stream of bytes. What is the implication of this philosophy during retransmission after a packet loss?",
    "options": {
      "a": "TCP must re-send the exact original segments that were lost.",
      "b": "TCP will only re-send the first byte of the lost segment.",
      "c": "TCP can create new segments to re-send the missing range of bytes, not necessarily the original segment boundaries.",
      "d": "TCP will discard the entire stream and restart transmission."
    },
    "correct_answer": "c",
    "explanation": "TCP views data as a continuous byte stream, so it can create new segments to re-send the missing range of bytes, not necessarily the original segment boundaries.",
    "difficulty": "Medium"
  },
  {
    "id": "M4Q23",
    "question": "Silly Window Syndrome is a performance issue in TCP. Which solution, implemented at the receiver, prevents the advertising of tiny window updates?",
    "options": {
      "a": "Nagle's Algorithm",
      "b": "Delayed ACK",
      "c": "Clark's Solution",
      "d": "Jacobson's Algorithm"
    },
    "correct_answer": "c",
    "explanation": "Clark's Solution prevents the advertising of tiny window updates by waiting until a reasonable amount of buffer space is available before advertising.",
    "difficulty": "Hard"
  },
  {
    "id": "M4Q24",
    "question": "Which principle guides TCP's congestion control mechanism, ensuring both efficiency and fairness by slowly increasing the sending rate and drastically cutting it upon detecting congestion?",
    "options": {
      "a": "Max-Min Fairness",
      "b": "Random Early Detection (RED)",
      "c": "Additive Increase, Multiplicative Decrease (AIMD)",
      "d": "Weighted Fair Queuing (WFQ)"
    },
    "correct_answer": "c",
    "explanation": "AIMD (Additive Increase, Multiplicative Decrease) guides TCP's congestion control, ensuring efficiency and fairness by slowly increasing the sending rate and drastically cutting it upon detecting congestion.",
    "difficulty": "Hard"
  },
  {
    "id": "M4Q25",
    "question": "What is the primary purpose of the TCP 3-Way Handshake, particularly concerning the Initial Sequence Number (ISN)?",
    "options": {
      "a": "To encrypt the entire communication session.",
      "b": "To establish a physical circuit between client and server.",
      "c": "To exchange and acknowledge ISNs, ensuring both parties are ready and rejecting delayed duplicate packets.",
      "d": "To negotiate the maximum segment size (MSS) for data transfer."
    },
    "correct_answer": "c",
    "explanation": "The TCP 3-Way Handshake exchanges and acknowledges Initial Sequence Numbers, ensuring both parties are ready and rejecting delayed duplicate packets.",
    "difficulty": "Hard"
  },
  {
    "id": "M4Q26",
    "question": "What was the primary failure of the original Classful IPv4 addressing system?",
    "options": {
      "a": "It did not support multicast addresses.",
      "b": "It was too complex for routers to process.",
      "c": "Its rigid structure led to significant address wastage due to inflexible network block sizes.",
      "d": "It was vulnerable to IP spoofing attacks."
    },
    "correct_answer": "c",
    "explanation": "The rigid structure of Classful IPv4 addressing led to significant address wastage due to inflexible network block sizes.",
    "difficulty": "Hard"
  },
  {
    "id": "M4Q27",
    "question": "A university is allocated the IP block `203.110.0.0/19`. The CSE department needs a subnet for 2000 hosts. Which CIDR prefix would be appropriate for the CSE department's subnet, ensuring minimal waste while accommodating the required hosts?",
    "options": {
      "a": "/20",
      "b": "/21",
      "c": "/22",
      "d": "/23"
    },
    "correct_answer": "b",
    "explanation": "For 2000 hosts, we need at least 11 bits for hosts (2^11 = 2048). A /21 prefix provides 11 host bits, accommodating 2046 usable addresses.",
    "difficulty": "Hard"
  },
  {
    "id": "M4Q28",
    "question": "Beyond addressing IPv4 exhaustion, which key feature is natively integrated into IPv6, eliminating the need for complex overlay solutions like Mobile IP in IPv4?",
    "options": {
      "a": "Classful Addressing",
      "b": "Built-in Mobility",
      "c": "Network Address Translation (NAT)",
      "d": "Broadcast Domains"
    },
    "correct_answer": "b",
    "explanation": "IPv6 has built-in mobility support, eliminating the need for complex overlay solutions like Mobile IP in IPv4.",
    "difficulty": "Hard"
  },
  {
    "id": "M4Q29",
    "question": "Which QoS architecture provides differentiated, class-based QoS by pushing complexity to the network edge and relying on DSCP markings for stateless, per-hop actions in the core?",
    "options": {
      "a": "Integrated Services (IntServ)",
      "b": "Differentiated Services (DiffServ)",
      "c": "Resource Reservation Protocol (RSVP)",
      "d": "Best-Effort Service"
    },
    "correct_answer": "b",
    "explanation": "DiffServ provides differentiated, class-based QoS by pushing complexity to the network edge and relying on DSCP markings for stateless, per-hop actions in the core.",
    "difficulty": "Hard"
  },
  {
    "id": "M4Q30",
    "question": "In BGP, what is the significance of the AS_PATH attribute in preventing routing loops?",
    "options": {
      "a": "It encrypts the routing updates, making them secure.",
      "b": "It ensures that routers always choose the shortest path.",
      "c": "A router rejects any advertised route that already contains its own AS number in the AS_PATH.",
      "d": "It defines the maximum number of hops a route can take."
    },
    "correct_answer": "c",
    "explanation": "A router rejects any advertised route that already contains its own AS number in the AS_PATH, preventing routing loops.",
    "difficulty": "Hard"
  },
  {
    "id": "M5Q1",
    "question": "According to the lecture, what is the primary purpose of a 'Protocol' in computer networks?",
    "options": {
      "a": "To physically connect two computers.",
      "b": "To create a standardized 'language' for communication between network entities.",
      "c": "To determine the fastest path for data transmission.",
      "d": "To convert digital data into analog signals."
    },
    "correct_answer": "b",
    "explanation": "A protocol creates a standardized 'language' for communication between network entities, defining how data is formatted, transmitted, and received.",
    "difficulty": "Easy"
  },
  {
    "id": "M5Q2",
    "question": "Which layer of the TCP/IP model is responsible for providing services directly to end-user applications?",
    "options": {
      "a": "Transport Layer",
      "b": "Network Layer",
      "c": "Application Layer",
      "d": "Physical Layer"
    },
    "correct_answer": "c",
    "explanation": "The Application Layer provides services directly to end-user applications, including protocols like HTTP, FTP, and SMTP.",
    "difficulty": "Easy"
  },
  {
    "id": "M5Q3",
    "question": "What is the universally accepted reference model for discussing and designing network protocols, even if not directly implemented?",
    "options": {
      "a": "TCP/IP Model",
      "b": "OSI Model",
      "c": "ARPANET Model",
      "d": "Ethernet Model"
    },
    "correct_answer": "b",
    "explanation": "The OSI Model is the universally accepted reference model for discussing and designing network protocols, even though the TCP/IP model is what's actually implemented.",
    "difficulty": "Easy"
  },
  {
    "id": "M5Q4",
    "question": "What is the process called where data from a higher layer is wrapped inside a header by the next lower layer?",
    "options": {
      "a": "Decapsulation",
      "b": "Multiplexing",
      "c": "Encapsulation",
      "d": "Segmentation"
    },
    "correct_answer": "c",
    "explanation": "Encapsulation is the process where data from a higher layer is wrapped inside a header by the next lower layer.",
    "difficulty": "Easy"
  },
  {
    "id": "M5Q5",
    "question": "Which networking method establishes a dedicated, end-to-end communication path before data transfer begins?",
    "options": {
      "a": "Packet Switching",
      "b": "Datagram Approach",
      "c": "Circuit Switching",
      "d": "Virtual Circuit Approach"
    },
    "correct_answer": "c",
    "explanation": "Circuit switching establishes a dedicated, end-to-end communication path before any data transfer begins.",
    "difficulty": "Easy"
  },
  {
    "id": "M5Q6",
    "question": "What is the primary function of the Data Link Layer (Layer 2)?",
    "options": {
      "a": "Routing packets between different networks.",
      "b": "Providing end-to-end reliability for applications.",
      "c": "Managing the transfer of data between two directly connected nodes (hop-to-hop).",
      "d": "Converting digital data into analog signals."
    },
    "correct_answer": "c",
    "explanation": "The Data Link Layer manages the transfer of data between two directly connected nodes (hop-to-hop).",
    "difficulty": "Easy"
  },
  {
    "id": "M5Q7",
    "question": "What is the purpose of DNS (Domain Name System)?",
    "options": {
      "a": "To encrypt web traffic.",
      "b": "To translate human-friendly domain names into machine-readable IP addresses.",
      "c": "To manage network congestion.",
      "d": "To assign IP addresses dynamically to devices."
    },
    "correct_answer": "b",
    "explanation": "DNS translates human-friendly domain names into machine-readable IP addresses.",
    "difficulty": "Easy"
  },
  {
    "id": "M5Q8",
    "question": "What is a MAC address primarily used for?",
    "options": {
      "a": "Identifying a host across different networks.",
      "b": "Identifying a specific application on a host.",
      "c": "Identifying a device on a local network segment (LAN).",
      "d": "Encrypting data at the physical layer."
    },
    "correct_answer": "c",
    "explanation": "A MAC address is primarily used for identifying a device on a local network segment (LAN).",
    "difficulty": "Easy"
  },
  {
    "id": "M5Q9",
    "question": "Which of the following is NOT a pillar of the CIA Triad in network security?",
    "options": {
      "a": "Confidentiality",
      "b": "Integrity",
      "c": "Authenticity",
      "d": "Availability"
    },
    "correct_answer": "c",
    "explanation": "Authenticity is not one of the three pillars of the CIA Triad, which are Confidentiality, Integrity, and Availability.",
    "difficulty": "Easy"
  },
  {
    "id": "M5Q10",
    "question": "What is the primary function of the Physical Layer (Layer 1)?",
    "options": {
      "a": "Managing local network traffic.",
      "b": "Routing packets between networks.",
      "c": "Transmitting raw binary data over a physical medium.",
      "d": "Ensuring reliable end-to-end communication."
    },
    "correct_answer": "c",
    "explanation": "The Physical Layer is responsible for transmitting raw binary data over a physical medium.",
    "difficulty": "Easy"
  },
  {
    "id": "M5Q11",
    "question": "What is the main difference between a Collision Domain and a Broadcast Domain?",
    "options": {
      "a": "A Collision Domain is managed by routers, while a Broadcast Domain is managed by switches.",
      "b": "A Collision Domain is where packets can collide, while a Broadcast Domain is where broadcast frames are forwarded.",
      "c": "Collision Domains are for wired networks, Broadcast Domains are for wireless networks.",
      "d": "There is no functional difference; they are interchangeable terms."
    },
    "correct_answer": "b",
    "explanation": "A Collision Domain is where packets can collide, while a Broadcast Domain is where broadcast frames are forwarded.",
    "difficulty": "Medium"
  },
  {
    "id": "M5Q12",
    "question": "Which of the following statements best describes the difference between TCP and UDP?",
    "options": {
      "a": "TCP is connectionless and unreliable, while UDP is connection-oriented and reliable.",
      "b": "TCP provides process-to-process communication, while UDP provides host-to-host communication.",
      "c": "TCP is connection-oriented and reliable, while UDP is connectionless and offers a 'best-effort' service.",
      "d": "TCP uses IP addresses, while UDP uses MAC addresses."
    },
    "correct_answer": "c",
    "explanation": "TCP is connection-oriented and reliable, while UDP is connectionless and offers a 'best-effort' service.",
    "difficulty": "Medium"
  },
  {
    "id": "M5Q13",
    "question": "In the context of the Application Layer, what is the primary role of a 'Port Number'?",
    "options": {
      "a": "To identify the physical network interface card (NIC) of a device.",
      "b": "To uniquely identify a specific application or process on a host computer.",
      "c": "To determine the geographical location of a server.",
      "d": "To encrypt data before transmission."
    },
    "correct_answer": "b",
    "explanation": "A port number uniquely identifies a specific application or process on a host computer at the Application Layer.",
    "difficulty": "Medium"
  },
  {
    "id": "M5Q14",
    "question": "How does CSMA/CD (Carrier Sense Multiple Access with Collision Detection) primarily handle collisions in Ethernet?",
    "options": {
      "a": "It prevents collisions by using a token-passing mechanism.",
      "b": "It detects collisions, sends a jam signal, and then uses a binary exponential backoff algorithm before retransmitting.",
      "c": "It avoids collisions by reserving the channel with RTS/CTS frames.",
      "d": "It ignores collisions and relies on higher layers for error recovery."
    },
    "correct_answer": "b",
    "explanation": "CSMA/CD detects collisions, sends a jam signal, and then uses a binary exponential backoff algorithm before retransmitting.",
    "difficulty": "Medium"
  },
  {
    "id": "M5Q15",
    "question": "What is the main purpose of the Address Resolution Protocol (ARP)?",
    "options": {
      "a": "To translate domain names to IP addresses.",
      "b": "To dynamically map a known IP address to its corresponding MAC address on a local network.",
      "c": "To assign IP addresses to devices during boot-up.",
      "d": "To route packets between different networks."
    },
    "correct_answer": "b",
    "explanation": "ARP dynamically maps a known IP address to its corresponding MAC address on a local network.",
    "difficulty": "Medium"
  },
  {
    "id": "M5Q16",
    "question": "What problem does the Spanning Tree Protocol (STP) solve in a bridged Ethernet network?",
    "options": {
      "a": "It prevents IP address conflicts.",
      "b": "It ensures a loop-free topology by logically blocking redundant paths.",
      "c": "It encrypts traffic between switches.",
      "d": "It dynamically assigns VLANs to devices."
    },
    "correct_answer": "b",
    "explanation": "STP ensures a loop-free topology in a bridged Ethernet network by logically blocking redundant paths.",
    "difficulty": "Medium"
  },
  {
    "id": "M5Q17",
    "question": "Why does IEEE 802.11 (Wi-Fi) use CSMA/CA (Collision Avoidance) instead of CSMA/CD (Collision Detection)?",
    "options": {
      "a": "CSMA/CD is too complex for wireless devices.",
      "b": "It is impractical to detect collisions reliably in a wireless environment due to factors like the hidden station problem.",
      "c": "CSMA/CA offers higher bandwidth than CSMA/CD.",
      "d": "CSMA/CD is only for full-duplex connections, which wireless networks are not."
    },
    "correct_answer": "b",
    "explanation": "It is impractical to detect collisions reliably in a wireless environment due to factors like the hidden station problem, so CSMA/CA is used instead.",
    "difficulty": "Medium"
  },
  {
    "id": "M5Q18",
    "question": "What does the Bandwidth-Delay Product (BDP) represent, and what is its significance?",
    "options": {
      "a": "The maximum data rate of a link; it determines the link's speed.",
      "b": "The total time taken for a packet to travel and for an ACK to return; it defines the feedback loop duration.",
      "c": "The maximum amount of data that can be 'in-flight' on a link at any given time; it measures the 'volume' of the network pipe.",
      "d": "The number of packets a sender can transmit without an acknowledgment; it controls the data flow rate."
    },
    "correct_answer": "c",
    "explanation": "BDP represents the maximum amount of data that can be 'in-flight' on a link at any given time, measuring the 'volume' of the network pipe.",
    "difficulty": "Medium"
  },
  {
    "id": "M5Q19",
    "question": "In TCP's congestion control, what is the core principle of AIMD (Additive Increase, Multiplicative Decrease)?",
    "options": {
      "a": "Increase sending rate exponentially, decrease linearly.",
      "b": "Increase sending rate slowly, but cut it drastically upon detecting congestion.",
      "c": "Decrease sending rate slowly, but increase it drastically upon detecting congestion.",
      "d": "Maintain a constant sending rate regardless of network conditions."
    },
    "correct_answer": "b",
    "explanation": "AIMD increases the sending rate slowly (additively) but cuts it drastically (multiplicatively) upon detecting congestion.",
    "difficulty": "Medium"
  },
  {
    "id": "M5Q20",
    "question": "What is the primary difference between Traffic Policing and Traffic Shaping in QoS?",
    "options": {
      "a": "Policing prioritizes traffic, while shaping encrypts it.",
      "b": "Policing drops excess traffic, while shaping buffers and delays it to smooth the flow.",
      "c": "Policing is for wired networks, while shaping is for wireless networks.",
      "d": "Policing applies to inbound traffic, while shaping applies to outbound traffic."
    },
    "correct_answer": "b",
    "explanation": "Traffic policing drops excess traffic, while traffic shaping buffers and delays it to smooth the flow.",
    "difficulty": "Medium"
  },
  {
    "id": "M5Q21",
    "question": "Which of the following best describes the 'Longest Prefix Match' rule in IP routing?",
    "options": {
      "a": "Routers always choose the path with the fewest hops.",
      "b": "When a destination IP matches multiple entries in a routing table, the router selects the entry with the most specific (longest) matching prefix.",
      "c": "Routers prioritize routes learned from Link-State protocols over Distance Vector protocols.",
      "d": "The router forwards the packet to the default gateway if any match is found."
    },
    "correct_answer": "b",
    "explanation": "Longest Prefix Match selects the entry with the most specific (longest) matching prefix when a destination IP matches multiple entries.",
    "difficulty": "Medium"
  },
  {
    "id": "M5Q22",
    "question": "What is the primary reason for the development and deployment of IPv6?",
    "options": {
      "a": "To improve network security through mandatory encryption.",
      "b": "To overcome the exhaustion of the 32-bit IPv4 address space.",
      "c": "To simplify routing table lookups for routers.",
      "d": "To provide native support for wireless communication."
    },
    "correct_answer": "b",
    "explanation": "The primary reason for IPv6 is to overcome the exhaustion of the 32-bit IPv4 address space.",
    "difficulty": "Medium"
  },
  {
    "id": "M5Q23",
    "question": "In Selective Repeat (SR) ARQ, what is the maximum window size (W) for an n-bit sequence number space?",
    "options": {
      "a": "W < 2^n",
      "b": "W = 2^n",
      "c": "W <= 2^(n-1)",
      "d": "W = 2^(n-1)"
    },
    "correct_answer": "c",
    "explanation": "For Selective Repeat ARQ, the maximum window size must be W <= 2^(n-1) to avoid ambiguity between old and new sequence numbers.",
    "difficulty": "Hard"
  },
  {
    "id": "M5Q24",
    "question": "Nagle's Algorithm and Delayed ACKs can sometimes conflict. What is the primary consequence of this conflict?",
    "options": {
      "a": "Increased network throughput due to more efficient packet packing.",
      "b": "A deadlock-like state causing significant application latency.",
      "c": "Reduced retransmission timeouts, leading to faster error recovery.",
      "d": "Improved fairness among competing TCP flows."
    },
    "correct_answer": "b",
    "explanation": "The conflict between Nagle's Algorithm and Delayed ACKs can cause a deadlock-like state with significant application latency.",
    "difficulty": "Hard"
  },
  {
    "id": "M5Q25",
    "question": "How does the TCP 3-Way Handshake effectively prevent 'delayed duplicate SYN' packets from establishing a false connection?",
    "options": {
      "a": "By using a cryptographic hash of the client's IP address.",
      "b": "By requiring both client and server to agree on unique, non-overlapping Initial Sequence Numbers (ISNs) that are unlikely to match old packets still in the network.",
      "c": "By discarding any SYN packet that arrives after the Maximum Segment Lifetime (MSL).",
      "d": "By encrypting the SYN packets, making them unreadable to old, delayed packets."
    },
    "correct_answer": "b",
    "explanation": "The TCP 3-Way Handshake prevents delayed duplicate SYN packets by requiring unique, non-overlapping Initial Sequence Numbers.",
    "difficulty": "Hard"
  },
  {
    "id": "M5Q26",
    "question": "What is the critical role of the `TIME_WAIT` state during TCP connection termination, particularly for the active closer?",
    "options": {
      "a": "To ensure all data segments are retransmitted before closing the connection.",
      "b": "To keep the port open for a new connection immediately after termination.",
      "c": "To act as a safety net, catching any delayed packets from the server and ensuring the final ACK was received, preventing old duplicates from interfering with a future connection.",
      "d": "To allow the server to send a final 'goodbye' message to the client."
    },
    "correct_answer": "c",
    "explanation": "The TIME_WAIT state catches any delayed packets and ensures the final ACK was received, preventing old duplicates from interfering with future connections.",
    "difficulty": "Hard"
  },
  {
    "id": "M5Q27",
    "question": "According to Jacobson's and Karn's algorithms, how is the Retransmission Timeout (RTO) calculated and managed in TCP?",
    "options": {
      "a": "RTO is a fixed value, typically 3 seconds, for all network conditions.",
      "b": "RTO is based solely on the average Round-Trip Time (RTT), and it's doubled for every retransmission.",
      "c": "Jacobson's algorithm calculates RTO based on Smoothed RTT and its variance, while Karn's algorithm prevents RTT updates from retransmitted packets and uses exponential backoff for RTO on successive retransmissions.",
      "d": "RTO is determined by the receiver's advertised window size and is halved upon packet loss."
    },
    "correct_answer": "c",
    "explanation": "Jacobson's algorithm calculates RTO based on Smoothed RTT and its variance, while Karn's algorithm prevents RTT updates from retransmitted packets and uses exponential backoff for RTO on successive retransmissions.",
    "difficulty": "Hard"
  },
  {
    "id": "M5Q28",
    "question": "Compare the scalability of Integrated Services (IntServ) and Differentiated Services (DiffServ) architectures for QoS.",
    "options": {
      "a": "Both IntServ and DiffServ are highly scalable because they use DSCP marking.",
      "b": "IntServ is highly scalable because it pushes complexity to the network edge, while DiffServ is not scalable due to per-flow state.",
      "c": "DiffServ is highly scalable because core routers only act on traffic classes (aggregate state), whereas IntServ is not scalable due to maintaining per-flow state on every router.",
      "d": "IntServ is more scalable than DiffServ because it uses RSVP for resource reservation."
    },
    "correct_answer": "c",
    "explanation": "DiffServ is highly scalable because core routers only act on traffic classes (aggregate state), whereas IntServ is not scalable due to maintaining per-flow state on every router.",
    "difficulty": "Hard"
  },
  {
    "id": "M5Q29",
    "question": "When a router uses Longest Prefix Match with CIDR, why is it crucial that it selects the entry with the longest matching prefix?",
    "options": {
      "a": "To ensure the packet always takes the shortest physical path.",
      "b": "To reduce the size of the routing table by aggregating routes.",
      "c": "To ensure the packet is sent to the most precise and specific route available, resolving ambiguity when a destination IP matches multiple prefixes.",
      "d": "To prioritize traffic based on its QoS markings."
    },
    "correct_answer": "c",
    "explanation": "Longest Prefix Match ensures the packet is sent to the most precise and specific route available, resolving ambiguity when a destination IP matches multiple prefixes.",
    "difficulty": "Hard"
  },
  {
    "id": "M5Q30",
    "question": "Which of the following accurately compares Distance Vector and Link-State routing protocols regarding convergence and stability?",
    "options": {
      "a": "Distance Vector (e.g., OSPF) converges faster and is more stable, while Link-State (e.g., RIP) is simpler but prone to 'counting to infinity'.",
      "b": "Link-State (e.g., OSPF) converges faster and is more robust by building a global network map, while Distance Vector (e.g., RIP) is simpler but suffers from slow convergence and 'counting to infinity' issues.",
      "c": "Both protocols offer similar convergence and stability, differing only in their metric calculation.",
      "d": "Distance Vector is used for inter-domain routing, and Link-State is for intra-domain routing."
    },
    "correct_answer": "b",
    "explanation": "Link-State protocols (e.g., OSPF) converge faster and are more robust by building a global network map, while Distance Vector protocols (e.g., RIP) are simpler but suffer from slow convergence and 'counting to infinity' issues.",
    "difficulty": "Hard"
  }
];
