import {configureStore} from "@reduxjs/toolkit";
import faqSlices from "@/app/_lib/store/features/faqslices/faqSlices";

export const store =  configureStore({
    reducer: {
        faq: faqSlices
    }
})