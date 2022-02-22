import { Editor, Transforms, Text } from 'slate';

export const CustomEditor = {
  isMarkActive(editor, type) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n[type] === true,
      universal: true,
    });

    return !!match;
  },

  isBlockActive(editor, type) {
    const [match] = Editor.nodes(editor, { match: (n) => n.type === type });

    return !!match;
  },

  toggleMark(editor, type) {
    const isActive = CustomEditor.isMarkActive(editor, type);
    console.log('isActive :>> ', isActive);
    Transforms.setNodes(
      editor,
      { [type]: isActive ? null : true },
      { match: (n) => Text.isText(n), hanging: false, split: true },
    );
  },

  toggleBlock(editor, type) {
    const isActive = CustomEditor.isBlockActive(editor, type);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : type },
      { match: (n) => Editor.isBlock(editor, n) },
    );
  },
};
