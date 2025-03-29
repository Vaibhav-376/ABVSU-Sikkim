import Agriculture from "@/components/programmes/Agriculture";
import ArtsAndSocialScience from "@/components/programmes/ArtsAndSocialScience";
import { CommerceAndManagementDetails } from "@/components/programmes/CommerceAndManagementDetails";
import ComputerScienceDetails from "@/components/programmes/ComputerScienceDetails";
import EngineeringAndTechnology from "@/components/programmes/EngineeringAndTechnology";
import HotelManagement from "@/components/programmes/HotelManagement";
import LibraryScience from "@/components/programmes/LibraryScience";
import Science from "@/components/programmes/Science";
import VocationalStudies from "@/components/programmes/VocationalStudies";

export const ProgrammeData = [
    {
        slug: "school-of-computer-science-and-information-technology",
        name: "School of Computer Science And Information Technology",
        content: <ComputerScienceDetails />
    },
    {
        slug: "school-of-commerce-and-management",
        name: "School of Commerce And Management",
        content: <CommerceAndManagementDetails />
    },
    {
        slug: "school-of-arts",
        name: "School of Arts, Humanities and Social Science",
        content: <ArtsAndSocialScience />
    },
    {
        slug: "school-of-science",
        name: "School of Science",
        content: <Science />
    },
    {
        slug: 'school-of-voacational-studies',
        name: `School of Vocational Studies`,
        content: <VocationalStudies />,

    },
    {
        slug: 'school-of-agriculture',
        name: `School of Agriculture`,
        content: <Agriculture />,
    },
    {
        slug: 'school-of-library-Science',
        name: `School of Library Science`,
        content: <LibraryScience />,
    },
    {
        slug: 'school-of-hotel-management',
        name: `School of Hotel Management & Tourism`,
        content: <HotelManagement />,
    },
    {
        slug: 'school-of-engineering',
        name: `School of Engineering and Technology`,
        content: <EngineeringAndTechnology/>,
    },
]