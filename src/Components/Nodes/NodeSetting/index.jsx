import { createPortal } from "react-dom";
import { IoArrowBack } from "react-icons/io5";

import "./styles.css";

// this component will render the specific settings of a node in a sidebar at right side
function NodeSetting({ children, title, onClose }) {
  return createPortal(
    <div className="node-settings-container">
      <div className="node-settings-header">
        <IoArrowBack onClick={onClose} />
        <p>{title}</p>
      </div>
      {children}
    </div>,
    document.body
  );
}
export default NodeSetting;
