import './Section.css';
import SideLeft from "./components/Side-left/SideLeft";
import Main from "./components/Main/Main";
import SideRight from "./components/Side-right/SideRight";

export default function Body() {
  return (
    <section>
      <SideLeft />
      <Main />
      <SideRight />
    </section>
  );
}
