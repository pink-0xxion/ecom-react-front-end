import { Box, dividerClasses } from "@mui/material"
import { electronicsLevelThree } from "../../../data/category/level three/electronicsLevelThree"
import { FurnitureLevelThree } from "../../../data/category/level three/furnitureLevelThree"
import { menLevelThree } from "../../../data/category/level three/menLevelThree"
import { womenLevelThree } from "../../../data/category/level three/womenLevelThree"
import { electronicsLevelTwo } from "../../../data/category/level two/electronicsLevelTwo"
import { FurnitureLevelTwo } from "../../../data/category/level two/furnitureLevelTwo"
import { menLevelTwo } from "../../../data/category/level two/menLevelTwo"
import { womenLevelTwo } from "../../../data/category/level two/womenLevelTwo"

const CategoryTwo:{[key:string]:any[]} = {
    men: menLevelTwo,
    women: womenLevelTwo,
    electronics: electronicsLevelTwo,
    home_furniture: FurnitureLevelTwo,
}

const CategoryThree:{[key:string]:any[]} = {
    men: menLevelThree,
    women: womenLevelThree,
    electronics: electronicsLevelThree,
    home_furniture: FurnitureLevelThree,
}

function CategorySheet({slectedCategory, setShowSheet}: any) {

    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => child.parentCategoryId == parentCategoryId)
    }

    return (
        <Box sx={{ zIndex: 2 }} className='bg-white shadow-lg lg:h-[500px] overflow-y-auto'>
            <div className='flex  text-sm flex-wrap'>
                {
                    // {/* CategoryTwo.men also works */}
                    CategoryTwo[slectedCategory].map((item:any, index) => <div    
                    className={`p-8 lg:w-[20%] ${index % 2 === 0 ? "bg-slate-200" : "bg-white"}`}>  
                        <p className='text-[#00927c] mb-5 font-semibold'>{item.name}</p>
                        <ul className='space-y-3'>

                            {childCategory(CategoryThree[slectedCategory], item.categoryId).map((item: any) => <div>
                                <li className='hover:text-[00927c] cursor-pointer'>
                                    {item.name}
                                </li>
                            </div>
                            )}


                        </ul>
                    </div>)
                }
            </div>
        </Box>
    )
}

export default CategorySheet



// The any type allows the code to work with different category structures dynamically without TypeScript showing type errors.
// The filter() method in JavaScript creates a new array containing elements that meet a specified condition.
