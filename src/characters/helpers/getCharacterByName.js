import { useFetch } from "../hooks/useFetch"

export const getCharacterByName = (name) => {

  const {result, isLoading} = useFetch(`https://api.attackontitanapi.com/characters?name=${name}`)
  console.log(result);

  if (isLoading) {
    return
  }
  if (!result) {
    return { notFound: true };
  }
  return result.find( char => char.name === name);
}