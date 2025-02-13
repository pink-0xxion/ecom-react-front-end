import { Divider } from "@mui/material"
import { teal } from "@mui/material/colors"

function PricingCard() {
    return (
        <>
            <div className="space-y-3 p-5">
                <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span>₹899</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Discount</span>
                    <span>₹699</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Shipping</span>
                    <span>₹69</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Platform</span>
                    <span>Free</span>
                </div>
            </div>
            <Divider sx={{ borderWidth: "3px", borderColor: teal[500] }} />
            <div className="flex justify-between items-center p-5 text-[#00927c]">
                <span>Total</span>
                <span>₹799</span>
            </div>
        </>
    )
}

export default PricingCard
