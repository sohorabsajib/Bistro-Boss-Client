import React from 'react'

function SectionTitle({heading, subHeading}) {
  return (
    <div className='md:w-4/12 mx-auto text-center my-8'>
        <p className='text-lg text-yellow-600'>--- {subHeading} ---</p>
        <h3 className='text-3xl uppercase border-y-4 py-4 font-semibold'>{heading}</h3>
    </div>
  )
}

export default SectionTitle