import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full py-2 ">
      <div>LOGO</div>

      <div className="flex items-center justify-center text-2xl font-semibold absolute right-0 w-full">Heading</div>

      <div className="flex gap-2">
        <div>button1</div>
        <div>day/night</div>
      </div>
    </header>
  )
}

export default Header