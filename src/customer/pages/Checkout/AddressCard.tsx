import { Radio } from '@mui/material'
import React from 'react'

function AddressCard() {
    const handleChange = (event: any) => {
        console.log(event.target.value);
        
    }
  return (
    <div className='p-5 border rounded-md flex'>
      <div>
        <Radio 
            checked={true}
            onChange={handleChange}
            value=""
            name="radio-button"
        />
      </div>
      <div className='space-y-3 pt-3'>
            <h1>Zosh</h1>
            <p className="w-[320px]">
                Ambavadi choke, Banglore, Banglore, Karnataka -530068
            </p>
            <p><strong>Mobile: </strong> 9948738879</p>
      </div>
    </div>
  )
}

export default AddressCard
