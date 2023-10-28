import Preview_two from "./Preview_two";

export default function SideRight() {
    return(
        <aside id="side-right">
            <Preview_two title="NOTICE" image="/img/side-right/title-NOTICE.gif" data="#"/>
            <Preview_two title="EVENT" image="/img/side-right/title-EVENT.gif" data="#"/>
            <div id="banner-sub">
                <a href="http://www.ewhaian.com/Ewha_Notice/Notice_View.asp?n_idx=188">
                    <img src="/img/side-right/1_certify.png" alt="이화인 인증"></img>
                </a>
                <a href="https://www.facebook.com/ewhaian2001">
                    <img src="/img/side-right/2_facebook.jpg" alt="이화이언 페이스북"></img>
                </a>
                <a href="https://instagram.com/ewhaian_2001">
                    <img src="/img/side-right/3_instagram.jpg" alt="이화이언 인스타그램"></img>
                </a>
                <a href="https://blog.naver.com/ewhaianblog">
                    <img src="/img/side-right/4_blog.jpg" alt="이화이언 블로그"></img>
                </a>
                <img src="/img/side-right/5_donate.jpg" alt="이화이언 기부하기"></img>
            </div>
        </aside>
    );
}