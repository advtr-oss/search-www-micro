// '/place/{nation}/{admin1}/{admin2}/{entity}?id=${place-id}'
const createURL = (target) => {
  const containers = target.geoContainers.reduce((acc, el) => ({ ...acc, [el.type]: el.name }), { })

  const components = [
    containers.Country,
    containers.FirstLevelNationAdministrativeDivision,
    containers.SecondLevelNationAdministrativeDivision,
    target.name
  ].filter((el) => !!el).map((el) => el.toLowerCase().replace(/ /g, '-'))

  // TODO: Fix me
  return new URL(encodeURI(`http://${window.advtr.uri}/place/${components.join('/')}?id=${target.placeid}`))
}

export default createURL
