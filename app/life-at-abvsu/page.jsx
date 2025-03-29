"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ProgrammeData } from '@/data/programmeData'

const LifeAtAbvsuPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (ProgrammeData.length > 0) {
      const redirectUrl = `/life-at-abvsu/${ProgrammeData[0].slug}`
      router.push(redirectUrl)
    }
  }, [router])

  return <div>...</div>
}

export default LifeAtAbvsuPage
