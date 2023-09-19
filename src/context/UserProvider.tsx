import { useContext, useState } from "react";
import { createContext, ReactNode } from "react";
import { IUser } from "../typescript/UserInterfaces";

interface IUserContext {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export const ContextUser = createContext<IUserContext>({
  user: undefined,
  setUser: () => {},
});

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  return (
    <ContextUser.Provider value={{ user, setUser }}>
      {children}
    </ContextUser.Provider>
  );
}

export function useUser(): IUserContext {
  return useContext(ContextUser);
}
