// Global Variables

const mainWindow = document.getElementById('main-window');
const startBtn = document.getElementById('start-btn');

let timer = 0;
let timerStart;
let startTime;
let greenWindowClicked = false;
let endTime;

const reactionRedWindow = document.getElementById('reaction-red-window');
const reactionGreenWindow = document.getElementById('reaction-green-window');
const reactionTime = document.getElementById('reaction-time');

// Start Test Button Click

startBtn.addEventListener('click', () => {
    // Hide Main Window and Green Window

    reactionTime.style.display = "none";
    mainWindow.style.display = "none";
    reactionGreenWindow.style.display = "none";
    reactionRedWindow.style.display = "block";

    // Random Time for Green Window to Appear

    timerStart = Math.max(Math.floor(Math.random() * 5000) + 1, 300);

    // Show Green Window and start timer

    setTimeout(() => {
        reactionGreenWindow.style.display = "block";
        reactionRedWindow.style.display = "none";
        startTime = Date.now();
        console.log(`TIMER START TIMESTAMP ----> ${startTime}`)
    }, timerStart);

    // Show Main Window if Green Window is not clicked within 10 seconds

    setTimeout(() => {
        // Hide Green and Red Window and show Main Window if not clicked within 10 seconds

        if(!greenWindowClicked) {
            reactionRedWindow.style.display = "none";
            reactionGreenWindow.style.display = "none";
            mainWindow.style.display = "block";

            reactionTime.style.display = "flex";

            // Calculate Reaction Time

            endTime = Date.now();

            timer = endTime - startTime;

            console.log(`TIMER END TIMESTAMP ----> ${endTime}`)

            // Show Reaction Time

            reactionTime.innerText = `Your Reaction Time: 10000ms+ (You didn't click the green window in time!)`;

            // Reset Timers

            timer = 0;
            startTime = 0;
        }
    }, 10000);

    timerStart = 0;
});

// Click Green Window

reactionGreenWindow.addEventListener('click', () => {
    // Hide Green and Red Window and show Main Window

    greenWindowClicked = true;

    reactionRedWindow.style.display = "none";
    reactionGreenWindow.style.display = "none";
    mainWindow.style.display = "block";

    reactionTime.style.display = "flex";

    // Calculate Reaction Time

    endTime = Date.now()

    timer = endTime - startTime;

    console.log(`TIMER END TIMESTAMP ----> ${endTime}`)

    // Show Reaction Time

    reactionTime.innerText = `Your Reaction Time: ${timer.toFixed(2)}ms`;

    // Reset Timers

    timer = 0;
    startTime = 0;
    timerStart = 0;
});
