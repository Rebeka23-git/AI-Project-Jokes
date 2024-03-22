function displayJoke(response) {
  new Typewriter("#joking", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateJoke(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "400fcc7471aod0afddf69b6c3tfef4a0";
  let prompt = `Generate a joke about ${instructionsInput.value}`;
  let context =
    "You are a funny Joke expert and love to tell jokes. Your mission is to generate a hilarious joke and make sure to follow the user instructions. Display only the joke. Sign the joke with `SheCodes AI` at the end of the joke.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joking");
  jokeElement.classList.remove("hidden");

  jokeElement.innerHTML = `<span class = "blink"> ⏳ </span> Generating a joke about ${instructionsInput.value}`;
  axios.get(apiUrl).then(displayJoke);
}

let jokeFormElement = document.querySelector("#jokes");
jokeFormElement.addEventListener("submit", generateJoke);
