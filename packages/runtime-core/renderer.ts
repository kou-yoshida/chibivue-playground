import { VNode } from "./vnode";

export interface RendererOptions<HostNode = RendererNode> {
  // setElementText(node: HostNode, text: string): void;
  createElement(type: VNode["type"]): HostNode;
  createText(text: string): HostNode;
  setElementText(node: HostNode, text: string): void;
  insert(child: HostNode, parent: HostNode, anchor?: HostNode | null): void;
}

type RendererNode = {
  [key: string]: any;
};

interface RendererElement extends RendererNode {}

export type RootRenderFunction<HostNode = RendererNode> = (
  vnode: VNode | string,
  container: HostNode
) => void;

export const createRenderer = (options: RendererOptions) => {
  const {
    createElement: hostCreateElement,
    createText: hostCreateText,
    insert: hostInsert,
  } = options;

  // elementを作成
  const renderVNode = (vnode: VNode | string) => {
    if (typeof vnode === "string") return hostCreateText(vnode);
    const el = hostCreateElement(vnode.type);

    vnode.children.forEach((child) => {
      const childEl = renderVNode(child);
      hostInsert(childEl, el);
    });

    return el;
  };

  const render: RootRenderFunction = (vnode, container) => {
    const el = renderVNode(vnode);
    hostInsert(el, container);
  };

  return { render };
};
