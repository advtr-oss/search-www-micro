import ReactGA from 'react-ga'

export default function ({ name, delta, id }) {
  // May not have initialised it
  if (!window.ga) return console.log(name, id, Math.round(name === 'CLS' ? delta * 1000 : delta))

  ReactGA.event({
    category: 'Web Vitals',
    action: name,
    label: id,
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    nonInteraction: true
  })
}
