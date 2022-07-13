<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> 250110ac67216693595df261171384e7a2fc7a48
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

<<<<<<< HEAD
function Routing() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ToggleButton onClick={toggleDarkAtom}>Toggle Button</ToggleButton>
=======
function Router() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <BrowserRouter>
      <ToggleButton onClick={toggleDarkAtom}>Toggle Mode</ToggleButton>
>>>>>>> 250110ac67216693595df261171384e7a2fc7a48
      <Routes>
        <Route path="/:coinId/*" element={<Coin />}>
          <Route path={`chart`} element={<Chart />} />
          <Route path={`price`} element={<Price />} />
        </Route>
        <Route path="/" element={<Coins />} />
      </Routes>
<<<<<<< HEAD
    </Router>
  );
}
export default Routing;
=======
    </BrowserRouter>
  );
}
export default Router;
>>>>>>> 250110ac67216693595df261171384e7a2fc7a48
