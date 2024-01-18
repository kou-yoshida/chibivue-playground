export interface RendererOptions<HostNode = RendererNode> {
  setElementText(node: HostNode, text: string): void;
}

type RendererNode = {
  [key: string]: any;
};

interface RendererElement extends RendererNode {}

export type RootRenderFunction<HostNode = RendererNode> = (
  message: string,
  container: HostNode
) => void;

export const createRenderer = (options: RendererOptions) => {
  const { setElementText: hostSetElementText } = options;

  const render: RootRenderFunction = (message, container) => {
    hostSetElementText(container, message);
  };
  return { render };
};
