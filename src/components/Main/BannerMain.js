import "./BannerMain.css";
import PrevNext from "./PrevNext";

export default function BannerMain() {
    return(
        <div id="banner-main" className="margin-bottom">
            <span id="banner-btn">
                <PrevNext />
            </span>
        </div>
    );
}