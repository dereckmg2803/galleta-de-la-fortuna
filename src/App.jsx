import { useState, useEffect, useRef } from 'react';
import './App.css';
import phrases from './utils/phrases.json';
import bgArr from './utils/bgArr.json';
import getRandomFromArr from './services/getRandomFromArr';
import Phrase from './components/Phrase';
import ButtonPhrase from './components/ButtonPhrase';
import gsap from 'gsap';

function App() {
  const quote = getRandomFromArr(phrases);
  const [phraseRandom, setPhraseRandom] = useState(quote);
  const [bgApp, setBgApp] = useState(getRandomFromArr(bgArr));



  // Ref for the cookie animation
  const cookieRef = useRef(null);

  // GSAP Animation on mount
  useEffect(() => {
    if (cookieRef.current) {
      gsap.fromTo(
        cookieRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)' },
      );
    }
  }, [bgApp]);

  return (
    <>
      <div className="app">
			<h1>Galleta de la fortuna</h1>
			<article ref={cookieRef}>
				<Phrase phraseRandom={phraseRandom} />
				<ButtonPhrase setPhraseRandom={setPhraseRandom} setBgApp={setBgApp} />
			</article>
		</div> 
    </>
  );
}

export default App
