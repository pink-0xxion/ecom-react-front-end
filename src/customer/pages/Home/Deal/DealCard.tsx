
function DealCard() {
    return (
        <div className="w-[13rem] cursor-pointer">
            <img  className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top' 
            src="https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfDB8MHx8fDA%3D" alt="" />
            <div className="border-4 border-black bg-black text-white p-2 text-center">
                <p className="text-lg font-semibold">Smart Watch</p>
                <p className="text-2xl font-bold">20% OFF Watch</p>
                <p className="text-balance text-lg">Shop Now</p>  {/* text-wrap: balance; makes text break more evenly to improve readability. */}
            </div>
        </div>
    )
}

export default DealCard
