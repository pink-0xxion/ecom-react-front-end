import ShopByCategoryCard from "./ShopByCategoryCard"

function ShopByCategory() {
  return (
    <div className='flex flex-wrap justify-between lg:px-20 gap-7'> {/* lg:px-20 playing important role <--SEE-IT */}
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <ShopByCategoryCard />)}
    </div>
  )
}

export default ShopByCategory
