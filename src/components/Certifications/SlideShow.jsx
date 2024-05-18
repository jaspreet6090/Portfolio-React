import React from 'react';
import { certificate } from '../../costant';


const images = certificate.map((cert) => cert.img);

const delay = 3000;

const styles = {
  slideshow: {
    margin: "0 auto",
    overflow: "hidden",
    maxWidth: "550px"
  },
  slideshowSlider: {
    whiteSpace: "nowrap",
    transition: "ease 1250ms"
  },
  slide: {
    display: "inline-block",
    height: "300px",
    width: "100%",
    borderRadius: "10px"
  },
  slideshowDots: {
    textAlign: "center"
  },
  slideshowDot: {
    display: "inline-block",
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    margin: "15px 7px 0px",
    backgroundColor: "#f4effa"
  },
  active: {
    backgroundColor: "#9b72cf"
  }
};

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow" style={styles.slideshow}>
      <div
        className="slideshowSlider"
        style={{
          ...styles.slideshowSlider,
          transform: `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        {images.map((imageUrl, idx) => (
          <img
            className="slide"
            key={idx}
            src={imageUrl}
            alt={`Slide ${idx + 1}`}
            style={styles.slide}
          />
        ))}
      </div>

      <div className="slideshowDots" style={styles.slideshowDots}>
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            style={{
              ...styles.slideshowDot,
              ...(index === idx ? styles.active : {})
            }}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
