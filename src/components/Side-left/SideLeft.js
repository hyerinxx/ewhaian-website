import "./SideLeft.css";
import Login from "./Login/Login";

export default function SideLeft() {
    return(
        <aside id="side-left">
            <Login />
            <div id="ad">
                <a href="https://intern.talent-hyundai-now.com/?utm_source=careertalk&utm_medium=univ-ewha&utm_campaign=recruit-23-2-hd-nextgen">
                    <img src="/img/side-left/ad/hyundai.jpg" alt="현대자동차 NextGen 인턴십"></img>
                </a>
                <a href="#">
                    <img src="/img/side-left/ad/partnership.jpg" alt="제휴이벤트"></img>
                </a>
            </div>
            <a id="error-report" href="http://www.ewhaian.com/ewha_admin/Error_popup.asp?rndid=eB21ynymft" onclick="window.open(this.href, '_blank', 'width=1095, height=880'); return false;">사이트 오류신고</a>
        </aside>
    );
}