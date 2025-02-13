import { Divider } from "@mui/material"
import ReviewCard from "./ReviewCard"

function Review() {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
      <img src="https://riyaasat.in/cdn/shop/files/1_65904c21-3c26-400d-8517-339c8372eb9b.jpg?v=1738685571&width=600" alt="" />
      <div>
        <div>
          <p className="font-bold text-xl">
            Virani Clothing
          </p>
          <p className="text-lg text-gray-600">
            Men's White Shirt
          </p>
        </div>
        <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">₹ 400</span>
              <span className="line-through text-gray-400">₹ 999</span>
              <span className="text-[#00927c] font-semibold">60%</span>
            </div>
          </div>
      </div>
      </section>

      <section className="space-y-5 w-full">
        {[1, 1, 1, 1, 1].map(() => <div className="space-y-5"> <ReviewCard />
        <Divider />
        </div>)}
      </section>
    </div>
  )
}

export default Review
