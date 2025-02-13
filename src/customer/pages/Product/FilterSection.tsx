import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { color } from "../../../data/filter/color"
import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import { discount } from "../../../data/filter/discount";
import { price } from "../../../data/filter/price";

function FilterSection() {
  const [expandColor, setExpandColor] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleColorToggle = () => {
    setExpandColor(!expandColor);
  }

  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    setSearchParams({}); // ✅ This clears all filters
  };
  

  // const clearAllFilters = () => {
  //   console.log("clearAllFilters", searchParams);
  //   searchParams.forEach((value: any, key: any) => {
  //     searchParams.delete(key);
  //   });
  //   setSearchParams(searchParams);
  // };

  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r-8">
        <p className="text-lg font-semibold">
          Filters
        </p>
        <Button onClick={clearAllFilters} size='small' className="text-[#00927c] cursor-pointer font-semibold">
          clear all
        </Button>
      </div>
      <Divider />
      <div className="px-9 space-y-6">
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#00927c",
                pb: "14px"
              }}
              className="text-2xl font-semibold"
              id="color"
            >
              Color</FormLabel>
            <RadioGroup
              aria-labelledby="color"
              onChange={updateFilterParams}
              defaultValue=""
              name="color"
            >
              {
                color.slice(0, expandColor ? color.length : 5).map((item) => <FormControlLabel value={item.name} control={<Radio />} label={
                  <div className="flex items-center gap-3">
                    <p>
                      {item.name}
                    </p>
                    <p
                      style={{ backgroundColor: item.hex }}
                      className={`h-5 w-5 rounded-full ${item.name === "White" ? "border-2 border-black" : ""}`}>

                    </p>
                  </div>
                } />)
              }


            </RadioGroup>
          </FormControl>
          <div>
            <button 
            onClick={handleColorToggle}
            className="text-[#00927c] cursor-pointer hover:text-teal-900 flex items-center">
              {expandColor ? "hide" : `+${color.length - 5} more`}
            </button>
          </div>
        </section>
        <Divider />
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#00927c",
                pb: "14px"
              }}
              className="text-2xl font-semibold"
              id="price"
            >
              Price</FormLabel>
            <RadioGroup
              aria-labelledby="price"
              onChange={updateFilterParams}
              defaultValue=""
              name="price"
            >
              {
                price.map((item, index) => (
                <FormControlLabel 
                key={item.name} 
                value={item.value} 
                control={<Radio  size="small"/>} 
                label={item.name} 
                />))
              }
            </RadioGroup>
          </FormControl>
        </section>
        <Divider />
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#00927c",
                pb: "14px"
              }}
              className="text-2xl font-semibold"
              id="brand"
            >
              Discount</FormLabel>
            <RadioGroup
              aria-labelledby="brand"
              onChange={updateFilterParams}
              defaultValue=""
              name="discount"
            >
              {
                discount.map((item, index) => (
                <FormControlLabel 
                key={item.name} 
                value={item.value} 
                control={<Radio  size="small"/>} 
                label={item.name} 
                />))
              }
            </RadioGroup>
          </FormControl>
        </section>
      </div>

    </div>
  )
}

export default FilterSection

// 17:37:20