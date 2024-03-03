import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import NodesPanel from "./Components/NodesPanel";
import WorkingArea from "./Components/WorkingArea";

import "./App.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="root-container">
        <div className="working-area-container">
          <WorkingArea />
        </div>
        <div className="sidebar-container">
          <NodesPanel />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
