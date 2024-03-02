
export const getEpisodeByName = async (name) => {

  const url = name;
  const res = await fetch(url);
  const data = await res.json();

  return data.episode;
  
}