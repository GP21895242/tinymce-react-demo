
import { open } from './Dialog';

export const register = function (editor) {
  editor.ui.registry.addButton('code', {
    icon: 'sourcecode',
    tooltip: 'Source code',
    onAction: () => open(editor),
    onSetup: (api) => {
      const alwaysEnableButton = function(eventApi) {
        setTimeout(() => {
          api.setDisabled(false);
        }, 300);
      }
      editor.on('SwitchMode', alwaysEnableButton);
      return function () {
        editor.off('SwitchMode', alwaysEnableButton);
      };
    }
  });

  editor.ui.registry.addMenuItem('code', {
    icon: 'sourcecode',
    text: 'Source code',
    onAction: () => open(editor)
  });
};

