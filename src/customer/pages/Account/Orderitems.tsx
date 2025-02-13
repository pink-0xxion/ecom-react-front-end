import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'

function Orderitems() {
  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes='small' sx={{width: 32, height: 32, bgcolor: teal[500]}}>    {/* Issue: sizes only provides hints to the browser for responsive images (like <img sizes="">), it does not change the Avatar size. so instead use "sx={{width: 32, height: 32}}"*/}
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-[#00927c]">PENDING</h1>
          <p>Arriving By Mon, 15 Jul</p>
        </div>
      </div>
      <div className='p-5 bg-teal-50 flex gap-3'>
        <div>
          <img className="w-[200px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfB24rfEKq9k9oTY6wZ7slFhUrZryaOZ1f3A&s" alt="" />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">Raam Clothing</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nam dolores nemo voluptatibus excepturi.</p>
          <p><strong>size: </strong>FREE</p>
        </div>
      </div>
    </div>
  )
}

export default Orderitems
