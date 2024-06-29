import { Handle, NodeResizer, Position, useStore } from "reactflow";
import Card from "./Card";
const connectionNodeIdSelector = (state) => state.connectionNodeId;

export default function CustomNode({ id, data, selected }) {
  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;
  // const label = isTarget ? "Drop here" : "Drag to connect";
  const label = <Card></Card>;

  return (
    <div className="customNode" style={{ width: "100%", height: "100%" }}>
      <NodeResizer
        color="blue"
        isVisible={selected}
        minWidth={100}
        minHeight={100}
      />
      <div className="customNodeBody" style={{ width: "100%", height: "100%" }}>
        {!isConnecting && (
          <Handle
            className="customHandle"
            position={Position.Right}
            type="source"
          />
        )}

        {label}
        <Handle
          className="customHandle"
          position={Position.Left}
          type="target"
          isConnectableStart={false}
        />
      </div>
    </div>
  );
}
