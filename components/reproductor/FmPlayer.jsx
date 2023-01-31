
import React, {useState, useEffect, useRef} from 'react'
import { BsFillPlayCircleFill, BsPauseCircleFill} from "react-icons/bs/";


import AudioMotionAnalyzer from '@/lib/audiomotion/audioMotion-analyzer';
import Image from 'next/image';




export const FmPlayer = () => {

    const spectrumRef = useRef(null);
    const audioMotion = useRef(null)
    

    const [ isPlayer, setIsPlayer ] = useState(false);
    const [ fmAudio, setFmAudio ] = useState(false)


    const onPlay = () => {

        if(isPlayer){
            fmAudio?.pause();
            setIsPlayer(false)
        } else {
            fmAudio?.play()
            setIsPlayer(true)
            console.log(fmAudio)
        }
    }

    /* useEffect(() => {
        if(fmAudio) {
            const audioContext = new AudioContext();
            const source = audioContext.createMediaElementSource(fmAudio)
            source.connect(audioContext.destination)
        }
        
    }, []) */



    useEffect(() => {
        let audio = new Audio('https://radio.euroserver.org:8030/live')
        audio.crossOrigin = true
        setFmAudio(audio)
    }, [])


    useEffect(() => {

        if(fmAudio){
            audioMotion.current = new AudioMotionAnalyzer(
                spectrumRef.current,
            {
                source: fmAudio,
                mode: 8,
                /* radial: true */
            }
            );
            console.log('audiomotion', audioMotion)
        }       

        
    }, [fmAudio])

    

    
    


  return (

    <div className='flex justify-center' style={{'height':'80vh'}}>



            <div ref={spectrumRef} style={{'zIndex': -1}} className='w-full max-w-sm' ></div>
            <div style={{'zIndex': 1, 'position':'absolute', 'height':'80vh'}} className="w-full max-w-sm shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                        <span className="sr-only">Open dropdown</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    </button>
                    {/* Dropdown menu */}
                    <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2" aria-labelledby="dropdownButton">
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                        </li>
                        </ul>
                    </div>
                </div>
                <div style={{'height':'70vh','display':'flex', 'flexDirection':'column' ,'justifyContent': 'center', 'justifyItems':'center'}}>

                    <div className="flex flex-col items-center pb-10 bg-opacity-100" >
                        <Image className="h-24" src="/a9_circle_logo.png" alt="a9 logo" width={159} height={96}/>
                        <h5 className="mb-1 text-xl font-medium text-[#EA0AC8] dark:text-white px-3">Radio Antena 9</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Señal que manda</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">

                            <button onClick={onPlay} type="button" className="border border-green-700 hover:border-[#EA0AC8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                {isPlayer ? <BsPauseCircleFill size='3em' color='green'/> : <BsFillPlayCircleFill size='3em' color='green'/> }
                            </button>
                        </div>
                        
                    </div>


                </div>




        </div>

    </div>
  )
}
