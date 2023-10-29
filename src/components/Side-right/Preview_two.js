import "./Preview_two.css";

export default function Preview_two({title, image, data}) {
    const titleName = title;
    const titleImg = image;
    const lastArticle = data;
    return(
        <div className="Preview_two">
            <a href="#"><img src={titleImg} alt={titleName}></img></a>
            <ul>
                <li><a href="#">■ 이화이언 44기 마케...</a></li>
                <li><a href="#">■ 이화이언 44기 마케...</a></li>
            </ul>
        </div>
    );
}