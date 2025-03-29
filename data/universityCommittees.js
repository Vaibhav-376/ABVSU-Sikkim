import AntiRagingCommittee from "@/components/university-committes/AntiRagingCommittee";
import DisciplineCommittee from "@/components/university-committes/DisciplineCommittee";
import EventOrganisationCommittee from "@/components/university-committes/EventOrganisationCommittee";
import InternalComplaintCommittee from "@/components/university-committes/InternalComplaintCommittee";
import InternalQualityAssuranceCell from "@/components/university-committes/InternalQualityAssuranceCell";
import SeminarCommittee from "@/components/university-committes/SeminarCommittee";
import SportsClubCommittee from "@/components/university-committes/SportsClubCommittee";
import StudentWelfareCommittee from "@/components/university-committes/StudentWelfareCommittee";
import WomenHarresementCommittee from "@/components/university-committes/WomenHarresementCommittee";

export const UniversityCommitteesData = [
    {
        slug: 'anti-raging-committee',
        name: 'Anti Raging Committee',
        content: <AntiRagingCommittee />
    },
    {
        slug: 'discipline-committee',
        name: 'Discipline Committee',
        content: <DisciplineCommittee />
    },
    {
        slug: 'internal-complaint-committee',
        name: 'Internal Complaint Committee',
        content: <InternalComplaintCommittee />
    },
    {
        slug: 'event-organisation-committee',
        name: 'Event Organisation Committee',
        content: <EventOrganisationCommittee />
    },
    {
        slug: 'student-welfare-committee',
        name: 'Student Welfare Committee',
        content: <StudentWelfareCommittee />
    },
    {
        slug: 'seminar-committee',
        name: 'Seminar Committee',
        content: <SeminarCommittee />
    },
    {
        slug: 'sports-club-committee',
        name: 'Sports Club Committee',
        content: <SportsClubCommittee />
    },
    {
        slug: 'women-sexual-harrasement-committee',
        name: 'Women Sexual Harrasment Committee',
        content: <WomenHarresementCommittee />
    },
    {
        slug: 'internal-quality-assurance-cell',
        name: 'Internal Quality Assurance Cell',
        content: <InternalQualityAssuranceCell />
    },
]