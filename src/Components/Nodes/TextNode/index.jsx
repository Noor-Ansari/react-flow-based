import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

import NodeSetting from "../NodeSetting";
import TextNodeSettings from "./settings";

import withHandles from "../../../HOC/withHandles";

// this is the main text this will be visible in the working area
// clicking on this will open the settings
function TextNode({ data, selected }) {
  return (
    <div className="text-node-container">
      <div className="text-node-header">
        <BiMessageRoundedDetail />
        <p>Send message</p>
        <IoLogoWhatsapp />
      </div>
      <div className="text-node-body">
        <p>{data.text}</p>
      </div>
      {selected && (
        <NodeSetting title="Message">
          <TextNodeSettings data={data} />
        </NodeSetting>
      )}
    </div>
  );
}

export default withHandles(TextNode);
