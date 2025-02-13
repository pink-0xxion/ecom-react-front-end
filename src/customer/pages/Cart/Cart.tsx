import { Close, LocalOffer } from "@mui/icons-material"
import CartItem from "./CartItem"
import { teal } from "@mui/material/colors"
import { Button, IconButton, TextField } from "@mui/material"
import { useState } from "react"
import PricingCart from "./PricingCard"
import PricingCard from "./PricingCard"

function Cart() {

    const [coupanCode, setCoupanCode] = useState("");

    const handleChange = (e: any) => {
        setCoupanCode(e.target.value);
    }

    return (
        <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="cartItemSelection lg:col-span-2 space-y-3">
                    {[1, 1, 1, 1, 1, 1, 1].map(() => <CartItem />)}
                </div>
                <div className="col-span-1 text-sm space-y-3">
                    <div className="border rounded-md px-5 py-3 space-y-5">
                        <div className="flex items-center gap-3 text-sm">
                            <div className="flex items-center gap-3 text-sm">
                                <LocalOffer sx={{ color: teal[600], fontSize: "17px" }} />
                            </div>
                            <span className="">Apply Coupans</span>
                        </div>
                        {true ? <div className="flex justify-between items-centerg gap-3">
                            {/* <TextField onChange={(e) => handleChange(e)} id="outlined-basic" placeholder="coupan code" size="small" variant="outlined" value={coupanCode}/> */}
                            <TextField onChange={handleChange} id="outlined-basic" placeholder="coupan code" size="small" variant="outlined" value={coupanCode} />
                            <Button size="small">
                                Apply
                            </Button>
                        </div> :
                            <div className="flex">
                                <div className="p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center">
                                    <span className="">ZOSH30 Applied</span>
                                    <IconButton size="small">
                                        <Close className="text-red-600" />
                                    </IconButton>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="border rounded-md">
                        <PricingCard />
                        <div className="p-5">
                            <Button fullWidth variant="contained" sx={{ py: "11px" }}>
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

// 19:22:25
