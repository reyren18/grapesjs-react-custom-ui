import React from 'react'; // Add this line
import '@blocknote/core/fonts/inter.css';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';

export default function Texteditor() {
  const editor = useCreateBlockNote();
  return <BlockNoteView editor={editor} />;
}
