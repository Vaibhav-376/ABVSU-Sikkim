"use client"
import PagesRedirectComp from '@/components/common/PagesRedirectComp'
import { vocationalData } from '@/data/vocationalData'

const VocationalCoursesPage = () => {
    return <>
        <PagesRedirectComp data={vocationalData} route={"vocational-courses"} />
    </>
}

export default VocationalCoursesPage
