<template>
  <div class="d-flex flex-column justify-center dashboard-container">
    <h1 class="dashboard-title">Dashboard</h1>
    <p class="dashboard-subtitle">
      Olá, {{ profileName }}!
    </p>

    <v-container class="dashboard-cards" fluid>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="dashboard-card">
            <v-card-title class="card-title">Perfil</v-card-title>
            <v-card-text class="card-text">
              Gerencie suas informações pessoais e profissionais.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="dashboard-card">
            <v-card-title class="card-title">Configurações</v-card-title>
            <v-card-text class="card-text">
              Ajuste as configurações da sua conta e preferências.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="dashboard-card">
            <v-card-title class="card-title">Atividade</v-card-title>
            <v-card-text class="card-text">
              Visualize sua atividade recente na plataforma.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const profileName = ref('')

onMounted(async () => {
  if (!auth.token) {
    router.replace('/auth/signin')
    return
  }

  try {
    // Verifica se há perfil de pessoa
    const res = await fetch('http://localhost:3000/users/has-profile', {
      headers: { Authorization: `Bearer ${auth.token}` }
    })
    const data = await res.json()
    console.log('Verificação de perfil no dashboard:', data)

    if (!data.person && !data.company) {
      window.location.href = '/profile/select'
      return
    }

    // Se for pessoa, buscar dados do perfil de pessoa
    if (data.person) {
      const personRes = await fetch('http://localhost:3000/person-profiles/user/' + auth.user._id, {
        headers: { Authorization: `Bearer ${auth.token}` }
      })
      const personProfile = await personRes.json()
      profileName.value = personProfile.personName || auth.user.email
    } else {
      profileName.value = auth.user.email // fallback
    }
  } catch (error) {
    console.error('Erro ao buscar perfil de pessoa no dashboard:', error)
  }
})
</script>


<style scoped>
.dashboard-container {
    margin: 3rem auto;
    width: 150vh ;
  padding: 24px;
}
.dashboard-title {
  font-size: 2rem;
  font-weight: 600;
  margin-left: 15px;
  margin-bottom: 8px;
  color: #ffffff;
}
.dashboard-subtitle {
    margin-left: 15px;
    color: #b0b3b8;
    margin-bottom: 24px;
}
.dashboard-cards {  
  margin-top: 16px;
}
.dashboard-card {
    width: 29rem;
  background-color: #1f2937 !important;
  color: #ffffff !important;
  border-radius: 8px;
 padding: 5px;
}
.card-title {
  font-weight: 600;
  font-size: 1.1rem;
}
.card-text {
  color: #b0b3b8;
}
</style>
