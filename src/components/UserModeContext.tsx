'use client'

import { createContext, useState, useEffect } from 'react'

export const UserModeContext = createContext<any>({} as any);
export const UserMode = {
    Node: 1,
    Edge: 2,
    Delete: 3,
    Point: 4,
    Pan: 5
}

export default function UserModeProvider({ children }) {
    const [mode, setMode] = useState(0);
    return (
        <UserModeContext.Provider value={{ mode, setMode }}>
            {children}
        </UserModeContext.Provider>
    )
}