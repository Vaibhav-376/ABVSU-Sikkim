"use client"
import PagesRedirectComp from '@/components/common/PagesRedirectComp'
import { placementPageData } from '@/data/placementData'

const PlacementPage = () => {
    return <>
        <PagesRedirectComp data={placementPageData} route={"placement"} />
    </>
}

export default PlacementPage
