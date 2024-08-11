"use client"

import {Provider} from "react-redux";
import {store} from "@/app/_lib/store/store";
import {Suspense} from "react";

export default function HomeLayout({children}) {
    return (
        <Provider store={store}>
            <Suspense>
                {children}
            </Suspense>
        </Provider>
    )
}