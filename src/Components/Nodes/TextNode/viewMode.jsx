import { BiMessageRoundedDetail } from "react-icons/bi";

import "./styles.css";

// this is the preview version of text node 
// we will show this in nodes panel
function ViewModeTextNode() {
  return (
    <div className="view-mode-text-node">
      <BiMessageRoundedDetail />
      <p>Message</p>
    </div>
  );
}

export default ViewModeTextNode;
