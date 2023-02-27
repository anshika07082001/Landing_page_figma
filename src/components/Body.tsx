import React from "react";

const Body = () => {
  return (
    <section className="mainBody margin">
      <div className="body column margin">
        <div className="body__top pr">
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
                    <span className="twitter__head twitter__head--arrow">
                      ➔
                    </span>
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
            <span className="box__heading">File Info</span>
            <div className="info__right"></div>
            <div className="info__form column">
              <div className="figma row">
                <div className="figma__icon row">
                  <img src="figma-1 1.png" alt="" />
                </div>
                <div className="figma__content column">
                  <span className="figma__heading">
                    Figma File for{" "}
                    <label className="figma__heading--free">FREE</label>
                  </span>
                  <span>
                    It is free to use for personal and commercial purposes.
                  </span>
                </div>
              </div>
              <div className="webflow row">
                <div className="webflow__icon row">
                  <img src="fig.png" alt="" />
                </div>
                <div className="webflow__content column">
                  <span className="webflow__heading">Webflow</span>
                  <span>
                    The complete design is available as a Webflow template.
                  </span>
                </div>
              </div>
              <p className="info__btn">Get Template $79 USD</p>
            </div>
          </div>
        </div>
        <div className="body__bottom row">
          <div className="bodyImages column">
            <span className="box__heading">Images</span>
            <div className="pexels column">
              <div className="row pexels__heading">
                <img src="Vector (5).png" alt="" />
                <span className="pexels__head">
                  Pexels<span></span>➔
                </span>
              </div>
              <p className="pexels__content">
                You can check the licenses and download the images for free on
                <span className="pexels__content--span"> Pexels</span>
              </p>
            </div>
            <div className="unsplash column">
              <div className="row unsplash__heading">
                <img src="Vector (4).png" alt="" />
                <span className="unsplash__head">
                  Unsplash<span></span>➔
                </span>
              </div>
              <p className="unsplash__content">
                You can check the licenses and download the images for free on
                <span className="unsplash__content--span"> Unsplash</span>
              </p>
            </div>
          </div>
          <div className="fonts fonts--width column">
            <span className="box__heading">Fonts</span>
            <div className="column cardo">
              <div className="row cardo__heading">
                <img src="Vector (2).png" alt="" />
                <span className="cardo__head">
                  Cardo<span></span>➔
                </span>
              </div>
              <p className="cardo__content">
                Pages Book Website Template uses free licensed{" "}
                <span className="cardo__content--span">Google Fonts.</span>
              </p>
            </div>

            <div className="column Inter">
              <div className="row Inter__heading">
                <img src="Vector (2).png" alt="" />
                <span className="Inter__head">
                  Cardo<span></span>➔
                </span>
              </div>
              <p className="Inter__content">
                Pages Book Website Template uses free licensed
                <span className="Inter__content--span">Google Fonts.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
