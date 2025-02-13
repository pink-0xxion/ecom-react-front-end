import { createTheme } from '@mui/material'

const customTheme = createTheme({   //we are creating global variables (Context API)
    palette: {
        mode: "light",
        primary: {
            main: "#00927c"
        },
        secondary: {
            main: "#EAF0F1"
        }
    }
})

export default customTheme;
