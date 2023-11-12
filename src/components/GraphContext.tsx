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
          "key": "q",
          "attributes": {
            "value": 7
          }
        },
        {
          "key": "a",
          "attributes": {
            "value": 1
          }
        },
        {
          "key": "r",
          "attributes": {
            "value": 6
          }
        },
        {
          "key": "s",
          "attributes": {
            "value": 8
          }
        },
        {
          "key": "t",
          "attributes": {
            "value": 5
          }
        },
        {
          "key": "u",
          "attributes": {
            "value": 6
          }
        },
        {
          "key": "v",
          "attributes": {
            "value": 3
          }
        },
        {
          "key": "w",
          "attributes": {
            "value": 5
          }
        },
        {
          "key": "x",
          "attributes": {
            "value": 1
          }
        },
        {
          "key": "y",
          "attributes": {
            "value": 2
          }
        },
        {
          "key": "z",
          "attributes": {
            "value": 6
          }
        }
      ],
      "edges": [
        {
          "source": "q",
          "target": "a"
        },
        {
          "source": "q",
          "target": "r"
        },
        {
          "source": "a",
          "target": "t"
        },
        {
          "source": "r",
          "target": "t"
        },
        {
          "source": "r",
          "target": "s"
        },
        {
          "source": "s",
          "target": "u"
        },
        {
          "source": "t",
          "target": "v"
        },
        {
          "source": "u",
          "target": "w"
        },
        {
          "source": "v",
          "target": "x"
        },
        {
          "source": "w",
          "target": "y"
        },
        {
          "source": "x",
          "target": "z"
        },
        {
          "source": "y",
          "target": "z"
        }
      ]
    }`);

    return (
        <GraphContext.Provider value={{ s_graph, setGraph }}>
            <UserModeProvider>
                <Toolbar />
                <D3Graph />
            </UserModeProvider>
            <div className='flex flex-row items-center justify-center h-[600px] gap-5 px-10'>
                <CodeInput />
                <div className="rounded-lg bg-[#324449] text-white border-4 p-5 font-mono w-52 h-full flex-grow overflow-scroll">
                  <p id='myLog'></p>
                </div>
                <CodeGenerate />
            </div>
        </GraphContext.Provider>
    )
}