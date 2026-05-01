import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import FormInput from '../components/FormInput'
import api from '../services/api'

export default function ParentSignup(){
  const [form, setForm] = useState({ name: '', email: '', password: '', childName: '' })
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    setError('')
    setLoading(true)
    try{
      await api.post('/auth/signup', { ...form, role: 'parent' })
      setStatus('Account created. You can sign in now.')
    }catch(err){
      setError('Registration failed. Please check the form and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      eyebrow="Parent account"
      title="Create your family profile"
      subtitle="Start with your details and your child's name so the daycare team can connect records correctly."
      footer={<>Already registered? <Link to="/login" className="font-semibold text-teal-700 hover:text-teal-800">Sign in</Link></>}
    >
      <form onSubmit={submit} className="space-y-5">
        {status && <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">{status}</div>}
        {error && <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</div>}
        <FormInput label="Full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <FormInput label="Email address" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        <FormInput label="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required />
        <FormInput label="Child name" value={form.childName} onChange={e => setForm({...form, childName: e.target.value})} />
        <button className="w-full rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-slate-400" type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Create parent account'}
        </button>
      </form>
    </AuthLayout>
  )
}
