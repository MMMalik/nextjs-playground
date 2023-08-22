import React from 'react';
import dynamic from 'next/dynamic';
import '@ckbox/components/dist/styles/ckbox.css';

const CKBox = dynamic(() => import('@ckbox/core').then((e) => e.CKBox), {
    ssr: false,
    loading: () => <p>Loading CKBox...</p>
});

export default function CKBoxComponent() {
    return (
        <CKBox
            tokenUrl="https://preview.ckbox.io/ckbox/token/index.php?superadmin"
            serviceOrigin="https://ckbox.cke-cs-dev.com"
        />
    );
}
