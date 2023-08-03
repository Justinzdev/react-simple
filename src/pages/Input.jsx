import React, { useState } from 'react'

const Input = () => {
    const [getName, setName] = useState('')
    const [getLastName, setLastName] = useState('')

    const handleChange = (e) => {
      setName(e.target.value)
    }

    const onSubmit = () => {
      setLastName(getName)
    }

    return (
        <div className='bg-red-500 w-full h-screen flex justify-center items-center'>
            <div className='w-full text-center'>
              <input onChange={handleChange} value={getName} type='text' placeholder='ระบุชื่อ' className='px-3 py-2 w-[30%] bg-gray-200 rounded-md border-2 border-gray-400 outline-none focus:bg-white focus:border-purple-500' required />
              <div className='mt-8'>
                <button onClick={onSubmit} className='bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600 hover:scale-110 duration-700' type='button'>ยืนยัน</button>
              </div>
              <div className='mt-5'>
                  <p>{ getLastName }</p>
              </div>
            </div>
        </div>
    )
}

export default Input