import AboutSikkim from "@/components/about-us/AboutSikkim";
import AboutUsComponent from "@/components/about-us/AboutUsComponent";
import Accreditation from "@/components/about-us/Accreditation";
import InstitutionalDevelopmentPlan from "@/components/about-us/InstitutionalDevelopmentPlan";
import OurInspiration from "@/components/about-us/OurInspiration";
import RecognitionsApprovals from "@/components/about-us/RecognitionsApprovals";
import VisionAndMission from "@/components/about-us/VisionAndMission";
import WhyUs from "@/components/about-us/WhyUs";

export const aboutUsPageData = [
    {
        slug: "about-us",
        name: "About Us",
        content: <AboutUsComponent />
    },
    {
        slug: "about-sikkim",
        name: "About Sikkim",
        content: <AboutSikkim/>
    },
    {
        slug: "institutional-development-plan",
        name: "Institutional Development Plan",
        content: <InstitutionalDevelopmentPlan />
    },
    {
        slug: "accreditation",
        name: "Accreditation",
        content: <Accreditation/>
    },
    {
        slug: "our-inspiration",
        name: "Our Inspiration",
        content: <OurInspiration/>
    },
    {
        slug: "why-us",
        name: "Why ABVSU",
        content: <WhyUs/>
    },
    {
        slug: "recognition-approvals",
        name: "Recognition / Approvals",
        content: <RecognitionsApprovals/>
    },
    {
        slug: "vision-and-mission",
        name: "Vision And Mission",
        content: <VisionAndMission />
    },
]