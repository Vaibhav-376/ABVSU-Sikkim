import ApparelAndFashionDesigning from "@/components/vocational-courses/ApparelAndFashionDesigning";
import GraphicsAndMultimedia from "@/components/vocational-courses/GraphicsAndMultimedia";
import MassCommunication from "@/components/vocational-courses/MassCommunication";
import SoftwareDevelopment from "@/components/vocational-courses/SoftwareDevelopment";

export const vocationalData = [
    {
        slug: "software-development",
        name: "Software Development",
        content: <SoftwareDevelopment />
    },
    {
        slug: "graphic-and-multimedia",
        name: "Graphic And Multimedia",
        content: <GraphicsAndMultimedia />
    },
    {
        slug: "apparel-and-fashion-designing",
        name: "Apparel And Fashion Designing",
        content: <ApparelAndFashionDesigning />
    },
    {
        slug: "mass-communication-and-journalism",
        name: "Mass Communication And Journalism",
        content: <MassCommunication />
    },
]