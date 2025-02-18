import { Box, Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import OrderStepper from './OrderStepper';
import { Payments } from '@mui/icons-material';

function Orderdetails() {
    const navigate = useNavigate();
    return (
        <Box className='space-y-5'>
            <section className="flex flex-col gap-5 justify-center items-center">
                <img className="w-[100px]" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfB24rfEKq9k9oTY6wZ7slFhUrZryaOZ1f3A&s"} alt="" />
                <div className="text-sm space-y-1 text-center">
                    <h1 className="font-bold">{"Raam Clothing"}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, soluta nesciunt accusantium pariatur autem veniam.</p>
                    <p><strong>size: </strong>FREE</p>
                </div>
                <div>
                    <Button onClick={() => navigate(`/reviews/${5}/create`)}>
                        Write Review
                    </Button>
                </div>
            </section>

            <section className="border p-5">
                <OrderStepper orderStatus={"SHIPPED"} />
            </section>

                <div className="border p-5">
                    <h1 className="font-bold pb-3">Delivery Address</h1>
                    <div className="text-sm space-y-2">
                        <div className="flex gap-5 font-medium">
                            <p>{"Zosh"}</p>
                            <Divider flexItem orientation='vertical' />
                            <p>9837267383</p>
                        </div>
                        <p>
                            Ambavadi choke, Banglore, Karnataka -530068
                        </p>
                    </div>
                </div>

                <div className="border space-y-5">
                    <div className="flex justify-between text-sm pt-5 px-5">
                        <div className="space-y-1">
                            <p className="font-bold">Total Item Price</p>
                            <p>You Saved <span className='text-green-500 font-medium text-xs'>₹{699}.00</span> on this item</p>
                        </div>
                        <p className="font-medium">₹{799}.00</p>
                    </div>
                    <div className="px-5">
                        <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
                            <Payments />
                            <p>Pay on Delivery</p>
                        </div>
                    </div>
                    <Divider />
                    <div className="px-5 pb-5">
                        <p className="text-xs"><strong>Sold by: </strong>{"Virani Clothing"}</p>
                    </div>

                    <div className="p-10">
                        <Button
                        disabled={false}
                        // onClick={handleCancelOrder}
                        color='error' sx={{py: "0.7rem"}} className='' variant='outlined'
                        fullWidth
                        >
                            {true? "Order Canceled" : "Cancel Order"}
                        </Button>
                    </div>
                </div>
        </Box>
    )
}

export default Orderdetails

// flexItem in MUI's <Divider> makes the divider behave like a flex child, ensuring it stretches properly inside a flex container.
// Without flexItem, the vertical divider might not align correctly in flexbox layouts.