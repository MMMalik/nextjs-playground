import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CKBoxComponent from '@/components/ckbox/CKBox';

export default function CKBox() {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom>
                CKBox example in Next.js
            </Typography>
            <Box
                sx={{
                    my: 4,
                    width: '100%',
                    height: '60vh'
                }}
            >
                <CKBoxComponent />
            </Box>
        </Container>
    );
}
