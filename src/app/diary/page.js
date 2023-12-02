'use client'

import '@app/diary/diary.css';
import { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

export default function Diary(){
    const [judul, setJudul] = useState([])
    const [isi_diary, setIsi_diary] = useState([])

    const endpointAPI ='https://6555c54d84b36e3a431e4ce6.mockapi.io/diary'

    async function getDiary (){
        try{
            const res = await axios.get(endpointAPI)
            const data = res.data

            const judul = data.map((item)=>(item.judul))
            setJudul(judul)

            const isi = data.map((item)=>(item.isi))
            setIsi_diary(isi)
        }
        catch(error){
            console.log("error fetching data: ${error}")
        }
    }

    useEffect(()=>{
        getDiary();
    }, [])

    return(
        <>
        {judul.length > 0 ? (
            <ul>
                {judul.map((item, idx)=>(
                    <Link href={ `/diary/${item}/${isi_diary[idx]}`}>
                    <li>
                        <div className="diary-container">
                            <h1>{judul[idx]}</h1>
                            <p className="p-diary">{isi_diary[idx]}</p>
                        </div>
                    </li>
                    </Link>
                ))}
            </ul>
        ):
        (
            "Load API..."
        )}
        
        </>
    )
}