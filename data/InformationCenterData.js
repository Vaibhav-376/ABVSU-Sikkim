import Announcements from "@/components/information-center/Announcements";
import CircularAndNotices from "@/components/information-center/CircularAndNotices";
import Newsletters from "@/components/information-center/Newsletters";
import NewsRecentEventsAndAchievements from "@/components/information-center/NewsRecentEventsAndAchievements";
import ReservationRoster from "@/components/information-center/ReservationRoster";
import StudyInIndia from "@/components/information-center/StudyInIndia";

export const InformationCenterData = [
    {
        slug: "circular-and-notices",
        name: "Circular and Notices",
        content: <CircularAndNotices/>
    },
    {
        slug: "announcements",
        name: "Announcements",
        content: <Announcements/>
    },
    {
        slug: "newsletters",
        name: "Newsletters",
        content: <Newsletters/>
    },
    {
        slug: "news-recent-events",
        name: "News,Recent Events & Acievements",
        content: <NewsRecentEventsAndAchievements/>
    },
    {
        slug: "reservation-roster",
        name: "Reservation Roster",
        content: <ReservationRoster/>
    },
    {
        slug: "study-in-india",
        name: "Study In India",
        content: <StudyInIndia/>
    },
]
