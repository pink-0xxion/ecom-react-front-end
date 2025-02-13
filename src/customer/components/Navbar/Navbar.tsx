// import React from 'react'
import { Box, IconButton, Button, Avatar, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';
import CategorySheet from './CategorySheet';
import { mainCategory } from '../../../data/category/mainCategory';
import { useState } from 'react';

function Navbar() {
    const theme = useTheme(); //gets the MUI theme object.
    const isLarge = useMediaQuery(theme.breakpoints.up("lg")); //checks if the screen width matches large (lg) or above and return true otherwise false
    const [slectedCategory, setSlectedCategory] = useState("electronics");
    const [showCategorySheet, setShowCategorySheet] = useState(false);

    return (
        <div>

            <Box sx={{ zIndex: 2 }} className="sticky top-0 left-0 right-0 bg-white">
                <div className='flex items-center justify-between px-5 lg:px-20 h-[70px] border-b'>
                    <div className='flex items-center gap-9'>
                        <div className='flex items-center gap-2'>
                            {!isLarge && <IconButton>       {/* if screen is NOT large (less than width:1024px) then only show the hamburger */}
                                <MenuIcon />
                            </IconButton>}
                            <h1 className='logo cursor-pointer text-lg md:text-2xl text-[#00927c]'>
                            BuyNest
                            </h1>
                        </div>
                        {isLarge && <ul className='flex items-center text-gray-700'>   {/* if screen is large (greater than width:1024px) then only show the Menu */}
                            {/* {["Men", "Women", "Home & Furniture", "Electronics"].map((item) => */}
                            {mainCategory.map((item) =>
                                <li
                                    onMouseLeave={() => {
                                        setShowCategorySheet(false);
                                    }}
                                    onMouseEnter={() => {
                                        setShowCategorySheet(true);
                                        setSlectedCategory(item.categoryId);
                                    }}
                                    className='mainCategory hover:text-[#00927c] hover:border-b-2 hover:h-[70px] px-4 border-[#00927c]'>
                                    {item.name}
                                </li>
                            )
                            }
                        </ul>}
                    </div>
                    <div className='flex gap-1 lg:gap-6 items-center'>
                        <IconButton>
                            <SearchOutlinedIcon />
                        </IconButton>
                        {
                            true ? <Button className='flex items-center gap-2' >
                                <Avatar
                                    sx={{ width: 29, height: 29 }}
                                    src='https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww' />
                                <h1 className='font-semibold hidden lg:block'>Zosh</h1>
                            </Button> :
                                <Button variant='contained'><AccountCircleOutlinedIcon /> Login</Button>
                        }
                        <IconButton>    {/* IconButton to make heart icon clickable */}
                            <FavoriteBorder sx={{ fontSize: 29 }} />
                        </IconButton>
                        <IconButton>
                            <AddShoppingCart className='text-gray-700' sx={{ fontSize: 29 }} />
                        </IconButton>
                        {isLarge && <Button startIcon={<Storefront />} variant='outlined'>
                            Become Seller
                        </Button>
                        }
                    </div>
                </div>

                {showCategorySheet && <div
                    onMouseLeave={() => setShowCategorySheet(false)}    // this is also important else sublist will disapear
                    onMouseEnter={() => setShowCategorySheet(true)}     // this is also important else sublist will disapear
                    className='categorySheet absolute top-[3rem] left-20 right-20 border'>
                    <CategorySheet slectedCategory={slectedCategory} />
                </div>}
            </Box>
        </div>
    )
}

export default Navbar

// text-[220px] <--this way to provide own value <--VVI
