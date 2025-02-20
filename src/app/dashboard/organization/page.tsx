'use client'
import React from 'react'
import AddOrg from '@/components/AddOrg'


const Organization = () => {
  const x = 1

  return x === 1 ? (
    <div>Hello</div>
  ) : (
    <AddOrg/>
  )
}

export default Organization
