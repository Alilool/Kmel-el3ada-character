const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const container = document.getElementById("container");

const questions = [
  ["بتجاهل", "بواجه"],
  ["بحب الرياضة", "لا مليش فيها"],
  ["عندي صاحب كتير قريبين مني", "عندي صاحب او اتنين قريبين بس"],
  ["بحب اللمة", "بحب اقعد لوحدي"],
  ["بحب الخروجات", "بحب قعدة البيت"],
  ["بحب الدوشة", "بحب الهدوء"],
  ["هي فرصة وحدة", "بدي فرص كتير"],
  ["كل حاجة لازم تكون على مزاجي", "بمشي الدنيا"],
  ["بفكر بعقلي", "بفكر بقلبي"],
  ["بجب اصور فيديوهات و انزلها", "لا مش بحب"],
];

const choices = [];

const characterChoices = {
  laila: [
    "بواجه",
    "لا مليش فيها",
    "عندي صاحب او اتنين قريبين بس",
    "بحب اللمة",
    "بحب الخروجات",
    "بحب الهدوء",
    "بدي فرص كتير",
    "كل حاجة لازم تكون على مزاجي",
    "بفكر بقلبي",
    "لا مش بحب",
  ],
  ahmed: [
    "بتجاهل",
    "لا مليش فيها",
    "عندي صاحب او اتنين قريبين بس",
    "بحب اللمة",
    "بحب قعدة البيت",
    "بحب الهدوء",
    "بدي فرص كتير",
    "بمشي الدنيا",
    "بفكر بعقلي",
    "لا مش بحب",
  ],

  amina: [
    "بواجه",
    "بحب الرياضة",
    "عندي صاحب او اتنين قريبين بس",
    "بحب اقعد لوحدي",
    "بحب الخروجات",
    "بحب الدوشة",
    "هي فرصة وحدة",
    "كل حاجة لازم تكون على مزاجي",
    "بفكر بقلبي",
    "بجب اصور فيديوهات و انزلها",
  ],

  shriff: [
    "بواجه",
    "بحب الرياضة",
    "عندي صاحب او اتنين قريبين بس",
    "بحب اللمة",
    "بحب الخروجات",
    "بحب الهدوء",
    "بدي فرص كتير",
    "بمشي الدنيا",
    "بفكر بعقلي",
    "لا مش بحب",
  ],

  farida: [
    "بتجاهل",
    "لا مليش فيها",
    "عندي صاحب او اتنين قريبين بس",
    "بحب اللمة",
    "بحب الخروجات",
    "بحب الدوشة",
    "بدي فرص كتير",
    "بمشي الدنيا",
    "بفكر بعقلي",
    "لا مش بحب",
  ],

  farah: [
    "بواجه",
    "بحب الرياضة",
    "عندي صاحب كتير قريبين مني",
    "بحب اللمة",
    "بحب الخروجات",
    "بحب الدوشة",
    "بدي فرص كتير",
    "بمشي الدنيا",
    "بفكر بقلبي",
    "بجب اصور فيديوهات و انزلها",
  ],

  farid: [
    "بتجاهل",
    "لا مليش فيها",
    "عندي صاحب او اتنين قريبين بس",
    "بحب اقعد لوحدي",
    "بحب قعدة البيت",
    "بحب الهدوء",
    "بدي فرص كتير",
    "بمشي الدنيا",
    "بفكر بعقلي",
    "لا مش بحب",
  ],

  hassanAndHussin: [
    "بواجه",
    "بحب الرياضة",
    "عندي صاحب او اتنين قريبين بس",
    "بحب اللمة",
    "بحب الخروجات",
    "بحب الدوشة",
    "بدي فرص كتير",
    "كل حاجة لازم تكون على مزاجي",
    "بفكر بقلبي",
    "لا مش بحب",
  ],
};

const matches = {
  laila: 0,
  ahmed: 0,
  amina: 0,
  shriff: 0,
  farida: 0,
  farah: 0,
  farid: 0,
  hassanAndHussin: 0,
};

let qCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  q1.textContent = questions[qCount][0];
  q2.textContent = questions[qCount][1];
  qCount++;
});

function addQuestion() {
  q1.style.animation = "fade-out 0.5s forwards";
  q2.style.animation = "fade-out 0.5s forwards";

  setTimeout(() => {
    if (qCount <= questions.length - 1) {
      q1.textContent = questions[qCount][0];
      q2.textContent = questions[qCount][1];

      q1.style.animation = "fade-in 0.5s forwards";
      q2.style.animation = "fade-in 0.5s forwards";

      qCount++;
    } else {
      checkAnswer();
    }
  }, 1000);
}

q1.addEventListener("click", () => {
  choices.push(q1.textContent);
  addQuestion();
});
q2.addEventListener("click", () => {
  choices.push(q2.textContent);
  addQuestion();
});

function checkAnswer() {
  for (let i in characterChoices) {
    characterChoices[i].forEach((choice, index) => {
      if (choice === choices[index]) {
        matches[i]++;
      }
    });
  }

  getResult();
}

function getResult() {
  let max = 0;
  let result = "";
  let result2 = "";

  for (let i in matches) {
    if (matches[i] > max) {
      max = matches[i];
      result = i;
      result2 = ""; // Reset second match when a new max is found
    } else if (matches[i] === max && i !== result) {
      result2 = i; // Store second match
    }
  }
  if (result2) {
    container.innerHTML = `
      <img src='./assets/${result}.jpg' alt='img' loading='lazy'>
      او
      <img src='./assets/${result2}.jpg' alt='img' loading='lazy'>
    `;
  } else {
    container.innerHTML = `
      <img src='./assets/${result}.jpg' alt='img' loading='lazy'>
    `;
  }
  console.log(matches);
}
