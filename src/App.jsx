import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import Alert from "./components/Alert.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("setted to dark");
      showAlert("Enabled dark mode", "success");
    }
    if (mode === "dark") {
      setMode("light");
      console.log("setted to light");
      showAlert("Enabled light mode", "success");
      console.log(alert);
    }
  };
  return (
    <>
      <div>
        <Navbar title="TextUtils" />
        <TextForm heading="Enter your text here: " />
      </div>
    </>
  );
}

export default App;
