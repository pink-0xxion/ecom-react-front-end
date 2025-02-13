
function CategoryGrid() {
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
      <div className='col-span-3 row-span-12 text-white border-[10px]'> {/* object-top <--work with object-cover/contain, This ensures the top part of the image remains visible when cropped. */}
        <img className='w-full h-full object-cover object-top rounded-md' src="https://images.pexels.com/photos/18089325/pexels-photo-18089325/free-photo-of-model.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className='col-span-2 row-span-6 text-white border-[10px]'>
        <img className='w-full h-full object-cover object-top rounded-md' src="https://media.istockphoto.com/id/1131576249/photo/women-shopping-for-footwear-at-street-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=2ZrV2AQUcot1oS3hM84KxaGKaBv4clK8RVK9TRs2fWc=" alt="" />
      </div>
      <div className='col-span-4 row-span-6 text-white border-[10px]'>
        <img className='w-full h-full object-cover object-top rounded-md' src="https://images.unsplash.com/photo-1603251578711-3290ca1a0187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHwwfDB8fHww" alt="" />
      </div>
      <div className='col-span-3 row-span-12 text-white border-[10px]'>
        <img className='w-full h-full object-cover object-top rounded-md' src="https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyZWV8ZW58MHwwfDB8fHww" alt="" />
      </div>
      <div className='col-span-4 row-span-6 text-white border-[10px]'>
        <img className='w-full h-full object-cover object-top rounded-md' src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHwwfDB8fHww" alt="" />
      </div>
      <div className='col-span-2 row-span-6 text-white border-[10px]'>
        <img className='w-full h-full object-cover object-top rounded-md' src="https://images.unsplash.com/photo-1539160371005-e6cbdf4a6c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFuZ2xlc3xlbnwwfDB8MHx8fDA%3D" alt="" />
      </div>
    </div>
  )
}

export default CategoryGrid
