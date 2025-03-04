
const Phrase = ({ phraseRandom }) => {
  const { phrase, author } = phraseRandom;

  return (
    <div className="galleta_text">
      <q>{phrase}</q>
      <p>-<strong>{author}</strong></p>
    </div>
  )
}

export default Phrase