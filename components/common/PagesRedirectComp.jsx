"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const PagesRedirectComp = ({ data, route }) => {
    const router = useRouter()
    useEffect(() => {
        if (data?.length > 0) {
            const redirectUrl = `/${route}/${data[0].slug}`
            router.push(redirectUrl)
        }
    }, [router])

    return <div>...</div>
}

export default PagesRedirectComp
