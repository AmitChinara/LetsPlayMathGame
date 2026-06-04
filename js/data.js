const gameData = [
{
    question: `Each box contains 6 donuts.<br>If there are 7 boxes, how many donuts are there in total?`,
    slots: [
        { label: "No. of Boxes =", answer: "7" },
        { label: "Donuts per box =", answer: "6" },
        { label: "Total donuts =", answer: "x" },
        { label: "Equation =", answer: "7 × 6 = x" },
        { label: "Solution x =", answer: "42" }
    ],
    options: ["7", "6", "x", "7 × 6 = x", "42", "36", "7 × 5 = x", "6 × 6 = x", "48"]
},
{
    question: `Each team has 5 players.<br>There are 35 players in total.<br>How many teams are there?`,
    slots: [
        { label: "No. of Teams =", answer: "x" },
        { label: "Players per team =", answer: "5" },
        { label: "Total players =", answer: "35" },
        { label: "Equation =", answer: "x × 5 = 35" },
        { label: "Solution x =", answer: "7" }
    ],
    options: ["x", "5", "35", "x × 5 = 35", "7", "6", "x × 6 = 35", "5 × 5 = x", "40"]
},
{
    question: `Each pack has 8 batteries.<br>If you buy 3 packs, how many batteries do you have in total?`,
    slots: [
        { label: "No. of Packs =", answer: "3" },
        { label: "Batteries per pack =", answer: "8" },
        { label: "Total batteries =", answer: "x" },
        { label: "Equation =", answer: "3 × 8 = x" },
        { label: "Solution x =", answer: "24" }
    ],
    options: ["3", "8", "x", "3 × 8 = x", "24", "20", "3 × 7 = x", "8 × 8 = x", "28"]
},
{
    question: `Each row in a theater has 10 seats.<br>There are 90 seats in total.<br>How many rows are there?`,
    slots: [
        { label: "No. of Rows =", answer: "x" },
        { label: "Seats per row =", answer: "10" },
        { label: "Total seats =", answer: "90" },
        { label: "Equation =", answer: "x × 10 = 90" },
        { label: "Solution x =", answer: "9" }
    ],
    options: ["x", "10", "90", "x × 10 = 90", "9", "8", "x × 8 = 90", "10 × 10 = x", "80"]
},
{
    question: `Each notebook costs 4 dollars.<br>If you buy 9 notebooks, what is the total cost?`,
    slots: [
        { label: "No. of Notebooks =", answer: "9" },
        { label: "Cost per notebook =", answer: "4" },
        { label: "Total cost =", answer: "x" },
        { label: "Equation =", answer: "9 × 4 = x" },
        { label: "Solution x =", answer: "36" }
    ],
    options: ["9", "4", "x", "9 × 4 = x", "36", "32", "9 × 5 = x", "4 × 4 = x", "40"]
},
{
    question: `Each car can carry 4 people.<br>There are 24 people in total.<br>How many cars are needed?`,
    slots: [
        { label: "No. of Cars =", answer: "x" },
        { label: "People per car =", answer: "4" },
        { label: "Total people =", answer: "24" },
        { label: "Equation =", answer: "x × 4 = 24" },
        { label: "Solution x =", answer: "6" }
    ],
    options: ["x", "4", "24", "x × 4 = 24", "6", "7", "x × 5 = 24", "4 × 4 = x", "20"]
},
{
    question: `Each nest holds 6 eggs.<br>If there are 5 nests, how many eggs are there in total?`,
    slots: [
        { label: "No. of Nests =", answer: "5" },
        { label: "Eggs per nest =", answer: "6" },
        { label: "Total eggs =", answer: "x" },
        { label: "Equation =", answer: "5 × 6 = x" },
        { label: "Solution x =", answer: "30" }
    ],
    options: ["5", "6", "x", "5 × 6 = x", "30", "24", "5 × 5 = x", "6 × 6 = x", "36"]
},
{
    question: `Each room requires 3 windows.<br>A builder has 27 windows in total.<br>How many rooms can they build?`,
    slots: [
        { label: "No. of Rooms =", answer: "x" },
        { label: "Windows per room =", answer: "3" },
        { label: "Total windows =", answer: "27" },
        { label: "Equation =", answer: "x × 3 = 27" },
        { label: "Solution x =", answer: "9" }
    ],
    options: ["x", "3", "27", "x × 3 = 27", "9", "8", "x × 4 = 27", "3 × 3 = x", "30"]
},
{
    question: `Each crate holds 8 watermelons.<br>If there are 7 crates, how many watermelons are there in total?`,
    slots: [
        { label: "No. of Crates =", answer: "7" },
        { label: "Watermelons per crate =", answer: "8" },
        { label: "Total watermelons =", answer: "x" },
        { label: "Equation =", answer: "7 × 8 = x" },
        { label: "Solution x =", answer: "56" }
    ],
    options: ["7", "8", "x", "7 × 8 = x", "56", "48", "7 × 7 = x", "8 × 8 = x", "64"]
},
{
    question: `Each classroom has 8 tables.<br>There are 72 tables in total across the school.<br>How many classrooms are there?`,
    slots: [
        { label: "No. of Classrooms =", answer: "x" },
        { label: "Tables per classroom =", answer: "8" },
        { label: "Total tables =", answer: "72" },
        { label: "Equation =", answer: "x × 8 = 72" },
        { label: "Solution x =", answer: "9" }
    ],
    options: ["x", "8", "72", "x × 8 = 72", "9", "8", "x × 7 = 72", "8 × 8 = x", "80"]
}
];