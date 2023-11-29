import React, { useRef } from "react";
// import ReactPlayer from "react-player";
// import { Autoplay } from "swiper";

function Ourpartner() {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <section className="our__partner__section position-relative">
        <div className="container" style={{ margin: "auto" }}>
          <div
            className="row my-lg-3 mb-lg-5 mb-3 our__parnter__h1 text-center"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h1 className="display-5 titlename_h1 video_title_h1">
              How to get a Core Coin Wallet
            </h1>
          </div>
          <div
            className="row text-center d-flex justify-content-center"
            style={{ width: "fit-content", margin: "auto" }}
          >
            <div>
              <video
                width="100%"
                height="100%"
                ref={videoRef}
                onClick={handleVideoClick}
                poster="/assets/images/video.png"
              >
                <source src="/assets/images/video.MOV" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="our__partner__section position-relative">
        <div className="container">
          <div className="row my-lg-3 mb-lg-5 mb-3 our__parnter__h1 text-center">
            <h1 className="display-5 titlename_h1">Our partners</h1>
          </div>
          <div className="row partner__row justify-content-center">
            <div className="partner__logo__box">
              <img src="/assets/images/opeal-logo.png" alt="opeal logo" />
            </div>
            <div className="partner__logo__box">
              <img
                src="/assets/images/starlink-logo.png"
                style={{ transform: "translateX(22%)" }}
                alt="opeal logo"
              />
            </div>
          </div>
          <div>
            <img
              src="/assets/images/double-star.png"
              className="img__double__star"
              alt="image"
            />
            <img
              src="/assets/images/group-2-star.png"
              className="img__double__star2 d-lg-none d-block"
              alt="image"
            />
          </div>
        </div>
      </section>
      <section className="banned__img mt-lg-0 mt-4">
        <div className="w-100">
          <img
            src="/assets/images/ban.png"
            className="img-fluid w-100 d-lg-block d-none"
            alt="image"
          />
          <img
            src="/assets/images/banned-mobile.png"
            className="img-fluid w-100 d-lg-none d-block"
            alt="image"
          />
          <div className="d-lg-block d-none">
            <h1
              className="text-center display-3 we__use__h1 text-capitalize text-red "
              style={{ margin: "auto" }}
            >
              WE USE <span className="text-black">100%</span> RENEWABLE ENERGY
            </h1>
          </div>
          <div className="d-lg-none d-block">
            <h1
              className="text-center display-3 we__use__h1 text-capitalize text-red "
              style={{ margin: "auto" }}
            >
              WE USE <span className="text-black">100%</span>
            </h1>
            <h1
              className="text-center display-3 we__use__h1 text-capitalize text-red"
              style={{ margin: "auto" }}
            >
              RENEWABLE ENERGY
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourpartner;
