const gameData = [
{
    question: `Each bicycle requires 2 wheels.<br>If a factory builds 12 bicycles, how many wheels are needed in total?`,
    slots: [
        { label: "No. of Bicycles =", answer: "12" },
        { label: "Wheels per bicycle =", answer: "2" },
        { label: "Total wheels =", answer: "x" },
        { label: "Equation =", answer: "12 × 2 = x" },
        { label: "Solution x =", answer: "24" }
    ],
    options: ["12", "2", "x", "12 × 2 = x", "24", "22", "12 × 3 = x", "2 × 2 = x", "36"]
},
{
    question: `Each basket holds 5 oranges.<br>There are 40 oranges in total.<br>How many baskets are needed?`,
    slots: [
        { label: "No. of Baskets =", answer: "x" },
        { label: "Oranges per basket =", answer: "5" },
        { label: "Total oranges =", answer: "40" },
        { label: "Equation =", answer: "x × 5 = 40" },
        { label: "Solution x =", answer: "8" }
    ],
    options: ["x", "5", "40", "x × 5 = 40", "8", "7", "x × 4 = 40", "5 × 5 = x", "45"]
},
{
    question: `Each notebook contains 50 pages.<br>If a student buys 3 notebooks, how many pages are there in total?`,
    slots: [
        { label: "No. of Notebooks =", answer: "3" },
        { label: "Pages per notebook =", answer: "50" },
        { label: "Total pages =", answer: "x" },
        { label: "Equation =", answer: "3 × 50 = x" },
        { label: "Solution x =", answer: "150" }
    ],
    options: ["3", "50", "x", "3 × 50 = x", "150", "120", "3 × 40 = x", "50 × 5 = x", "200"]
},
{
    question: `Each bus can carry 30 passengers.<br>There are 120 passengers in total.<br>How many buses are required?`,
    slots: [
        { label: "No. of Buses =", answer: "x" },
        { label: "Passengers per bus =", answer: "30" },
        { label: "Total passengers =", answer: "120" },
        { label: "Equation =", answer: "x × 30 = 120" },
        { label: "Solution x =", answer: "4" }
    ],
    options: ["x", "30", "120", "x × 30 = 120", "4", "5", "x × 20 = 120", "30 × 4 = x", "150"]
},
{
    question: `Each flower bouquet contains 9 roses.<br>If a florist makes 8 bouquets, how many roses are used?`,
    slots: [
        { label: "No. of Bouquets =", answer: "8" },
        { label: "Roses per bouquet =", answer: "9" },
        { label: "Total roses =", answer: "x" },
        { label: "Equation =", answer: "8 × 9 = x" },
        { label: "Solution x =", answer: "72" }
    ],
    options: ["8", "9", "x", "8 × 9 = x", "72", "63", "8 × 8 = x", "9 × 9 = x", "81"]
},
{
    question: `Each movie ticket costs 6 dollars.<br>A family spent 42 dollars in total.<br>How many tickets did they buy?`,
    slots: [
        { label: "No. of Tickets =", answer: "x" },
        { label: "Cost per ticket =", answer: "6" },
        { label: "Total cost =", answer: "42" },
        { label: "Equation =", answer: "x × 6 = 42" },
        { label: "Solution x =", answer: "7" }
    ],
    options: ["x", "6", "42", "x × 6 = 42", "7", "8", "x × 7 = 42", "6 × 6 = x", "48"]
},
{
    question: `Each carton contains 12 eggs.<br>If a farmer packs 6 cartons, how many eggs are packed?`,
    slots: [
        { label: "No. of Cartons =", answer: "6" },
        { label: "Eggs per carton =", answer: "12" },
        { label: "Total eggs =", answer: "x" },
        { label: "Equation =", answer: "6 × 12 = x" },
        { label: "Solution x =", answer: "72" }
    ],
    options: ["6", "12", "x", "6 × 12 = x", "72", "60", "6 × 10 = x", "12 × 12 = x", "84"]
},
{
    question: `Each spider has 8 legs.<br>If there are 11 spiders, how many legs are there altogether?`,
    slots: [
        { label: "No. of Spiders =", answer: "11" },
        { label: "Legs per spider =", answer: "8" },
        { label: "Total legs =", answer: "x" },
        { label: "Equation =", answer: "11 × 8 = x" },
        { label: "Solution x =", answer: "88" }
    ],
    options: ["11", "8", "x", "11 × 8 = x", "88", "80", "11 × 7 = x", "8 × 8 = x", "96"]
},
{
    question: `Each packet contains 4 cookies.<br>There are 36 cookies in total.<br>How many packets are there?`,
    slots: [
        { label: "No. of Packets =", answer: "x" },
        { label: "Cookies per packet =", answer: "4" },
        { label: "Total cookies =", answer: "36" },
        { label: "Equation =", answer: "x × 4 = 36" },
        { label: "Solution x =", answer: "9" }
    ],
    options: ["x", "4", "36", "x × 4 = 36", "9", "8", "x × 3 = 36", "4 × 4 = x", "40"]
},
{
    question: `Each train coach has 20 seats.<br>If a train has 5 coaches, how many seats are there in total?`,
    slots: [
        { label: "No. of Coaches =", answer: "5" },
        { label: "Seats per coach =", answer: "20" },
        { label: "Total seats =", answer: "x" },
        { label: "Equation =", answer: "5 × 20 = x" },
        { label: "Solution x =", answer: "100" }
    ],
    options: ["5", "20", "x", "5 × 20 = x", "100", "80", "5 × 10 = x", "20 × 20 = x", "120"]
},

{
    question: `Each crate contains 15 apples.<br>If there are 6 crates, how many apples are there in total?`,
    slots: [
        { label: "No. of Crates =", answer: "6" },
        { label: "Apples per crate =", answer: "15" },
        { label: "Total apples =", answer: "x" },
        { label: "Equation =", answer: "6 × 15 = x" },
        { label: "Solution x =", answer: "90" }
    ],
    options: ["6", "15", "x", "6 × 15 = x", "90", "75", "6 × 10 = x", "15 × 15 = x", "105"]
},
{
    question: `Each classroom has 25 desks.<br>The school has 100 desks in total.<br>How many classrooms are there?`,
    slots: [
        { label: "No. of Classrooms =", answer: "x" },
        { label: "Desks per classroom =", answer: "25" },
        { label: "Total desks =", answer: "100" },
        { label: "Equation =", answer: "x × 25 = 100" },
        { label: "Solution x =", answer: "4" }
    ],
    options: ["x", "25", "100", "x × 25 = 100", "4", "5", "x × 20 = 100", "25 × 4 = x", "125"]
},
{
    question: `Each jar contains 7 candies.<br>If there are 9 jars, how many candies are there?`,
    slots: [
        { label: "No. of Jars =", answer: "9" },
        { label: "Candies per jar =", answer: "7" },
        { label: "Total candies =", answer: "x" },
        { label: "Equation =", answer: "9 × 7 = x" },
        { label: "Solution x =", answer: "63" }
    ],
    options: ["9", "7", "x", "9 × 7 = x", "63", "56", "9 × 6 = x", "7 × 7 = x", "70"]
},
{
    question: `Each rope is 8 meters long.<br>A worker has 64 meters of rope.<br>How many ropes does he have?`,
    slots: [
        { label: "No. of Ropes =", answer: "x" },
        { label: "Meters per rope =", answer: "8" },
        { label: "Total meters =", answer: "64" },
        { label: "Equation =", answer: "x × 8 = 64" },
        { label: "Solution x =", answer: "8" }
    ],
    options: ["x", "8", "64", "x × 8 = 64", "8", "7", "x × 7 = 64", "8 × 8 = x", "72"]
},
{
    question: `Each bag contains 14 marbles.<br>If there are 5 bags, how many marbles are there altogether?`,
    slots: [
        { label: "No. of Bags =", answer: "5" },
        { label: "Marbles per bag =", answer: "14" },
        { label: "Total marbles =", answer: "x" },
        { label: "Equation =", answer: "5 × 14 = x" },
        { label: "Solution x =", answer: "70" }
    ],
    options: ["5", "14", "x", "5 × 14 = x", "70", "56", "5 × 12 = x", "14 × 14 = x", "84"]
},
{
    question: `Each shelf holds 16 books.<br>There are 80 books in total.<br>How many shelves are needed?`,
    slots: [
        { label: "No. of Shelves =", answer: "x" },
        { label: "Books per shelf =", answer: "16" },
        { label: "Total books =", answer: "80" },
        { label: "Equation =", answer: "x × 16 = 80" },
        { label: "Solution x =", answer: "5" }
    ],
    options: ["x", "16", "80", "x × 16 = 80", "5", "4", "x × 20 = 80", "16 × 5 = x", "96"]
},
{
    question: `Each package contains 18 pencils.<br>If a teacher buys 4 packages, how many pencils are purchased?`,
    slots: [
        { label: "No. of Packages =", answer: "4" },
        { label: "Pencils per package =", answer: "18" },
        { label: "Total pencils =", answer: "x" },
        { label: "Equation =", answer: "4 × 18 = x" },
        { label: "Solution x =", answer: "72" }
    ],
    options: ["4", "18", "x", "4 × 18 = x", "72", "64", "4 × 16 = x", "18 × 4 = x", "90"]
},
{
    question: `Each row has 11 chairs.<br>There are 88 chairs in total.<br>How many rows are there?`,
    slots: [
        { label: "No. of Rows =", answer: "x" },
        { label: "Chairs per row =", answer: "11" },
        { label: "Total chairs =", answer: "88" },
        { label: "Equation =", answer: "x × 11 = 88" },
        { label: "Solution x =", answer: "8" }
    ],
    options: ["x", "11", "88", "x × 11 = 88", "8", "7", "x × 10 = 88", "11 × 8 = x", "99"]
},
{
    question: `Each aquarium contains 13 fish.<br>If there are 7 aquariums, how many fish are there altogether?`,
    slots: [
        { label: "No. of Aquariums =", answer: "7" },
        { label: "Fish per aquarium =", answer: "13" },
        { label: "Total fish =", answer: "x" },
        { label: "Equation =", answer: "7 × 13 = x" },
        { label: "Solution x =", answer: "91" }
    ],
    options: ["7", "13", "x", "7 × 13 = x", "91", "84", "7 × 12 = x", "13 × 7 = x", "104"]
},
{
    question: `Each box holds 24 chocolates.<br>A bakery has 96 chocolates in total.<br>How many boxes are filled?`,
    slots: [
        { label: "No. of Boxes =", answer: "x" },
        { label: "Chocolates per box =", answer: "24" },
        { label: "Total chocolates =", answer: "96" },
        { label: "Equation =", answer: "x × 24 = 96" },
        { label: "Solution x =", answer: "4" }
    ],
    options: ["x", "24", "96", "x × 24 = 96", "4", "5", "x × 20 = 96", "24 × 4 = x", "120"]
}
];
