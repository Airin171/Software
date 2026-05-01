import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import FormInput from '../components/FormInput'
import api from '../services/api'

export default function DaycareSignup(){
  const [form, setForm] = useState({ name: '', email: '', password: '', daycareName: '' })
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async e => {
    e.preventDefault()
    setStatus('')
    setError('')
    setLoading(true)
    try{
      await api.post('/auth/signup', { ...form, role: 'admin' })
      setStatus('Daycare admin account created. You can sign in now.')
    }catch(e){
      setError('Registration failed. Please check the form and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      eyebrow="Daycare admin"
      title="Set up your center workspace"
      subtitle="Create the admin account that will manage admissions, staff, and daily operations."
      footer={<>Already registered? <Link to="/login" className="font-semibold text-teal-700 hover:text-teal-800">Sign in</Link></>}
    >
      <form onSubmit={submit} className="space-y-5">
        {status && <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">{status}</div>}
        {error && <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</div>}
        <FormInput label="Full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <FormInput label="Email address" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        <FormInput label="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required />
        <FormInput label="Daycare name" value={form.daycareName} onChange={e => setForm({...form, daycareName: e.target.value})} />
        <button className="w-full rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-slate-400" type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Create admin account'}
        </button>
      </form>
    </AuthLayout>
  )
}
