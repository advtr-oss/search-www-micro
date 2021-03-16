// '/place/{nation}/{admin1}/{admin2}/{entity}?id=${place-id}'
const createURL = (target) => {
  const containers = target.containers
  const components = [
    containers.nation?.value,
    containers.admin1?.value,
    containers.admin2?.value,
    containers.entity.value
  ].filter((el) => !!el).map((el) => el.toLowerCase().replace(/ /g, '-'))

  // TODO: Fix me
  return new URL(encodeURI(`http://${window.advtr.uri}/place/${components.join('/')}?id=${target.placeid}`))
}

export default createURL
