import "./ShopByCategory.css"   // See here we did not used "from"

function ShopByCategoryCard() {
    return (
        <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>
            <div className='custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-[#00927c]'>
                <img  className='rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full' src="https://images.unsplash.com/photo-1627662306400-d0af4b1e14e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpdGNoZW4lMjBhbmQlMjB0YWJsZXxlbnwwfDB8MHx8fDA%3D" alt="" />
            </div>
            <h1>Kitchen & Table</h1>
        </div>
    )
}

export default ShopByCategoryCard


/*
The group class in Tailwind CSS allows child elements to react to the parent’s state (like hover, focus).
Example:
    <div class="group hover:bg-gray-300 p-4">
    <p class="text-gray-500 group-hover:text-black">Hover over me!</p>
    </div>
When the parent (div) is hovered, the child (p) text changes color.
Useful for nested hover effects and interactive UI elements.
 */