import { Box, Button, Grid2, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const AddressFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string().required("Mobile is required").matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
    pinCode: Yup.string().required("Pin Code is required").matches(/^[1-9][0-9]{5}$/, "Invalid pin code"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    locality: Yup.string().required("Locality is required"),
})

function AddressForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            pinCode: '',
            address: '',
            city: '',
            state: '',
            locality: '',
        },
        validationSchema: AddressFormSchema,
        onSubmit: (values) => {
            // submit form
            console.log(values);
        },
    });




    return (
        <Box sx={{ max: "auto" }}>
            <p className='text-xl font-bold text-center pb-5'>Contact Details</p>
            <form onSubmit={formik.handleSubmit}>
                <Grid2 container spacing={3}>
                    <Grid2 size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            name="name"
                            label="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}  // makes the color red on submit
                            helperText={formik.touched.name && formik.errors.name}      // shows the required message on submit
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 6 }}>
                        <TextField
                            fullWidth
                            name="mobile"
                            label="Mobile"
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                            helperText={formik.touched.mobile && formik.errors.mobile}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 6 }}>
                        <TextField
                            fullWidth
                            name="pinCode"
                            label="Pin Code"
                            value={formik.values.pinCode}
                            onChange={formik.handleChange}
                            error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                            helperText={formik.touched.pinCode && formik.errors.pinCode}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            name="address"
                            label="Address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 6 }}>
                        <TextField
                            fullWidth
                            name="city"
                            label="City"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 6 }}>
                        <TextField
                            fullWidth
                            name="state"
                            label="State"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            error={formik.touched.state && Boolean(formik.errors.state)}
                            helperText={formik.touched.state && formik.errors.state}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            name="locality"
                            label="Locality"
                            value={formik.values.locality}
                            onChange={formik.handleChange}
                            error={formik.touched.locality && Boolean(formik.errors.locality)}
                            helperText={formik.touched.locality && formik.errors.locality}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                        <Button fullWidth type="submit" variant='contained' sx={{py: "14px"}}>
                            Add Address
                        </Button>
                    </Grid2>
                </Grid2>

            </form>
        </Box>
    )
}

export default AddressForm

// libraries: Formikn, Yup
// Formik handles the form state, and Yup validates input fields!