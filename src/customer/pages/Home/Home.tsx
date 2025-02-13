import CategoryGrid from "./CategoryGrid/CategoryGrid"
import Deal from "./Deal/Deal"
import ElectricCategory from "./ElectricCategory/ElectricCategory"
import ShopByCategory from "./ShopByCategory/ShopByCategory"
import myImage from "../../../assets/seller-banner.png"
import { Button } from "@mui/material"
import { Storefront } from "@mui/icons-material"


function Home() {
  return (
    <>
      <div className='space-y-5 lg:space-y-10 relative pb-20'>
        <ElectricCategory />
        <CategoryGrid />
        <div className="pt-20">
          <h1 className='text-center text-lg lg:text-4xl font-bold text-[#00927c] pb-5 lg:pb-10'>TODAY'S DEAL</h1>
          <Deal />
        </div>
        <div className="py-20">
          <h1 className='text-center text-lg lg:text-4xl font-bold text-[#00927c] pb-5 lg:pb-10'>SHOP BY CATEGORY</h1>
          <ShopByCategory />
        </div>

        <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'> {/* lg:px-20 <--adds left/right padding, SEE-IT */}
          <img className='w-full h-full' src={myImage} alt="" />
          <div className='absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3'>
            <h1>Sell your Product</h1>
            <p className='text-lg md:text-2xl'>With<span className='logo pl-2 text-[#00927c]'>BuyNest</span></p>
            <div className='pt-6 flex justify-center'>
              <Button startIcon={<Storefront />} variant='contained' size='large'>
                Become Seller
              </Button>
            </div>
            
          </div>
        </section>

      </div>
    </>

  )
}

export default Home

/* 
In Tailwind CSS, space-y-5 adds 1.25rem (20px) vertical spacing between direct child elements inside a flex or block container.

CSS Equivalent:
 & > * + * {
    margin-top: 1.25rem; <--20px
  }
Example:
  <div class="space-y-5">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3</p>
  </div>
This ensures each child element has a 20px gap above it, except the first one.
*/


/*
Yes, you can give an image path directly to src, but it depends on the type of path:

For Local Images (in src/ folder) → You must import the image:
  import myImage from './assets/image.jpg';
  <img src={myImage} alt="Local Image" />

For Public Folder Images (public/ directory) → Use a direct path:
  <img src="/images/myImage.jpg" alt="Public Image" />

For External Images (URLs) → Directly use the URL:
  <img src="https://example.com/image.jpg" alt="External Image" />

  If using local images without importing, they must be in the public/ folder, not src/. 
 */