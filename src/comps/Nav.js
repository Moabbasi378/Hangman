import "./Nav.css";
import NewWord from "./NewWord";

function help() {
  function randomLetter() {
    const letters = "qwertyuiopasdfghjklzxcvbnm".split("");
    const random = Math.floor(Math.random() * letters.length);
    const letter = (random, letters[random]).toLowerCase();
    return letter;
  }
  let counter = 0;
  while (counter < 5) {
    let rand = randomLetter().toUpperCase();
    if (
      !document.getElementById(rand) &&
      document.getElementById(rand.toLowerCase()).style.transform !== "scale(0)"
    ) {
      document.getElementById(rand.toLowerCase()).style.transform = "scale(0)";
      counter = counter + 1;
    }
  }

  document.getElementById("hint").style.backgroundColor =
    "rgba(127, 189, 189, 0.521)";
  document.getElementById("hint").style.cursor = "not-allowed";
  document.getElementById("hint").disabled = true;
}

export default function Nav() {
  return (
    <div className="nav-bar">
      <NewWord />
      <h2 className="game-name">THE HANGMAN</h2>
      <button id="hint" className="hint" onClick={help}>
        Hint
      </button>
    </div>
  );
}
