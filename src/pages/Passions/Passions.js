import React, { useState } from "react";
import styles from "./Passions.module.css"; // Import your styles (as needed)

const Passions = () => {
  const [activeTab, setActiveTab] = useState("music"); // Default to 'music' tab

  const renderContent = () => {
    switch (activeTab) {
      case "music":
        return (
          <div>
            <h1>A Journey Through Time and Sound</h1>
            <p>
              From the moment I could grasp the idea of sound as something more
              than just noise, music captivated me. As a child, I was enchanted
              by melodies that carried stories without words—music that painted
              emotions in the air. It wasn't just the songs on the radio or the
              tunes in animated films; it was something deeper, something
              timeless. At the age of 12, my fascination took shape in the form
              of six strings and a wooden body—the guitar. Holding it for the
              first time, I felt an unexplainable connection, as if it were an
              extension of myself waiting to be awakened. At first, my fingers
              fumbled over the frets, struggling to bring out clear notes, but
              every pluck of a string resonated with a sense of discovery. As I
              learned, I found myself drawn not just to modern music but to
              something much older, something rich with history and soul.
              Baroque, Classical, Romantic—these were not just names in a
              textbook but entire worlds of expression. The intricate
              compositions of Bach, the elegance of Mozart, the deep passion of
              Chopin and Tárrega—all became part of my life, shaping my
              understanding of music as an art form rather than mere
              entertainment. Each era spoke a different language, yet they all
              connected in a way that transcended time. The structured beauty of
              Baroque taught me discipline, Classical compositions refined my
              technique, and the raw emotion of the Romantic era instilled in me
              a love for storytelling through sound. Every day, I immersed
              myself in these timeless works, feeling as if I were traveling
              through centuries with each note I played. What started as
              curiosity had become a lifelong passion. The guitar was no longer
              just an instrument; it was a bridge to the past, a voice for the
              soul, and an endless source of inspiration. And so, with every
              chord and melody, I continued my journey—one where music was not
              just something I played, but something I lived.
            </p>
          </div>
        );
      case "painting":
        return (
          <div>
            <h1>Awakening to the World of Painting</h1>
            <p>
              For most of my life, paintings had been a mystery to me. I had
              seen them—countless times, in books, on walls, in museums. I had
              admired them from a distance, always wondering the same thing: How
              is it possible that a human hand and mind can create something
              like this? But that was where my curiosity ended. I saw the art,
              but I did not feel it. That changed one evening in my twenties. I
              was visiting a friend’s home when my eyes fell upon a painting in
              his living room. I don’t even remember what the conversation was
              about at that moment because my mind had already slipped into the
              canvas. For the first time, I wasn’t just looking at a painting—I
              was inside it. The landscape wasn’t just a composition of strokes
              and colors; it was alive. I could feel the air moving through the
              trees, sense the warmth of the light, and taste the colors with my
              eyes. It was as if something had unlocked in me. That experience
              left a mark, one that I couldn't shake. From that day forward, I
              no longer saw paintings as mere works of skill and technique—I
              experienced them. I began to seek them out, to understand them, to
              appreciate how each brushstroke carried emotion, how light and
              shadow could tell a story. Years later, my journey took me to some
              of the greatest museums in the world: the Louvre and Musée d’Orsay
              in Paris, the Rijksmuseum in Amsterdam, the National Gallery in
              London, and the Palazzo Ducale in Venice. Each visit was like
              stepping into a new universe, where centuries of human expression
              unfolded before my eyes. Among all the masters, two painters stood
              above the rest for me: Rembrandt and Claude Monet. Rembrandt’s
              ability to capture the soul in his portraits, the depth of light
              and darkness in his work—it felt as if his subjects were alive, as
              if I could reach out and touch them. Monet, on the other hand,
              showed me the power of color, of atmosphere, of the way a single
              moment could be transformed into an eternal impression. But I
              didn’t stop there. I stood before Leonardo da Vinci’s timeless
              masterpieces, marveled at Raphael’s perfect compositions, traced
              the dramatic intensity of Caravaggio, and felt the divine grandeur
              of Michelangelo and Donatello. In Venice, I was awed by Titian’s
              most important work at Santa Maria Gloriosa dei Frari. Vermeer,
              Van Gogh, Jan van Eyck—each artist left something unforgettable.
              What began as a simple moment in a friend’s living room turned
              into a lifelong passion. I no longer just saw paintings. I lived
              them.
            </p>
          </div>
        );
      case "sculpture":
        return (
          <div>
            <h1>A Life Built on Architecture</h1>
            <p>
              When I was little, I would watch people building—laying bricks,
              raising walls, shaping structures from the ground up. Maybe it was
              then that my fascination began, or maybe it was because of my
              grandfather, my idol growing up. He once told me that one of his
              greatest dreams was to build his own house. He had spent his youth
              as an electrician, witnessing the rise of massive constructions
              before his very eyes—dams, bridges, and towering buildings.
              Through his stories, I saw the beauty of creation, the power of
              human ingenuity. Yet, it wasn’t just construction that captivated
              me; it was architecture—the art behind the buildings. I loved
              gazing at structures, especially old ones, their walls whispering
              history. Across Europe, I have walked through streets lined with
              the past, each city a museum under the open sky. In Paris, I
              marveled at the soaring Gothic wonder of Notre-Dame, its flying
              buttresses defying gravity, its stained glass painting light
              itself. The Louvre, originally a medieval fortress, stood as a
              reminder of France’s architectural evolution, blending Renaissance
              elegance with modern glass. In London, I stood before Westminster
              Abbey, a masterpiece of English Gothic, and admired St. Paul’s
              Cathedral, Christopher Wren’s Baroque triumph, its dome dominating
              the skyline. Towns in Holland and Belgium introduced me to
              medieval castles and Flemish Renaissance architecture. The stepped
              gables of Amsterdam, the grand guild houses of Brussels, and the
              fairytale castles of Flanders each told a story of a different
              time. Austria, Prague, Bratislava, and Belgrade revealed the
              grandeur of Baroque and Rococo, the influence of the Habsburgs
              visible in every palatial facade and ornate church. In Venice, I
              traced the legacy of Andrea Palladio, whose balanced, harmonious
              designs shaped not only the city but also the world beyond it.
              Some parts of Greece exposed me to the remnants of Classical
              architecture—the foundation upon which so much of European design
              was built. In Germany, Gothic cathedrals like Cologne Cathedral
              stood as monumental testaments to faith and craftsmanship. And of
              course, in Romania, I have seen more castles than I can even
              remember. From my hometown Oradea, with its Art Nouveau charm, to
              the medieval fortresses of Alba Iulia, Sighișoara, and Deva. I
              have walked through the ancient ruins of Sarmizegetusa, stood
              before the legend of Bran Castle, and admired the defensive might
              of Râșnov. Sibiu, Iași, Făgăraș, and Castelul Corvinilor—each
              place has left its mark on me. Through my journeys, I have come to
              recognize the echoes of Gothic spires, Renaissance symmetry,
              Baroque extravagance, and Neoclassical precision. The works of
              Palladio, Wren, Gaudí, and so many others have shaped the world I
              walk through, and with every city, every building, I feel my
              fascination deepen. Architecture is more than stone and mortar; it
              is the frozen music of civilization, the silent storyteller of
              centuries past. And I, for one, will never stop listening.
            </p>
          </div>
        );
      default:
        return <div>Content about Music</div>;
    }
  };

  return (
    <div className="passions-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "music" ? "active" : ""}`}
          onClick={() => setActiveTab("music")}
        >
          Music
        </button>
        <button
          className={`tab-button ${activeTab === "painting" ? "active" : ""}`}
          onClick={() => setActiveTab("painting")}
        >
          Painting
        </button>
        <button
          className={`tab-button ${activeTab === "sculpture" ? "active" : ""}`}
          onClick={() => setActiveTab("sculpture")}
        >
          Sculpture
        </button>
      </div>

      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Passions;
