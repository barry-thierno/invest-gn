import Header from "layouts/Header";
import { Search } from "screens/Home/Home";
import Overview from "screens/Home/Overview/Overview";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;
const OverviewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

function App() {
  return (
    <Container>
      <Header />
      <div className="Container">
        <Search />
      </div>
      <OverviewContainer>
        <Overview />
      </OverviewContainer>
    </Container>
  );
}

export default App;
