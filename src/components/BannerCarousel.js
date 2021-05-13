import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Banner from "./Banner";

export default function BannerCarousel({ content }) {
  return (
    <div className="banner-wrapper">
      <CarouselProvider
        visibleSlides={1}
        step={1}
        naturalSlideWidth={600}
        naturalSlideHeight={220}
        totalSlides={content.length}
        // lockOnWindowScroll
        isPlaying={content.length > 1}
        interval={5000}
        touchEnabled={content.length > 1}
        className={content.length === 1 && "custom-banner"}
      >
        <Slider>
          {content.map((banner, index) => (
            <Slide key={banner._id} className="banner-slide" index={index}>
              <Banner bannerContent={banner} />
            </Slide>
          ))}
          {/* <Slide className="banner-slide" index={0}>
            <Banner bannerContent={content[0]} />
          </Slide>
          <Slide className="banner-slide" index={1}>
            <Banner bannerContent={content[1]} />
          </Slide>
          <Slide className="banner-slide" index={2}>
            <Banner bannerContent={content[2]} />
          </Slide>
          <Slide className="banner-slide" index={3}>
            <Banner bannerContent={content[3]} />
          </Slide> */}
        </Slider>
        {/* <DotGroup className="banner-dot" /> */}
        {content.length > 1 && <DotGroup className="banner-dot" />}
      </CarouselProvider>
    </div>
  );
}
