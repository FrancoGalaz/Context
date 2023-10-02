import PhotoContext from "../PhotoContext";  
import { useContext } from "react";
import { Card } from "react-bootstrap";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div className="App gallery">
      <h1 className="text-center">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-5">
        {photos.filter(foto => foto.liked === true).map((foto, i) => (
          <Card key={i} className="text-white">
            <Card.Img src={foto.src.tiny} />
            <Card.ImgOverlay className="d-flex align-items-end">
              <div className="d-flex flex-column align-items-center">
                <Card.Title>{foto.photographer}</Card.Title>
                <Card.Text>{foto.alt}</Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Favorites;