import Draggable from "../DnD/Draggable";
import { nodes } from "./constants";

import "./styles.css";

// here we are rendering the pre defined nodes
// we can also take this as prop
function NodesPanel() {
  return (
    <div className="nodes-panel-container">
      {nodes.map(({ type, component: Node, id }) => (
        <div className="node-item" key={id}>
          <Draggable type="node" data={{ type }}>
            <Node />
          </Draggable>
        </div>
      ))}
    </div>
  );
}

export default NodesPanel;
