"use client"

import {Provider} from "react-redux";
import {store} from "@/app/_lib/store/store";

export default function HomeLayout({children}) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}