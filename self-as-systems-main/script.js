function progress(answer, currentStageNumber) {
    // Get the day container
    let container = document.querySelector('.day-container');

    // Create new stage
    let newStageNumber = currentStageNumber + 1;
    let newStage = document.createElement('section');
    newStage.classList.add('stage');
    newStage.id = 'stage' + newStageNumber;

    // Fill the new stage based on the answer and current stage (for this example, I'll just add a generic setup, but you can customize this)
    newStage.innerHTML = `
        <img src="path_to_next_icon_based_on_answer.svg" alt="Icon Description" class="icon">
        <p>Question for stage ${newStageNumber}?</p>
        <button onclick="progress('yes', ${newStageNumber})">Yes</button>
        <button onclick="progress('no', ${newStageNumber})">No</button>
    `;

    // Append new stage to the container
    container.appendChild(newStage);

    // Scroll to the new stage (smooth scrolling)
    newStage.scrollIntoView({ behavior: 'smooth' });
}

function progress(answer, currentStageNumber) {
    // Get the day container
    let container = document.querySelector('.day-container');

    // Check the user's choice and take necessary action
    // For now, only handling the 'yes' choice from stage1, but you can add more conditions for different stages and answers
    if (currentStageNumber === 1 && answer === 'yes') {
        let nextStage = document.getElementById('stage2');
        
        // Make it visible and apply the fade-in effect
        nextStage.classList.remove('hidden');
        setTimeout(() => {
            nextStage.classList.add('fade-in');
        }, 50); // slight delay to ensure the fade-in works correctly
    } else if (currentStageNumber === 2) {
        // Handle the music-related logic here
        if (answer === 'optionA') {
            // Handle option A
        } else if (answer === 'optionB') {
            // Handle option B
        }

        // Continue adding more conditions for other stages/options as needed
    } else if (currentStageNumber === 3) {
        // Handle stage 3 logic here
    }

    // Further logic for the next stages goes here...
}

    

    document.querySelector('.question-container').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            progress();
        }
    });

    // Further logic for the next stages goes here...

// JavaScript
const music1 = document.getElementById('music');
const music2 = document.getElementById('music2'); // Add the new audio element

let currentMusic = music1; // Initialize with the first song

function playMusic() {
  if (currentMusic.paused) {
    currentMusic.play();
  } else {
    currentMusic.pause();
  }
}

function switchMusic(songNumber) {
  // Pause the current song
  currentMusic.pause();

  // Update the current song based on the songNumber
  if (songNumber === 1) {
    currentMusic = music1;
  } else if (songNumber === 2) {
    currentMusic = music2;
  }

  // Play the new current song
  currentMusic.play();
}

// HTML structure for the rectangle (displayed when user selects "No")
const noRectangle = document.createElement('div');
noRectangle.classList.add('rectangle');
noRectangle.innerHTML = '<p>This is a rectangle that appears when you say "No" to going to school.</p>';


