import Fade from './Fade'

export default function Head({ text, className = '' }) {
  return (
    <Fade>
      <h2 className={className}>{text}</h2>
    </Fade>
  )
}
