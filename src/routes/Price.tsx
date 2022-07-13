import { useQuery } from "react-query";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { fetchCoinTickers } from "../api";
import { PriceData } from "./Coin";

interface PriceProps {
  coinId?: string;
}

const PriceList = styled.li`
  margin: 1em 0;
  padding: 1em 0;
  border: 1px solid ${(props) => props.theme.accentColor};
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
`;

function Price() {
  const { coinId } = useOutletContext<PriceProps>();
  const { data, isLoading } = useQuery<PriceData>(
    ["ohlcv/price", coinId],
    () => fetchCoinTickers(coinId),
    { refetchInterval: 10000 },
  );

  return (
    <>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <ul>
          <PriceList>
            ATH (All Time High) : {data?.quotes.USD.ath_price}
          </PriceList>
          <PriceList>Market Cap : {data?.quotes.USD.market_cap}</PriceList>
          <PriceList>
            Percent Change(24H) : {data?.quotes.USD.percent_change_24h}
          </PriceList>
          <PriceList>
            Percent Change(30D) :{data?.quotes.USD.percent_change_30d}
          </PriceList>
          <PriceList>
            Percent from Price ATH : {data?.quotes.USD.percent_from_price_ath}
          </PriceList>
          <PriceList>Price : {data?.quotes.USD.price}</PriceList>
          <PriceList>
            Volume Change(24H) : {data?.quotes.USD.volume_24h_change_24h}
          </PriceList>
        </ul>
      )}
    </>
  );
}
export default Price;
