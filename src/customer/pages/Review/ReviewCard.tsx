import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid2, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'

function ReviewCard() {
  return (
    <div className='flex justify-between'>
      <Grid2 container spacing={10}>
        <Grid2 size={{ xs: 1 }}>
          <Box>
            <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}>
              N
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Zosh</p>
              <p className="opacity-70">2024-09-27T23:16:07.478333</p>
            </div>
          </div>
          <Rating
            readOnly
            value={4.5}
            precision={.5}
          />
          <p>Value for money, great product</p>
          <div >
            <img className='w-24 h-24' src="https://anyaonline.in/cdn/shop/collections/Bridal-Kanchi-Silk-Sarees.jpg?v=1727699120" alt="" />
          </div>
        </Grid2>
      </Grid2>
      <div>
      <IconButton>
        <Delete sx={{color: red[700]}}/>
      </IconButton>
      </div>
    </div>
  )
}

export default ReviewCard
