"use client"
import PagesRedirectComp from '@/components/common/PagesRedirectComp'
import { UniversityCommitteesData } from '@/data/universityCommittees'

const UniversityCommitteePage = () => {
    return <>
        <PagesRedirectComp data={UniversityCommitteesData} route={"university-committees"} />
    </>
}

export default UniversityCommitteePage
