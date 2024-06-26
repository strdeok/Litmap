import { Handle, Position, useStore } from "reactflow";
import Card from "./Card";
const connectionNodeIdSelector = (state) => state.connectionNodeId;

export default function CustomNode({ id }) {
  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;
  // const label = isTarget ? "Drop here" : "Drag to connect";
  const label = <Card></Card>;

  return (
    <div className="customNode">
      <div className="customNodeBody">
        {!isConnecting && (
          <Handle
            className="customHandle"
            position={Position.Right}
            type="source"
          />
        )}

        <Handle
          className="customHandle"
          position={Position.Left}
          type="target"
          isConnectableStart={false}
        />
        {label}
      </div>
    </div>
  );
}
