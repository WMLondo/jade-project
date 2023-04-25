import React, { useState } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <SliderContainer>
      <SliderList style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {sliderItems.map((item, index) => (
          <SliderItem key={index}>
            <SliderImage src={item.imageSrc} alt={`Imagen ${index + 1}`} />
          </SliderItem>
        ))}
      </SliderList>
      <SliderControls>
        <SliderPrev onClick={prevSlide}>&lt;</SliderPrev>
        <SliderNext onClick={nextSlide}>&gt;</SliderNext>
        <SliderDots>
          {sliderItems.map((_, index) => (
            <SliderDot
              key={index}
              className={currentIndex === index ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </SliderDots>
      </SliderControls>
    </SliderContainer>
  );
};

export default ImageSlider;
