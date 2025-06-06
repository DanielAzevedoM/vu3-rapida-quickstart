// stores/auth.js ou stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loading: false,
    isAuthenticated: false,
    error: null,
    user: null,
    token: sessionStorage.getItem('access_token') || null,
  }),
  actions: {
    async signup(email) {
      this.loading = true
      this.error = null
      try {
        const res = await fetch('http://localhost:3000/auth/register-init', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        })
        if (!res.ok) throw new Error('Erro ao enviar e-mail')
        
      } catch (err) {
        this.error = err.message || 'Erro desconhecido'
      } finally {
        this.loading = false
      }
    },
    async login(email, password) {
    this.loading = true
    this.error = null
    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (!res.ok) {
        const errData = await res.json()
        throw new Error(errData.message || 'Erro ao logar')
      }
      const data = await res.json()
      this.token = data.access_token
      sessionStorage.setItem('access_token', data.access_token)
      await this.fetchUser()  // <-- PEGA user atualizado com roles certas
    } catch (err) {
      this.error = err.message
    } finally {
      this.loading = false
    }
  },
  async fetchUser() {
    if (!this.token) return
    try {
      const res = await fetch('http://localhost:3000/users/me', {
        headers: { 'Authorization': `Bearer ${this.token}` }
      })
      if (res.ok) {
        const data = await res.json()
        this.user = data
      }
    } catch (err) {
      this.error = err.message
    }
  },
    logout() {
        this.token = null
        this.user = null
        sessionStorage.removeItem('access_token')
    }
  }
})
