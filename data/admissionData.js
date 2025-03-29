import AdmissionProcess from "@/components/admission/AdmissionProcess";
import CreditTradePolicy from "@/components/admission/CreditTradePolicy";
import EligibiltyCriteria from "@/components/admission/EligibiltyCriteria";
import Reservation from "@/components/admission/Reservation";
import Scholarship from "@/components/admission/Scholarship";

export const admissionData = [
    {
        slug: "admission-procedure",
        name: "Admission Procedure",
        content: <AdmissionProcess />
    },
    // {
    //     slug: "verify-enrollment",
    //     name: "Verify Enrollment",
    //     content: <GraphicsAndMultimedia />
    // },
    {
        slug: "eligibilty-criteria",
        name: "Eligibilty Criteria",
        content: <EligibiltyCriteria />
    },
    {
        slug: "scholarships",
        name: "Scholarship",
        content: <Scholarship />
    },
    {
        slug: "reservation",
        name: "Reservation",
        content: <Reservation    />
    },
    {
        slug: "credit-trade-policy",
        name: "Credit Trade Policy",
        content: <CreditTradePolicy />
    },
    // {
    //     slug: "apply-for-online-admission",
    //     name: "Apply for Online Admission",
    //     content: <MassCommunication />
    // },
]

