import { PluginManager, html } from 'tinymce';

const removeAttrs = function (node, names) {
  names.forEach(function (name) {
    node.attr(name, null);
  });
};

export const addFontToSpansFilter = function (domParser) {
  const styles = html.Styles();
  domParser.addNodeFilter('font', function (nodes) {
    nodes.forEach(function (node) {
      const props = styles.parse(node.attr('style'));
      const color = node.attr('color');
      const face = node.attr('face');
      const size = node.attr('size');
      if (color) {
        props.color = color;
      }
      if (face) {
        props['font-family'] = face;
      }
      if (size) {
        props['font-size'] = `${parseInt(node.attr('size'), 10)} px`;
      }
      node.name = 'span';
      node.attr('style', styles.serialize(props));
      removeAttrs(node, ['color', 'face', 'size']);
    });
  });
};

PluginManager.add('font2span', function (editor) {
  editor.on('PreInit', () => {
    addFontToSpansFilter(editor.parser);
  });

  return {};
});
