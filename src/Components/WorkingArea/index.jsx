import { useState, useCallback } from "react";

import Droppable from "../DnD/Droppable";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";

import { initialNodes, nodeTypes } from "./constants";

import "./styles.css";

function WorkingArea() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => {
      setEdges((prevEdges) => {
        // check is an edge already exists then return without adding
        const isDuplicateOutboundEdge = prevEdges.some(
          (edge) => edge.source === connection.source
        );
        if (isDuplicateOutboundEdge) {
          return prevEdges;
        }
        return addEdge(connection, prevEdges);
      });
    },
    [setEdges]
  );

  const handleDrop = (payload) => {
    setNodes((prev) => [
      ...prev,
      {
        ...payload,
        id: `node-${prev.length}`,
        data: { ...payload.data, text: `test message ${prev.length + 1}` },
      },
    ]);
  };

  return (
    <Droppable onDrop={handleDrop}>
      <div className="working-area-root">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
          <Background id="2" color="#ccc" variant={BackgroundVariant.Cross} />
        </ReactFlow>
      </div>
    </Droppable>
  );
}

export default WorkingArea;
