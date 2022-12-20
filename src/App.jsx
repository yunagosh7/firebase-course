import { useState } from "react";
import "./App.css";
import { app } from "./firebaseConfig";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
