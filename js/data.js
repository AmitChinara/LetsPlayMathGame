const gameData = [

{
    question: `
        Har car mein 4 wheels hote hain.
        Agar 9 cars hain, toh total wheels kitne honge?
    `,

    slots: [

        {
            label: "No. of Cars =",
            answer: "9"
        },

        {
            label: "Wheels per car =",
            answer: "4"
        },

        {
            label: "Total wheels =",
            answer: "x"
        },

        {
            label: "Equation =",
            answer: "9 × 4 = x"
        },

        {
            label: "Solution x =",
            answer: "36"
        }

    ],

    options: [

        "9",
        "4",
        "x",
        "9 × 4 = x",
        "36",

        /* Wrong Options */

        "32",
        "9 × 5 = x",
        "4 × 4 = x",
        "40"
    ]
},

{
    question: `
        Har week mein 7 days hote hain.
        Total 35 days hain.
        Kitne weeks hain?
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
            answer: "35"
        },

        {
            label: "Equation =",
            answer: "x × 7 = 35"
        },

        {
            label: "Solution x =",
            answer: "5"
        }

    ],

    options: [

        "x",
        "7",
        "35",
        "x × 7 = 35",
        "5",

        /* Wrong Options */

        "6",
        "x × 5 = 35",
        "35 × 7 = x",
        "49"
    ]
},

{
    question: `
        Har table par 10 cups hain.
        Agar 6 tables hain, toh total cups kitne hain?
    `,

    slots: [

        {
            label: "No. of Tables =",
            answer: "6"
        },

        {
            label: "Cups per table =",
            answer: "10"
        },

        {
            label: "Total cups =",
            answer: "x"
        },

        {
            label: "Equation =",
            answer: "6 × 10 = x"
        },

        {
            label: "Solution x =",
            answer: "60"
        }

    ],

    options: [

        "6",
        "10",
        "x",
        "6 × 10 = x",
        "60",

        /* Wrong Options */

        "50",
        "6 × 6 = x",
        "10 × 10 = x",
        "66"
    ]
},

{
    question: `
        Har spider ke 8 legs hote hain.
        Total 40 legs hain.
        Kitne spiders hain?
    `,

    slots: [

        {
            label: "No. of Spiders =",
            answer: "x"
        },

        {
            label: "Legs per spider =",
            answer: "8"
        },

        {
            label: "Total legs =",
            answer: "40"
        },

        {
            label: "Equation =",
            answer: "x × 8 = 40"
        },

        {
            label: "Solution x =",
            answer: "5"
        }

    ],

    options: [

        "x",
        "8",
        "40",
        "x × 8 = 40",
        "5",

        /* Wrong Options */

        "4",
        "x × 5 = 40",
        "8 × 8 = x",
        "48"
    ]
},

{
    question: `
        Ek box mein 12 crayons hain.
        Agar 3 boxes hain, toh total crayons kitne hain?
    `,

    slots: [

        {
            label: "No. of Boxes =",
            answer: "3"
        },

        {
            label: "Crayons per box =",
            answer: "12"
        },

        {
            label: "Total crayons =",
            answer: "x"
        },

        {
            label: "Equation =",
            answer: "3 × 12 = x"
        },

        {
            label: "Solution x =",
            answer: "36"
        }

    ],

    options: [

        "3",
        "12",
        "x",
        "3 × 12 = x",
        "36",

        /* Wrong Options */

        "24",
        "3 × 10 = x",
        "12 × 12 = x",
        "48"
    ]
},

{
    question: `
        Har bicycle ke 2 tyres hote hain.
        Total 18 tyres hain.
        Kitni bicycles hain?
    `,

    slots: [

        {
            label: "No. of Bicycles =",
            answer: "x"
        },

        {
            label: "Tyres per bicycle =",
            answer: "2"
        },

        {
            label: "Total tyres =",
            answer: "18"
        },

        {
            label: "Equation =",
            answer: "x × 2 = 18"
        },

        {
            label: "Solution x =",
            answer: "9"
        }

    ],

    options: [

        "x",
        "2",
        "18",
        "x × 2 = 18",
        "9",

        /* Wrong Options */

        "8",
        "x × 9 = 18",
        "2 × 2 = x",
        "16"
    ]
}

];
