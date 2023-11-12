'use client';
import React, { useRef, useEffect, Component } from 'react';

function scrTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

export default function CodeInput() {
    let traverse = new Function('return');
    
    function handleSubmit(e: any) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        
        const formJson = Object.fromEntries(formData.entries());
        
        traverse = new Function(String(formJson.codeInput));
        traverse();
    }

    return (
        <div>
        <form method="post" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center">
                <div className="m-0">
                    <textarea style={{resize: "none"}} name="codeInput" rows={20} cols ={98} className="rounded-lg bg-[#324449] border-4 text-white p-5 font-mono" />
                </div>
                    <div className='m-0 text-right'>
                        <div className='w-100'></div>
                        <button type="reset" className='bg-[#324449] px-7 p-5 text-white font-bold font-mono rounded-lg opacity-100 hover:opacity-90 duration-500 mr-3' >Reset</button>
                        <button type="submit" className='bg-[#324449] px-9 p-5 text-white font-bold font-mono rounded-lg opacity-100 hover:opacity-90 duration-500 mr-1' onClick={scrTop}>Run</button>
                    </div>
                </div>
            
        </form>

        </div>
    )
}