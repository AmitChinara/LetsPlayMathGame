const questionBox = document.getElementById("questionBox");
const slotsContainer = document.getElementById("slotsContainer");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");

// Arena Elements
const boss = document.getElementById("boss");
const projectile = document.getElementById("projectile");
const fireball = document.getElementById("fireball");
const playerNameSpan = document.getElementById("playerName");

let currentQuestion = 0;
let completed = 0;
let draggedElement = null;

let gameActive = true;
let walkInterval = null;
let bossRightPosition = 20; // Starts 20px from right margin
let playerName = "Hero"; // Fallback name

// Prompt user for player name at the beginning
function getPlayerName() {
    const input = prompt("Welcome, Brave Sorcerer! Enter your name to begin the battle:", "Hero");
    if (input && input.trim() !== "") {
        playerName = input.trim();
    }
    playerNameSpan.innerText = playerName;
}

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadQuestion(){
    if(!gameActive) return;

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

    // Create options
    const shuffled = shuffle([...q.options]);
    shuffled.forEach(optionText => {
        const option = document.createElement("div");
        option.className = "option";
        option.draggable = true;
        option.innerText = optionText;

        option.addEventListener("dragstart", () => {
            if(!gameActive) return;
            draggedElement = option;
            option.classList.add("dragging");
        });

        option.addEventListener("dragend", () => {
            option.classList.remove("dragging");
        });

        optionsContainer.appendChild(option);
    });

    setupDropZones();
    updateBossAppearance();
    startBossMovement();
}

function startBossMovement() {
    clearInterval(walkInterval);
    boss.classList.add("walking");

    // PERCENT-BASED PROGRESSION SPEED CURVE (SLOWED DOWN):
    const totalQuestions = gameData.length;
    const progress = currentQuestion / (totalQuestions - 1); 

    const dynamicIntervalDelay = 3500 - (2000 * progress) - (1000 * progress * progress);

    walkInterval = setInterval(() => {
        if (!gameActive) {
            clearInterval(walkInterval);
            return;
        }
        moveBossForward(25); // Normal passive step length
    }, dynamicIntervalDelay);
}

// Utility to push the boss closer to the player and check for Game Over
function moveBossForward(pixels) {
    const arenaWidth = document.querySelector(".battle-arena").offsetWidth;
    const stopThreshold = arenaWidth - 140; // Collision boundary close to the player

    bossRightPosition += pixels;
    
    if (bossRightPosition >= stopThreshold) {
        bossRightPosition = stopThreshold;
        boss.style.right = bossRightPosition + "px";
        triggerGameOver();
    } else {
        boss.style.right = bossRightPosition + "px";
    }
}

function triggerGameOver() {
    gameActive = false;
    clearInterval(walkInterval);
    boss.classList.remove("walking");
    
    questionBox.innerHTML = `💥 Game Over!<br>The boss reached you.<br>Better luck next time, ${playerName}! 💥`;
    slotsContainer.innerHTML = "";
    optionsContainer.innerHTML = "";
    nextBtn.style.display = "none";
}

function updateBossAppearance() {
    boss.classList.remove("weak-1", "weak-2", "weak-3");
    
    if (currentQuestion >= 7) {
        boss.classList.add("weak-3");
    } else if (currentQuestion >= 4) {
        boss.classList.add("weak-2");
    } else if (currentQuestion >= 2) {
        boss.classList.add("weak-1");
    }
}

function setupDropZones(){
    const dropSlots = document.querySelectorAll(".drop-slot");

    dropSlots.forEach(slot => {
        slot.addEventListener("dragover", (e) => {
            e.preventDefault();
            if(!slot.classList.contains("correct") && gameActive){
                slot.classList.add("hover");
            }
        });

        slot.addEventListener("dragleave", () => {
            slot.classList.remove("hover");
        });

        slot.addEventListener("drop", () => {
            slot.classList.remove("hover");

            if(!gameActive || slot.classList.contains("correct")) return;

            const correctAnswer = slot.dataset.answer;
            const draggedValue = draggedElement.innerText;

            if(draggedValue === correctAnswer){
                slot.innerText = draggedValue;
                slot.classList.add("correct");
                draggedElement.classList.add("used");

                completed++;
                
                executePlayerAttack();
                checkCompletion();
            } else {
                // Incorrect slot shake effect
                slot.animate(
                    [
                        { transform: "translateX(0px)" },
                        { transform: "translateX(-8px)" },
                        { transform: "translateX(8px)" },
                        { transform: "translateX(0px)" }
                    ],
                    { duration: 300 }
                );

                // PENALTY: Wrong answer lunges the boss forward
                if (gameActive) {
                    moveBossForward(75);
                }
            }
        });
    });
}

function executePlayerAttack() {
    // Reset and trigger small magic spark projectile
    projectile.classList.remove("firing");
    void projectile.offsetWidth; 
    projectile.classList.add("firing");

    // Boss is hit at 950ms when the 1.0s animation nears completion
    setTimeout(() => {
        if(!gameActive) return;

        boss.classList.add("hit");
        
        // MODIFIED: Single match projectile now throws boss 2 steps back (2 * 40px = 80px)
        bossRightPosition = Math.max(20, bossRightPosition - 80);
        boss.style.right = bossRightPosition + "px";

        setTimeout(() => boss.classList.remove("hit"), 400);
    }, 950);
}

function checkCompletion(){
    const q = gameData[currentQuestion];
    if(completed === q.slots.length){
        nextBtn.disabled = false;
        nextBtn.classList.add("enabled");
    }
}

// Shoot button launches giant fireball and knocks boss back 4 steps
nextBtn.addEventListener("click", () => {
    if(!gameActive) return;

    // Pause boss tracking interval during transition blast animations
    clearInterval(walkInterval);

    // 1. Trigger the massive Fireball animation layout
    fireball.classList.remove("blasting");
    void fireball.offsetWidth; // Force layout reflow
    fireball.classList.add("blasting");

    // 2. Giant fireball impacts the boss at 1300ms of its 1.4s travel time
    setTimeout(() => {
        boss.classList.add("hit");

        // MODIFIED: Fireball button now hits harder, throwing boss 4 steps back (4 * 40px = 160px)
        bossRightPosition = Math.max(20, bossRightPosition - 160);
        boss.style.right = bossRightPosition + "px";

        setTimeout(() => boss.classList.remove("hit"), 400);
    }, 1300);

    // 3. Wait until the transition blast clears entirely before resetting DOM states
    setTimeout(() => {
        currentQuestion++;

        if(currentQuestion >= gameData.length){
            gameActive = false;
            boss.classList.remove("walking", "weak-1", "weak-2", "weak-3");
            boss.classList.add("dead");
            
            questionBox.innerHTML = `🎉 VICTORY!<br>${playerName} defeated the Boss and saved the Kingdom! 🎉`;
            slotsContainer.innerHTML = "";
            optionsContainer.innerHTML = "";
            nextBtn.style.display = "none";
            return;
        }

        loadQuestion();
    }, 1500);
});

// Run initialization sequence
getPlayerName();
loadQuestion();