import { RendererOptions } from "../runtime-core";

/**
 * 実際のDOMに依存する処理を定義する（optionsとしてファクトリに渡して、レンダー関数を生成してもらう）
 */
export const nodeOps: RendererOptions<Node> = {
  createElement: (tagName) => {
    return document.createElement(tagName);
  },

  createText: (text: string) => {
    return document.createTextNode(text);
  },

  setElementText(node, text) {
    node.textContent = text;
  },

  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
};
