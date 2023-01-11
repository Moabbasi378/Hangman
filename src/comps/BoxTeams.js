import "./Box.css";
import { Hangman } from "./Hangman";
import { Keyboard } from "./Keyboard";
import { FootbalWords } from "./FootbalsWord";
import { UsedWord } from "./UsedWord";
import { Endmassage } from "./HandleEnd";

let UsedWordList = [];
const listawnser = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

export function Box() {
  let counter = 0;
  let counter2 = 0;
  counter = counter + 1;

  // disable hint when its too late for a hint
  if (counter > 16) {
    document.getElementById("hint").style.backgroundColor =
      "rgba(127, 189, 189, 0.521)";
    document.getElementById("hint").style.cursor = "not-allowed";
    document.getElementById("hint").disabled = true;
  }

  const handleClick = (e) => {
    let buttonId = e.currentTarget.id;
    UsedWordList.push(document.getElementById(buttonId).id);
    document.getElementById(buttonId).style.transform = "scale(0)";

    if (document.getElementById(buttonId.toUpperCase())) {
      const el = document.querySelectorAll(`.${buttonId.toUpperCase()}`);
      for (let i = 0; i < el.length; i++) {
        el[i].innerHTML = buttonId;
      }
    } else {
      try {
        document.getElementById("hang").style.display = "block";
        document.getElementById("hang").id = null;
        counter2 = counter2 + 1;
      } catch {}
    }
    let status = true;
    // handle lost
    if (counter2 >= 7) {
      alert("you lost the game");
      document.getElementById("lost").style.display = "flex";
      document.getElementById("keyboard").style.display = "none";
      status = false;
      listawnser.map((letter) => {
        if (document.getElementById(letter)) {
          const el = document.querySelectorAll(`.${letter}`);
          for (let i = 0; i < el.length; i++) {
            el[i].innerHTML = letter.toLowerCase();
          }
        }
        return undefined;
      });
    }

    // handle win
    const elements = document.querySelectorAll(".letter");
    let list = [];
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].innerHTML === "_") {
        list.push(elements[i].innerHTML === "_");
      }
    }
    if (list.length === 0 && status === true) {
      alert("you won the game");
      document.getElementById("win").style.display = "flex";
      document.getElementById("keyboard").style.display = "none";
    }
  };

  return (
    <div className="box">
      <UsedWord />
      <Endmassage />
      <Hangman />
      <FootbalWords />
      <Keyboard checker={handleClick} />
    </div>
  );
}
