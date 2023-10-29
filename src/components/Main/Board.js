import "./Board.css";
import Preview_six from "./Preview_six";

export default function Board() {
    return(
        <div id="board">
            <img src="/img/main/board/title-BOARD.png" alt="BOARD"></img>
            <table>
                <tr>
                    <td><Preview_six title="열린광장" data="#"/></td>
                    <td><Preview_six title="벼룩시장" data="#"/></td>
                </tr>
                <tr>
                    <td><Preview_six title="알바하자" data="#"/></td>
                    <td><Preview_six title="주거정보" data="#"/></td>
                </tr>
                <tr>
                    <td><Preview_six title="광고홍보" data="#"/></td>
                    <td><Preview_six title="이벤트" data="#"/></td>
                </tr>
            </table>
        </div>
    );
}