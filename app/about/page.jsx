"use client"
import PagesRedirectComp from '@/components/common/PagesRedirectComp'
import { aboutUsPageData } from '@/data/aboutUsPage'

const AboutPage = () => {
    return <>
        <PagesRedirectComp data={aboutUsPageData} route={"about"} />
    </>
}

export default AboutPage
