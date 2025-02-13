import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, Pagination, Select, useMediaQuery, useTheme } from '@mui/material'
import FilterSection from './FilterSection'
import ProductCard from './ProductCard'
import { FilterAlt } from '@mui/icons-material';
import { useState } from 'react';

function Product() {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
    const [sort, setSort] = useState();
    const [page, setPage] = useState(1);


    const handleSortChange = (event: any) => {
        setSort(event.target.value);
    }

    const handlePageChange = (value: number) => {
        setPage(value);
    }

    return (
        <div className='-z-10 mt-10'>    {/* the z-index of an element to -10, placing it behind other elements "z-index: -10;" */}


            <div>
                <h1 className='text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2'>women saree</h1>
            </div>

            <div className='lg:flex'>
                {/* { isLarge && (<section className='filter_section  w-[20%]'>  
                    <FilterSection />
                </section>)}  */}

                <section className='filter_section hidden lg:block w-[20%]'>     {/* hidden for small and medium screens and block (just for appearance) for large screens */}
                    <FilterSection />
                </section>

                <div className='w-full lg:w-[80%] space-y-5'>
                    <div className='flex justify-between items-center px-9 h-40px'>
                        <div className='relative w-[50%]'>
                            {
                                !isLarge && (<IconButton>
                                    <FilterAlt />
                                </IconButton>)
                            }
                            {
                                !isLarge && (<Box>
                                    <FilterSection />
                                </Box>)
                            }
                        </div>

                        <FormControl size="small" sx={{ width: "200px" }}>
                            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sort}
                                label="Age"
                                onChange={handleSortChange}
                            >
                                <MenuItem value={"price_low"}>Price: Low - High</MenuItem>
                                <MenuItem value={"price_high"}>Price: High - Low</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <Divider />

                    <section className='products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center'>
                        {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => <ProductCard />)}

                    </section>
                    <div className='flex justify-center py-10'>
                        <Pagination
                            onChange={(e, value) => handlePageChange(value)}
                            count={10}
                            shape="rounded"
                            color="primary"
                        />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Product


