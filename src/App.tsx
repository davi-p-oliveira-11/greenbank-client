import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div>
        Greenbank
        <Card
          id={1}
          paragraph="Typescript"
          details="TS para frontend e backend"
        />
        <Card id={2} paragraph="HTML" details="HTML para frontend" />
        <Card id={3} paragraph="SQL" details="SQL para banco de dados" />
      </div>
      <Footer />
    </>
  );
}

export default App;
