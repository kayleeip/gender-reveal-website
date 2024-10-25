// Riddles and answers array
const riddles = [
  {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "echo"
  },
  {
    question: "How accurately can we determine sin(x) to 10 decimal places, for x in [0,2] with h=0.001?",
    answer: "1.25 x 10^-5" 
  },
  {
    question: "Physicists have built devices to move me very fast. My last seven letters can be commonly found in newspapers, magazines, and journals. What am I?",
    answer: "particles"
  }
];

let currentRiddleIndex = 0;

// Function to display the next riddle
function showRiddle() {
  if (currentRiddleIndex < riddles.length) {
    document.getElementById("riddle").innerText = riddles[currentRiddleIndex].question;
  } else {
    revealGender();
  }
}

// Function to handle the answer submission
function submitAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = riddles[currentRiddleIndex].answer;

  if (userAnswer === correctAnswer) {
    currentRiddleIndex++;
    document.getElementById("answer").value = "";
    if (currentRiddleIndex < riddles.length) {
      showRiddle();
    } else {
      revealGender();
    }
  } else {
    document.getElementById("result").innerText = "Wrong answer. Try again!";
  }
}

// Function to reveal the gender
function revealGender() {
  document.getElementById("riddle-container").style.display = "none";
  document.getElementById("result").innerText = "Congratulations! The baby is a ... Find out at the Gender Reveal!";
}

// Initialize the first riddle
window.onload = function () {
  showRiddle();
};
