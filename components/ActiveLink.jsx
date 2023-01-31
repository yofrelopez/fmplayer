import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'



const style = {
    color:'#EA0AC8'
}


export const ActiveLink = ({href, text}) => {

    const {asPath} = useRouter();


  return (


    <Link style={ asPath === href ? style : null } href={href}
        className="block py-2 pl-3 pr-4 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white"
        aria-current="page"
    >
        {text}
    </Link>
  )
}
