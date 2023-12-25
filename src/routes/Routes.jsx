import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Gender from "../components/gender";
import Intro from "../components/intro";
import AreYouPregnant from "../components/AreYouPregnant";
import AreYouDiabetic from "../components/AreYouDiabetic";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/intro",
                element: <Intro />
            },
            {
                path: "/gender",
                element: <Gender />
            },
            {
                path: "/are-you-pregnent",
                element: <AreYouPregnant />
            },
            {
                path: "/are-you-diabetic",
                element: <AreYouDiabetic />
            }
        ]
    },
]);

export default router;