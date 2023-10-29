import "./Preview_six.css";

export default function Preview_six({title, data}) {
    const titleName = title;
    const lastArticle = data;
    return(
        <div className="Preview_six">
            {titleName}
            <ul>
                <li><a href="#">글 제목</a></li>
                <li><a href="#">글 제목</a></li>
                <li><a href="#">글 제목</a></li>
                <li><a href="#">글 제목</a></li>
            </ul>
        </div>
    );
}