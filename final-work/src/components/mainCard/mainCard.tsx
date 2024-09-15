import style from "./mainCard.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";


type ExperienceType = {
  years: string;
  designation: string;
  location: string;
};

type CardType = {
  title: string;
  abstract?: string;
  summary?: string;
  images?: string[];
  experiences?: ExperienceType[];
  link?: string;
  form?: boolean;
};

const MainCard = (props: CardType) => {
  const { title, abstract, summary, images, experiences, link, form } = props;


  const [hovered, setHovered] = useState(true);

  if (images && images[0] == "/src/assets/star.png") {
  }
  const titleArray = title.split(" ");
  let pageButton = style.pageButton;
  let cardStyle;
  let imageStyle;
  if (images && images[0] == "/src/assets/star2.png") {
    cardStyle = style.bannerCard;
  } else if (images && images[0] == "/src/assets/star.png" && !summary && !form) {
    cardStyle = style.starCard;
    imageStyle = style.star;
    pageButton = style.starCardPageButton;
  } else if (images && images[0] == "/src/assets/star.png" && form == true) {
    cardStyle = style.starFormCard;
  } else if (images && images[0] == "/src/assets/star.png" && summary) {
    cardStyle = style.starSummaryCard;
    imageStyle = style.star;
  } else if (images && !abstract && title !== "") {
    cardStyle = style.titleCard;
  } else if (summary) {
    cardStyle = style.presentationCard;
    imageStyle = style.presentationImage;
  } else if (experiences) {
    cardStyle = style.experienceCard;
  } else if (title == "") {
    cardStyle = style.justImage;
  } else {
    cardStyle = style.restCards;
    imageStyle = style.image;
  }

  return (
    <div className={cardStyle}>
      {(images && images[0] == "/src/assets/star2.png") || form == true ? (
        ""
      ) : images ? (
        <div
          className={
            images.length == 2
              ? style.doubleImage
              : images.length > 1
              ? style.multipleImages
              : imageStyle
          }
        >
          {images.map((image) => (
            <img src={image} />
          ))}
        </div>
      ) : (
        ""
      )}
      {title == "" ? (
        ""
      ) : (
        <div className="notImage">
          <div className="info">
            {abstract ? <p>{abstract}</p> : ""}
            {images && images[0] == "/src/assets/star.png" && !summary && !form? (
              <>
                <p>{titleArray[0]}</p>
                <p>
                  {titleArray[1]}
                  <span className={style.bold}> {titleArray[2]}</span>
                </p>
              </>
            ) : (
              ""
            )}
            {images && images[0] == "/src/assets/star.png" && form === true ? (
              <>
                <div>
                  <p>
                    {titleArray[0]} {titleArray[1]}{" "}
                    <span className={style.bold}> {titleArray[2]}</span>
                  </p>
                  <img src={images[0]} alt="" />
                </div>
                <form>
                  <label htmlFor="Name">
                    <input type="text" required name="Name" placeholder="Name*"/>
                  </label>
                  <label htmlFor="Email">
                    <input type="email" required name="Email" placeholder="Email*"/>
                  </label>
                  <label htmlFor="YourSubject">
                    <input type="text" required name="YourSubject" placeholder="Your Subject*"/>
                  </label>
                  <label htmlFor="YourMessage">
                    <input type="text" required name="YourMessage" placeholder="Your Message*"/>
                  </label>
                  <label htmlFor="submitButton">
                    <input type="submit" name="submitButton" value={"Send Message"}/>
                  </label>
                </form>
              </>
            ) : (
              ""
            )}
            {experiences ? (
              <>
                <h2>{title}</h2>
                {experiences.map((experience) => (
                  <div>
                    <span>{experience.years}</span>
                    <p>{experience.designation}</p>
                    <span>{experience.location}</span>
                  </div>
                ))}
              </>
            ) : (
              ""
            )}
            {summary ? (
              <>
                <h2>{title}</h2>
                <span>{summary}</span>
              </>
            ) : images && images[0] == "/src/assets/star.png" ? (
              ""
            ) : experiences ? (
              ""
            ) : (
              <h2>{title}</h2>
            )}
            {images && images[0] == "/src/assets/star2.png" ? (
              <>
                <img src={images[0]} alt="" />
                <p>{abstract}</p>
                <h2>{title}</h2>
                <img src={images[0]} alt="" />
                <p>{abstract}</p>
                <h2>{title}</h2>
                <img src={images[0]} alt="" />
                <p>{abstract}</p>
                <h2>{title}</h2>
                <img src={images[0]} alt="" />
                <p>{abstract}</p>
                <h2>{title}</h2>
                <img src={images[0]} alt="" />
                <p>{abstract}</p>
                <h2>{title}</h2>
                <img src={images[0]} alt="" />
                <p>{abstract}</p>
                <h2>{title}</h2>
              </>
            ) : (
              ""
            )}

            {link ? (
              <Link to={link}>
                <img
                  onMouseEnter={()=>setHovered(!hovered)}
                  onMouseLeave={()=>setHovered(!hovered)}
                  src={hovered==true?"/src/assets/button-grey.png":"/src/assets/button-white.png"}
                  alt=""
                  className={pageButton}
                />
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCard;
