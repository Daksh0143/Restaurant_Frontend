"use client"

import store from "@/Redux/store"
import { Provider } from "react-redux"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function ClientLayout({ children }) {
    return (
        <Provider store={store}>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </Provider>
    )
}   