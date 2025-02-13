import { useEffect, useState } from "react"
import "./ProductCard.css"
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";


const images = [
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMRItge9-M7CZVsCMQ1aIYjx1GoSNP_0LssExuDhTFua7j5xoUzT5NOZLdCiHGW6rb0hv6jYdEK0K7TnFVyNlPOhddHvqSKzu_tQ9c4K1wON5rVLTT073V",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRi9x3u-vGm1QBsLL1ueXtVLTaNpVV7UJt0RSc7zop5ws3I4H9VQMdCABEB3orvEkPG1eXlIuocnkJnoU7w_4C1NZGeKK7tsw",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTCoZc1EBCarJY3IqSIP7V451gEQJAb53KxRO5pmeX3pq7ZPLK74AEYvqSBeoRr-d-RJJbR1M6wD-jU-MsY_NHTdWtVW93Axw",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwWONLgGEosWhaSqalu-5tfRXSOE-lNgbrb4DGoH_jqCIbxAv8yus19D2V1VwXr9HR6VAJYUSh0UfaNB_TKFee0RkeYvlbJA4vE5XgVlY",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQITZflnCfGfwfpfD_OGTOYKpsZg9Db1CXZb0ANhWkR54C7X5N6aQbmZPQG4QhHokCyZEzpJ7Fie0CgRkIhyNionA6cGoU8MwFJTO4CbVY",
]


function ProductCard() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

        let interval: any

        if (isHovered) {
            interval = setInterval(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length) // prevImage represents the current index of the image, and we use it to calculate the next image index.
            }, 1000);
        } else if (interval) {
            clearInterval(interval);
            interval = null;
        }

        return () => clearInterval(interval);

    }, [isHovered]);


    return (
        <>
            <div className="group px-4 relative">
                <div className="card"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {images.map((item, index) => <img
                        className="card-media object-top"
                        src={item} alt=""
                        style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}
                    />)}

                    {
                        isHovered &&
                        <div className="indicator flex flex-col items-center space-y-2">
                            <div className="flex gap-3">
                                <Button variant="contained" color="secondary">
                                    <Favorite sx={{color: teal[500]}} />
                                </Button>
                                <Button variant="contained" color="secondary">
                                    <ModeComment sx={{color: teal[500]}} />
                                </Button>
                            </div>
                        </div>
                    }
                </div>

                <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
                    <div className="name">
                        <h1>Nike</h1>
                        <p>White T-Shirt</p>
                    </div>
                    <div className="price flex items-center gap-3">
                        <span className="font-sans text-gray-800">
                        ₹ 400
                        </span>
                        <span className="thin-line-through text-gray-400">
                        ₹ 999
                        </span>
                        <span className="text-[#00927c] font-semibold">
                            60%
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard

/*
images = ['image1.jpg', 'image2.jpg', 'image3.jpg']
Initially, currentImage = 0 (pointing to image1.jpg).

First update:
    prevImage = 0
    (prevImage + 1) % images.length → (0 + 1) % 3 = 1 % 3 = 1
    So, currentImage is updated to 1, showing image2.jpg.
Second update:
    prevImage = 1
    (prevImage + 1) % images.length → (1 + 1) % 3 = 2 % 3 = 2
    So, currentImage is updated to 2, showing image3.jpg.
Third update:
    prevImage = 2
    (prevImage + 1) % images.length → (2 + 1) % 3 = 3 % 3 = 0
    Now, currentImage wraps back to 0, showing image1.jpg again.
In Simple Terms:
    prevImage represents the current index of the image, and we use it to calculate the next image index.
 */



/* 
2 % 3 means "divide 2 by 3" and get the remainder.
When you divide 2 by 3, the result is 0 with a remainder of 2 (because 3 doesn't fit into 2, so the remainder is 2).
*/