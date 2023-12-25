import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Gender from "../components/gender";
import Intro from "../components/intro";
import AreYouPregnant from "../components/AreYouPregnant";
import AreYouDiabetic from "../components/AreYouDiabetic";
import AnySymptoms from "../components/AnySymptoms";
import HaveYou from "../components/HaveYou";
import YourSugarLevel from "../components/YourSugarLevel";
import Result from "../components/Result";

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
            },
            {
                path: "/any-symptoms",
                element: <AnySymptoms />
            },
            {
                path: "/have-you",
                element: <HaveYou />
            },
            {
                path: "/your-sugar-level",
                element: <YourSugarLevel />
            },
            {
                path: "/result",
                element: <Result />
            }
        ]
    },
]);

export default router;