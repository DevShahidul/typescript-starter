import { useState } from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  const [persons, setPersons] = useState<Person[]>([
    {
      id: 1,
      name: "Johnny",
      age: 25,
      gender: "male",
      hobbies: ["play game", "learning new skills"],
      isMarried: false,
      role: ["admin"],
    },
  ]);

  return (
    <>
      {persons.map((person) => (
        <Person {...person} />
      ))}
    </>
  );
}

export default App;
