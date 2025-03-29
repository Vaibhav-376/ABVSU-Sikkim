import CampusLife from "@/components/lifeAtAbvsu/CampusLife";
import ComputerLab from "@/components/lifeAtAbvsu/ComputerLab";
import Conference from "@/components/lifeAtAbvsu/Conference";
import Hostel from "@/components/lifeAtAbvsu/Hostel";
import Library from "@/components/lifeAtAbvsu/Library";
import Location from "@/components/lifeAtAbvsu/Location";
import SportsTraining from "@/components/lifeAtAbvsu/SportsTraining";
import Transportation from "@/components/lifeAtAbvsu/Transportation";

export const lifeAtAbvsuData = [
    {
        slug: "campus",
        name: "Campus Life",
        content: <CampusLife />
    },
    {
        name: `Computer Lab`,
        slug: `computer-lab`,
        content: <ComputerLab />
    },
    {
        name: `Library`,
        slug: `library`,
        content: <Library />
    },
    {
        name: `Hostel Details`,
        slug: `hostel`,
        content: <Hostel />
    },
    {
        name: `Transportation`,
        slug: `transportation`,
        content: <Transportation />
    },
    {
        name: `Conference / Seminar`,
        slug: `conference-seminar`,
        content: <Conference />
    },
    {
        name: `Sport Training`,
        slug: `sports-training`,
        content: <SportsTraining />
    },
    {
        name: `Location`,
        slug: `location`,
        content: <Location />
    },
]
