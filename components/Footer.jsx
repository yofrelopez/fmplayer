


import Link from 'next/link'
import React from 'react'



export const Footer = () => {
  return (
    <>
    
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">                       
             | Antena 9™</Link> | Desarrollado por Yofré López.</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="/" className="mr-4 hover:underline md:mr-6 ">Inicio</Link>
                </li>
                <li>
                    <Link href="/nosotros" className="mr-4 hover:underline md:mr-6">Nosotros</Link>
                </li>

            </ul>
        </footer>


    </>
  )
}
