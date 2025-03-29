"use client"
import PagesRedirectComp from '@/components/common/PagesRedirectComp'
import { InformationCenterData } from '@/data/InformationCenterData'

const InformationCenterPage = () => {
  return <>
    <PagesRedirectComp data={InformationCenterData} route={"information-center"} />
  </>
}

export default InformationCenterPage
