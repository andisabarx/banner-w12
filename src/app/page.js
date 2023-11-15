'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {

  const [nama, setNama] = useState('Andi Muhammad Sabar');
  const [newName, setNewNama] = useState("");

  function handleInputChange(event) {
      setNewNama(event.target.value);
  }

  function handleChangeName() {
    setNama(newName);
  }
  
  return (
    <div className='body'>
      <div className="banner-container">
        {/* Kartunya */}
        <div className="header-banner-wrapper">
          {/* Foto Profil dan Nama */}
          <div className="profile-header-banner">
            {/* Foto Profil*/}
            <Image
              src="/09.png"
              alt="Picture of the author"
              fill
              objectFit='contain'
            />
          </div>
          <div className="content-header-banner">
            {/* Nama dan Kawan2*/}
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
            {/* NIM dan BIO*/}
            <p>D121211032</p>
            <p>spideribo</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
            <input type='text' value={newName} onChange={handleInputChange}
            placeholder='InputYour Name'/>
            <div className='cta-button' 
            style={{
              marginTop: '12px'
            }}
            
            onClick={handleChangeName}>
              <p>Change Name</p>
            </div>
        </div>
      </div>
    </div>
  )
}
