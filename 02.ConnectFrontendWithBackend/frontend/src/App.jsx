import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    (async () => {
      await axios("/api/jokes").then((res) => {
        setJokes(res.data);
      });
    })();
  }, []);

  return (
    <div>
      <h1>Hello from frontend</h1>
      <h2>Jokes: {jokes.length}</h2>
      {jokes.map((joke, index) => (
        <div key={index}>
          <h3>Question: {joke.question}</h3>
          <h4>Answer: {joke.answer}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
