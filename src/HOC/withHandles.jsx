import { Handle, Position } from "reactflow";

import "./styles.css"

function withHandles(WrappedComponent) {
  return (props) => {
    return (
      <>
        <WrappedComponent {...props} />
        <Handle type="target" position={Position.Left} id="target" />
        <Handle type="source" position={Position.Right} id="source" />
      </>
    );
  };
}

export default withHandles;
