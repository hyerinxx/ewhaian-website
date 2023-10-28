import Remember from "./Remember";

export default function Login() {
    return(
        <div id="login">
            <img src="/img/side-left/login/title-LOGIN.gif" alt="LOGIN"></img>
            <form id="login-form">
                <span>
                    <ul>
                        <li>
                            <span><input name="user-id" type="text"></input></span>
                            <Remember name="remember-id"/>
                        </li>
                        <li>
                            <span><input name="user-pw" type="password"></input></span>
                            <Remember name="remember-pw"/>
                        </li>
                    </ul>
                </span>
                <span><input type="submit"></input></span>
            </form>
            <hr id="login-line"></hr>
            <a href="http://www.ewhaian.com/Ewha_Member/member_join.asp">
                <img src="/img/side-left/login/join.gif" alt="회원가입"></img>
            </a>
            <a href="http://www.ewhaian.com/Ewha_Member/member_find.asp">
                <img src="/img/side-left/login/find.gif" alt="아이디/비밀번호 찾기"></img>
            </a>
        </div>
    );
}