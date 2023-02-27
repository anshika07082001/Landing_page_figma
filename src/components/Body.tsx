import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

const Body = () => {
  return (
    <section className="mainBody margin pr">
      <div className="body row margin">
        <div className="profile column">
          <div className="profile__header row">
            <div className="profile__logo row">
              <img src="Vector (1).png" alt="" />
            </div>
            <div className="profile__para column">
              <span className="profile__para__heading">VictorFlow</span>
              <span className="profile__paragraph">
                Webflow Design &  Development Agency
              </span>
            </div>
          </div>
          <div className="profile__body column">
            <span className="profile__bodyHeading">Follow Us</span>
            <div className="insta row">
              <img src="instagram.png" alt="" />
              <div className="insta__content column">
                <p className="row">
                  <span className="insta__head">Instagram</span>
                  <span className="insta__head insta__head--arrow">➔</span>
                </p>
                <span className="insta__para">
                  Join our Instagram page, We share UI/UX Design tips.
                </span>
              </div>
            </div>
            <div className="twitter row">
              <img src="Vector.png" alt="" style={{ width: "62px" }} />
              <div className="twitter__content column">
                <p className="row">
                  <span className="twitter__head">Twitter</span>
                  <span className="twitter__head twitter__head--arrow">➔</span>
                </p>
                <span className="twitter__para">
                  Join our Twitter page, We share UI/UX Design tips.
                </span>
              </div>
            </div>
            <div className="linkedin row">
              <img src="Vector (3).png" alt="" />
              <div className="linkedin__content column">
                <p className="row">
                  <span className="linkedin__head">LinkedIn</span>
                  <span className="linkedin__head linkedin__head--arrow">
                    ➔
                  </span>
                </p>
                <span className="linkedin__para">
                  Join our Linkedin page, We share UI/UX Design tips.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="info row">
          <p className="info__heading">File Info</p>
          <div className="info__right"></div>
          <div className="info__form column">
            <div className="figma row"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
