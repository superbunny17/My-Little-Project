import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return(
    <div style={{ margin: '-8px' }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}