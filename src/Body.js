import './styles/Body.css';
import Header from "./components/Header/Header";
import SideLeft from "./components/Side-left/SideLeft";
import Main from "./components/Main/Main";
import SideRight from "./components/Side-right/SideRight";
import Footer from "./components/Footer/Footer";

export default function Body() {
  return (
    <body>
      <Header />
      <SideLeft />
      <Main />
      <SideRight />
      <Footer />
    </body>
  );
}
