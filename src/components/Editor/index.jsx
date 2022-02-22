import { useState, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, withReact } from 'slate-react';
import MyEditable from './MyEditable';
import Toolbar from './Toolbar';

export default function Editor() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      children: [
        { text: 'My name is ' },
        { text: 'Ankit Goel.', bold: true },
        {
          text: ' I am a pre-final year pursuing B.Tech from Maharaja Agrasen Institute of Technology (MAIT), Delhi, India.',
        },
      ],
    },
    { children: [{ text: '<I love coding. />' }], type: 'code' },
    {
      type: 'quote',
      children: [
        { text: 'I am a ' },
        { text: 'Full Stack Web Developer', bold: true },
        { text: ' with speciality in ' },
        { text: 'MERN Stack', underline: true },
        {
          text: '. I have strong inclination towards Front-end Development as developing new and challenging designs fascinates me.',
        },
      ],
    },
    { children: [{ text: 'Looking Forward!' }] },
    { children: [{ text: 'Regards', italic: true }] },
    { children: [{ italic: true, text: 'Ankit Goel' }] },
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(value) => {
        setValue(value);
        console.log(value);
        // const isAstChange = editor.operations.some(
        //   (op) => 'set_selection' !== op.type,
        // );
        // if (isAstChange) {        //   // Save the value to Local Storage.
        //   const content = JSON.stringify(value);
        //   localStorage.setItem('content', content);
        // }
      }}
    >
      <Toolbar />
      <MyEditable />
    </Slate>
  );
}
