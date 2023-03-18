import { createContext } from "react";

const StateContext  = createContext({});

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    account_id: '',
    projectName: '',
    url: '',
  });

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
}