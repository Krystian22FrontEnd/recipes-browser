import { Container } from "./common/Container";
import Footer from "./common/Footer";
import { HowToMake } from "./common/HowToMake";
import Main from "./common/Main";
import Navigation from "./features/Navigation";

function App() {
  return (
    <Container>
      <Navigation />
      <Main />
      {/* <HowToMake/> */}
      <Footer />
    </Container>
  );
}

export default App;
