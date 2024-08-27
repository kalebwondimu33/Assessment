// src/features/apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API service
export const CardBlog = createApi({
  reducerPath: "creditCard",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-backend.onrender.com/api",
  }),
  endpoints: (builder) => ({
    getAllCardBlog: builder.query({
      query: (data: { token: string; size: number }) => ({
        url: `/blogs`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    // Add other endpoints here as needed
  }),
});

// Export hooks for usage in functional components
export const { useGetAllCardBlogQuery } = CardBlog;
