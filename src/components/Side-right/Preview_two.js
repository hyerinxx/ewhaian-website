import "./Preview_two.css";

export default function Preview_two({title, image, data}) {
    const titleName = title;
    const titleImg = image;
    const lastArticle = data;
    return(
        <div className="Preview_two">
            <img src={titleImg} alt={titleName}></img>
            <ul> //data에 따른 최신글 리스트
                <li><a href="#">글 제목</a></li>
                <li><a href="#">글 제목</a></li>
            </ul>
        </div>
    );
}