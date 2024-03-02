
export const getExCurrentsByName = async(urls) => {
  const promesas = urls.map(async(url) => {
    const res = await fetch(url);
    const data = await res.json()
    return data.name;
  })

  const exCurrents = await Promise.all(promesas);
  return exCurrents;
};
