import {useState,useEffect,startTransition} from "react"
import CardMedia from "@mui/material/CardMedia";
import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";


const ImagesList = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    goToServer();
  }, []);

  const goToServer = async () => {
    let url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
      .then((response) => response.json())
      .then((x) => {
        setPhotos(x);
      })
      .catch((er) => console.log(er));
    fetch("https://jsonplaceholder.typicode.com/photos");
  };

  startTransition(() => {
    goToServer();
  });
  return (
    <>
    <ul className="allImagesList">
        {photos.map((item)=>(
            <li key={item.id} className="singleImage">
                <CardMedia
                sx={{ height: 350 }}
                component="img"
                alt="green iguana"
                height="350"
                width="250"
                image={item.url}
              />
            </li>
        ))}
    </ul>
     
    </>
  );
};

export default ImagesList;
