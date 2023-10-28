export const fetchContent = async () => {
  await new Promise(r => setTimeout(r, 1000))
  return 'The content'
}
