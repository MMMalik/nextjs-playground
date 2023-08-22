import React from 'react';
import type ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function CKEditorComponent() {
    const [editorRoot, setEditorRoot] = React.useState<HTMLDivElement | null>(
        null
    );

    React.useEffect(() => {
        let editor: ClassicEditor;

        import('@ckeditor/ckeditor5-build-classic').then((module) => {
            if (!editorRoot) {
                return;
            }

            module.default
                .create(editorRoot, {
                    toolbar: {
                        items: [
                            'heading',
                            '|',
                            'bold',
                            'italic',
                            '|',
                            'link',
                            'insertTable'
                        ],
                        shouldNotGroupWhenFull: true
                    }
                })
                .then((editorInstance) => {
                    editor = editorInstance;
                });
        });

        return () => {
            editor?.destroy();
        };
    }, [editorRoot]);

    return <div ref={setEditorRoot} />;
}
