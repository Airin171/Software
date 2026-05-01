import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthLayout from '../components/AuthLayout'
import FormInput from '../components/FormInput'

export default function Login(){
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try{
      const res = await login(form)
      if (res.user) nav('/role-redirect')
    }catch(err){
      setError('We could not sign you in. Check your email and password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Sign in to your account"
      subtitle="Access your daycare dashboard, updates, admissions, and team workspace."
      footer={<>New here? <Link to="/signup" className="font-semibold text-teal-700 hover:text-teal-800">Create an account</Link></>}
    >
      <form onSubmit={submit} className="space-y-5">
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}
        <FormInput label="Email address" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        <FormInput label="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required />
        <button
          className="w-full rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-slate-400"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </AuthLayout>
  )
}
