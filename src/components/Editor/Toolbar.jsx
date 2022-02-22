import { useSlate } from 'slate-react';
import { CustomEditor } from './CustomFunctions';
import styles from '../../styles/components/Editor.module.scss';
import {
  Bold,
  Italic,
  Underline,
  AColon,
  LeftAlign,
  CenterAlign,
  Bullets,
  TPColon,
  Link,
  Image,
  Emoji,
  AddColon,
} from '../../helpers/svgs';
import { MdFormatQuote, MdCode } from 'react-icons/md';

export default function Toolbar() {
  const editor = useSlate();
  const { isBlockActive, isMarkActive, toggleBlock, toggleMark } = CustomEditor;
  const buttons = [
    {
      name: 'bold',
      ele: <Bold />,
      type: 'leaf',
      callback: () => {},
    },
    {
      name: 'italic',
      ele: <Italic />,
      type: 'leaf',
      callback: () => {},
    },
    {
      name: 'underline',
      ele: <Underline />,
      type: 'leaf',
      callback: () => {},
    },
    {
      name: 'AColon',
      ele: <AColon />,
      type: '',
      callback: () => {},
    },
    {
      name: 'LeftAlign',
      ele: <LeftAlign />,
      type: '',
      callback: () => {},
    },
    {
      name: 'CenterAlign',
      ele: <CenterAlign />,
      type: '',
      callback: () => {},
    },
    {
      name: 'Bullets',
      ele: <Bullets />,
      type: '',
      callback: () => {},
    },
    {
      name: 'TPColon',
      ele: <TPColon />,
      type: '',
      callback: () => {},
    },
    {
      name: 'Link',
      ele: <Link />,
      type: '',
      callback: () => {},
    },
    {
      name: 'Image',
      // eslint-disable-next-line jsx-a11y/alt-text
      ele: <Image />,
      type: '',
      callback: () => {},
    },
    {
      name: 'Emoji',
      ele: <Emoji />,
      type: '',
      callback: () => {},
    },
    {
      name: 'AddColon',
      ele: <AddColon />,
      type: '',
      callback: () => {},
    },
    {
      name: 'quote',
      ele: <MdFormatQuote />,
      type: 'block',
      callback: () => {},
    },
    {
      name: 'code',
      ele: <MdCode scale={'large'} />,
      type: 'block',
      callback: () => {},
    },
  ];

  return (
    <div className={styles.Toolbar}>
      {buttons.map((item) => {
        let isActive = false;

        if (item.type === 'leaf' && isMarkActive(editor, item.name)) {
          isActive = true;
        } else if (item.type === 'block' && isBlockActive(editor, item.name))
          isActive = true;

        return (
          <button
            key={item.name}
            className={isActive ? styles.active : ''}
            onMouseDown={(event) => {
              event.preventDefault();
              if (item.type === 'leaf') toggleMark(editor, item.name);
              else toggleBlock(editor, item.name);
              item.callback();
            }}
          >
            {item.ele}
          </button>
        );
      })}
    </div>
  );
}
