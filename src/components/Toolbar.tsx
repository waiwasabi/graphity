'use client';

import React, { useContext } from 'react';
import { UserModeContext, UserMode } from './UserModeContext';

export default function Toolbar() {
    const { mode, setMode } = useContext(UserModeContext);

    function onClick(event, mode) {
        setMode(mode);
        const element = event.target.parentElement;
        document.querySelectorAll('.toggleButton').forEach((el) => {
            el.classList.remove('opacity-100');
            el.classList.add('opacity-50');
        });
        element.classList.remove('opacity-50');
        element.classList.add('opacity-100');
    }

    function clickWrapper(mode) { return (event) => onClick(event, mode) };

    return (
        <div className='absolute left-10 top-10 z-10 drop-shadow-md'>
            <div className="h-8 flex flex-row bg-[#D7E6EA] items-center px-3 py-1 rounded-lg">
                <button className='toggleButton m-2 w-5 opacity-50 duration-500 hover:opacity-100' onClick={clickWrapper(UserMode.Node)}>
                    <img src='/circle.png' alt='Node' />
                </button>

                <button className='toggleButton m-2 w-5 opacity-50 duration-500 hover:opacity-100' onClick={clickWrapper(UserMode.Edge)}>
                    <img src='/arrow.png' alt='Node' />
                </button>

                <button className='toggleButton m-2 w-5 opacity-50 duration-500 hover:opacity-100' onClick={clickWrapper(UserMode.Delete)}>
                    <img src='/eraser.png' alt='Node' />
                </button>

                <div className='w-10'></div>

                <button className='toggleButton m-2 w-5 opacity-50 duration-500 hover:opacity-100' onClick={clickWrapper(UserMode.Point)}>
                    <img src='/clicker.png' alt='Node' />
                </button>

                <button className='toggleButton m-2 w-4 opacity-50 duration-500 hover:opacity-100' onClick={clickWrapper(UserMode.Pan)}>
                    <img src='/pan.png' alt='Node' />
                </button>
            </div>
        </div>
    )
}