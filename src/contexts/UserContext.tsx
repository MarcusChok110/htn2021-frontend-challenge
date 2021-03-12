import React, { createContext } from 'react';

type UserContextType = [boolean, React.Dispatch<string>];

const UserContext = createContext<UserContextType>([false, () => null]);

export default UserContext;
