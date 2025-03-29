"use client"
import { LeadershipData } from '@/data/leadershipData'
import PagesRedirectComp from '@/components/common/PagesRedirectComp'

const LeadershipPage = () => {
  return <>
    <PagesRedirectComp data={LeadershipData} route={"leadership"} />
  </>
}

export default LeadershipPage
