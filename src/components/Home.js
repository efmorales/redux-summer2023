import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'

const Home = () => {
    return (
        <Container maxWidth='lg'>
            <Box>
                <Typography variant='h1'>
                    Please log-in
                </Typography>
            </Box>
            <Button variant='outline' href='/login' > Login </Button>
            <Button variant='contained' href='/register' > Register </Button>

        </Container >
    )
}

export default Home