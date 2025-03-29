"use client"
import PagesRedirectComp from '@/components/common/PagesRedirectComp'
import { AuthoritiesData } from '@/data/authoritiesData'

const AuthoritiesPage = () => {
    return <>
        <PagesRedirectComp data={AuthoritiesData} route={"authorities"} />
    </>
}

export default AuthoritiesPage
