import SimilarProductCard from './SimilarProductCard'

function SimilarProduct() {
  return (
    <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between gap-4 gap-y-8'>
      {[1, 1, 1, 1, 1, 1, 1].map(() => <SimilarProductCard />)}
    </div>
  )
}

export default SimilarProduct
