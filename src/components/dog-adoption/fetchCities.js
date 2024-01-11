let citiesList = [];

async function fetchCities(selectedCountryIso2, selectedStateIso2) {
  if (!selectedCountryIso2) {
    console.log("selectedCountryIso2 is not defined");
    return [];
  }
  if (!selectedCountryIso2 && !selectedStateIso2) {
    console.log("selectedCountryIso2 and selectedStateIso2 are not defined");
    return [];
  }

  const config = {
    cUrl: `https://api.countrystatecity.in/v1/countries/${selectedCountryIso2}/states/${selectedStateIso2}/cities`,
    cKey: "N0doTktlTklBZ1FxMTROMFJ0M2NXaXVXZ0VaUVVnWHVES2g5a1R1cg==",
  };

  const headers = new Headers(); //initialize an empty set of headers
  headers.append("X-CSCAPI-KEY", config.cKey);

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  console.log("citiesList", citiesList);
  try {
    const response = await fetch(config.cUrl, requestOptions);
    citiesList = await response.json();
    console.log("citiesList", citiesList);
    return citiesList;
  } catch (error) {
    console.log("error fetching cities", error);
    throw error;
  }
}

export default fetchCities;
