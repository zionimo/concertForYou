import Container from "./components/Container";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Container>
        <div className="relative">
          <Navbar />
        </div>
      </Container>
    </div>
  );
}
 