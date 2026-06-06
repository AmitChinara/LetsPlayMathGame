const gameData = [
{
    question: `Each toy airplane requires 3 batteries.<br>If a kid builds 6 airplanes, how many batteries are needed in total?`,
    slots: [
        { label: "No. of Airplanes =", answer: "6" },
        { label: "Batteries per plane =", answer: "3" },
        { label: "Total batteries =", answer: "x" },
        { label: "Equation =", answer: "6 × 3 = x" },
        { label: "Solution x =", answer: "18" }
    ],
    options: ["6", "3", "x", "6 × 3 = x", "18", "15", "6 × 4 = x", "3 × 3 = x", "24"]
},
{
    question: `Each fish tank can hold 8 goldfishes.<br>An aquarium has 48 goldfishes in total.<br>How many fish tanks are used?`,
    slots: [
        { label: "No. of Tanks =", answer: "x" },
        { label: "Fish per tank =", answer: "8" },
        { label: "Total goldfish =", answer: "48" },
        { label: "Equation =", answer: "x × 8 = 48" },
        { label: "Solution x =", answer: "6" }
    ],
    options: ["x", "8", "48", "x × 8 = 48", "6", "7", "x × 6 = 48", "8 × 8 = x", "40"]
},
{
    question: `Each magic potion requires 5 stardust crystals.<br>If a wizard brews 7 potions, how many crystals does he use in total?`,
    slots: [
        { label: "No. of Potions =", answer: "7" },
        { label: "Crystals per potion =", answer: "5" },
        { label: "Total crystals =", answer: "x" },
        { label: "Equation =", answer: "7 × 5 = x" },
        { label: "Solution x =", answer: "35" }
    ],
    options: ["7", "5", "x", "7 × 5 = x", "35", "30", "7 × 4 = x", "5 × 5 = x", "42"]
},
{
    question: `Each pack contains 10 juice boxes.<br>A birthday party has 70 juice boxes in total.<br>How many packs were bought?`,
    slots: [
        { label: "No. of Packs =", answer: "x" },
        { label: "Juice per pack =", answer: "10" },
        { label: "Total juice boxes =", answer: "70" },
        { label: "Equation =", answer: "x × 10 = 70" },
        { label: "Solution x =", answer: "7" }
    ],
    options: ["x", "10", "70", "x × 10 = 70", "7", "8", "x × 6 = 70", "10 × 10 = x", "60"]
},
{
    question: `Each box of pizza has 8 slices.<br>If a party orders 9 boxes of pizza, how many slices are there in total?`,
    slots: [
        { label: "No. of Boxes =", answer: "9" },
        { label: "Slices per box =", answer: "8" },
        { label: "Total slices =", answer: "x" },
        { label: "Equation =", answer: "9 × 8 = x" },
        { label: "Solution x =", answer: "72" }
    ],
    options: ["9", "8", "x", "9 × 8 = x", "72", "64", "9 × 7 = x", "8 × 8 = x", "80"]
},
{
    question: `Each ice cream cone costs 4 dollars.<br>A group of friends spent 28 dollars in total.<br>How many ice cream cones did they buy?`,
    slots: [
        { label: "No. of Cones =", answer: "x" },
        { label: "Cost per cone =", answer: "4" },
        { label: "Total cost =", answer: "28" },
        { label: "Equation =", answer: "x × 4 = 28" },
        { label: "Solution x =", answer: "7" }
    ],
    options: ["x", "4", "28", "x × 4 = 28", "7", "6", "x × 8 = 28", "4 × 4 = x", "32"]
},
{
    question: `Each set of watercolors has 7 paint tubes.<br>If an art class buys 4 sets, how many paint tubes do they have in total?`,
    slots: [
        { label: "No. of Sets =", answer: "4" },
        { label: "Tubes per set =", answer: "7" },
        { label: "Total tubes =", answer: "x" },
        { label: "Equation =", answer: "4 × 7 = x" },
        { label: "Solution x =", answer: "28" }
    ],
    options: ["4", "7", "x", "4 × 7 = x", "28", "21", "4 × 6 = x", "7 × 7 = x", "35"]
},
{
    question: `Each delivery truck carries 9 large crates.<br>There are 45 crates to deliver in total.<br>How many trucks are needed?`,
    slots: [
        { label: "No. of Trucks =", answer: "x" },
        { label: "Crates per truck =", answer: "9" },
        { label: "Total crates =", answer: "45" },
        { label: "Equation =", answer: "x × 9 = 45" },
        { label: "Solution x =", answer: "5" }
    ],
    options: ["x", "9", "45", "x × 9 = 45", "5", "6", "x × 4 = 45", "9 × 9 = x", "54"]
},
{
    question: `Each branch on an oak tree has 6 acorns.<br>If a squirrel counts 8 branches, how many acorns are there in total?`,
    slots: [
        { label: "No. of Branches =", answer: "8" },
        { label: "Acorns per branch =", answer: "6" },
        { label: "Total acorns =", answer: "x" },
        { label: "Equation =", answer: "8 × 6 = x" },
        { label: "Solution x =", answer: "48" }
    ],
    options: ["8", "6", "x", "8 × 6 = x", "48", "42", "8 × 5 = x", "6 × 6 = x", "54"]
},
{
    question: `Each row in a vegetable garden has 7 tomato plants.<br>There are 63 tomato plants in total.<br>How many rows are in the garden?`,
    slots: [
        { label: "No. of Rows =", answer: "x" },
        { label: "Plants per row =", answer: "7" },
        { label: "Total plants =", answer: "63" },
        { label: "Equation =", answer: "x × 7 = 63" },
        { label: "Solution x =", answer: "9" }
    ],
    options: ["x", "7", "63", "x × 7 = 63", "9", "8", "x × 8 = 63", "7 × 7 = x", "70"]
},
{
    question: `Each picnic table can seat 6 children.<br>If there are 5 picnic tables, how many children can sit in total?`,
    slots: [
        { label: "No. of Tables =", answer: "5" },
        { label: "Children per table =", answer: "6" },
        { label: "Total children =", answer: "x" },
        { label: "Equation =", answer: "5 × 6 = x" },
        { label: "Solution x =", answer: "30" }
    ],
    options: ["5", "6", "x", "5 × 6 = x", "30", "24", "5 × 5 = x", "6 × 6 = x", "36"]
},
{
    question: `Each keychain requires 2 decorative beads.<br>A crafter used 20 beads in total.<br>How many keychains did they make?`,
    slots: [
        { label: "No. of Keychains =", answer: "x" },
        { label: "Beads per keychain =", answer: "2" },
        { label: "Total beads =", answer: "20" },
        { label: "Equation =", answer: "x × 2 = 20" },
        { label: "Solution x =", answer: "10" }
    ],
    options: ["x", "2", "20", "x × 2 = 20", "10", "9", "x × 8 = 20", "2 × 2 = x", "18"]
},
{
    question: `Each bundle of fireworks has 9 sparklers.<br>If you buy 3 bundles, how many sparklers do you have in total?`,
    slots: [
        { label: "No. of Bundles =", answer: "3" },
        { label: "Sparklers per bundle =", answer: "9" },
        { label: "Total sparklers =", answer: "x" },
        { label: "Equation =", answer: "3 × 9 = x" },
        { label: "Solution x =", answer: "27" }
    ],
    options: ["3", "9", "x", "3 × 9 = x", "27", "24", "3 × 8 = x", "9 × 9 = x", "36"]
},
{
    question: `Each gift box requires 5 feet of ribbon.<br>A shop helper has 40 feet of ribbon in total.<br>How many boxes can they wrap?`,
    slots: [
        { label: "No. of Boxes =", answer: "x" },
        { label: "Ribbon per box =", answer: "5" },
        { label: "Total ribbon =", answer: "40" },
        { label: "Equation =", answer: "x × 5 = 40" },
        { label: "Solution x =", answer: "8" }
    ],
    options: ["x", "5", "40", "x × 5 = 40", "8", "7", "x × 7 = 40", "5 × 5 = x", "45"]
},
{
    question: `Each shelf in a display case holds 10 model cars.<br>If there are 4 shelves filled, how many model cars are on display?`,
    slots: [
        { label: "No. of Shelves =", answer: "4" },
        { label: "Cars per shelf =", answer: "10" },
        { label: "Total model cars =", answer: "x" },
        { label: "Equation =", answer: "4 × 10 = x" },
        { label: "Solution x =", answer: "40" }
    ],
    options: ["4", "10", "x", "4 × 10 = x", "40", "30", "4 × 9 = x", "10 × 10 = x", "50"]
}
];
