import React from "react";

const Body = () => {
  return (
    <section className="mainBody margin">
      <div className="body column margin">
        {/* body top */}
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
              <div className="sites row">
                <img src="instagram.png" alt="" />
                <div className="sites__content column">
                  <p className="row">
                    <span className="sites__head">Instagram</span>
                    <span className="sites__head sites__head--arrow">➔</span>
                  </p>
                  <span className="social__para">
                    Join our Instagram page, We share UI/UX Design tips.
                  </span>
                </div>
              </div>
              <div className="sites row">
                <img src="Vector.png" alt="" style={{ width: "62px" }} />
                <div className="sites__content column">
                  <p className="row">
                    <span className="sites__head">Twitter</span>
                    <span className="sites__head sites__head--arrow">
                      ➔
                    </span>
                  </p>
                  <span className="social__para">
                    Join our Twitter page, We share UI/UX Design tips.
                  </span>
                </div>
              </div>
              <div className="sites row">
                <img src="Vector (3).png" alt="" />
                <div className="sites__content column">
                  <p className="row">
                    <span className="sites__head">LinkedIn</span>
                    <span className="sites__head sites__head--arrow">
                      ➔
                    </span>
                  </p>
                  <span className="social__para">
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
                    Figma File for
                    <label className="figma__heading--free">FREE</label>
                  </span>
                  <span className="social__para">
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
                  <span className="social__para">
                    The complete design is available as a Webflow template.
                  </span>
                </div>
              </div>
              <p className="info__btn">Get Template $79 USD</p>
            </div>
          </div>
        </div>
        {/* body bottom */}
        <div className="body__bottom row">
          <div className="bodyImages column">
            <span className="box__heading">Images</span>
            <div className="social column">
              <div className="row social__heading">
                <img src="Vector (5).png" alt="" />
                <span className="social__head">
                  Pexels<span></span>➔
                </span>
              </div>
              <p className="social__content">
                You can check the licenses and download the images for free on
                <span className="social__content--span"> Pexels</span>
              </p>
            </div>
            <div className="social column">
              <div className="row social__heading">
                <img src="Vector (4).png" alt="" />
                <span className="social__head">
                  Unsplash<span></span>➔
                </span>
              </div>
              <p className="social__content">
                You can check the licenses and download the images for free on
                <span className="social__content--span"> Unsplash</span>
              </p>
            </div>
          </div>
          <div className="fonts fonts--width column">
            <span className="box__heading">Fonts</span>
            <div className="column social">
              <div className="row social__heading">
                <img src="Vector (2).png" alt="" />
                <span className="social__head">
                  Cardo<span></span>➔
                </span>
              </div>
              <p className="social__content">
                Pages Book Website Template uses free licensed{" "}
                <span className="social__content--span">Google Fonts.</span>
              </p>
            </div>

            <div className="column social">
              <div className="row social__heading">
                <img src="Vector (2).png" alt="" />
                <span className="social__head">
                  Inter<span></span>➔
                </span>
              </div>
              <p className="social__content">
                Pages Book Website Template uses free licensed
                <span className="social__content--span">Google Fonts.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
