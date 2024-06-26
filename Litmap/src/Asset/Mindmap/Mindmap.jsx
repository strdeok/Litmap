import React, { useCallback } from "react";

import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  MarkerType,
  MiniMap,
  Controls,
} from "reactflow";
import CustomNode from "./CustomNode";
import FloatingEdge from "./FloatingEdge";
import CustomConnectionLine from "./CustomConnectionLine";
import DownloadButton from "./DownloadBtn";

import "reactflow/dist/style.css";
import "./style.css";

const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 0, y: 0 },
    data: { label: "<Card></Card>" },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 250, y: 320 },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 40, y: 300 },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 300, y: 0 },
  },
];

const initialEdges = [];

const connectionLineStyle = {
  strokeWidth: 3,
  stroke: "black",
};

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  floating: FloatingEdge,
};

const defaultEdgeOptions = {
  style: { strokeWidth: 2, stroke: "black" },
  type: "floating",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "black",
  },
};

const defaultViewport = { x: 0, y: 0, zoom: 0 };

const EasyConnectExample = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineComponent={CustomConnectionLine}
        connectionLineStyle={connectionLineStyle}
        defaultViewport={defaultViewport}
      >
        <DownloadButton></DownloadButton>
        <Controls></Controls>
        <MiniMap></MiniMap>
      </ReactFlow>
    </>
  );
};

export default EasyConnectExample;
