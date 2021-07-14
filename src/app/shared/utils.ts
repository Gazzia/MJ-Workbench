export const flattenObject = (obj: any) => {
  const flattened = {}

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(flattened, flattenObject(obj[key]))
    } else {
      // @ts-ignore
      flattened[key] = obj[key]
    }
  })

  return flattened
}
