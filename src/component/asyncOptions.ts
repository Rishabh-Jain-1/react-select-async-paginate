const loadOptions = async (
  searchQuery: any,
  loadedOptions: any,
  { page }: any
) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=6320ad34&s=${
      searchQuery ? searchQuery : "batman"
    }&page=${page}`
  );
  const responseJSON = await response.json();

  return {
    options: responseJSON.Search || [],
    hasMore: Math.ceil(responseJSON.totalResults / 10) > page,
    additional: {
      page: searchQuery ? 1 : page + 1,
    },
  };
};

export default loadOptions;
