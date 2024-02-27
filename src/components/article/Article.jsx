import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="ai__blog-container_article">
    <div className="ai__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="ai__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
