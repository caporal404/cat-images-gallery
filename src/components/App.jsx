import { useState } from "react";

function App() {
  const [catImage, setCatImage] = useState(""); // Stocke l'image du chat

  // Fonction pour récupérer une image de chat
  const fetchCatImage = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      setCatImage(data[0].url); // Met à jour l'image du chat
    } catch (error) {
      console.error("Erreur lors du chargement de l'image", error);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🐱 Galerie d&apos;Images de Chats</h2>
      <button onClick={fetchCatImage}>Afficher un Chat</button>
      <br />
      {catImage && <img src={catImage} alt="Chat mignon" style={{ marginTop: "20px", maxWidth: "100%", height: "300px", objectFit: "cover" }} />}
    </div>
  );
}

export default App;
