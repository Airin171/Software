import React from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'

export default function Signup(){
  const roles = [
    {label: 'Parent', detail: 'Track your child, admission, and daycare updates.', to: '/signup/parent'},
    {label: 'Daycare Admin', detail: 'Manage admissions, staff workflows, and records.', to: '/signup/daycare'},
    {label: 'Nanny', detail: 'Share daily activities and care updates.', to: '/signup/nanny'},
    {label: 'Transport Staff', detail: 'Coordinate vehicle and route details.', to: '/signup/transport'}
  ]

  return (
    <AuthLayout
      eyebrow="Get started"
      title="Choose your account type"
      subtitle="Select the role that matches how you will use the daycare workspace."
      footer={<>Already have an account? <Link to="/login" className="font-semibold text-teal-700 hover:text-teal-800">Sign in</Link></>}
    >
      <div className="grid gap-3">
        {roles.map(r => (
          <Link
            key={r.to}
            to={r.to}
            className="group rounded-lg border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-teal-100"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-950">{r.label}</p>
                <p className="mt-1 text-sm leading-5 text-slate-600">{r.detail}</p>
              </div>
              <span className="mt-1 text-lg font-semibold text-teal-700 transition group-hover:translate-x-1">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </AuthLayout>
  )
}
