// this will be the file to ffetch data from the Shazam core API

// rapid API need key and to fetch from data try with post man first 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '021d7817e7msh69b343836ad09dap1b2160jsn82f6189baec2')

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world'}),
        }),
    });

    export const { 
        useGetTopChartsQuery,
    } = shazamCoreApi