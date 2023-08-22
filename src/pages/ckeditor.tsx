import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CKEditorComponent from '@/components/ckeditor/CKEditor';

export default function CKEditor() {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom>
                CKEditor example in Next.js
            </Typography>
            <Box
                sx={{
                    my: 4,
                    width: '100%',
                    height: '60vh'
                }}
            >
                <CKEditorComponent />
            </Box>
        </Container>
    );
}
