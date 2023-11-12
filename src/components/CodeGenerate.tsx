'use client';
import React, { useRef, useEffect, Component } from 'react';
import {graph} from '../graph'

let jsonText = "";

function generateCode() {
    jsonText = JSON.stringify(graph, null, 2);
    document.getElementById("text")!.textContent=jsonText;
}

export default function CodeGenerate() {
    return (
        <div className="justify-center text-center">
            <div id='textbox' className ="bg-[#324449] p-5 mx-10 text-white text-left font-mono rounded-md" style = {{minHeight: "32.5em", minWidth:"25em", maxHeight: "30em", maxWidth: "25em"}}>
                <p id='text'></p>
            </div>

            <button className='bg-[#324449] mt-3 px-9 p-5 text-white font-bold font-mono rounded-lg opacity-100 hover:opacity-90 duration-500' onClick={generateCode}>Generate</button>
        </div>
    );
}
