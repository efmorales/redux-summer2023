import { createTheme } from '@mui/material/styles'
import { blue, green, red } from '@mui/material/colors';
import { dark } from '@mui/material/styles/createPalette';


const theme = createTheme({
    palette: {
        // mode: 'dark',
        primary: {
            main: red[500],
            dark: blue[500],
        },
        secondary: {
            main: blue[500],
        },
        error: {
            main: green[500]
        }
    },
});

export default theme