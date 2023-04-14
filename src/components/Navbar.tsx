import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <>
            <nav className='w-full h-fit md:h-16 bg-blue-300 flex flex-col md:flex-row justify-between items-center'>
                <div className='text-3xl pl-0 md:pl-3 cursor-default'>Kiattichai Haruansri</div>
                <div className='flex w-full md:w-2/4 justify-between pr-0 md:pr-3'>
                    {[
                        ["Home", "/"],
                        ["Activities", "/act"],
                        ["Certificates", "/cert"],
                        ["Contact", "/contact"],
                    ].map(([title, url]) => (
                        <Link href={url} className='flex w-1/4 justify-around hover:bg-blue-500 p-2 rounded-xl hover:underline' key={title}>
                            <div className='text-lg'>{title}</div>
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Navbar