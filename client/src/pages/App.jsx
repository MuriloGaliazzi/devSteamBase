import GameCard from "../components/cards/gameCard/gameCard";
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
            fullPrice={199.9}
            discount={30}
          />
          <SaleCard title={"dota-2"} fullPrice={199.9} discount={40} />

          <SaleCard title={"valorant"} fullPrice={199.9} discount={50} />
        </div>
        <div className="gameSession">
          <Subtitle>outros jogos</Subtitle>
          <div className="gameContainer">
            <GameCard 
            title={"CSGO"}
            info={"Ação, estratégia, multijogador"}
            price={99.90}
            >Counter Strike Global Offensive</GameCard>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
