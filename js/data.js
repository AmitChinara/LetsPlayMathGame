const gameData = [
{
    question: `
        Each bag contains 5 apples.
        If there are 8 bags, how many apples are there in total?
    `,
    
    slots: [

        {
            label: "No. of Bags =",
            answer: "8"
        },

        {
            label: "Apples per bag =",
            answer: "5"
        },

        {
            label: "Total apples =",
            answer: "x"
        },

        {
            label: "Equation =",
            answer: "8 × 5 = x"
        },

        {
            label: "Solution x =",
            answer: "40"
        }

    ],

    options: [
        "8",
        "5",
        "x",
        "8 × 5 = x",
        "40",

        "35",
        "8 × 4 = x",
        "5 × 5 = x",
        "45"
    ]
},

{
    question: `
        Each chair has 4 legs.
        There are 28 legs in total.
        How many chairs are there?
    `,

    slots: [

        {
            label: "No. of Chairs =",
            answer: "x"
        },

        {
            label: "Legs per chair =",
            answer: "4"
        },

        {
            label: "Total legs =",
            answer: "28"
        },

        {
            label: "Equation =",
            answer: "x × 4 = 28"
        },

        {
            label: "Solution x =",
            answer: "7"
        }

    ],

    options: [
        "x",
        "4",
        "28",
        "x × 4 = 28",
        "7",

        "6",
        "x × 7 = 28",
        "4 × 4 = x",
        "32"
    ]
},

{
    question: `
        Each box contains 9 pencils.
        If there are 4 boxes, how many pencils are there in total?
    `,

    slots: [

        {
            label: "No. of Boxes =",
            answer: "4"
        },

        {
            label: "Pencils per box =",
            answer: "9"
        },

        {
            label: "Total pencils =",
            answer: "x"
        },

        {
            label: "Equation =",
            answer: "4 × 9 = x"
        },

        {
            label: "Solution x =",
            answer: "36"
        }

    ],

    options: [
        "4",
        "9",
        "x",
        "4 × 9 = x",
        "36",

        "32",
        "4 × 8 = x",
        "9 × 9 = x",
        "40"
    ]
},

{
    question: `
        Each week has 7 days.
        There are 49 days in total.
        How many weeks are there?
    `,

    slots: [

        {
            label: "No. of Weeks =",
            answer: "x"
        },

        {
            label: "Days per week =",
            answer: "7"
        },

        {
            label: "Total days =",
            answer: "49"
        },

        {
            label: "Equation =",
            answer: "x × 7 = 49"
        },

        {
            label: "Solution x =",
            answer: "7"
        }

    ],

    options: [
        "x",
        "7",
        "49",
        "x × 7 = 49",
        "7",

        "8",
        "x × 6 = 49",
        "49 × 7 = x",
        "42"
    ]
},

{
    question: `
        Each spider has 8 legs.
        If there are 6 spiders, how many legs are there in total?
    `,

    slots: [

        {
            label: "No. of Spiders =",
            answer: "6"
        },

        {
            label: "Legs per spider =",
            answer: "8"
        },

        {
            label: "Total legs =",
            answer: "x"
        },

        {
            label: "Equation =",
            answer: "6 × 8 = x"
        },

        {
            label: "Solution x =",
            answer: "48"
        }

    ],

    options: [
        "6",
        "8",
        "x",
        "6 × 8 = x",
        "48",

        "40",
        "6 × 7 = x",
        "8 × 8 = x",
        "54"
    ]
},

{
    question: `
        Each bicycle has 2 wheels.
        There are 20 wheels in total.
        How many bicycles are there?
    `,

    slots: [

        {
            label: "No. of Bicycles =",
            answer: "x"
        },

        {
            label: "Wheels per bicycle =",
            answer: "2"
        },

        {
            label: "Total wheels =",
            answer: "20"
        },

        {
            label: "Equation =",
            answer: "x × 2 = 20"
        },

        {
            label: "Solution x =",
            answer: "10"
        }

    ],

    options: [
        "x",
        "2",
        "20",
        "x × 2 = 20",
        "10",

        "8",
        "x × 10 = 20",
        "2 × 2 = x",
        "18"
    ]
},

{
    question: `
        Each shelf holds 7 books.
        If there are 5 shelves, how many books are there in total?
    `,

    slots: [

        {
            label: "No. of Shelves =",
            answer: "5"
        },

        {
            label: "Books per shelf =",
            answer: "7"
        },

        {
            label: "Total books =",
            answer: "x"
        },

        {
            label: "Equation =",
            answer: "5 × 7 = x"
        },

        {
            label: "Solution x =",
            answer: "35"
        }

    ],

    options: [
        "5",
        "7",
        "x",
        "5 × 7 = x",
        "35",

        "30",
        "5 × 6 = x",
        "7 × 7 = x",
        "40"
    ]
},

{
    question: `
        Each packet contains 3 cookies.
        There are 24 cookies in total.
        How many packets are there?
    `,

    slots: [

        {
            label: "No. of Packets =",
            answer: "x"
        },

        {
            label: "Cookies per packet =",
            answer: "3"
        },

        {
            label: "Total cookies =",
            answer: "24"
        },

        {
            label: "Equation =",
            answer: "x × 3 = 24"
        },

        {
            label: "Solution x =",
            answer: "8"
        }

    ],

    options: [
        "x",
        "3",
        "24",
        "x × 3 = 24",
        "8",

        "7",
        "x × 8 = 24",
        "3 × 3 = x",
        "27"
    ]
},

{
    question: `
        Each toy costs 6 dollars.
        If 9 toys are bought, what is the total cost?
    `,

    slots: [

        {
            label: "No. of Toys =",
            answer: "9"
        },

        {
            label: "Cost per toy =",
            answer: "6"
        },

        {
            label: "Total cost =",
            answer: "x"
        },

        {
            label: "Equation =",
            answer: "9 × 6 = x"
        },

        {
            label: "Solution x =",
            answer: "54"
        }

    ],

    options: [
        "9",
        "6",
        "x",
        "9 × 6 = x",
        "54",

        "48",
        "9 × 5 = x",
        "6 × 6 = x",
        "60"
    ]
},

{
    question: `
        Each bus can carry 10 students.
        There are 50 students in total.
        How many buses are needed?
    `,

    slots: [

        {
            label: "No. of Buses =",
            answer: "x"
        },

        {
            label: "Students per bus =",
            answer: "10"
        },

        {
            label: "Total students =",
            answer: "50"
        },

        {
            label: "Equation =",
            answer: "x × 10 = 50"
        },

        {
            label: "Solution x =",
            answer: "5"
        }

    ],

    options: [
        "x",
        "10",
        "50",
        "x × 10 = 50",
        "5",

        "6",
        "x × 5 = 50",
        "10 × 10 = x",
        "40"
    ]
}

];
