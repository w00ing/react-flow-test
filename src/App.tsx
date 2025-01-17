import React, { useCallback } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  OnConnect,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import navigationJson from "./navigationJson";
import { convertNavigationJsonToFlow } from "./converter";

// Now call our converter:
const { nodes: initialNodes, edges: initialEdges } =
  convertNavigationJsonToFlow(navigationJson);

import { nodeTypes } from "./nodes";
import { edgeTypes } from "./edges";

export default function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    connection => setEdges(edges => addEdge(connection, edges)),
    [setEdges],
  );

  console.log({ initialNodes });
  console.log({ navigationJson });
  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
