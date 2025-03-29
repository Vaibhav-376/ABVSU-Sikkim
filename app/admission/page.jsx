"use client"
import PagesRedirectComp from '@/components/common/PagesRedirectComp'
import { admissionData } from '@/data/admissionData'

const AdmissionPage = () => {
    return <>
        <PagesRedirectComp data={admissionData} route={"admission"} />
    </>
}

export default AdmissionPage
