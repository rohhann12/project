import React from 'react'

function App() {
  return (
    <>
    <div className='bg-black w-full h-screen text-white rounded-sm'>
      <div>
        <p>Name</p>
        <input type="text" className='text-black'/>
      </div>
      <div>
        <p>Description</p>
        <input type="text"className='text-black'/>
      </div>
      <div>
        <p>Interest</p>
        <input type="text" className='text-black'/>
      </div>
      <div>
        <p>LinkedIn Link</p>
        <input type="text"className='text-black' />
      </div>
      <div>
        <p>Twitter Link</p>
        <input type="text" className='text-black'/>
      </div>
    </div>
    </>
  )
}

export default App