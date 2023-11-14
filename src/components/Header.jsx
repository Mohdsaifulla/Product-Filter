import React from 'react'

const Header = () => {
  return (
    <div className=' border bg-gray-400'>
        <div className='p-2 rounded-lg'>
            <input type='text' className='border rounded-lg p-1' placeholder='Search..'/>
        </div>
    </div>
  )
}

export default Header