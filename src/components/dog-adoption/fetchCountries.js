async function fetchCountries() {
  let countriesList = [];
  const config = {
    cUrl: "https://api.countrystatecity.in/v1/countries",
    cKey: "N0doTktlTklBZ1FxMTROMFJ0M2NXaXVXZ0VaUVVnWHVES2g5a1R1cg==",
  };

  const headers = new Headers(); //initialize an empty set of headers
  headers.append("X-CSCAPI-KEY", config.cKey);

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  try {
    const response = await fetch(config.cUrl, requestOptions);
    countriesList = await response.json();
    console.log("countriesList", countriesList);
    return countriesList;
  } catch (error) {
    console.log("error fetching countries", error);
    throw error;
  }
}

export default fetchCountries;
