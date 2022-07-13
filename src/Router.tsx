import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "./atoms";
import styled from "styled-components";

const ToggleButton = styled.button`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.textColor};
  background-color: transparent;
  border-radius: 2em;
  position: absolute;
  top: 1em;
  right: 1em;
`;

function Routing() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ToggleButton onClick={toggleDarkAtom}>Toggle Mode</ToggleButton>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />}>
          <Route path={`chart`} element={<Chart />} />
          <Route path={`price`} element={<Price />} />
        </Route>
        <Route path="/" element={<Coins />} />
      </Routes>
    </Router>
  );
}
export default Routing;
