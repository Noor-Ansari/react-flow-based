import { useDrag } from "react-dnd";

function Draggable({ children, type, data }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type,
      item: data,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );
  return (
    <div ref={dragRef} style={{ opacity }}>
      {children}
    </div>
  );
}

export default Draggable;
