import {useState, useEffect} from "react";
import styled from "styled-components";

interface PriceData {
    id:string ;
    name:string ;
    symbol:string ;
    rank:number ;
    circulating_supply:number ;
    total_supply:number ;
    max_supply:number ;
    beta_value:number ;
    first_data_at:string ;
    last_updated:string ;
    quotes: {
        USD: {
            ath_date: string;
            ath_price:number;
            market_cap:number;
            percent_change_1h:number;
            percent_change_1y:number;
            percent_change_6h:number;
            percent_change_7d:number;
            percent_change_12h:number;
            percent_change_15m:number;
            percent_change_24h:number;
            percent_change_30d:number;
            percent_change_30m:number;
            percent_from_price_ath:number;
            price:number;
            volume_24h:number;
            volume_24h_change_24h: number;
        }
    };
}

const Container = styled.div`
    display:flex;
    height: 20vh;
    background-color: ${props=>props.theme.accentColor};
    `;

const PriceUl = styled.ul`
    width: 100%;
`;

const PriceList = styled.li`
    background-color: ${props=>props.theme.textColor};
    color: ${props=>props.theme.bgColor};
`;

function Price() {
    const [data, setData] = useState<PriceData>();
    return (
        <Container>
            <PriceUl>
                <PriceList> $ {data?.quotes.USD.price.toFixed(3)}</PriceList>
            </PriceUl>
        </Container>
    )
}
export default Price;