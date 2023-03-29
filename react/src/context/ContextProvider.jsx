import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const StateContext = createContext({
    currentUser: {},
    userToken: null,
    projects: [],
    setCurrentUser: () => { },
    setUserToken: () => { },
});

const tmpProjects = [
    {
        id: 1,
        name: 'Project 1',
        description: 'This is a project description',
        status: 'active',
        type: 'web',
        created_at: '2020-10-10',
        updated_at: '2020-10-10'

    },
    {
        id: 2,
        name: 'Project 2',
        description: 'This is a project description',
        status: 'active',
        type: 'web',
        created_at: '2020-10-10',
        updated_at: '2020-10-10'
    },
    {
        id: 3,
        name: 'Project 3',
        description: 'This is a project description',
        status: 'active',
        type: 'mobile',
        created_at: '2020-10-10',
        updated_at: '2020-10-10'
    },
    {
        id: 4,
        name: 'Project 4',
        description: 'This is a project description',
        status: 'active',
        type: 'mobile',
        created_at: '2020-10-10',
        updated_at: '2020-10-10'
    },
    {
        id: 5,
        name: 'Project 5',
        description: 'This is a project description',
        status: 'active',
        type: 'web',
        created_at: '2020-10-10',
        updated_at: '2020-10-10'
    },
    {
        id: 6,
        name: 'Project 6',
        description: 'This is a project description',
        status: 'active',
        type: 'web',
        created_at: '2020-10-10',
        updated_at: '2020-10-10'
    },
    {
        id: 7,
        name: 'Project 7',
        description: 'This is a project description',
        status: 'active',
        type: 'mobile',
        created_at: '2020-10-10',
        updated_at: '2020-10-10'
    },
    {
        id: 8,
        name: 'Project 8',
        description: 'This is a project description',
        status: 'active',
        type: 'mobile',
        created_at: '2020-10-10',
        updated_at: '2020-10-10'
    },
    {
        id: 9,
        name: 'Project 9',
        description: 'This is a project description',
        status: 'active',
        type: 'web',
        created_at: '2020-10-10',
        updated_at: '2020-10-10'
    },
    {
        id: 10,
        name: 'Project 10',
        description: 'This is a project description',
        status: 'active',
        type: 'web',
        created_at: '2020-10-10',
        updated_at: '2020-10-10'
    },
    {
        id: 11,
        name: 'Project 11',
        description: 'This is a project description',
        status: 'active',
        type: 'mobile',
        created_at: '2020-10-10',
        updated_at: '2020-10-10'
    },
    {
        id: 12,
        name: 'Project 12',
        description: 'This is a project description',
        status: 'active',
        type: 'mobile',
        created_at: '2020-10-10',
        updated_at: '2020-10-10'
    },

]

export const ContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({});
    const [userToken, _setUserToken] = useState(localStorage.getItem('token') || null);
    const [projects, setProjects] = useState(tmpProjects);


    const setUserToken = (token) => {
      if(token !== null) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
      }
      _setUserToken(token);
    }

    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            projects,
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
