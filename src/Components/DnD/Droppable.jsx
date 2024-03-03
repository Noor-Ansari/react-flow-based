import { useDrop } from "react-dnd";

function Droppable({ children, onDrop }) {
  const [{ opacity }, dropRef] = useDrop(
    () => ({
      accept: ["node"],
      collect: (monitor) => ({
        opacity: monitor.isOver() ? 0.5 : 1,
      }),
      drop: (item, monitor) => {
        onDrop({
          type: item.type,
          data: item,
          position: monitor.getClientOffset(),
        });
      },
    }),
    []
  );

  return (
    <div ref={dropRef} style={{ opacity }}>
      {children}
    </div>
  );
}

export default Droppable;
