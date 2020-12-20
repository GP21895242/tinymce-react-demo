

import { getContent, setContent} from '../core/Content';

export const open = function (editor) {
  const editorContent = getContent(editor);

  editor.windowManager.open({
    title: 'Source Code',
    size: 'large',
    body: {
      type: 'panel',
      items: [
        {
          type: 'textarea',
          name: 'code'
        }
      ]
    },
    buttons: [
      {
        type: 'cancel',
        name: 'cancel',
        text: 'Cancel'
      },
      {
        type: 'submit',
        name: 'save',
        text: 'Save',
        primary: true
      }
    ],
    initialData: {
      code: editorContent
    },
    onSubmit: (api) => {
      setContent(editor, api.getData().code);
      api.close();
    }
  });
};

