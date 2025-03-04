import { useState, useEffect, useRef } from 'react';
import './App.css';
import phrases from './utils/phrases.json';
import bgArr from './utils/bgArr.json';
import getRandomFromArr from './services/getRandomFromArr';
import Phrase from './components/Phrase';
import ButtonPhrase from './components/ButtonPhrase';
import gsap from 'gsap';
import { img1, img2, img3, img4 } from './assets';

const images = [img1, img2, img3, img4];

function App() {
  const quote = getRandomFromArr(phrases);
  const [phraseRandom, setPhraseRandom] = useState(quote);
  const [bgApp, setBgApp] = useState(getRandomFromArr(bgArr));
  const [image, setImage] = useState(getRandomFromArr(images));

  // Ref para la animación de la galleta
  const cookieRef = useRef(null);

  // Animación con GSAP
  useEffect(() => {
    if (cookieRef.current) {
      gsap.fromTo(
        cookieRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)' },
      );
    }
  }, [bgApp]);

  // Cambiar el fondo del body cuando cambie la imagen de fondo
  useEffect(() => {
    document.body.style.backgroundImage = `url('${image}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.transition = 'background 0.5s ease-in-out';
  }, [image]); // Se ejecuta cada vez que `image` cambia

  const handleChangePhrase = () => {
    setPhraseRandom(getRandomFromArr(phrases));
    setBgApp(getRandomFromArr(bgArr));
    setImage(getRandomFromArr(images));
  };


  return (
    <>
      <div className='galleta_title'>
        <h1>Galleta de la fortuna</h1>
      </div>
      <div className="galleta_container" ref={cookieRef}>
        <article className='article'>
          <Phrase phraseRandom={phraseRandom} />
        </article>
      </div>
      <div className='button'>
        <ButtonPhrase
          handlePhrase={handleChangePhrase}
        />
      </div>
    </>
  );
}

export default App;
