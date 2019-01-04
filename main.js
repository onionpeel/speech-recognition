const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

let mic = document.querySelector('#mic');
let body = document.querySelector('body');

mic.addEventListener('click', () => {
  recognition.start();
  console.log('Ready to receive a color command');
});

recognition.onresult = event => {
  let color = event.results[0][0].transcript;
  body.style.backgroundColor = color;
  console.log(event)
};
