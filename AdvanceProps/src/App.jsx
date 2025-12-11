import Wrapper from "./Wrapper";

function App() {
  return (
    <div>
      <h1>Advance Properties On Props</h1>

      <Wrapper style={{ color: "#eae618ff" }}>
        <h1>Hello Everyone..</h1>
      </Wrapper>

      <Wrapper color= "blue">
        <h1>Hello World..</h1>
        <h2 style={{ color: "#0e45ef" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
          consequuntur libero fuga veniam deleniti, sint, doloribus iste
          distinctio ducimus rerum cupiditate nisi numquam quaerat
          necessitatibus praesentium delectus. Sit, officiis nihil?
        </h2>
      </Wrapper>

      <Wrapper color="Orange">
        <h1>Hello Sir...!</h1>
      </Wrapper>
    </div>
  );
}
export default App; 
