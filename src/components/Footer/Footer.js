import "./Footer.css";

export default function Footer() {
    return(
        <footer>
            <hr id="footer-line"></hr>
            <ul id="utility-link">
                <li><a href="http://www.ewhaian.com">HOME</a></li>
                <li><a href="http://www.ewhaian.com/WebPage/Ewhaian/main.asp">이화이언소개</a></li>
                <li><a href="http://www.ewhaian.com/WebPage/Ewhaian/person.asp">개인보호정책</a></li>
                <li><a href="http://www.ewhaian.com/WebPage/Ewhaian/user.asp">게시판이용원칙</a></li>
                <li><a href="http://www.ewhaian.com/WebPage/Ewhaian/user.asp">이용약관</a></li>
                <li><a href="http://www.ewhaian.com/WebPage/Ewhaian/contactus.asp">CONTECT US</a></li>
            </ul>
            <div id="copyright">
                copyright by Ewhaian.com All rights reserved
            </div>
        </footer>
    );
}