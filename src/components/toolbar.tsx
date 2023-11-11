'use client';
import React, { useRef, useEffect, Component } from 'react';
import '../app/globals.css';

export default function Toolbar() {
    function toDo() {}
    return (
        <div className='absolute left-10 top-10 z-10 drop-shadow-md'>
            <div className="h-8 flex flex-row bg-[#D7E6EA] items-center px-3 py-1 rounded-lg">
                <button className='m-2 w-5 opacity-50 duration-500 hover:opacity-100'>
                    <img src='/circle.png' alt='Node'/>
                </button>

                <button className='m-2 w-5 opacity-50 duration-500 hover:opacity-100'>
                    <img src='/arrow.png' alt='Node'/>
                </button>

                <button className='m-2 w-5 opacity-50 duration-500 hover:opacity-100'>
                    <img src='/eraser.png' alt='Node'/>
                </button>

                <div className='w-10'></div>

                <button className='m-2 w-5 opacity-50 duration-500 hover:opacity-100'>
                    <img src='/clicker.png' alt='Node'/>
                </button>

                <button className='m-2 w-4 opacity-50 duration-500 hover:opacity-100'>
                    <img src='/pan.png' alt='Node'/>
                </button>
            </div>
        </div>
    )
}