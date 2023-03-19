{
  let choice = [];

  const randomChoice = () => {
    let computerRandomChoice = Math.floor(Math.random() * 3 + 1 );
    let computerChoice = computerRandomChoice === 1 ? "✊🏼" : computerRandomChoice === 2 ? "✋🏼" : "✌🏼" ;
    return computerChoice;
  };

  const newChoice = () => {
    const buttonRockElement = document.querySelector(".js-formButtons--rock");
    const buttonPaperElement = document.querySelector(".js-formButtons--paper");
    const buttonScissorsElement = document.querySelector(".js-formButtons--scissors");

    buttonRockElement.addEventListener(
      "click",
      () => (choice = [...choice, { content: "✊" }])
    );
    buttonPaperElement.addEventListener(
      "click",
      () => (choice = [...choice, { content: "🖐" }])
    );
    buttonScissorsElement.addEventListener(
      "click",
      () => (choice = [...choice, { content: "✌" }])
    );
    render();

  };

  const render = () => {
    let htmlString = "";

    for (const item of choice) {
      htmlString = `
      <div class="gameArea">
        Your pick:  ${item.content}
        Computer pick: ${randomChoice()}
      </div>
      `;
    }
    document.querySelector(".js-gameArea").innerHTML = htmlString;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    newChoice();
   
  };

  const init = () => {
    render();

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onSubmit);
  };

  init();
}
