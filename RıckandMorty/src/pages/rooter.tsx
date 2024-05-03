import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarRouter from './navbar'

export default function RooterPage() {
  return (
    <>
        <NavbarRouter />
        <hr />
        <Outlet  />
    </>
  )
}
