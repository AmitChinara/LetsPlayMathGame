const questionBox = document.getElementById("questionBox");
const slotsContainer = document.getElementById("slotsContainer");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let completed = 0;

let draggedElement = null;

function shuffle(array){

    for(let i = array.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function loadQuestion(){

    completed = 0;

    nextBtn.disabled = true;
    nextBtn.classList.remove("enabled");

    const q = gameData[currentQuestion];

    questionBox.innerHTML = q.question;

    slotsContainer.innerHTML = "";
    optionsContainer.innerHTML = "";

    // Create slots
    q.slots.forEach(slot => {

        const row = document.createElement("div");
        row.className = "slot-row";

        row.innerHTML = `
            ${slot.label}
            <div class="drop-slot" data-answer="${slot.answer}"></div>
        `;

        slotsContainer.appendChild(row);
    });

    // Create draggable options
    const shuffled = shuffle([...q.options]);

    shuffled.forEach(optionText => {

        const option = document.createElement("div");

        option.className = "option";
        option.draggable = true;
        option.innerText = optionText;

        option.addEventListener("dragstart", () => {
            draggedElement = option;
            option.classList.add("dragging");
        });

        option.addEventListener("dragend", () => {
            option.classList.remove("dragging");
        });

        optionsContainer.appendChild(option);
    });

    setupDropZones();
}

function setupDropZones(){

    const dropSlots = document.querySelectorAll(".drop-slot");

    dropSlots.forEach(slot => {

        slot.addEventListener("dragover", (e) => {
            e.preventDefault();
            slot.classList.add("hover");
        });

        slot.addEventListener("dragleave", () => {
            slot.classList.remove("hover");
        });

        slot.addEventListener("drop", () => {

            slot.classList.remove("hover");

            if(slot.classList.contains("correct")) return;

            const correctAnswer = slot.dataset.answer;
            const draggedValue = draggedElement.innerText;

            if(draggedValue === correctAnswer){

                slot.innerText = draggedValue;

                slot.classList.add("correct");

                draggedElement.classList.add("used");

                completed++;

                checkCompletion();

            } else {

                slot.animate(
                    [
                        { transform: "translateX(0px)" },
                        { transform: "translateX(-8px)" },
                        { transform: "translateX(8px)" },
                        { transform: "translateX(0px)" }
                    ],
                    {
                        duration: 300
                    }
                );
            }
        });

    });
}

function checkCompletion(){

    const q = gameData[currentQuestion];

    if(completed === q.slots.length){

        nextBtn.disabled = false;
        nextBtn.classList.add("enabled");
    }
}

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion >= gameData.length){

        questionBox.innerHTML = "🎉 You completed all questions!";
        slotsContainer.innerHTML = "";
        optionsContainer.innerHTML = "";

        nextBtn.style.display = "none";

        return;
    }

    loadQuestion();
});

loadQuestion();