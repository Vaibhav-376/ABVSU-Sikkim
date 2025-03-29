import OurRecruiter from "@/components/placement/OurRecruiter";
import PlacementContact from "@/components/placement/PlacementContact";
import RecruitmentProcess from "@/components/placement/RecruitmentProcess";
import TrainingPlacementCell from "@/components/placement/TrainingPlacementCell";

export const placementPageData = [
    {
        slug: "training-and-placement-cell",
        name: "Training and Placement ",
        content: <TrainingPlacementCell/>
    },
    {
        slug: "our-recruiter",
        name: "Our Recruiter",
        content: <OurRecruiter />
    },
    {
        slug: "recruitment-process",
        name: "Recruitment Process",
        content: <RecruitmentProcess />
    },
    {
        slug: "placement-contact",
        name: "Placement Contact",
        content: <PlacementContact />
    },
]