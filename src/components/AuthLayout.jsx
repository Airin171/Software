import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthLayout({ eyebrow, title, subtitle, children, footer }) {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-slate-50">
      <div className="grid min-h-[calc(100vh-64px)] lg:grid-cols-[0.95fr_1.05fr]">
        <section className="relative flex items-center bg-[#0f766e] px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,118,110,0.96),rgba(15,23,42,0.88)),url('https://images.unsplash.com/photo-1543342384-1f1350e27861?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center" />
          <div className="relative max-w-xl">
            <Link to="/" className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-teal-50">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-base font-black text-teal-700 shadow-lg">D</span>
              DayCare Connect
            </Link>
            <div className="mt-16 space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">Trusted care workspace</p>
              <h1 className="max-w-lg text-4xl font-bold leading-tight sm:text-5xl">
                A calmer way to manage daycare, families, and teams.
              </h1>
              <p className="max-w-md text-base leading-7 text-teal-50">
                Keep admissions, daily updates, jobs, and child records organized in one secure place.
              </p>
            </div>
            <div className="mt-10 grid max-w-lg gap-3 sm:grid-cols-3">
              {['Parents', 'Admins', 'Care teams'].map(item => (
                <div key={item} className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
                  <p className="text-sm font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center px-5 py-10 sm:px-8">
          <div className="w-full max-w-[520px] rounded-xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
            <div className="mb-8">
              {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">{eyebrow}</p>}
              <h2 className="mt-3 text-3xl font-bold text-slate-950">{title}</h2>
              {subtitle && <p className="mt-3 text-sm leading-6 text-slate-600">{subtitle}</p>}
            </div>
            {children}
            {footer && <div className="mt-7 border-t border-slate-100 pt-5 text-center text-sm text-slate-600">{footer}</div>}
          </div>
        </section>
      </div>
    </main>
  )
}
