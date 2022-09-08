const parseGeoContainers = ({ name, geoContainers }) =>
  [name, ...geoContainers.sort((a, b) => {
    if (a.type > b.type) {
      return -1
    }
    if (a.type < b.type) {
      return 1
    }
    return 0
  }).map(el => el.name)]

export { parseGeoContainers }
