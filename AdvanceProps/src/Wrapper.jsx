function Wrapper({ children, style }) {
  return (
    <div
      style={{
        border: "5px solid #e63933ff",
        width: "300px",
        margin: "10px",
        padding: "10px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
