import { PluginManager } from 'tinymce';

function dispatchPreviewEvent(editor) {
  editor.fire('onPreview', {
    content: editor.getContent(),
  });
}

PluginManager.add('pdfpreview', function (editor) {
  editor.ui.registry.addButton('pdfpreview', {
    icon: 'preview',
    tooltip: 'Preview As PDF',
    onAction: () => dispatchPreviewEvent(editor),
  });

  editor.ui.registry.addMenuItem('pdfpreview', {
    icon: 'preview',
    text: 'Preview As PDF',
    onAction: () => dispatchPreviewEvent(editor),
  });

  return {};
});
