import "./NewWord.css";

export default function NewWord() {
  function refresh() {
    window.location.reload();
  }
  return (
    <button onClick={refresh} className="new-word">
      New Word
    </button>
  );
}
