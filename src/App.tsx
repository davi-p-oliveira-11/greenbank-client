import { Card } from "./components/Card";

function App() {
  return (
    <>
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
      <div>Footer</div>
    </>
  );
}

export default App;
