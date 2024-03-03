import TextNode from "../Nodes/TextNode";

export const initialNodes = [
  {
    id: "node-0",
    type: "text",
    position: { x: 0, y: 0 },
    data: { text: "test message 1" },
  },
];

export const nodeTypes = {
  text: TextNode,
};
