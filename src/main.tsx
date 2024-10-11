import GlobalStyle from "@styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "router/index.tsx";

const queryClient = new QueryClient();

const Main = () => {
  useEffect(() => {
    const spinner = document.getElementById("loading-spinner");
    if (spinner && spinner.parentNode) {
      spinner.parentNode.removeChild(spinner);
    }
  }, []);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  </StrictMode>
);
