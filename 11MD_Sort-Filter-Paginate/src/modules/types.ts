//  Type for countries API used key-value
type TCountriesApi = {
    name: string,
    capital: string,
    currency: {
        name: string
    },
    language: {
        name: string
    }
}

type TInputValues = {
    name: string,
    capital: string,
    'currency.name': string,
    'language.name': string
}

export {
  TCountriesApi,
  TInputValues,
};
