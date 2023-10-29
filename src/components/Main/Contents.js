import "./Contents.css";
import PrevNext from "./PrevNext";

export default function Contents() {
    return(
        <div id="contents" className="margin-bottom">
            <div id="contents-top">
                <img src="/img/main/contents/title-CONTENTS.gif" alt="CONTENTS"></img>
                <span id="contents-btn"><PrevNext /></span>
            </div>
            <div id="contents-image">
                <div id="first-page" className="">
                    <img src="/img/main/contents/1_DaInDaSaek.jpg"/>
                    <img src="/img/main/contents/2_WhaYeonSuCheop.jpg"/>
                </div>
                <div id="second-page" className="hidden">
                    <img src="/img/main/contents/3_GiGoManJang.jpg"/>
                    <img src="/img/main/contents/4_MunHwaGongGam.jpg"/>
                </div>
            </div>
        </div>
    );
}