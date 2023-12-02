'use client'

import { useState } from 'react'
import Image from 'next/image'
import "@styles/home.css"

export default function Home() {
  const [input, setInput] = useState("")
  const handlerGantiNama = () => {
    setNama(input)
  }
  
  const [kosong, setKosong] = useState(true)
  const [nama, setNama] = useState('Andi Muhammad Sabar')
  const handlerInput = (val) => {
    setInput(val)
    setKosong(val.trim() === '')
  }

  function enterButton(e) {
    if (e.key == "Enter") handlerGantiNama();
  }

  
  let content;
  if (kosong) {
    content = (
      <button className="cta active">
        <p>IsiDong</p>
      </button>
    );
  } else {
    content = (
      <button className="cta" onClick={() => {
        handlerGantiNama();
      }}>
      <p>change Name</p>
    </button>
    );
  }

  return (
    <>
      <div className='banner-container'>
        <div className='header-banner-wrapper'> 
          <div className='profile-header-banner'>
            <Image 
            src='/assets/09.png'
            alt='picture'
            fill 
            objectFit='contain'
           />
          </div>
          <div className='content-header-banner'>
            <h1>{nama}</h1>
            <div className='bio-nim-header-banner'>
              <p>D121211032</p>
              <p>Spider130 </p>
            </div>
          </div>
        </div>
        <div className='cta-banner-wrapper'>
          <input
            placeholder='Input your name'
            onInput={(val) => handlerInput(val.target.value)}
            onKeyDown={(value) => {
              enterButton(value)
            }}
          ></input>
          {content}
        </div>
      </div>
    </>
  )
}