export const useContent = () => {
  function withoutTrailingSlash(path: string): string {
    return path.endsWith('/') ? path.slice(0, -1) : path
  }

  return { withoutTrailingSlash }
}
