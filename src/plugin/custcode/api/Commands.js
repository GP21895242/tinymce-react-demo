import { open } from '../ui/Dialog';

export const register = function (editor) {
  editor.addCommand('mceCodeEditor', function () {
    open(editor);
  });
};
