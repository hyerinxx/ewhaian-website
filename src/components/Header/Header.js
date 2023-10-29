import { useState } from "react";
import "./Header.css";

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [menu, setMenu] = useState();

    window.onload = function() {
        const topMenu = document.querySelectorAll("#nav-main li a");
        topMenu.forEach(function(element) {
            element.addEventListener("mouseenter", (event) => {
                setMenu(event.currentTarget.closest("li").getAttribute("id"));
                setIsHovered(true);
            });
            element.addEventListener("mouseleave", () => {
                setIsHovered(false);
            })
        });
    }

	return (
        <header>
            <img id="top-line" src="/img/header/top-line.gif" alt="----------"></img>
            <span>
                <a href="http://www.ewhaian.com"><img src="/img/header/logo.png" alt="이화이언"></img></a>
                <nav>
                    <ul id="nav-main">
                        <li id="top-ewhaian">
                            <a href="http://www.ewhaian.com/WebPage/Ewhaian/main.asp">이화이언</a>
                        </li>
                        <li id="top-contents">
                            <a href="http://www.ewhaian.com/Ewha_board/Ewha_View.asp?bm_idx=15">컨텐츠</a>
                        </li>
                        <li id="top-life">
                            <a href="#">라이프</a>
                        </li>
                        <li id="top-campus">
                            <a href="#">캠퍼스</a>
                        </li>
                        <li id="top-secret">
                            <a href="#"><img src="/img/header/5_key-off.png" alt="비밀의 화원"></img></a>
                        </li>
                    </ul>
                    <div id="sub-ewhaian" className={`nav-sub ${menu==="top-ewhaian" && isHovered ? "" : "hidden"}`}>
                        <img src="/img/header/square.png" alt="[]"></img>
                        <ul>
                            <li><a href="http://www.ewhaian.com/WebPage/Ewhaian/main.asp">이화이언소개</a></li>
                            <li><a href="http://www.ewhaian.com/WebPage/Ewhaian/about_1.asp">ABOUT운영진</a></li>
                            <li><a href="http://www.ewhaian.com/WebPage/Ewhaian/faq.asp">FAQ</a></li>
                            <li><a href="http://www.ewhaian.com/Ewha_Notice/Notice_View.asp">공지사항</a></li>
                            <li><a href="#">이벤트</a></li>
                            <li><a href="http://www.ewhaian.com/WebPage/Ewhaian/contactus.asp">CONTACT US</a></li>
                        </ul>
                    </div>
                    <div id="sub-contents" className={`nav-sub ${menu==="top-contents" && isHovered ? "" : "hidden"}`}>
                        <img src="/img/header/square.png" alt="[]"></img>
                        <ul>
                            <li><a href="http://www.ewhaian.com/Ewha_board/Ewha_View.asp?bm_idx=15">다인다색</a></li>
                            <li><a href="http://www.ewhaian.com/Ewha_board/Ewha_View.asp?bm_idx=13">문화공감</a></li>
                            <li><a href="http://www.ewhaian.com/Ewha_board/Ewha_View.asp?bm_idx=23">화연수첩</a></li>
                            <li><a href="http://www.ewhaian.com/Ewha_board/Ewha_View.asp?bm_idx=27">기고만장</a></li>
                            <li><a href="http://www.ewhaian.com/Ewha_board/Ewha_View.asp?bm_idx=22">지난컨텐츠</a></li>
                        </ul>
                    </div>
                </nav>
            </span>
        </header>
    );
}