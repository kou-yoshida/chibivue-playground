import { RendererOptions } from "../runtime-core";

/**
 * 実際のDOMに依存する処理を定義する（optionsとしてファクトリに渡して、レンダー関数を生成してもらう）
 */
export const nodeOps: RendererOptions<Node> = {
  setElementText(node, text) {
    node.textContent = text;
  },
};
