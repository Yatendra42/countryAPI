import { fetchData } from "./apiClient";

export const getAllCountries = () => fetchData("/independent?status=true");
// export const getCountryByName = (name) => fetchData(`/name/${name}`);
