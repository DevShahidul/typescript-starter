import { createContext, useEffect, useState } from "react";

export interface User {
  name: string;
  age: number;
  isMarried: boolean;
}

interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: string | number) => void;
}

const contextInitialValues = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
};

interface Props {
  children: React.ReactNode;
}
export const UserContext = createContext<UserContextType>(contextInitialValues);
export const UserProvider = (props: Props) => {
  const [users, setUsers] = useState<User[] | null>(null);
  useEffect(() => {
    // TODO: fetch users from api
    setUsers([
      // inseting a static fake user untill don't have the api :)
      {
        name: "Shahidul",
        age: 27,
        isMarried: true,
      },
    ]);
  }, []);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  const updateUser = (user: User) => {
    setUsers(users.map((u) => (u.id === user.id ? user : u)));
  };

  const deleteUser = (id: string | number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
