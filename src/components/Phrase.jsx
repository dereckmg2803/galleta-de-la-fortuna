
const Phrase = ({ phraseRandom }) => {
  const { phrase, author } = phraseRandom;

  return (
    
      <article className='article'>
        <div className="galleta_text">
          <q>{phrase}</q>
          <p>-<strong>{author}</strong></p>
        </div>
      </article>
    

  )
}

export default Phrase