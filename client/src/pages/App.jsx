import SaleCard from "../components/cards/saleCard/saleCard";
import Container from "../components/container/container";
import Subtitle from "../components/forms/subtitle/subtitle";
import Nav from "../components/nav/Nav";
import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />
      
      <Container>
        <Subtitle>promoções</Subtitle>
        <div className="saleContainer">
          <SaleCard 
          title={"league-of-legends"}
          fullPrice={199.90}
          discount={30}
          />
          <SaleCard 
          title={"dota-2"}
          fullPrice={199.90}
          discount={40}
          />

          <SaleCard 
          title={"valorant"}
          fullPrice={199.90}
          discount={50}
          />
        </div>
        </Container>

    </div>
  );
};

export default App;
