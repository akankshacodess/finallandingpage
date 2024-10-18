import React from 'react'
import FaqContent from './FaqContent'
import FaqForm from './FaqForm'

function Faq() {
  return (
    <div className='bg-gray-200 m-8'>
        <div className='justify-self-center text-3xl pt-5 text-pink-500'>Frequently Asked Questions</div>
      <FaqContent/>
      <FaqForm/>
    </div>
  )
}

export default Faq
