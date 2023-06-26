import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
      <Image src="https://res.cloudinary.com/studiovity/image/upload/v1687753565/Trello%20clone/Trello-logo-blue.svg_kkvxtf.png"
      alt='Trello Logo'
      width={300}
      height={100}
      className='w-44 md:w-56 pb-10 md:pb-0 object-contain'

      />
    </header>
  )
}

export default Header