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
import 'tinymce/plugins/preview';
import 'tinymce/plugins/print';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/wordcount';
import './plugin/custcode';
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
  }

  const toggleEnable = () => {
    setEnableEditor(!enableEditor);
  }

  return (<>
    <button onClick={toggleEnable}>{enableEditor? 'Disable Editor': 'Enable Editor'}</button>
    <Editor
      initialValue="This is the initial content of the editor"
      disabled={!enableEditor}
      init={{
        height: 500,
        menubar: false,
        branding: false,
        plugins: 'autolink autoresize lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste help wordcount',
        toolbar_mode: 'sliding',
        toolbar:
          'undo redo | fontselect fontsizeselect | bold italic underline | forecolor backcolor | \
          alignleft aligncenter alignright alignjustify | \
          numlist bullist outdent indent | removeformat code | help',
        convert_fonts_to_spans: false,
        // encoding: 'xml',
        forced_root_block: 'textformat',
        custom_elements: 'textformat',
        // extended_valid_elements: 'textformat,i,u', 
        // invalid_elements: 'strong, em',
        valid_elements: 'p,font/span,li,-a[target=_blank],-b/strong,-i/em,-u',
        extended_valid_elements: 'font[face|size|color|style],span[face|size|color|style],textformat',
        valid_children:'p[font|#text|span|a]',
        formats: {
          underline: {inline: 'u'},
          forecolor: {inline: 'font', attributes: {color: '%value'}},
          fontname: {inline: 'font', attributes: {face: '%value'}},
          fontsize: {inline: 'font', attributes: {size: '%value'}},
        }
      }}
      onEditorChange={handleEditorChange}
    />
    </>
  );
}

export default App;
