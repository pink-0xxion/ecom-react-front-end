import AddCardIcon from '@mui/icons-material/AddCard';
import { teal } from '@mui/material/colors';

function SavedCards() {
  return (
    <div className='text-center space-y-3'>
        <AddCardIcon sx={{fontSize: "200px", color: teal[500]}}/>
        <h1>SAVE YOUR CREDIT/DEBIT CARDS DURING PAYMENT</h1>
      <p className='text-sm text-gray-600'>It's convenient to pay with saved cards. Your card information will be secure, we use 128-bit encryption</p>
    </div>
  )
}

export default SavedCards
