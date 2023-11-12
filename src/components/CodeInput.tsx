'use client';

import React, { useRef, useContext, useEffect, Component } from 'react';
import { GraphContext } from './GraphContext';
import Graph from 'graphology';

function scrTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

export default function CodeInput() {
    let traverse = new Function('return');
    const { s_graph } = useContext(GraphContext);
    const graphRef = useRef(s_graph);

    useEffect(() => {
        graphRef.current = s_graph;
    }, [s_graph]);

    function handleSubmit(e: any) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        traverse = new Function("graph", String(formJson.codeInput));

        const graph = new Graph();
        graph.import(JSON.parse(graphRef.current));
        traverse(graph);
    }

    useEffect(() => {
        window.console.log = function (str) {
            if (typeof(str) == "object") {
                str = JSON.stringify(str);
            }
            var node = document.createElement("div");
            node.appendChild(document.createTextNode(str));
            //document.getElementById("myLog")!.innerHTML = "";
            document.getElementById("myLog")!.appendChild(node);
        }
    }, []);

    return (
        <div className="flex flex-col justify-center items-center text-white">
            <form method="post" onSubmit={handleSubmit}>
                <textarea style={{ resize: "none" }} name="codeInput" rows={20} cols={98} className="rounded-lg bg-[#324449] w-[600px] border-4 p-5 font-mono" />
                <div className='flex justify-between'>
                    <a href="Documentation.pdf" target="_blank" className='bg-[#324449] text-center w-52 p-5 font-bold font-mono rounded-lg hover:opacity-90 duration-500 ml-1'>Documentation</a>
                    <div>
                        <button type="reset" className='bg-[#324449] w-32 p-5 font-bold font-mono rounded-lg hover:opacity-90 duration-500 mr-3' >Reset</button>
                        <button type="submit" className='bg-[#324449] w-32 p-5 font-bold font-mono rounded-lg hover:opacity-90 duration-500 mr-1' onClick={()=>{}}>Run</button>
                    </div>
                </div>
            </form>
        </div>
    )
}