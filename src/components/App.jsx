import { useState } from "react";
import Loader from './Loader';
import '../styles/App.css';


function App() {
  const [catImage, setCatImage] = useState(""); // Stocke l'image du chat

  // Fonction pour récupérer une image de chat
  const fetchCatImage = async () => {
    // On affiche le loader
    document.querySelector('.loading').classList.toggle('show');

    try {
      const url = "https://api.thecatapi.com/v1/images/search";
      const response = await fetch(url);
      const data = await response.json();
      setCatImage(data[0].url); // Met à jour l'image du chat
      await document.querySelector('.success').classList.toggle('show');
    } 
    catch (error) {
      console.error("Erreur lors du chargement de l'image", error);
      await document.querySelector('.error').classList.toggle('show');
    }
    // finally {
    //   // On cache le loader 
    //   await document.querySelector('.loader').classList.toggle('hidden');
    // }
  };

  return (
    <div className="App">
      <div className="loading-handler">
        <div className="success">
          <p>Image chargée avec succès</p>
          <span>&#10006;</span>
        </div>
        <div className="error">
          <p>Erreur de chargement</p>
          <span>&#10006;</span>
        </div>
        <div className="loading show">
          <p>Chargement de l&apos;image</p>
          <Loader />
        </div>
      </div>
      <h2>🐱 Galerie d&apos;Images de Chats</h2>
      <button onClick={fetchCatImage}>Afficher un Chat</button>
      <div className="images-container">
          <img className="image" src={catImage} alt="Chat mignon" style={imageStyle} />
      </div>
    </div>
  );
}

const imageStyle = { 
  marginTop: "20px", 
  maxWidth: "100%", 
  height: "300px", 
  objectFit: "cover" 
} 

export default App;
