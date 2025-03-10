import { Container } from "./common/Container";
import Main from "./common/Main";
import Navigation from "./features/Navigation";

function App() {
  return (
    <Container>
      <Navigation />
      <Main />
    </Container>
  );
}

export default App;
