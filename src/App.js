import 'tinymce';
// Default icons are required for TinyMCE 5.3 or above
import 'tinymce/icons/default';
// A theme is also required
import 'tinymce/themes/silver';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/charmap';
// import 'tinymce/plugins/code';
import 'tinymce/plugins/help';
import 'tinymce/plugins/image';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/media';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/print';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/wordcount';
import './plugin/custcode';
import './plugin/font2span';
import './plugin/preview';
import { Editor } from '@tinymce/tinymce-react';

import 'tinymce/skins/ui/oxide/skin.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [enableEditor, setEnableEditor] = useState(true);
  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
    // console.log(editor.ui.registry.getAll());
    // editor.ui.disable();
  };

  const handlePreview = (content, editor) => {
    console.log('Preview Content ', content);
    // console.log(editor.ui.registry.getAll());
    // editor.ui.disable();
  };

  const toggleEnable = () => {
    setEnableEditor(!enableEditor);
  };

  return (
    <>
      <button onClick={toggleEnable}>
        {enableEditor ? 'Disable Editor' : 'Enable Editor'}
      </button>
      <Editor
        initialValue="<font size='10' color='#ff0000' face='Arail'>This is the initial content of the editor</font>"
        disabled={!enableEditor}
        init={{
          height: 500,
          menubar: false,
          branding: false,
          plugins:
            'autolink autoresize lists link image charmap print pdfpreview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste help wordcount, font2span',
          toolbar_mode: 'sliding',
          toolbar:
            'undo redo | fontselect fontsizeselect | bold italic underline | forecolor backcolor | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat pdfpreview code | help',
          convert_fonts_to_spans: false,
          setup: function (editor) {
            editor.on('onPreview', (content) => {
              handlePreview(content, editor);
            });
            // addFontToSpansFilter(editor.parser);
          },
        }}
        onEditorChange={handleEditorChange}
      />
    </>
  );
}

export default App;
