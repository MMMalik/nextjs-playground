import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@/components/link/Link';

export default function Home() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example in TypeScript
                </Typography>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
                <Link href="/ckbox" color="secondary">
                    Go to CKBox page
                </Link>
                <Link href="/ckeditor" color="secondary">
                    Go to CKEditor page
                </Link>
            </Box>
        </Container>
    );
}
