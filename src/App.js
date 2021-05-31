import React, { useState } from "react";
import "./styles.css";

var emojiStore = {
  "💣": "bomb",
  "🖱️": "mouse",
  "💻": "laptop",
  "📻": "radio",
  "💎": "diamond",
  "🎈": "balloon",
  "🔪": "knife"
};

var emojiList = Object.keys(emojiStore);
/******************************************************/
export default function App() {
  var welcomeMessage = "Emoji Finder";

  const [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    var inputText = event.target.value;
    var meaning = emojiStore[inputText];
    setMeaning(meaning);
  }

  function emojiClickHandler(item) {
    var meaning = emojiStore[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>{welcomeMessage}</h1>
      <h2>Select from the following icons to start</h2>
      <input onChange={changeHandler}></input>
      <h2> This is {meaning} </h2>
      {emojiList.map((item) => {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
            key={item}
          >
            {" "}
            {item}
          </span>
        );
      })}
    </div>
  );
}
