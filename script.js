let gamePaper = document.querySelector(".game-1 .game__paper");
let gameScissor = document.querySelector(".game-1 .game__scissor");
let gameRock = document.querySelector(".game-1 .game__rock");

let stageOne = document.querySelector(".game-1");
let stageTwo = document.querySelector(".game-2");
let stageThree = document.querySelector(".game-3");
let stageFour = document.querySelector(".game-4");

let choices = [gamePaper, gameScissor, gameRock];
let choice;

let randomNum;
let winner;

let score = 0;

let choiceHTML = [
  ` <p>You picked</p> <div class="game__paper">

    <img src="images/icon-paper.svg" alt="" />
  </div>`,
  `         <p>You picked</p>   <div class="game__scissor">
  <img src="images/icon-scissors.svg" alt="" />
</div>`,
  `       <p>You picked</p>     <div class="game__rock">
  
  <img src="images/icon-rock.svg" alt="" />
</div>`,
];

let pcHTML = [
  ` <p> The house picked</p> <div class="game__paper">
  
      <img src="images/icon-paper.svg" alt="" />
    </div>`,
  `         <p> The house picked</p>   <div class="game__scissor">
    <img src="images/icon-scissors.svg" alt="" />
  </div>`,
  `       <p> The house picked</p>     <div class="game__rock">
    
    <img src="images/icon-rock.svg" alt="" />
  </div>`,
];

function evaluate(str1, str2) {
  if (str1 == "game__rock" && str2 == "game__scissor") {
    return str1;
  } else if (str1 == "game__rock" && str2 == "game__paper") {
    return str2;
  } else if (str1 == "game__scissor" && str2 == "game__rock") {
    return str2;
  } else if (str1 == "game__scissor" && str2 == "game__paper") {
    return str1;
  } else if (str1 == "game__paper" && str2 == "game__rock") {
    return str1;
  } else if (str1 == "game__paper" && str2 == "game__scissor") {
    return str2;
  }
}

choices.forEach((a) => {
  a.addEventListener("click", function (e) {
    choice = choices.indexOf(a);
    stageOne.classList.add("hidden");
    stageTwo.classList.remove("hidden");
    stageTwo.firstElementChild.innerHTML = choiceHTML[choice];
    setTimeout(function () {
      stageThree.firstElementChild.innerHTML = choiceHTML[choice];
      stageTwo.classList.add("hidden");
      stageThree.classList.remove("hidden");
      pcHTML.splice(choice, 1);
      randomNum = Math.floor(Math.random() * 2);
      document.querySelector(".game-3 .game--cpu--pick").innerHTML =
        pcHTML[randomNum];
      winner = evaluate(
        document.querySelector(".game-3 .game--cpu--pick").lastElementChild
          .classList[0],
        document.querySelector(".game-3 .game--user--pick").lastElementChild
          .classList[0]
      );
    }, 1000);
    setTimeout(function () {
      stageFour.firstElementChild.innerHTML = choiceHTML[choice];
      stageFour.lastElementChild.innerHTML = pcHTML[randomNum];

      if (stageFour.firstElementChild.lastElementChild.classList[0] == winner) {
        stageFour.firstElementChild.classList.add("game-4-winner");
        score++;
      } else {
        stageFour.lastElementChild.classList.add("game-4-winner");
        document.querySelector(".game--status").textContent = "You lose";
        score--;
      }
      document.querySelector(".header--score--main").textContent = score;
      stageThree.classList.add("hidden");
      stageFour.classList.remove("hidden");
    }, 1500);
  });
});

document.querySelector(".restart").addEventListener("click", function () {
  stageFour.firstElementChild.classList.remove("game-4-winner");
  stageFour.lastElementChild.classList.remove("game-4-winner");
  stageFour.classList.add("hidden");
  stageOne.classList.remove("hidden");
  document.querySelector(".game--status").textContent = "You Win";
  choiceHTML = [
    ` <p>You picked</p> <div class="game__paper">
  
      <img src="images/icon-paper.svg" alt="" />
    </div>`,
    `         <p>You picked</p>   <div class="game__scissor">
    <img src="images/icon-scissors.svg" alt="" />
  </div>`,
    `       <p>You picked</p>     <div class="game__rock">
    
    <img src="images/icon-rock.svg" alt="" />
  </div>`,
  ];

  pcHTML = [
    ` <p> The house picked</p> <div class="game__paper">
    
        <img src="images/icon-paper.svg" alt="" />
      </div>`,
    `         <p> The house picked</p>   <div class="game__scissor">
      <img src="images/icon-scissors.svg" alt="" />
    </div>`,
    `       <p> The house picked</p>     <div class="game__rock">
      
      <img src="images/icon-rock.svg" alt="" />
    </div>`,
  ];
});

/* MODAL */
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let btnRules = document.querySelector(".rules");
let close = document.querySelector(".close");

btnRules.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
});

function removeModal(params) {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}

close.addEventListener("click", removeModal);

overlay.addEventListener("click", removeModal);
