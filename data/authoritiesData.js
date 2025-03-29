import AcademicCouncil from "@/components/authorities/AcademicCouncil";
import BoardOfResearchStudies from "@/components/authorities/BoardOfResearchStudies";
import BoardOfStudies from "@/components/authorities/BoardOfStudies";
import ExecutiveCouncil from "@/components/authorities/ExecutiveCouncil";
import FinanceCommittees from "@/components/authorities/FinanceCommittees";
import GoverningBody from "@/components/authorities/GoverningBody";

export const AuthoritiesData = [
    {
        slug: 'governing-body',
        name: 'Governing Body',
        content: <GoverningBody/>
    },
    {
        slug: 'executive-council',
        name: 'Executive Council',
        content: <ExecutiveCouncil/>
    },
    {
        slug: 'academic-council',
        name: 'Academic Council',
        content: <AcademicCouncil/>
    },
    {
        slug: 'board-of-research-studies',
        name: 'Board of Research Studies',
        content: <BoardOfResearchStudies/>
    },
    {
        slug: 'finance-committee',
        name: 'The Finance Committees',
        content: <FinanceCommittees/>
    },
    {
        slug: 'board-of-studies',
        name: 'Board of Studies',
        content: <BoardOfStudies/>
    },



]