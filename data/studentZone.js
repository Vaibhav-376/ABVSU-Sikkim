import AluminiAssociation from "@/components/student-zone/AluminiAssociation";
import EqualOpportunityCell from "@/components/student-zone/EqualOpportunityCell";
import ExaminationPolicy from "@/components/student-zone/ExaminationPolicy";
import FacilitiesOfDiffrently from "@/components/student-zone/FacilitiesOfDiffrently";
import SocioEconomicallyDisadvantaged from "@/components/student-zone/SocioEconomicallyDisadvantaged";
import SportsActivity from "@/components/student-zone/SportsActivity";
import StudentGrievanceRedressal from "@/components/student-zone/StudentGrievanceRedressal";
import Testimonials from "@/components/student-zone/Testimonials";

export const studentZone = [
    {
        slug: "testimonials",
        name: "Testimonials ",
        content: <Testimonials/>
    },
    {
        slug: "student-grievance-redressal",
        name: "Student Grievance Redressal",
        content: <StudentGrievanceRedressal />
    },
    {
        slug: "alumini-associations",
        name: "Alumini Association",
        content: <AluminiAssociation />
    },
    {
        slug: "socio-economically-disadvantaged-group",
        name: "Socio Economically Disadvantaged Group",
        content: <SocioEconomicallyDisadvantaged />
    },
    {
        slug: "facilities-of-diffrently-abled",
        name: "Facilities of Diffrently Abled",
        content: <FacilitiesOfDiffrently />
    },
    {
        slug: "equal-opportuinity-cell",
        name: "Equal Opportunity Cell",
        content: <EqualOpportunityCell />
    },
    {
        slug: "examination-policy",
        name: "Examination Policy",
        content: <ExaminationPolicy />
    },
    {
        slug: "sports-activity",
        name: "Sports Activity",
        content: <SportsActivity />
    },
]

