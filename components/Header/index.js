import { Container, Content, TitleNavbar } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <TitleNavbar>
          <h1>Breweries</h1>
          <h3>A breweries list by Open Brewery DB</h3>
        </TitleNavbar>
      </Content>
    </Container>
  );
}
