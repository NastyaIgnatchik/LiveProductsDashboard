import { createApi } from '@reduxjs/toolkit/query/react';

interface PriceUpdate {
  price: string;
}

export const priceUpdatesApi = createApi({
  reducerPath: 'priceUpdatesApi',
  baseQuery: () => ({ data: null }),
  endpoints: (builder) => ({
    subscribeToPriceUpdates: builder.query<PriceUpdate, void>({
      queryFn: () => ({ data: null }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const ws = new WebSocket('ws://localhost:8080');
        try {
          await cacheDataLoaded;

          const listener = (event: MessageEvent) => {
            try {
              const data = JSON.parse(event.data);

              if (data?.price) {
                updateCachedData(() => data);
              }
            } catch (error) {
              console.error('WebSocket message error:', error);
            }
          };

          ws.addEventListener('message', listener);
        } catch {
        }
        await cacheEntryRemoved;
        ws.close();
      },
    }),
  }),
});

export const { useSubscribeToPriceUpdatesQuery } = priceUpdatesApi;