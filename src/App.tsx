import styled from "styled-components";
import WishToGo from "./components/wish-to-go";
import HaveBeenTo from "./components/have-been-to";
import WantToLive from "./components/want-to-live";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1f2937;
  height: 100vh;
`;

export default function App() {
  return (
    <Wrapper>
      <WishToGo />
      <HaveBeenTo />
      <WantToLive />
    </Wrapper>
  );
}
