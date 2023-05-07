import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const followersApi = createApi({
    reducerPath: "followers",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://6457ab801a4c152cf9875b46.mockapi.io",
        
    }),
    tagTypes: ["followers"],
    endpoints: (builder) => ({
        getFollowers: builder.query({
            query: () => "followers",
            providesTags: ["followers"],
        }),
        updateFollowers: builder.mutation({
            query(data) {
                const { id, ...body } = data;
                return {
                    url: `/followers/${id}`,
                    method: "PUT",
                    body,
                };
            },
            invalidatesTags: ["followers"],
        }),
    }),
});

export const { useGetFollowersQuery, useUpdateFollowersMutation } =
    followersApi;