import styles from "./Login.css";
import Remember from "./Remember";

export default function Login() {
    return(
        <div id="login" className={styles.box}>
            <img id="title" src="/img/side-left/login/title-LOGIN.gif" alt="LOGIN"></img>
            <form id="login-form">
                <ul>
                    <li>
                        <input name="user-id" type="text"></input>
                        <Remember name="remember-id"/>
                    </li>
                    <li>
                        <input name="user-pw" type="password"></input>
                        <Remember name="remember-pw"/>
                    </li>
                </ul>
                <input type="submit" value=""/>
            </form>
            <hr id="login-line"></hr>
            <div id="login-menu">
                <a href="http://www.ewhaian.com/Ewha_Member/member_join.asp">
                    <img src="/img/side-left/login/join.gif" alt="회원가입"></img>
                </a>
                <a href="http://www.ewhaian.com/Ewha_Member/member_find.asp">
                    <img src="/img/side-left/login/find.gif" alt="아이디/비밀번호 찾기"></img>
                </a>
            </div>
        </div>
    );
}