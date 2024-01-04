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
import AnyHeartIssues from "../components/AnyHeartIssues";
import AnyKidneyProblems from "../components/AnyKidneyProblems";
import AnyBelowSymptoms from "../components/AnyBelowSymptoms";
import AskMore from "../components/AskMore";
import SugarLevelsFluctuate from "../components/SugarLevelsFluctuate";
import SpecificGoals from "../components/SpecificGoals";
import HighBloodPressure from "../components/HighBloodPressure";
import MedicationsForDiabetes from "../components/MedicationsForDiabetes";
import PregnentInstruction from "../components/PregnentInstruction";
import DiabeticPatientInstruction from "../components/DiabeticPatientInstruction";
import DiabeticPatientBeCarefullIntruction from "../components/DiabeticPatientBeCarefullIntruction";
import YouAreAdiabeticPatient from "../components/YouAreAdiabeticPatient";

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
                path: "/any-heart-issues",
                element: <AnyHeartIssues />
            },
            {
                path: "/any-kidney-problems",
                element: <AnyKidneyProblems />
            },
            {
                path: "/any-below-symptoms",
                element: <AnyBelowSymptoms />
            },
            {
                path: "/sugar-levels-fluctuate",
                element: <SugarLevelsFluctuate />
            },
            {
                path: "/specific-goals",
                element: <SpecificGoals />
            },
            {
                path: "/high-blood-pressure",
                element: <HighBloodPressure />
            },
            {
                path: "/medications-for-diabetes",
                element: <MedicationsForDiabetes />
            },
            {
                path: "/pregnent-instruction",
                element: <PregnentInstruction />
            },
            {
                path: "/diabetic-patient-instruction",
                element: <DiabeticPatientInstruction />
            },
            {
                path: "/diabetic-patient-be-carefull-intruction",
                element: <DiabeticPatientBeCarefullIntruction />
            },
            {
                path: "/you-are-a-diabetic-patient",
                element: <YouAreAdiabeticPatient />
            },
            {
                path: "/result",
                element: <Result />
            },
            {
                path: "/ask-more",
                element: <AskMore />
            }
        ]
    },
]);

export default router;