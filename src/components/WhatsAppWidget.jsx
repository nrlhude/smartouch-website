import './WhatsAppWidget.css'

export default function WhatsAppWidget() {
  const phone = '60115354990'
  const message = encodeURIComponent('Hello! I am interested in Smart Touch Technology solutions. Can you help me?')
  const url = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-widget"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
      <span className="wa-label">WhatsApp Us</span>
    </a>
  )
}
