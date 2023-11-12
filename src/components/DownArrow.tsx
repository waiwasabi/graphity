'use client';
import React, { useRef, useEffect, Component } from 'react';

function scrollDown() {
    window.scrollTo(0, document.body.scrollHeight);
}
export default function DownArrow() {
    return (
        <button onClick={scrollDown}> <img src='down.gif' className = "absolute w-10 opacity-50 hover:opacity-75 duration-500" style={{left: "94%", top: "90%"}}/></button>
    )
}