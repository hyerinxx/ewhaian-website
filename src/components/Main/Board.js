import "./Board.css";
import Preview_six from "./Preview_six";

export default function Board() {
    return(
        <div id="board">
            <img src="/img/main/board/title-BOARD.png" alt="BOARD"></img>
            <Preview_six title="열린광장" data="#"/>
            <Preview_six title="벼룩시장" data="#"/>
            <Preview_six title="알바하자" data="#"/>
            <Preview_six title="주거정보" data="#"/>
            <Preview_six title="광고홍보" data="#"/>
            <Preview_six title="이벤트" data="#"/>
        </div>
    );
}