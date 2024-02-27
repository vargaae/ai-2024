import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="ai__header section__padding" id="home">
    <div className="ai__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with AI
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>

      <div className="ai__header-content__input">
        <input type="text" placeholder="Analyse and summarize with ChatGPT" />
        <a href="#summarizer">
          <button type="button">Get Started</button>
        </a>
      </div>

      <div className="ai__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="ai__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;