import React from 'react'
import Navbar from './components/Navbar'
import Example from './components/ourTeam'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <h2 className='text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl'>Bizning jamoa</h2>
      <Example/>
    </div>
  )
}

export default App