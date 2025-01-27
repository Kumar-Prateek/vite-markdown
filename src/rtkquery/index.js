import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getBillQuery = createApi({
  reducerPath: "getBillQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://666feaf80900b5f87248a96d.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getBillData: builder.query({
      query: () => "getbill",
    }),
  }),
});

export const { useGetBillDataQuery } = getBillQuery;
