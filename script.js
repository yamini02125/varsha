const btn = document.getElementById('startBtn');
const landing = document.getElementById('landing');
const container = document.getElementById('container');
const cake = document.getElementById('cake');
const secretMsg = document.getElementById('secretMsg');
const song = document.getElementById('bdaySong');

// Handle Start Button
btn.addEventListener('click', () => {
  landing.style.display = 'none';
  container.style.display = 'block';

  // Try playing music
  song.play().catch(() => {
    // Fallback for autoplay block
    document.body.addEventListener("click", () => song.play(), { once: true });
  });

  // Launch some balloons
  launchBalloons();
});

// Cake click → Secret message reveal
cake.addEventListener('click', () => {
  secretMsg.innerText = "🎂 Happy happy birthday varsha chello❤😘!!!\n\nU are always special for me with or without conversation✨\nYou'll always be in my mind 💭 I LOVE YOU SOOOOOO MUCHHH❤😘\nYou are my supporting partner💪🏻🥰 and I'll always be there by your side!\nI'll take care of you like my child 🥰 Be strong💪🏻\nYou’ll get all the best things and everything you wish for✨\n\nUMMMAAAAHHHHHHHHHHH 😘😘";
  secretMsg.classList.remove("hidden");
  secretMsg.classList.add("reveal");
});

// Hearts animation
function createHearts() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}

// Glitter animation
function createGlitter() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('glitter');
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.animationDuration = `${2 + Math.random() * 3}s`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 3000);
}

// Balloon animation
function launchBalloons() {
  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon-float");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = 5 + Math.random() * 3 + "s";
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 8000);
  }
}

// Repeating animations
setInterval(createHearts, 800);
setInterval(createGlitter, 300);
