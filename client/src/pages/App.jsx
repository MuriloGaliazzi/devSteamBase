import GameCard from "../components/cards/gameCard/gameCard";
import SaleCard from "../components/cards/saleCard/saleCard";
import Container from "../components/container/container";
import Subtitle from "../components/forms/subtitle/subtitle";
import Nav from "../components/nav/Nav";
import "./App.css";

import { cartState } from "../atoms/cart";
import { useRecoilState } from "recoil";

const App = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  };
  console.log(cart);
  return (
    <div>
      <Nav />

      <Container>
        <Subtitle>promoções</Subtitle>
        <div className="saleContainer">
          <SaleCard
            title={"league-of-legends"}
            fullPrice={199.99}
            discount={30}
            onAdd={() =>
              handleAddProduct({
                name: "League of Legends",
                price: 199.99 - 199.99 *0.3,
                img: "league-of-legends",
              })
            }
          />
          <SaleCard title={"dota-2"} fullPrice={199.9} discount={40} 
          onAdd={() =>
            handleAddProduct({
              name: "Dota 2",
              price: 199.99 - 199.99 *0.4,
              img: "dota-2",
            })
          }
          />

          <SaleCard title={"valorant"} fullPrice={199.9} discount={50} 
          onAdd={() =>
            handleAddProduct({
              name: "Valorant",
              price: 199.99 - 199.99 *0.5,
              img: "valorant",
            })
          }
          />
        </div>
        <div className="gameSession">
          <Subtitle>outros jogos</Subtitle>
          <div className="gameContainer">
            <GameCard
              title={"CSGO"}
              info={"Ação, estratégia, multijogador"}
              price={99.9}
              onAdd={() =>
                handleAddProduct({
                  name: "Counter Strike: Global Offensive",
                  price: 99.9,
                  img: "CSGO",
                })
              }
            >
              Counter Strike Global Offensive
            </GameCard>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
