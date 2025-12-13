const User = ({ user }) => {
  return (
    <div style={{ border: "2px dashed black", padding: "5px", margin: "10px", textAlign: "left", width: "300px", height: "150px", borderRadius: "10px"}}>
      <h3>
        {" "}
        Name: <span style={{ color: "brown" }}>{user.name}</span>{" "}
      </h3>
      <h3>
        {" "}
        Age: <span style={{ color: "red" }}>{user.age}</span>{" "}
      </h3>
      <h3>
        {" "}
        Email: <span style={{ color: "blue" }}>{user.email}</span>{" "}
      </h3>
    </div>
  );
};

export default User;
