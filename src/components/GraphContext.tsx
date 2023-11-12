'use client'

import { createContext, useState, useEffect } from 'react'
import D3Graph from './D3Graph';
import UserModeProvider from './UserModeContext';
import Toolbar from './Toolbar';
import CodeGenerate from './CodeGenerate';
import CodeInput from './CodeInput';

export const GraphContext = createContext<any>({} as any);

export default function GraphContextProvider() {
    const [s_graph, setGraph] = useState(`{
        "nodes": [
          {
            "id": "q",
            "value": 7
          },
          {
            "id": "a",
            "value": 1
          },
          {
            "id": "r",
            "value": 6
          },
          {
            "id": "s",
            "value": 8
          },
          {
            "id": "t",
            "value": 5
          },
          {
            "id": "u",
            "value": 6
          },
          {
            "id": "v",
            "value": 3
          },
          {
            "id": "w",
            "value": 5
          },
          {
            "id": "x",
            "value": 1
          },
          {
            "id": "y",
            "value": 2
          },
          {
            "id": "z",
            "value": 6
          }
        ],
        "links": [
          {
            "source": "q",
            "target": "a",
            "weight": 1
          },
          {
            "source": "q",
            "target": "r",
            "weight": 1
          },
          {
            "source": "a",
            "target": "t",
            "weight": 1
          },
          {
            "source": "r",
            "target": "t",
            "weight": 1
          },
          {
            "source": "r",
            "target": "s",
            "weight": 1
          },
          {
            "source": "s",
            "target": "u",
            "weight": 1
          },
          {
            "source": "t",
            "target": "v",
            "weight": 1
          },
          {
            "source": "u",
            "target": "w",
            "weight": 1
          },
          {
            "source": "v",
            "target": "x",
            "weight": 1
          },
          {
            "source": "w",
            "target": "y",
            "weight": 1
          },
          {
            "source": "x",
            "target": "z",
            "weight": 1
          },
          {
            "source": "y",
            "target": "z",
            "weight": 1
          }
        ]
      }`);

    return (
        <GraphContext.Provider value={{ s_graph, setGraph }}>
            <UserModeProvider>
                <Toolbar />
                <D3Graph />
            </UserModeProvider>
            <div className='flex flex-row items-center justify-center'>
                <div>
                    <CodeGenerate />
                </div>
                <div className='items-center'>
                    <CodeInput />
                </div>
            </div>
        </GraphContext.Provider>
    )
}