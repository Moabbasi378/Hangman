import "./AnimalsWords.css";
let teams = [
  "Arsenal",
  "AstonVilla",
  "Brighton",
  "Burnley",
  "Chelsea",
  "CrystalPalace",
  "Everton",
  "Fulham",
  "LeedsUnited",
  "Liverpool",
  "LeicesterCity",
  "ManchesterCity",
  "ManchesterUnited",
  "NewcastleUnited",
  "SheffieldUnited",
  "Southampton",
  "TottenhamHotspur",
  "WestBromwichAlbion",
  "WestHamUnited",
  "Wolverhampton",
  "barcelona",
  "realmadrid",
  "valencia",
  "perspolis",
  "esteghlal",
  "sepahan",
  "bayernmunich",
  "parissaintgerman",
  "lyon",
  "ajax",
  "porto",
  "sporting",
  "benfica",
  "besictash",
  "dinamozagreb",
  "intermilan",
  "acmilan",
  "asrome",
  "juventus",
  "napoli",
];

const random = Math.floor(Math.random() * teams.length);
const word = (random, teams[random]).toLowerCase();
console.log(word);
let list = [];
export function FootbalWords() {
  return (
    <div className="word" id="word">
      {word.split("").map((letter, key) => {
        list.push(letter);
        return (
          <div
            id={letter.toUpperCase()}
            className={`letter ${letter.toUpperCase()}`}
            key={key}
          >
            _
          </div>
        );
      })}
    </div>
  );
}
