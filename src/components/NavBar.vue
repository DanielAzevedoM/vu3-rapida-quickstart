<template>
  <v-app-bar dark>
    <v-container class="d-flex justify-space-between" fluid>
      <div class="d-flex align-center gap-2">
        <v-img
          src="@/assets/logo.svg"
          width="32"
          height="32"
          class="mr-2"
        ></v-img>
        <v-app-bar-title class="text-no-wrap">Rapida Quickstart</v-app-bar-title>
      </div>

      <div class="btn-group-style">
        <template v-if="isAuthenticated">
          <v-btn
            class="text-white text-none rounded-btn"
            @click="openLogout"
          >Sair</v-btn>
        </template>
        <template v-else>
          <v-btn class="text-white text-none rounded-btn" to="/">Início</v-btn>
          <v-btn class="text-white text-none rounded-btn" to="/signup">Criar conta</v-btn>
          <v-btn class="text-white text-none rounded-btn" to="/signin">Login</v-btn>
        </template>
      </div>
    </v-container>
    <!-- Caixa de confirmação de logout -->
    <v-dialog v-model="showLogout" width="400">
      <v-card>
        <v-card-title>Confirmar Logout</v-card-title>
        <v-card-text>Tem certeza que deseja sair?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="grey" variant="outlined" @click="showLogout = false">Cancelar</v-btn>
          <v-btn color="red" variant="flat" @click="logoutAndRedirect">Sair</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const showLogout = ref(false)
const auth = useAuthStore()
const router = useRouter()

const isAuthenticated = computed(() => !!auth.token)

function openLogout() {
  showLogout.value = true
}

function logoutAndRedirect() {
  auth.logout()
  showLogout.value = false
  router.push('/')
}
</script>

<style scoped>
.v-app-bar-title {
    font-size: 1.2rem;
    font-weight: bold;
    flex: none;
}

.btn-group-style {
    display: flex;
    gap: 0.2rem;
}

.rounded-btn {
    background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));
    text-transform: none;
    font-weight: 500;
}
</style>
