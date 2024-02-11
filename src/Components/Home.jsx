import React from 'react'

function Home(props) {

  return (
   <>
   <div className='h-full w-screen grid place-content-center'>
    <div className='h-screen w-full flex flex-col-reverse sm:flex-row justify-centre items-center space-y-5 lg:space-x-10 '>
    <span className='grid place-content-center h-1/2'>
    <img src='./images/dicemaster.png' alt='Dice Master' className='lg:h-[35rem] h-3/4 '/>
    </span>
        <span className='lg:h-1/2 lg:w-1/2 w-full h-1/2 flex justify-center items-center flex-col space-y-7'>
            <h1 className='lg:p-6 font-semibold text-6xl font-abc'>Gauss No</h1>
            <button onClick={props.changePage} className='text-xl bg-gray-700 text-white rounded-md px-5 py-2 mb-5 font-abc'>Play Now</button>
        </span>
    </div>
    </div>
   </>
  )
}

export default Home