const PYQS_DATA = [
  {
    "id": 1,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "A computer consists of",
    "options": [
      "A CPU",
      "A memory",
      "Input & Output units",
      "A CPU, A Memory, I/O Units"
    ],
    "answer": "A CPU, A Memory, I/O Units",
    "explanation": "A computer is a complete system comprising CPU (for processing), memory (for storage), and I/O units (for input/output operations)."
  },
  {
    "id": 2,
    "paper": "Nov 2019 Shift 1",
    "topic": "OS/Memory",
    "question": "In paged memory management, a program of size 64 Kilo byte may be distributed across",
    "options": [
      "16 frames of 4 kilo byte each",
      "4 frames of 16 kilo byte each",
      "64 frames of 1 kilo byte each",
      "1 frame of 64 kilo byte each"
    ],
    "answer": "16 frames of 4 kilo byte each",
    "explanation": "64 KB ÷ 4 KB = 16 frames. Paging divides memory into equal-sized frames; 64KB program fits exactly in 16 frames of 4KB each."
  },
  {
    "id": 3,
    "paper": "Nov 2019 Shift 1",
    "topic": "Misc",
    "question": "FORTRAN stands for",
    "options": [
      "For Translation",
      "Format Transformation",
      "Fork Transformation",
      "Formula Translation"
    ],
    "answer": "Formula Translation",
    "explanation": "FORTRAN = FORmula TRANslation, one of the oldest high-level programming languages developed by IBM in the 1950s."
  },
  {
    "id": 4,
    "paper": "Nov 2019 Shift 1",
    "topic": "OS/Memory",
    "question": "The main function of the command interpreter is",
    "options": [
      "To get and execute the next user-specified command",
      "To provide the interface between the API and application program",
      "To handle the files in operating system",
      "None of the given"
    ],
    "answer": "To get and execute the next user-specified command",
    "explanation": "The command interpreter (shell) reads and executes commands entered by the user, acting as the interface between user and OS."
  },
  {
    "id": 5,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "Which electronic components are used in Third Generation Computers?",
    "options": [
      "Transistors",
      "Integrated Circuits",
      "Vacuum Tubes",
      "VLSI Microprocessor"
    ],
    "answer": "Integrated Circuits",
    "explanation": "3rd generation computers (1964–1971) used Integrated Circuits (ICs). 1st gen = Vacuum Tubes, 2nd gen = Transistors, 4th gen = VLSI."
  },
  {
    "id": 6,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "A FireWire card is used to provide a port to the PC",
    "options": [
      "COM",
      "USB",
      "Audio",
      "Video"
    ],
    "answer": "USB",
    "explanation": "FireWire (IEEE 1394) provides a high-speed serial bus interface, commonly used as an alternative to USB for connecting peripherals."
  },
  {
    "id": 7,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "Which is used for manufacturing chips",
    "options": [
      "Semiconductors",
      "Copper",
      "Glass fiber",
      "Silver"
    ],
    "answer": "Semiconductors",
    "explanation": "Chips (integrated circuits) are manufactured using semiconductor materials, primarily silicon, due to their controllable electrical properties."
  },
  {
    "id": 8,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "A CPU cabinet consists of power supply called",
    "options": [
      "DC power supply",
      "AC power supply",
      "SMPS power supply",
      "Adaptor power supply"
    ],
    "answer": "SMPS power supply",
    "explanation": "SMPS (Switched-Mode Power Supply) is used in CPU cabinets as it efficiently converts AC mains to the DC voltages needed by computer components."
  },
  {
    "id": 9,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "The Brain of computer is",
    "options": [
      "LED",
      "CRT",
      "CPU",
      "ALU"
    ],
    "answer": "CPU",
    "explanation": "The CPU (Central Processing Unit) is called the brain of the computer because it performs all major computations and controls all other components."
  },
  {
    "id": 10,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "In a motherboard expansion slots are provided for",
    "options": [
      "To add extra cards",
      "Speed up the process",
      "Increase Cost",
      "No slots provided"
    ],
    "answer": "To add extra cards",
    "explanation": "Expansion slots (PCIe, PCI) on motherboards allow users to add additional hardware cards like GPU, sound card, NIC to extend functionality."
  },
  {
    "id": 11,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "Joysticks typically have a button on _____ that is used to select the option pointed by the cursor",
    "options": [
      "Bottom",
      "Left",
      "Right",
      "Top"
    ],
    "answer": "Top",
    "explanation": "Joysticks typically have a button on top (fire button) used to select or confirm the option pointed by the cursor."
  },
  {
    "id": 12,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "A set of rules that governs data communication",
    "options": [
      "RFCs",
      "Standards",
      "Protocols",
      "None of the mentioned"
    ],
    "answer": "Protocols",
    "explanation": "A protocol is a defined set of rules and conventions governing how data is transmitted between devices in a network (e.g., TCP/IP, HTTP)."
  },
  {
    "id": 13,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "Which is a device used for converting handwritten impressions into coded characters & positional coordinates for input to a computer?",
    "options": [
      "Touch panel",
      "Writing tablet",
      "Wand",
      "Mouse"
    ],
    "answer": "Writing tablet",
    "explanation": "A writing tablet (digitizer tablet) converts handwritten or drawn input into digital coordinates and coded characters for computer input."
  },
  {
    "id": 14,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "In microwave communication a transmitter and receiver should be",
    "options": [
      "Aligned",
      "Not aligned",
      "Close",
      "Not more than 10 mtrs"
    ],
    "answer": "Aligned",
    "explanation": "Microwave communication uses line-of-sight transmission, requiring the transmitter and receiver to be precisely aligned for the signal to travel between them."
  },
  {
    "id": 15,
    "paper": "Nov 2019 Shift 1",
    "topic": "OS/Memory",
    "question": "Which of the following is NOT an operating system?",
    "options": [
      "Linux",
      "Microsoft Word",
      "Microsoft Vista",
      "Mac Os X"
    ],
    "answer": "Microsoft Word",
    "explanation": "Microsoft Word is a word processing application, not an OS. Linux, Microsoft Vista, and Mac OS X are all operating systems."
  },
  {
    "id": 16,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Which one of the following extends a private network across public networks?",
    "options": [
      "Local area network",
      "Enterprise private network",
      "Virtual private network",
      "Storage area network"
    ],
    "answer": "Virtual private network",
    "explanation": "A VPN (Virtual Private Network) extends a private network across public networks like the internet, enabling secure remote access."
  },
  {
    "id": 17,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "These wireless keyboard or mouse are powered by batteries and transmit data via infrared radiation using ________ technology",
    "options": [
      "iRDA",
      "i Tech",
      "Not possible",
      "VLAN"
    ],
    "answer": "iRDA",
    "explanation": "IrDA (Infrared Data Association) is the standard technology used by wireless keyboards and mice that transmit data via infrared radiation."
  },
  {
    "id": 18,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "How many layers does OSI Reference Model have?",
    "options": [
      "4",
      "5",
      "7",
      "6"
    ],
    "answer": "7",
    "explanation": "The OSI (Open Systems Interconnection) model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application."
  },
  {
    "id": 19,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "Optical Mark Readers are capable of detecting marks made by the user on a sheet of paper",
    "options": [
      "ICR",
      "Optical Mark Readers",
      "MMR",
      "None"
    ],
    "answer": "Optical Mark Readers",
    "explanation": "OMR (Optical Mark Readers) detect pencil or pen marks on specially designed forms, commonly used in multiple-choice answer sheets."
  },
  {
    "id": 20,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "IPv4 Address is",
    "options": [
      "8 bit",
      "16 bit",
      "32 bit",
      "64 bit"
    ],
    "answer": "32 bit",
    "explanation": "IPv4 addresses are 32-bit numbers, typically written as four octets in dotted-decimal notation (e.g., 192.168.1.1)."
  },
  {
    "id": 21,
    "paper": "Nov 2019 Shift 1",
    "topic": "Misc",
    "question": "First camcorder based on the compact _______ format",
    "options": [
      "VHS",
      "VHS-C",
      "NTSC",
      "PAL"
    ],
    "answer": "VHS-C",
    "explanation": "The first camcorder based on the compact VHS-C (VHS Compact) format was introduced, providing a smaller cassette size compatible with standard VHS."
  },
  {
    "id": 22,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "LAN will span a group of computers",
    "options": [
      "In a building",
      "Nearby buildings",
      "In a City",
      "Nearby Cities"
    ],
    "answer": "In a building",
    "explanation": "A LAN (Local Area Network) typically spans a small geographic area such as a single building, floor, or office."
  },
  {
    "id": 24,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "In the OSI model, as a data packet moves from the lower to the upper layers, headers are",
    "options": [
      "Added",
      "Removed",
      "Rearranged",
      "None of the given"
    ],
    "answer": "Removed",
    "explanation": "During de-encapsulation (receiver side), as data moves up from physical to application layer, headers added at each layer are progressively removed."
  },
  {
    "id": 25,
    "paper": "Nov 2019 Shift 1",
    "topic": "OS/Memory",
    "question": "Memories in which any location can be reached in a fixed (and short) amount of time after specifying its address is called",
    "options": [
      "Sequential-access memory",
      "Random-access memory",
      "Secondary memory",
      "Mass Storage"
    ],
    "answer": "Random-access memory",
    "explanation": "RAM (Random Access Memory) allows any memory location to be accessed in a fixed, constant time regardless of its physical location."
  },
  {
    "id": 26,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "A computer with network interface card and media used for communication is known as",
    "options": [
      "Node",
      "Workstation",
      "Terminal",
      "All the given"
    ],
    "answer": "Node",
    "explanation": "A node is any device connected to a network that can send, receive, or forward data. It typically has a NIC and communication media."
  },
  {
    "id": 27,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "Binary coded decimal (BCD) numbers express each decimal digit as",
    "options": [
      "Binary digits",
      "Nibble",
      "Digits and strings",
      "Byte"
    ],
    "answer": "Nibble",
    "explanation": "BCD represents each decimal digit (0-9) using 4 binary bits, which is exactly a nibble (half a byte = 4 bits)."
  },
  {
    "id": 28,
    "paper": "Nov 2019 Shift 1",
    "topic": "OS/Memory",
    "question": "The ________ operating system facilitates tools to share server resources and information with network workstation",
    "options": [
      "Client",
      "Network",
      "DOS",
      "Windows 3.1"
    ],
    "answer": "Network",
    "explanation": "A Network Operating System (NOS) provides services to manage and share resources like files and printers across networked workstations."
  },
  {
    "id": 30,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Which type of adapter is needed to connect to the ISDN line?",
    "options": [
      "SIM",
      "Modem",
      "ISDN",
      "All the given"
    ],
    "answer": "ISDN",
    "explanation": "An ISDN Terminal Adapter (TA) is needed to connect a computer to an ISDN (Integrated Services Digital Network) line."
  },
  {
    "id": 31,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "OLED stands for",
    "options": [
      "Organic light emitting diode",
      "Orange light emitting diode",
      "Oval light emitting diode",
      "Oscar light emitting diode"
    ],
    "answer": "Organic light emitting diode",
    "explanation": "OLED = Organic Light Emitting Diode. It uses organic compounds that emit light when electricity is applied, used in modern displays."
  },
  {
    "id": 32,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "After installation of network card in the computer system, it needs",
    "options": [
      "IRQ addresses",
      "Memory I/O addresses",
      "IRQ and memory I/O addresses",
      "None of the given"
    ],
    "answer": "IRQ and memory I/O addresses",
    "explanation": "A network card requires both IRQ (Interrupt Request) addresses for processor communication and memory I/O addresses for data transfer."
  },
  {
    "id": 34,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "In OSI model data, encryption/decryption will take place at",
    "options": [
      "Application layer",
      "Presentation layer",
      "Data Link layer",
      "None of the given"
    ],
    "answer": "Presentation layer",
    "explanation": "The Presentation layer (Layer 6) of OSI handles data encryption/decryption, compression, and translation between different data formats."
  },
  {
    "id": 35,
    "paper": "Nov 2019 Shift 1",
    "topic": "OS/Memory",
    "question": "The Boot process is that a part of the operating system permanently resides in the read only memory of the computer system",
    "options": [
      "Image",
      "Boot",
      "Word",
      "POST"
    ],
    "answer": "Boot",
    "explanation": "The boot process loads the OS from storage into RAM. Part of OS (bootstrap loader) permanently resides in ROM/BIOS."
  },
  {
    "id": 36,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "The connections between two devices/NODES are done by a",
    "options": [
      "Cable media or wireless media",
      "Not Possible",
      "Fire wall",
      "Memory"
    ],
    "answer": "Cable media or wireless media",
    "explanation": "Nodes in a network are connected via either wired media (coaxial, twisted pair, fiber optic) or wireless media (radio waves, infrared)."
  },
  {
    "id": 38,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "A full-duplex connection is a connection in which the data flows in",
    "options": [
      "Both directions simultaneously",
      "One direction",
      "No data flow",
      "None of the given"
    ],
    "answer": "Both directions simultaneously",
    "explanation": "Full-duplex allows simultaneous two-way data transmission. Both sender and receiver can transmit at the same time (e.g., telephone calls)."
  },
  {
    "id": 40,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "The most common type of connector used with coaxial cables is",
    "options": [
      "RJ45 connector",
      "Bayone-Neill-Concelman connector",
      "Style connector",
      "RJ11"
    ],
    "answer": "Bayone-Neill-Concelman connector",
    "explanation": "BNC (Bayonet Neill-Concelman) connector is the standard connector used with coaxial cables in networking and RF applications."
  },
  {
    "id": 41,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "At which frequency range does Bluetooth operate?",
    "options": [
      "2.35 GHz",
      "2.45 GHz",
      "2.55 GHz",
      "None of the given"
    ],
    "answer": "2.45 GHz",
    "explanation": "Bluetooth operates in the ISM band at 2.45 GHz (2.402–2.480 GHz). It uses frequency hopping spread spectrum to avoid interference."
  },
  {
    "id": 43,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Which is the most popular network service?",
    "options": [
      "HTTP",
      "FTP",
      "E-mail",
      "None of the given"
    ],
    "answer": "E-mail",
    "explanation": "E-mail (Electronic Mail) is widely considered the most popular and widely used network service globally."
  },
  {
    "id": 44,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "HTTP is used to do which of the following?",
    "options": [
      "Resolve Internet names to IP addresses",
      "Provide remote access to servers and networking devices",
      "Transfer files that make up the web pages of the World Wide Web",
      "Transfer the mail messages and attachments"
    ],
    "answer": "Transfer files that make up the web pages of the World Wide Web",
    "explanation": "HTTP (HyperText Transfer Protocol) is the foundation of data communication for the WWW, used to transfer HTML files and web page resources."
  },
  {
    "id": 45,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Transport layer is responsible for process-to-process delivery of the",
    "options": [
      "Message",
      "Entire Message",
      "Half Message",
      "None of the given"
    ],
    "answer": "Entire Message",
    "explanation": "The Transport layer ensures end-to-end, process-to-process delivery of the entire message, providing reliability through segmentation and reassembly."
  },
  {
    "id": 47,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Which one of the following is a transport layer protocol used in internet?",
    "options": [
      "TCP",
      "UDP",
      "TCP & UDP both",
      "None of the given"
    ],
    "answer": "TCP & UDP both",
    "explanation": "Both TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) operate at the Transport layer of the Internet model."
  },
  {
    "id": 48,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "A Repeater regenerates a signal, connects segments of a LAN, and has no filtering capability",
    "options": [
      "Repeater",
      "Bridge",
      "Router",
      "None of the given"
    ],
    "answer": "Repeater",
    "explanation": "A repeater amplifies/regenerates signals to extend network range. It has no filtering capability and connects LAN segments at the physical layer."
  },
  {
    "id": 49,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "A ________ can check the MAC addresses contained in the frame",
    "options": [
      "Passive hub",
      "Repeater",
      "Bridge",
      "None of the given"
    ],
    "answer": "Bridge",
    "explanation": "A bridge operates at the Data Link layer and can inspect MAC addresses in frames to decide whether to forward or filter traffic."
  },
  {
    "id": 50,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "RFID is the abbreviation for",
    "options": [
      "Radio Frequency Identification",
      "Radar Frequency Identification",
      "Remote Frequency Identification",
      "None of the given"
    ],
    "answer": "Radio Frequency Identification",
    "explanation": "RFID = Radio Frequency Identification. It uses electromagnetic fields to automatically identify and track tags attached to objects."
  },
  {
    "id": 51,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "An RFID tag that generates and transmits an outgoing signal to a RFID tag reader is known as",
    "options": [
      "Semi Passive RFID Tags",
      "Active RFID Tags",
      "Passive RFID Tags",
      "None of the given"
    ],
    "answer": "Active RFID Tags",
    "explanation": "Active RFID tags have their own power source (battery) and continuously broadcast signals to RFID readers, unlike passive tags."
  },
  {
    "id": 52,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Name IEEE standard for Bluetooth?",
    "options": [
      "802.11",
      "802.5",
      "802.15",
      "None of the given"
    ],
    "answer": "802.15",
    "explanation": "Bluetooth is standardized under IEEE 802.15. Note: 802.11 is WiFi, 802.5 is Token Ring. 802.15 is the correct Bluetooth standard."
  },
  {
    "id": 53,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Radio frequency identification (RFID) is one of the method for",
    "options": [
      "Signal Detection",
      "Automatic Identification and Data Capture",
      "Only Data Capture",
      "None of the given"
    ],
    "answer": "Automatic Identification and Data Capture",
    "explanation": "RFID is used for Automatic Identification and Data Capture (AIDC), automatically identifying objects, collecting data without manual entry."
  },
  {
    "id": 54,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Which one is a type of Networking?",
    "options": [
      "WAN",
      "Ethernet",
      "Data Link",
      "None of the given"
    ],
    "answer": "WAN",
    "explanation": "WAN (Wide Area Network) is a type of network. Ethernet is a networking technology/standard, and Data Link is an OSI layer, not a network type."
  },
  {
    "id": 56,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "In Polling technique, if there is no data, usually a __________ message is sent back",
    "options": [
      "Poll Eject",
      "Poll reject",
      "Pool reject",
      "None of the given"
    ],
    "answer": "Poll reject",
    "explanation": "In polling, when a polled device has no data to send, it responds with a 'Poll reject' (or NAK) message to indicate no data available."
  },
  {
    "id": 57,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "CSMA/CD is abbreviation of",
    "options": [
      "Career Sensed Multiple Access with Corrected Data",
      "Carrier Sense Multiple Access with Correction Detection",
      "Carrier Sensed Multiple Access with Collision Detection",
      "None of the given"
    ],
    "answer": "Carrier Sensed Multiple Access with Collision Detection",
    "explanation": "CSMA/CD is the MAC protocol used in Ethernet. Devices sense the carrier before transmitting and detect collisions during transmission."
  },
  {
    "id": 58,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Which layer translates between physical (MAC) and logical addresses?",
    "options": [
      "Network",
      "Data link",
      "Transport",
      "Physical"
    ],
    "answer": "Network",
    "explanation": "The Network layer (Layer 3) uses ARP to translate between logical IP addresses and physical MAC addresses for routing purposes."
  },
  {
    "id": 59,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "3G Mobile Network Transmission speed is from",
    "options": [
      "100kbps to 2Mbps",
      "125kbps to 2Mbps",
      "150kbps to 2Mbps",
      "None of the given"
    ],
    "answer": "150kbps to 2Mbps",
    "explanation": "3G networks provide data rates from 144 kbps to 2 Mbps. Of the given options, 150kbps to 2Mbps is the closest match."
  },
  {
    "id": 60,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Speed of EDGE (Enhanced Data rates for GSM Evolution) is ______ as compared to 3G Network",
    "options": [
      "Slower",
      "Faster",
      "Equal",
      "None of the given"
    ],
    "answer": "Slower",
    "explanation": "EDGE is a 2.75G technology with max ~384 Kbps, which is slower than 3G's 2 Mbps maximum speed."
  },
  {
    "id": 61,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Short Message Service (SMS) character limit is",
    "options": [
      "140 characters",
      "150 characters",
      "160 characters",
      "None of the given"
    ],
    "answer": "160 characters",
    "explanation": "SMS has a maximum character limit of 160 characters when using the GSM 7-bit default encoding standard."
  },
  {
    "id": 62,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "What are the two variations of dial-up remote access?",
    "options": [
      "Cable and ISDN",
      "ISDN and ISP",
      "ISDN and PSTN",
      "ISP and PSTN"
    ],
    "answer": "ISDN and PSTN",
    "explanation": "The two main dial-up remote access technologies are ISDN (Integrated Services Digital Network) and PSTN (Public Switched Telephone Network)."
  },
  {
    "id": 63,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "What type of connectors are used on PSTN lines?",
    "options": [
      "BNC",
      "RJ-11",
      "RJ-45",
      "Wireless"
    ],
    "answer": "RJ-11",
    "explanation": "RJ-11 connectors are used for PSTN telephone lines (standard phone jacks). RJ-45 is used for Ethernet network connections."
  },
  {
    "id": 64,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Frequency range in FM is",
    "options": [
      "88 to 108 kHz",
      "530 to 1700 kHz",
      "88 to 108 MHz",
      "None of the given"
    ],
    "answer": "88 to 108 MHz",
    "explanation": "FM radio broadcasts in the frequency range of 88 to 108 MHz (megahertz), not kilohertz."
  },
  {
    "id": 65,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "A type of modulation where the frequency of the carrier signal is modulated",
    "options": [
      "Phase modulation",
      "Frequency modulation",
      "Amplitude modulation",
      "None of the given"
    ],
    "answer": "Frequency modulation",
    "explanation": "In Frequency Modulation (FM), the frequency of the carrier signal varies in proportion to the instantaneous amplitude of the message signal."
  },
  {
    "id": 67,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "The method of communication in which transmission takes place in both directions, but only in one direction at a time is called",
    "options": [
      "Simplex",
      "Full duplex",
      "Half duplex",
      "None of the given"
    ],
    "answer": "Half duplex",
    "explanation": "Half-duplex allows two-way communication but only one direction at a time (e.g., walkie-talkie). Full duplex allows simultaneous both ways."
  },
  {
    "id": 69,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Industry specification that describes how mobile phones, computers, and PDAs can easily interconnect using a short-range wireless connection",
    "options": [
      "Bluetooth",
      "EMI",
      "D-AMPS",
      "None of the given"
    ],
    "answer": "Bluetooth",
    "explanation": "Bluetooth (IEEE 802.15.1) is the industry specification enabling short-range wireless interconnection between mobile devices, computers, and PDAs."
  },
  {
    "id": 70,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Which is a faster version of GSM wireless service designed to deliver data at rates up to 384 Kbps?",
    "options": [
      "ESMR",
      "BREW",
      "EDGE",
      "None of the given"
    ],
    "answer": "EDGE",
    "explanation": "EDGE (Enhanced Data rates for GSM Evolution) delivers data up to 384 Kbps, making it significantly faster than standard GPRS GSM service."
  },
  {
    "id": 71,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "How many layers are present in OSI Reference Model?",
    "options": [
      "5",
      "6",
      "7",
      "None of the given"
    ],
    "answer": "7",
    "explanation": "The OSI Reference Model has exactly 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application layers."
  },
  {
    "id": 72,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "The physical layer and data-link layer are implemented in",
    "options": [
      "Hardware",
      "Software",
      "Hardware and software",
      "None of the given"
    ],
    "answer": "Hardware",
    "explanation": "The Physical and Data Link layers are primarily implemented in hardware (NIC, switches, hubs), while upper layers are implemented in software."
  },
  {
    "id": 76,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "In the late 1950s, early networks of communicating computers included the military radar system",
    "options": [
      "ARPANET",
      "Semi-Automatic Business Research Environment (SABRE)",
      "Semi-Automatic Ground Environment (SAGE)",
      "None of the given"
    ],
    "answer": "Semi-Automatic Ground Environment (SAGE)",
    "explanation": "SAGE (Semi-Automatic Ground Environment) was a US Air Force computer network from the late 1950s, one of the earliest large-scale computer networks."
  },
  {
    "id": 77,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Which frame completes entries in switching tables",
    "options": [
      "Acknowledgment frame",
      "Setup frame",
      "Routing frame",
      "None of the given"
    ],
    "answer": "Setup frame",
    "explanation": "In ATM and virtual circuit switching, setup frames (connection setup messages) are used to create entries in switching tables."
  },
  {
    "id": 79,
    "paper": "Nov 2019 Shift 1",
    "topic": "Networking",
    "question": "Which of the following is not a Networking Device?",
    "options": [
      "Hub",
      "NIC",
      "Linux",
      "Switch"
    ],
    "answer": "Linux",
    "explanation": "Linux is an operating system, not a networking device. Hub, NIC (Network Interface Card), and Switch are all networking hardware devices."
  },
  {
    "id": 80,
    "paper": "Nov 2019 Shift 1",
    "topic": "Hardware",
    "question": "Computer was invented by",
    "options": [
      "Charles Darwin",
      "Charles Babbage",
      "Alan Turing",
      "John von Neumann"
    ],
    "answer": "Charles Babbage",
    "explanation": "Charles Babbage is considered the 'father of the computer' for designing the Analytical Engine and Difference Engine in the 1800s."
  }
];
