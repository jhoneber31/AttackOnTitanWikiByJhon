
export const getPortadorByTitan = async(url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data.name;
};
