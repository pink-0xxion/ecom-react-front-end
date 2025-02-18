import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup } from "@mui/material"
import AddressCard from "./AddressCard"
import React, { useState } from "react";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const paymentGatewayList = [
    {
        value: "RAZORPAY",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCPihAY9kRNE-1CIkU1xrUEyJRuXPwDKZsw&s",
        label: "RAZORPAY",
    },
    {
        value: "STRIPE",
        image: "https://media.licdn.com/dms/image/v2/D4D12AQENHBHA9CTngg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1710769223648?e=2147483647&v=beta&t=slHaTnU-QDTiIjea2g8d-Pcja-PMHQf5Sff19EqknYk",
        label: "STRIPE",
    },
]

function Checkout() {
    const [open, setOpen] = React.useState(false);
    const [paymentGateway, setPaymentGateway] = useState("RAZORPAY");


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handlePaymentChange = (event: any) => {
        setPaymentGateway(event.target.value);

    }

    // console.log(paymentGateway);

    return (
        <>
            <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
                <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
                    <div className="col-span-2 space-y-5">
                        <div className="flex justify-between items-center">
                            <h1 className="font-semibole">Select Address</h1>
                            <Button onClick={handleOpen}>
                                Add new Address
                            </Button>
                        </div>
                        <div className="text-xs font-medium space-y-5">
                            <p>Saved Address</p>
                            <div className="space-y-3">
                                {[1, 1, 1].map(() => <AddressCard />)}
                            </div>
                        </div>
                        <div className="py-4 px-5 rounded-md border">
                            <Button onClick={handleOpen}>
                                Add new Address
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="space-y-3 border p-5 rounded-md">
                                <h1 className="text-[#00927c] font-medium pb-2 text-center">Chose Payment Gateway</h1>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    className="flex justify-between pr-0"
                                    onChange={handlePaymentChange}
                                    value={paymentGateway}
                                >
                                    {paymentGatewayList.map((item) => <FormControlLabel
                                        className="border w-[45%] pr-2 rounded-md flex justify-center"
                                        value={item.value}
                                        control={<Radio />}
                                        label={
                                            <img
                                                // className={`${item.value == "stripe" ? "w-14" : ""} object-cover`}
                                                src={item.image} alt={item.label} />
                                        } />)}
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="border rounded-md">
                            <PricingCard />
                            <div className="p-5">
                                <Button fullWidth variant="contained" sx={{ py: "11px" }}>
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box onClick={handleOpen} sx={style}>
                    <AddressForm />
                </Box>
            </Modal>
        </>

    )
}

export default Checkout

// open={open} → Controls whether the modal is visible (true) or hidden (false).
// onClose={handleClose} → Clicking outside the modal will close it.
