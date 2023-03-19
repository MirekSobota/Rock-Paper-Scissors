{
  const choice = [];

  const newChoice = () => {};

  const render = () => {};

  const onSubmit = (event) => {
    event.preventDefault();

    const buttonRockElement = document.querySelector(".js-formButtons--rock");
    const buttonPaperElement = document.querySelector(".js-formButtons--paper");
    const buttonScissorsElement = document.querySelector(
      ".js-formButtons--scissors"
    );
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onSubmit);
  };

  init();
}
