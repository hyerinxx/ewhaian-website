import "./BannerMain.css";
import SwitchShow from "./SwitchShow";
import PrevNext from "./PrevNext";

export default function BannerMain() {
    return(
        <div id="banner-main">
            <SwitchShow />
            <PrevNext />
        </div>
    );
}