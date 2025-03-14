import { Container } from "./common/Container";
import Footer from "./common/Footer";
import Main from "./common/Main";
import Navigation from "./features/Navigation";

function App() {
  return (
    <Container>
      <Navigation />
      <Main />
      <Footer/>
    </Container>
  );
}

export default App;
