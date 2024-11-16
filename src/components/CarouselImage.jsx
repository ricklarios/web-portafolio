const CarouselImage = ({ src, alt }) => {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
      style={{ width: "100%", height: "auto", objectFit: "contain" }}
    />
  );
};
export default CarouselImage;
