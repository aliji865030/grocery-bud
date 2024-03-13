import React from 'react'

const LandinScreen = () => {
  return (
    <div className='border-2 p-11 rounded-lg hover:shadow-xl'>
      <div>
        <h1 className='text-center text-2xl py-3'>
            Grocery
        </h1>
      </div>
      <div>
        <input type="text" className='border-2 w-60 py-1 px-2' />
        <button className='border-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-lg text-white'>Add Item</button>
      </div>
    </div>
  )
}

export default LandinScreen
