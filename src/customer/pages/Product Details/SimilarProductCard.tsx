// import "ProductCard.css" from "../Product"

function SimilarProductCard() {
    return (
        <div>
            <div className="group px-4 relative">
                <div className="card"
                >
                    <img
                        className="card-media object-top"
                        src="https://riyaasat.in/cdn/shop/files/1_4c6b87d3-4850-4a27-b833-2826c437b1b5.jpg?v=1738685574&width=600" alt=""
                    />

                </div>

                <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
                    <div className="name">
                        <h1>Nike</h1>
                        <p>White T-Shirt</p>
                    </div>
                    <div className="price flex items-center gap-3">
                        <span className="font-sans text-gray-800">
                            ₹400
                        </span>
                        <span className="thin-line-through text-gray-400">
                            ₹999
                        </span>
                        <span className="text-[#00927c] font-semibold">
                            60%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimilarProductCard
