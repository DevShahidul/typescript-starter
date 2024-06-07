import { useState } from "react";
import Person, { Countries } from "./components/Person";
import { UserProvider } from "./context/UserContext";

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
    <UserProvider>
      <div className="h-screen flex items-center justify-center">
      {persons.map((person) => (
        <Person {...person} country={Countries.Bangladesh} />
      ))}
      </div>
    </UserProvider>
  );
}

export default App;
