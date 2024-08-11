"use client"

import {Provider} from "react-redux";
import {store} from "@/app/_lib/store/store";
import {Suspense} from "react";
import Footer from "@/app/_ui/Components/Footer/page";
import Navbar from "@/app/_ui/Components/Navbar/Navbar";

export default function HomeLayout({children}) {
    return (
        <Provider store={store}>
            <Suspense>
                <Navbar />
                {children}
                <Footer />
            </Suspense>
        </Provider>
    )
}