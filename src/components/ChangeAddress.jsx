import React from 'react'

const ChangeAddress = ({setAddress , setIsModelOpen}) => {
  return (
    <div>
      <input type="text" 
      placeholder='Enter new address'
      className='border p-2 w-full mb-4'/>
      <div className='flex justify-end'>
        <button onClick={()=>
          setIsModelOpen(false)}></button>
      </div>
      
      <button>Cancel</button>
      <button>Save Address
      </button>
    </div>
  )
}

export default ChangeAddress
