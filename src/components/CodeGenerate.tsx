'use client';

import React, { useContext } from 'react';
import { GraphContext } from '@/components/GraphContext';

export default function CodeGenerate() {
    const { s_graph } = useContext(GraphContext);

    function generateCode() {
        document.getElementById("text")!.textContent = s_graph;
    }

    return (
        <div className="justify-center text-center text-white">
            <div id='textbox' className="bg-[#324449] p-5 mx-10 text-left font-mono rounded-lg border-4 overflow-scroll" style={{ minHeight: "32.5em", minWidth: "25em", maxHeight: "30em", maxWidth: "25em" }}>
                <p id='text' className='whitespace-pre'></p>
            </div>

            <button className='bg-[#324449] mt-3 px-9 p-5 font-bold font-mono rounded-lg opacity-100 hover:opacity-90 duration-500' onClick={generateCode}>Generate</button>
        </div>
    );
}
