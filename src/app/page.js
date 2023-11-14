'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {

  const [bravo, setBravo] = useState(0)
  const [nama, setNama] = useState('Andi Muhammad Sabar')

  function handlerTambahBravo(){
    setBravo(bravo + 1)
  }

  function handlerGantiNama(){
    setNama('Expresidentz')
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
              src="./assets/09.png"
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
            <p>Spider {bravo},=ibok</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
            <div className='cta-button' onClick={handlerTambahBravo}>
              <p>Change Name</p>
            </div>
            <div className='cta-button' 
            style={{
              marginTop: '12px'
            }}
            
            onClick={handlerGantiNama}>
              <p>Ganti Nama</p>
            </div>
        </div>
      </div>
    </div>
  )
}
