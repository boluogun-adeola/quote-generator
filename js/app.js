const quotes = [
  "Your actions reveal how badly you want something. If you keep saying something is a priority but you never act on it, then you don’t really want it. It’s time to have an honest conversation with yourself. Your actions reveal your true motivations.",
  "Good habits can make rational sense, but if they conflict with your identity, you will fail to put them into action",
  "The ultimate form of intrinsic motivation is when a habit becomes part of your identity. It’s one thing to say I’m the type of person who wants this. It’s something very different to say I’m the type of person who is this",
  "Be the designer of your world and not merely the consumer of it.",
  "Habits are the compound interest of self-improvement",
  "Goals are good for setting a direction, but systems are best for making progress",
  "When you fall in love with the process rather than the product, you don’t have to wait to give yourself permission to be happy. You can be satisfied anytime your system is running",
  "You should be far more concerned with your current trajectory than with your current results.",
  "You do not rise to the level of your goals. You fall to the level of your systems.",
  "Every action you take is a vote for the type of person you wish to become. No single instance will transform your beliefs, but as the votes build up, so does the evidence of your new identity."
];


const button = document.getElementById('generate-btn');

button.addEventListener("click",()=>{

  let random = Math.floor(Math.random()*quotes.length);

  document.getElementById("quote").textContent = quotes[random];

  

});