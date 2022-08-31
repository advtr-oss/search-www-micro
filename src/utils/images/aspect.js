export const orientation = (size) =>
  size.height > size.width
    ? 'portrait'
    : size.height < size.width
      ? 'landscape'
      : 'square'

export const height = (width, size) => (width * (size.height / size.width))

export const width = (height, size) => (height * (size.width / size.height))
