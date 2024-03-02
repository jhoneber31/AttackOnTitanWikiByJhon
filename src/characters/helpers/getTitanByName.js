import { useFetch } from "../hooks/useFetch"
export const getTitanByName = (name) => {
  const {result, isLoading} = useFetch(`https://api.attackontitanapi.com/titans?name=${name}`)

  if (isLoading) {
    return
  }

  return result.find( char => char.name === name);
};
