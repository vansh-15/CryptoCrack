import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("Error connecting to backend");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 React + Spring Boot</h1>
        <p>Message from backend improved:</p>
        <p>This is me </p>
        <h2>{message}</h2>
      </header>
    </div>
  );
}

export default App;
