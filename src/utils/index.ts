export const formatLibName = (source: string, libName = 'starscore') => {
  return source
    .replace('@/lib/main', libName)
    .replace('@/lib/interfaces/core', libName)
}
