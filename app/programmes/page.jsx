"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ProgrammeData } from '@/data/programmeData'

const ProgrammesPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (ProgrammeData.length > 0) {
      const redirectUrl = `/programmes/${ProgrammeData[0].slug}`
      router.push(redirectUrl)
    }
  }, [router])

  return <div>...</div>
}

export default ProgrammesPage
