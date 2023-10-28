export default function Preview_six({title, data}) {
    const titleName = title;
    const lastArticle = data;
    return(
        <div className="Preview_six">
            {titleName}
            <ul> //data에 따른 최신글 리스트
                <li><a href="#">글 제목</a></li>
                <li><a href="#">글 제목</a></li>
                <li><a href="#">글 제목</a></li>
                <li><a href="#">글 제목</a></li>
            </ul>
        </div>
    );
}