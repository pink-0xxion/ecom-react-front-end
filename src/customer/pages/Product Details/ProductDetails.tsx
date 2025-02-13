import { Add, AddShoppingCart, Favorite, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { Button, Divider } from '@mui/material';
import { teal } from '@mui/material/colors';
import { useState } from 'react';
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Review/ReviewCard';

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => <img
              className="lg:w-full w-[50px] cursor-pointer rounded-md"
              src="https://riyaasat.in/cdn/shop/files/2_59279dae-a150-4fc8-8bdf-5c255bd5de04.jpg?v=1738685571&width=600" alt="" />)}
          </div>
          <div className="w-full lg:w-[85%]">
            <img className="w-full rounded-md" src="https://riyaasat.in/cdn/shop/files/1_65904c21-3c26-400d-8517-339c8372eb9b.jpg?v=1738685571&width=600" alt="" />
          </div>
        </section>

        <section className="">
          <h1 className="font-bold text-lg text-[#00927c]">
            Raam Clothing
          </h1>
          <p className="text-gray-500 font-semibold">men black shirt</p>
          <div className="flex justify-between items-center py-2 border w-[280px] px-3 mt-5">
            <div className="flex items-center gap-1">
              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: "50px" }} />
            </div>
            <Divider sx={{ borderWidth: "3px", borderColor: teal[500] }} orientation='vertical' flexItem />
            <span>234 Ratings</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">₹ 400</span>
              <span className="line-through text-gray-400">₹ 999</span>
              <span className="text-[#00927c] font-semibold">60%</span>
            </div>
            <p className="text-sm">Inclusive of all taxes. Free Shipping above ₹1500.</p>
          </div>
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic & Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back guarantee</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free Shipping & Returns</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay on delivery might be available</p>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            <h1>
              QUATITY
            </h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>
                <Remove />
              </Button>
              <span>
                {quantity}
              </span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              startIcon={<span>
                <AddShoppingCart sx={{ fontSize: "40px" }} />
              </span>}
              sx={{ py: "1rem" }}
              variant='contained'
            >
              Add To Bag
            </Button>
            <Button
              fullWidth
              startIcon={<span>
                <FavoriteBorder sx={{ fontSize: "40px" }} />
              </span>}
              sx={{ py: "1rem" }}
              variant='outlined'
            >
              Wishlist
            </Button>
          </div>

          <div className="mt-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum libero voluptatibus molestias assumenda molestiae voluptas consequuntur aliquam? Odit modi voluptates explicabo est repellendus? Natus.</p>
          </div>

          <div className="mt-12 space-y-5">
            <ReviewCard />
            <Divider  sx={{ borderWidth: "3px", borderColor: teal[500] }}  />
          </div>

        </section>
      </div>

      <div className="mt-20">
        <h1 className="text-lg font-bold">
          Similar Products
        </h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>

    </div>
  )
}

export default ProductDetails


{/* <Divider orientation='vertical' flexItem/>
  <Divider /> → A Material-UI component used to create a line separator.
  orientation="vertical" → Makes the divider vertical instead of horizontal.
  flexItem → Ensures the divider behaves correctly inside a flex container. */}

// 18:16:41