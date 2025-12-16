import styled from "styled-components";
function App() {

  const Container = styled.div`
  padding:40px;
  text-align: center;`

  const Title = styled.h1`
  color : #2c3e50`;

  const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#3498db" : "#2ecc71")};
  color: white;
  border: none;
  padding: 12px 20px;
  margin: 10px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
  opacity: 0.8;
  }
  `;
  return (
    <Container>
      <Title>Styled Component Example</Title>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </Container>
  );
}

export default App;