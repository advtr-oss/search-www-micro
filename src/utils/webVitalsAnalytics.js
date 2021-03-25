import ReactGA from 'react-ga'

export default function ({ name, delta, id }) {
  ReactGA.event({
    category: 'Web Vitals',
    action: name,
    label: id,
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    nonInteraction: true
  })
}
