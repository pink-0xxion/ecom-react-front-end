import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import OrderStepper from './OrderStepper';

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
            
        </Box>
    )
}

export default Orderdetails
