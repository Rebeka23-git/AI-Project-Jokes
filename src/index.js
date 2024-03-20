function generateJoke(event) {
  event.preventDefault();

  new Typewriter("#joking", {
    strings: "Generating joke for you..",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let jokeFormElement = document.querySelector("#jokes");
jokeFormElement.addEventListener("submit", generateJoke);
