import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Container = styled.div`
  padding: 0 1.1em;
  max-width: 30em;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: #fff;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 0.8em;
  border-radius: 1em;
  a {
    padding: 1.1em;
    transition: color 0.5s ease-in-out;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.textColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 2em;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
  color: #fff;
`;

const Img = styled.img`
  width: 1.9em;
  height: 1.9em;
  margin-right: 0.8em;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  /*const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        (async()=>{
            const response = await fetch('https://api.coinpaprika.com/v1/coins')
            const json = await response.json();
            setCoins(json.slice(0,50));
            setLoading(false);
        })()
    },[]);*/
  return (
    <Container>
      <HelmetProvider>
        <Helmet>
          <title>코인</title>
        </Helmet>
      </HelmetProvider>
      <Header>
        <Title>코인</Title>
      </Header>
      {
        /*loading*/ isLoading ? (
          <Loader>"Loading..."</Loader>
        ) : (
          <CoinsList>
            {
              /*coins*/ data?.slice(0, 20).map((coin) => (
                <Coin key={coin.id}>
                  <Link
                    to={{
                      pathname: `/${coin.id}`,
                    }}
                    state={{ name: coin.name }} /* to={`/${coin.id}`}*/
                  >
                    <Img
                      src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                    />
                    {coin.name} &rarr;
                  </Link>
                </Coin>
              ))
            }
          </CoinsList>
        )
      }
    </Container>
  );
}

export default Coins;
