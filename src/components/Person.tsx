import { useState } from "react";

export interface Person {
  name: string;
  age: number;
  gender: string;
  hobbies: string[];
  role: [number, string];
  isMarried?: boolean;
  children?: Person[];
  address?: Address;
}

const Person = (props: Person) => {
  const { name, age, gender, hobbies, role } = props;
  const [personBio, setPersonBio] = useState<string | null>(null);

  const handleChangeBio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(e.target.value);
  };

  const handleSunmitBio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(personBio);
  };

  return (
    <div className="flex items-center justify-center flex-col space-y-1.5">
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>gender: {gender}</p>
      <div className="flex items-center space-x-2">
        <span>Hobies:</span>
        <p className="space-x-2">
          {hobbies.map((hobbie) => (
            <span className="px-2 py-0.5 rounded bg-slate-50/25 capitalize">
              {" "}
              {hobbie}{" "}
            </span>
          ))}
        </p>
      </div>
      <p>role: {role[0]}</p>
      {props?.isMarried && <p>{props.isMarried}</p>}
      {props?.children && props.children.map((child) => <Person {...child} />)}
      {props?.address && <p>{props?.address}</p>}
      {personBio && <p>{personBio}</p>}
      <form onSubmit={handleSunmitBio}>
        <input
          type="text"
          value={personBio}
          onChange={handleChangeBio}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Person;
