import "./PrevNext.css";

export default function PrevNext(str){
    const btnClassName = str;

    return(
        <span id="prev-next" className={btnClassName}>
            <input id="prev" type="button" value=""/>
            <input id="next" type="button" value=""/>
        </span>
    );
}