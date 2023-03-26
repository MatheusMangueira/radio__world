import * as S from "./GlobalStyles";
import { Outlet } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <S.Container className="App">
      <Outlet />
    </S.Container>
  );
}

export default App;
