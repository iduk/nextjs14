'use client'
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function Providers({ children }: React.PropsWithChildren) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
       {children}
       <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' />
    </QueryClientProvider>
  )
}

export default Providers