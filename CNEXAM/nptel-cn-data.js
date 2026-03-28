const NPTEL_CN_DATA = [
  // GATE Computer Networks Questions - Network Layer
  {
    "id": "NCN001",
    "question": "Which of the following routing algorithms can be used for both LAN and WAN routing?",
    "options": {
      "a": "Dijkstra's algorithm",
      "b": "Distance vector routing",
      "c": "Path vector routing",
      "d": "Link state routing"
    },
    "correct_answer": "d",
    "explanation": "Link state routing (OSPF) can be used for both LAN and WAN environments due to its fast convergence and hierarchical scalability."
  },
  {
    "id": "NCN002",
    "question": "The maximum size of IPv4 header is",
    "options": {
      "a": "20 bytes",
      "b": "40 bytes",
      "c": "60 bytes",
      "d": "80 bytes"
    },
    "correct_answer": "c",
    "explanation": "IPv4 header minimum is 20 bytes, maximum is 60 bytes (with options). Header length field is 4 bits, max value 15, multiplied by 4 = 60 bytes."
  },
  {
    "id": "NCN003",
    "question": "In classful addressing, an IP address 128.23.45.67 belongs to",
    "options": {
      "a": "Class A",
      "b": "Class B",
      "c": "Class C",
      "d": "Class D"
    },
    "correct_answer": "b",
    "explanation": "Class B: 128-191. The first octet 128 falls in Class B range (128-191)."
  },
  {
    "id": "NCN004",
    "question": "The subnet mask 255.255.255.224 corresponds to",
    "options": {
      "a": "/24",
      "b": "/25",
      "c": "/26",
      "d": "/27"
    },
    "correct_answer": "d",
    "explanation": "224 in binary is 11100000, meaning 27 bits for network (24 + 3) = /27"
  },
  {
    "id": "NCN005",
    "question": "Which protocol provides error reporting for IP?",
    "options": {
      "a": "IGMP",
      "b": "ICMP",
      "c": "ARP",
      "d": "RARP"
    },
    "correct_answer": "b",
    "explanation": "ICMP (Internet Control Message Protocol) provides error reporting and diagnostic functions for IP."
  },
  // TCP/UDP Transport Layer
  {
    "id": "NCN006",
    "question": "The port number used by HTTP is",
    "options": {
      "a": "20",
      "b": "21",
      "c": "80",
      "d": "443"
    },
    "correct_answer": "c",
    "explanation": "HTTP uses well-known port 80. Port 443 is HTTPS, 20/21 are FTP."
  },
  {
    "id": "NCN007",
    "question": "Which TCP flag is used to terminate a connection gracefully?",
    "options": {
      "a": "SYN",
      "b": "ACK",
      "c": "FIN",
      "d": "RST"
    },
    "correct_answer": "c",
    "explanation": "FIN flag indicates the sender has no more data to send and wants to close the connection gracefully."
  },
  {
    "id": "NCN008",
    "question": "In TCP 3-way handshake, the second packet contains which flags?",
    "options": {
      "a": "SYN only",
      "b": "SYN+ACK",
      "c": "ACK only",
      "d": "FIN+ACK"
    },
    "correct_answer": "b",
    "explanation": "Server responds with SYN+ACK: ACK acknowledges client's SYN, and SYN is server's own synchronization."
  },
  {
    "id": "NCN009",
    "question": "TCP sequence numbers are used to",
    "options": {
      "a": "Identify the connection",
      "b": "Reorder segments and detect duplicates",
      "c": "Encrypt the data",
      "d": "Route packets"
    },
    "correct_answer": "b",
    "explanation": "Sequence numbers allow TCP to reorder out-of-order segments and detect/ignore duplicate segments."
  },
  {
    "id": "NCN010",
    "question": "The sliding window protocol is used for",
    "options": {
      "a": "Error detection",
      "b": "Flow control and reliability",
      "c": "Encryption",
      "d": "Routing"
    },
    "correct_answer": "b",
    "explanation": "Sliding window protocol provides flow control (sender won't overwhelm receiver) and reliability through acknowledgments."
  },
  // Application Layer
  {
    "id": "NCN011",
    "question": "Which protocol uses both TCP and UDP port 53?",
    "options": {
      "a": "HTTP",
      "b": "FTP",
      "c": "DNS",
      "d": "SMTP"
    },
    "correct_answer": "c",
    "explanation": "DNS uses UDP port 53 for queries and TCP port 53 for zone transfers and large responses."
  },
  {
    "id": "NCN012",
    "question": "SMTP is used for",
    "options": {
      "a": "Receiving emails from server",
      "b": "Sending emails to server",
      "c": "Reading emails",
      "d": "Deleting emails"
    },
    "correct_answer": "b",
    "explanation": "SMTP (Simple Mail Transfer Protocol) is used to send/transfer emails to the mail server. POP3/IMAP are for receiving."
  },
  {
    "id": "NCN013",
    "question": "The protocol used for secure web browsing is",
    "options": {
      "a": "HTTP",
      "b": "HTTPS",
      "c": "FTP",
      "d": "TELNET"
    },
    "correct_answer": "b",
    "explanation": "HTTPS (HTTP Secure) uses TLS/SSL encryption on top of HTTP for secure web communications on port 443."
  },
  {
    "id": "NCN014",
    "question": "DHCP stands for",
    "options": {
      "a": "Dynamic Host Control Protocol",
      "b": "Dynamic Host Configuration Protocol",
      "c": "Domain Host Control Protocol",
      "d": "Domain Host Configuration Protocol"
    },
    "correct_answer": "b",
    "explanation": "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and network configuration parameters to devices."
  },
  {
    "id": "NCN015",
    "question": "Which protocol resolves domain names to IP addresses?",
    "options": {
      "a": "DHCP",
      "b": "DNS",
      "c": "ARP",
      "d": "NAT"
    },
    "correct_answer": "b",
    "explanation": "DNS (Domain Name System) translates human-readable domain names (like google.com) to IP addresses."
  },
  // Data Link Layer
  {
    "id": "NCN016",
    "question": "The data link layer is responsible for",
    "options": {
      "a": "End-to-end delivery",
      "b": "Hop-to-hop delivery",
      "c": "Process-to-process delivery",
      "d": "Application-level delivery"
    },
    "correct_answer": "b",
    "explanation": "Data link layer provides hop-to-hop (node-to-node) delivery, while transport layer provides end-to-end delivery."
  },
  {
    "id": "NCN017",
    "question": "CSMA/CD is used in",
    "options": {
      "a": "Token Ring",
      "b": "Ethernet",
      "c": "FDDI",
      "d": "ATM"
    },
    "correct_answer": "b",
    "explanation": "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) is the MAC protocol used in traditional Ethernet."
  },
  {
    "id": "NCN018",
    "question": "The MAC address is of length",
    "options": {
      "a": "32 bits",
      "b": "48 bits",
      "c": "64 bits",
      "d": "128 bits"
    },
    "correct_answer": "b",
    "explanation": "MAC (Media Access Control) addresses are 48 bits (6 bytes) long, typically written as six pairs of hexadecimal digits."
  },
  {
    "id": "NCN019",
    "question": "Which is NOT a function of the data link layer?",
    "options": {
      "a": "Framing",
      "b": "Error control",
      "c": "Routing",
      "d": "Flow control"
    },
    "correct_answer": "c",
    "explanation": "Routing is a network layer function. Data link layer handles framing, error control, and flow control between adjacent nodes."
  },
  {
    "id": "NCN020",
    "question": "The PPP protocol operates at",
    "options": {
      "a": "Physical layer",
      "b": "Data link layer",
      "c": "Network layer",
      "d": "Transport layer"
    },
    "correct_answer": "b",
    "explanation": "PPP (Point-to-Point Protocol) is a data link layer protocol used to establish a direct connection between two nodes."
  },
  // Network Security
  {
    "id": "NCN021",
    "question": "Which provides confidentiality in network security?",
    "options": {
      "a": "Digital signature",
      "b": "Encryption",
      "c": "Hash function",
      "d": "MAC (Message Authentication Code)"
    },
    "correct_answer": "b",
    "explanation": "Encryption transforms plaintext into ciphertext, ensuring that only authorized parties can read the data (confidentiality)."
  },
  {
    "id": "NCN022",
    "question": "RSA is an example of",
    "options": {
      "a": "Symmetric key algorithm",
      "b": "Asymmetric key algorithm",
      "c": "Hash algorithm",
      "d": "Stream cipher"
    },
    "correct_answer": "b",
    "explanation": "RSA is an asymmetric/public-key algorithm that uses a pair of keys: public key for encryption and private key for decryption."
  },
  {
    "id": "NCN023",
    "question": "The purpose of a firewall is to",
    "options": {
      "a": "Speed up network traffic",
      "b": "Filter network traffic based on rules",
      "c": "Encrypt all network data",
      "d": "Assign IP addresses"
    },
    "correct_answer": "b",
    "explanation": "A firewall monitors and filters incoming/outgoing network traffic based on predetermined security rules/policies."
  },
  {
    "id": "NCN024",
    "question": "SSL/TLS operates between which two layers?",
    "options": {
      "a": "Application and Transport",
      "b": "Transport and Network",
      "c": "Network and Data Link",
      "d": "Physical and Data Link"
    },
    "correct_answer": "a",
    "explanation": "SSL/TLS operates between the application layer and transport layer, providing security to application layer protocols."
  },
  {
    "id": "NCN025",
    "question": "A digital signature provides",
    "options": {
      "a": "Only confidentiality",
      "b": "Only integrity",
      "c": "Authentication and non-repudiation",
      "d": "Only availability"
    },
    "correct_answer": "c",
    "explanation": "Digital signatures provide authentication (verifies sender identity) and non-repudiation (sender cannot deny sending)."
  },
  // WiFi and LAN Technologies
  {
    "id": "NCN026",
    "question": "WiFi uses which IEEE standard?",
    "options": {
      "a": "802.3",
      "b": "802.11",
      "c": "802.15",
      "d": "802.16"
    },
    "correct_answer": "b",
    "explanation": "IEEE 802.11 is the standard for wireless LANs (WiFi). 802.3 is Ethernet, 802.15 is Bluetooth, 802.16 is WiMAX."
  },
  {
    "id": "NCN027",
    "question": "The maximum data rate of IEEE 802.11b is",
    "options": {
      "a": "2 Mbps",
      "b": "11 Mbps",
      "c": "54 Mbps",
      "d": "600 Mbps"
    },
    "correct_answer": "b",
    "explanation": "802.11b (released 1999) has a maximum theoretical data rate of 11 Mbps using the 2.4 GHz band."
  },
  {
    "id": "NCN028",
    "question": "Which spread spectrum technique does 802.11b use?",
    "options": {
      "a": "FHSS (Frequency Hopping)",
      "b": "DSSS (Direct Sequence)",
      "c": "THSS (Time Hopping)",
      "d": "CDMA"
    },
    "correct_answer": "b",
    "explanation": "802.11b uses DSSS (Direct Sequence Spread Spectrum) in the 2.4 GHz ISM band."
  },
  {
    "id": "NCN029",
    "question": "CSMA/CA is used in",
    "options": {
      "a": "Wired Ethernet",
      "b": "Wireless LAN",
      "c": "Token Ring",
      "d": "FDDI"
    },
    "correct_answer": "b",
    "explanation": "CSMA/CA (Collision Avoidance) is used in wireless LANs (802.11) because collision detection is difficult in wireless."
  },
  {
    "id": "NCN030",
    "question": "The hidden node problem is associated with",
    "options": {
      "a": "Wired networks",
      "b": "Wireless networks",
      "c": "Optical networks",
      "d": "Satellite networks only"
    },
    "correct_answer": "b",
    "explanation": "Hidden node problem occurs in wireless networks when a node is visible to the access point but not to other nodes."
  },
  // IP Addressing - CIDR and Subnetting
  {
    "id": "NCN031",
    "question": "How many valid host addresses are in a /24 network?",
    "options": {
      "a": "254",
      "b": "256",
      "c": "255",
      "d": "512"
    },
    "correct_answer": "a",
    "explanation": "/24 = 256 total addresses. Subtract 2 (network and broadcast) = 254 valid host addresses."
  },
  {
    "id": "NCN032",
    "question": "A company needs 1000 host addresses. What is the smallest subnet that can accommodate this?",
    "options": {
      "a": "/20",
      "b": "/21",
      "c": "/22",
      "d": "/23"
    },
    "correct_answer": "c",
    "explanation": "/22 provides 1024 addresses (2^10), of which 1022 are usable hosts. 1000 < 1022, so /22 works."
  },
  {
    "id": "NCN033",
    "question": "The CIDR notation for subnet mask 255.255.192.0 is",
    "options": {
      "a": "/16",
      "b": "/17",
      "c": "/18",
      "d": "/19"
    },
    "correct_answer": "c",
    "explanation": "255.255.192.0 = 11111111.11111111.11000000.00000000 = 18 bits set = /18"
  },
  {
    "id": "NCN034",
    "question": "A router receives a packet with destination IP 192.168.1.50. To which network does this belong?",
    "options": {
      "a": "Class A",
      "b": "Class B",
      "c": "Class C",
      "d": "Class D"
    },
    "correct_answer": "c",
    "explanation": "192-223 is Class C range. 192.168.1.50 falls in the Class C private address range (192.168.0.0 - 192.168.255.255)."
  },
  {
    "id": "NCN035",
    "question": "Which IP address can be used as a loopback address?",
    "options": {
      "a": "10.0.0.1",
      "b": "172.16.0.1",
      "c": "127.0.0.1",
      "d": "192.168.1.1"
    },
    "correct_answer": "c",
    "explanation": "127.0.0.1 is the most commonly used loopback address (localhost), representing the local machine."
  },
  // Congestion Control
  {
    "id": "NCN036",
    "question": "TCP uses which algorithm for congestion control?",
    "options": {
      "a": "Go-Back-N",
      "b": "Selective Repeat",
      "c": "Slow Start and Congestion Avoidance",
      "d": "Stop-and-Wait"
    },
    "correct_answer": "c",
    "explanation": "TCP uses Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery algorithms for congestion control."
  },
  {
    "id": "NCN037",
    "question": "In TCP slow start, the congestion window",
    "options": {
      "a": "Decreases exponentially",
      "b": "Increases exponentially",
      "c": "Increases linearly",
      "d": "Remains constant"
    },
    "correct_answer": "b",
    "explanation": "In slow start phase, congestion window doubles for every ACK received (exponential growth) until threshold."
  },
  {
    "id": "NCN038",
    "question": "The AIMD (Additive Increase Multiplicative Decrease) algorithm is used for",
    "options": {
      "a": "Error detection",
      "b": "Flow control",
      "c": "Congestion control",
      "d": "Routing"
    },
    "correct_answer": "c",
    "explanation": "AIMD is a fundamental congestion control algorithm: additively increase window when no loss, multiplicatively decrease when loss detected."
  },
  {
    "id": "NCN039",
    "question": "What happens when TCP receives three duplicate ACKs?",
    "options": {
      "a": "Connection is closed",
      "b": "Fast retransmit is triggered",
      "c": "Window size is doubled",
      "d": "Segment is ignored"
    },
    "correct_answer": "b",
    "explanation": "Three duplicate ACKs indicate a lost segment. TCP performs fast retransmit without waiting for timeout."
  },
  {
    "id": "NCN040",
    "question": "Which is NOT a phase of TCP congestion control?",
    "options": {
      "a": "Slow Start",
      "b": "Congestion Avoidance",
      "c": "Fast Recovery",
      "d": "Fast Forward"
    },
    "correct_answer": "d",
    "explanation": "Fast Forward is not a TCP congestion control phase. The phases are: Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery."
  },
  // IPv6
  {
    "id": "NCN041",
    "question": "IPv6 address length is",
    "options": {
      "a": "32 bits",
      "b": "64 bits",
      "c": "128 bits",
      "d": "256 bits"
    },
    "correct_answer": "c",
    "explanation": "IPv6 addresses are 128 bits long, providing a vastly larger address space than IPv4's 32 bits."
  },
  {
    "id": "NCN042",
    "question": "How many fields are in IPv6 header compared to IPv4?",
    "options": {
      "a": "More than IPv4",
      "b": "Same as IPv4",
      "c": "Fewer than IPv4",
      "d": "Variable"
    },
    "correct_answer": "c",
    "explanation": "IPv6 has a fixed 40-byte header with 8 fields, compared to IPv4's variable 20-60 byte header with 13+ fields."
  },
  {
    "id": "NCN043",
    "question": "IPv6 uses which address notation?",
    "options": {
      "a": "Dotted decimal",
      "b": "Colon hexadecimal",
      "c": "Binary",
      "d": "Octal"
    },
    "correct_answer": "b",
    "explanation": "IPv6 uses colon-hexadecimal notation (e.g., 2001:0db8:85a3::8a2e:0370:7334)."
  },
  {
    "id": "NCN044",
    "question": "The IPv6 loopback address is",
    "options": {
      "a": "::1",
      "b": "::0",
      "c": "::127",
      "d": "::ffff:127.0.0.1"
    },
    "correct_answer": "a",
    "explanation": "::1 (all zeros except last 1) represents the IPv6 loopback address, equivalent to 127.0.0.1 in IPv4."
  },
  {
    "id": "NCN045",
    "question": "IPv6 fragment handling is done by",
    "options": {
      "a": "Routers only",
      "b": "Source and destination only",
      "c": "All intermediate routers",
      "d": "Special fragment routers"
    },
    "correct_answer": "b",
    "explanation": "In IPv6, only source and destination handle fragmentation. Routers do not fragment; they send ICMP 'Packet Too Big' messages."
  },
  // NAT and Private Networks
  {
    "id": "NCN046",
    "question": "NAT stands for",
    "options": {
      "a": "Network Address Translation",
      "b": "Network Authentication Token",
      "c": "Node Address Table",
      "d": "Network Allocation Table"
    },
    "correct_answer": "a",
    "explanation": "NAT (Network Address Translation) translates private IP addresses to public IP addresses for internet communication."
  },
  {
    "id": "NCN047",
    "question": "Which is a Class A private address range?",
    "options": {
      "a": "192.168.0.0 - 192.168.255.255",
      "b": "172.16.0.0 - 172.31.255.255",
      "c": "10.0.0.0 - 10.255.255.255",
      "d": "169.254.0.0 - 169.254.255.255"
    },
    "correct_answer": "c",
    "explanation": "10.0.0.0/8 is the Class A private range. 172.16.0.0/12 is Class B private, 192.168.0.0/16 is Class C private."
  },
  {
    "id": "NCN048",
    "question": "Port Address Translation (PAT) is also known as",
    "options": {
      "a": "Static NAT",
      "b": "Dynamic NAT",
      "c": "NAT Overload",
      "d": "Bidirectional NAT"
    },
    "correct_answer": "c",
    "explanation": "PAT/NAT Overload allows multiple private IP addresses to share a single public IP by using different port numbers."
  },
  {
    "id": "NCN049",
    "question": "Which protocol translates IP addresses to MAC addresses?",
    "options": {
      "a": "DNS",
      "b": "ARP",
      "c": "RARP",
      "d": "DHCP"
    },
    "correct_answer": "b",
    "explanation": "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses on local networks."
  },
  {
    "id": "NCN050",
    "question": "Reverse ARP (RARP) is used to",
    "options": {
      "a": "Find MAC from IP",
      "b": "Find IP from MAC",
      "c": "Find domain from IP",
      "d": "Find port from IP"
    },
    "correct_answer": "b",
    "explanation": "RARP does the reverse of ARP: given a MAC address, it finds the corresponding IP address. (Now largely replaced by DHCP)"
  },
  // Routing Protocols
  {
    "id": "NCN051",
    "question": "RIP is a",
    "options": {
      "a": "Link state protocol",
      "b": "Distance vector protocol",
      "c": "Path vector protocol",
      "d": "Hybrid protocol"
    },
    "correct_answer": "b",
    "explanation": "RIP (Routing Information Protocol) is a distance vector routing protocol using hop count as metric."
  },
  {
    "id": "NCN052",
    "question": "OSPF is a",
    "options": {
      "a": "Distance vector protocol",
      "b": "Link state protocol",
      "c": "Path vector protocol",
      "d": "Static routing protocol"
    },
    "correct_answer": "b",
    "explanation": "OSPF (Open Shortest Path First) is a link state protocol that uses Dijkstra's algorithm to calculate shortest paths."
  },
  {
    "id": "NCN053",
    "question": "BGP is a",
    "options": {
      "a": "Interior gateway protocol",
      "b": "Exterior gateway protocol",
      "c": "Both interior and exterior",
      "d": "Neither"
    },
    "correct_answer": "b",
    "explanation": "BGP (Border Gateway Protocol) is an exterior gateway protocol (EGP) used between different autonomous systems (AS) on the internet."
  },
  {
    "id": "NCN054",
    "question": "The maximum hop count in RIPv1 is",
    "options": {
      "a": "15",
      "b": "16",
      "c": "255",
      "d": "Unlimited"
    },
    "correct_answer": "a",
    "explanation": "RIP has a maximum hop count of 15. 16 hops indicates infinity (unreachable). This limits network diameter."
  },
  {
    "id": "NCN055",
    "question": "Which routing protocol uses Dijkstra's algorithm?",
    "options": {
      "a": "RIP",
      "b": "BGP",
      "c": "OSPF",
      "d": "EIGRP"
    },
    "correct_answer": "c",
    "explanation": "OSPF uses Dijkstra's shortest path first (SPF) algorithm to compute the shortest path tree from source to all destinations."
  },
  // Miscellaneous Networking
  {
    "id": "NCN056",
    "question": "The default port for FTP control connection is",
    "options": {
      "a": "20",
      "b": "21",
      "c": "22",
      "d": "23"
    },
    "correct_answer": "b",
    "explanation": "FTP uses port 21 for control connection (commands) and port 20 for data transfer."
  },
  {
    "id": "NCN057",
    "question": "Telnet operates on port",
    "options": {
      "a": "20",
      "b": "21",
      "c": "22",
      "d": "23"
    },
    "correct_answer": "d",
    "explanation": "Telnet (unsecure remote terminal) uses port 23. SSH (secure alternative) uses port 22."
  },
  {
    "id": "NCN058",
    "question": "POP3 is used for",
    "options": {
      "a": "Sending emails",
      "b": "Receiving emails",
      "c": "Routing emails",
      "d": "Encrypting emails"
    },
    "correct_answer": "b",
    "explanation": "POP3 (Post Office Protocol v3) is used by clients to download/receive emails from the mail server."
  },
  {
    "id": "NCN059",
    "question": "IMAP is preferred over POP3 because",
    "options": {
      "a": "It is faster",
      "b": "It allows synchronization across multiple devices",
      "c": "It uses less bandwidth",
      "d": "It is more secure"
    },
    "correct_answer": "b",
    "explanation": "IMAP keeps emails on the server, enabling access/synchronization across multiple devices. POP3 typically downloads and removes emails."
  },
  {
    "id": "NCN060",
    "question": "SNMP is used for",
    "options": {
      "a": "Sending emails",
      "b": "Network management",
      "c": "File transfer",
      "d": "Web browsing"
    },
    "correct_answer": "b",
    "explanation": "SNMP (Simple Network Management Protocol) is used for monitoring and managing network devices like routers, switches, servers."
  }
];
