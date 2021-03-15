import React, { createContext } from 'react';

type UserContextType = [boolean, React.Dispatch<string>];

/**
 * Context for useReducer state to store user
 */
const UserContext = createContext<UserContextType>([false, () => null]);

export default UserContext;
