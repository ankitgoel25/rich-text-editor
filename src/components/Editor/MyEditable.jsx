import { useCallback } from 'react';
import { Editable, useSlate } from 'slate-react';
import { CodeElement, DefaultElement, QuoteElement } from './Elements';
import { CustomEditor } from './CustomFunctions';

export default function MyEditable() {
  const editor = useSlate();

  const Leaf = (props) => {
    console.log('props :>> ', props);
    return (
      <span
        {...props.attributes}
        style={{
          fontWeight: props.leaf.bold ? 'bold' : 'normal',
          fontStyle: props.leaf.italic ? 'italic' : 'normal',
          textDecoration: props.leaf.underline ? 'underline' : 'none',
        }}
      >
        {props.children}
      </span>
    );
  };

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'quote':
        return <QuoteElement {...props} />;
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const onKeyDownFn = (event) => {
    if (!event.ctrlKey) return;

    switch (event.key) {
      // Code Block Shortcut "`"
      case '`': {
        event.preventDefault();
        CustomEditor.toggleBlock(editor, 'code');
        break;
      }

      // Bold Text Shortcut
      case 'b': {
        event.preventDefault();
        CustomEditor.toggleMark(editor, 'bold');
        break;
      }

      // Italic Text Shortcut
      case 'i': {
        event.preventDefault();
        CustomEditor.toggleMark(editor, 'italic');
        break;
      }

      // Underline Text Shortcut
      case 'u': {
        event.preventDefault();
        CustomEditor.toggleMark(editor, 'underline');
        break;
      }
    }
  };

  return (
    <Editable
      renderElement={renderElement}
      renderLeaf={renderLeaf}
      onKeyDown={onKeyDownFn}
    />
  );
}
