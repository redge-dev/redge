import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Sidebar, Tooltip } from "@brifui/components";

import { SessionProvider } from "./session-provider";

// Create a client
const queryClient = new QueryClient();

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Tooltip.Provider>
          <Sidebar.Provider>{children}</Sidebar.Provider>
        </Tooltip.Provider>
      </SessionProvider>
    </QueryClientProvider>
  );
};
