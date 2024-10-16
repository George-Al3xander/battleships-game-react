import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./index.css";

import Header from "@/components/header.tsx";
import { Providers } from "@/components/providers.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Providers>
            <Header />
            <App />
        </Providers>
    </StrictMode>,
);
