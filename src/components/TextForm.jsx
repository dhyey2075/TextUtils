import React, { useState, useEffect } from "react";
import Alert from "./Alert.jsx";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here...");
  const [count, setCount] = useState(text.length);
  const [mode, setMode] = useState("light");
  const [speed, setSpeed] = useState(0);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const iniSec = new Date();

  const handleOnChange = (e) => {
    const currTime = new Date();
    const sec = currTime - iniSec;
    setText(e.target.value);
    setCount(e.target.value.length);
    if (count === 0) {
      setSpeed(0);
    } else {
      setSpeed((count / sec).toFixed(2));
    }
  };

  // useEffect(() => {
  //   localStorage.setItem("text", text);
  // }, []);

  function toCap(text) {
    let sen = text.split(" ");
    let j = 0;
    for (let i of sen) {
      sen[j] = i.charAt(0).toUpperCase() + i.slice(1);
      j = j + 1;
    }
    const joinedText = sen.join(" ");
    return joinedText;
  }

  const handleUpClick = () => {
    setText(text.toUpperCase());
    showAlert("Converted to upper case", "success");
  };

  const handleCapClick = () => {
    let t = toCap(text);
    setText(t);
    showAlert("Capitalized successfully...", "info");
  };

  const handleOriginal = (e) => {
    if(localStorage.getItem("text") === null || localStorage.getItem("text") === "") {
      setText("Enter your text here...");
      showAlert("No saved item found", "danger");
      return;
    }
    setText(localStorage.getItem("text"));
    setCount(e.target.value.length);
    showAlert("Restored to saved item", "danger");
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showAlert("Copied to clipboard", "warning");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  const handleSave = () => {
    localStorage.setItem("text", text);
    showAlert("Saved to our storage.", "warning");
  };

  const handleTrim = () => {
    let s = text;
    let a = s.replace(/\s+/g, " ").trim();
    setText(a);
    showAlert("Extra spaces are removed.", "info");
  };

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Enabled dark mode", "success");
    } else if (mode === "dark") {
      setMode("light");
      showAlert("Enabled light mode", "<success></success>");
    }
  };

  return (
    <>
      <div className={`app ${mode === "dark" ? "dark-mode" : ""}`}>
        <div
          className={`container ${mode === "dark" ? "bg-dark text-light" : ""}`}
        >
          <div
            className="dhyey d-flex justify-content-start align-items-center form-check form-switch my-0"
            onChange={handleMode}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`lab form-check-label" htmlFor="flexSwitchCheckDefault ${
                mode === "dark" ? "text-primary" : ""
              }`}
            >
              Dark Mode
            </label>
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className={`form-label ${mode === "dark" ? "text-primary" : ""}`}
            >
              <h2>{props.heading}</h2>
            </label>
            <textarea
              className={`form-control ${
                mode === "dark" ? "bg-dark text-light" : "bg-light"
              }`}
              id="exampleFormControlTextarea1"
              placeholder = "Enter text here..."
              value = {text}
              onChange={handleOnChange}
              rows={8}
            />
          </div>
          <div
            className={`count my-3 ${mode === "dark" ? "text-primary" : ""}`}
          >
            Characters: {count}
          </div>
          <div
            className={`speed my-3 ${mode === "dark" ? "text-primary" : ""}`}
          >
            Speed: {speed} char/sec
          </div>
          <button
            type="button"
            className="btn btn-primary mx-3 my-2"
            onClick={handleUpClick}
          >
            Upper
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3 my-2"
            onClick={handleCapClick}
          >
            Make Title
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3 my-2"
            onClick={handleOriginal}
          >
            Restore
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3 my-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3 my-2"
            onClick={handleCopy}
          >
            Copy to clipboard
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3 my-2"
            onClick={handleTrim}
          >
            Remove extra spaces
          </button>
        </div>
        <Alert className="my-3" alert={alert} />
        <div>
          <div className={`preview container ${mode === "dark" ? "text-primary" : ""}`}>
            <h1>Preview</h1>
            <h3>{text === "Enter your text here..." || text === "" ? "Type something..." : text}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
