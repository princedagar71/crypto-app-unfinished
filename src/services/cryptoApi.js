import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {

      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': 'fe6059c54dmsh51bbf6750a5a065p12a251jsn55e96d5b3263'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com/stats'

const createRequest= (url) => ({ url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
}=cryptoApi;