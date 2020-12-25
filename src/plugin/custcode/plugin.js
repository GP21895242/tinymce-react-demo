import { PluginManager } from 'tinymce';
import * as Commands from './api/Commands';
import * as Buttons from './ui/Buttons';

export default function () {
  PluginManager.add('code', function (editor) {
    Commands.register(editor);
    Buttons.register(editor);

    return {};
  });
}
