<template>  
  <v-container class="d-flex flex-column align-center justify-center text-center container-style">
    <div align-center>
      <h1 class="text-h2 font-weight-bold mb-4">Gerenciamento de Perfis com Autenticação Segura</h1>
      <p>Uma plataforma completa para gerenciar perfis de pessoas e empresas, com autenticação multi-provider e controle de funções.</p>
      <div class="btn-div">
        <v-btn class="text-white text-none custom-btn" to="/signin">Entrar na plataforma</v-btn>
        <v-btn class="text-white text-none custom-btn-outlined" variant="outlined" to="/signup">Criar uma conta</v-btn>
      </div> 
    </div>
  </v-container>

<v-container class="recursos-container" fluid>
  <div class="recursos-wrapper">
    <div class="recursos-col">
      <h2 class="text-h3 font-weight-bold mb-8 text-left">
        Principais recursos da plataforma
      </h2>
      <div class="features-container">
        <v-card class="feature-card">
          <v-card-title class="font-weight-bold">Autenticação Multi-provider</v-card-title>
          <v-card-text class="text-card">Login seguro com Google, Apple e email/senha. Proteção com JWT.</v-card-text>
        </v-card>
        <v-card class="feature-card">
          <v-card-title class="font-weight-bold">Perfis Flexíveis</v-card-title>
          <v-card-text class="text-card">Crie e gerencie perfis de pessoas e empresas com informações detalhadas.</v-card-text>
        </v-card>
        <v-card class="feature-card">
          <v-card-title class="font-weight-bold">Controle de Acesso</v-card-title>
          <v-card-text class="text-card">Sistema de papéis (roles) para controle de permissões granular.</v-card-text>
        </v-card>
        <v-card class="feature-card">
          <v-card-title class="font-weight-bold">Interface Moderna</v-card-title>
          <v-card-text class="text-card">UI responsiva e acessível com tema claro/escuro.</v-card-text>
        </v-card>
      </div>
    </div>
    <div class="recursos-avatar">
      <v-avatar size="370"  class="giant-avatar">
        <v-img src="@/assets/logo.svg"></v-img>
      </v-avatar>
    </div>
  </div>
</v-container>

</template>

<script setup>
definePage({
  meta: {
    title: 'Rápida Quickstart - Plataforma de gerenciamento de perfis',
    layout: 'default',
  },
})
</script>

<style scoped>
.container-style {
  height: 50vh; 
  width: 130vh;
}

p {
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
  text-align: center;
  width: 85vh;
  font-size: 1.25rem;
  margin: 1rem auto 0;
}

.btn-div {
  margin-top: 1rem;
  display: flex;
  gap: 1rem; 
  justify-content: center;
  flex-wrap: wrap;
}

.custom-btn {
  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));
  width: 12.5rem;
  height: 3.4rem !important;
  font-size: 1rem;
  border-radius: 0.5rem; 
  font-weight: 600;     
  text-transform: none;  
}

.custom-btn-outlined {
  color: #9ca3af !important; 
  width: 10.3rem;
  height: 3.4rem !important;
  font-size: 1rem;
  border-radius: 0.5rem; 
  font-weight: 600;      
  text-transform: none;  
}

/*  */
.recursos-wrapper {
  display: flex;
  gap: 6rem;
  align-items: flex-start; /* avatar no topo */
  justify-content: center;
  width: 90vw;
  max-width: 1500px;
  margin-left: 4rem;
}

.recursos-col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.features-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  width: 550px;
  min-width: 320px;
}

.feature-card {
  background-color: #1f2937;
  border-radius: 0.6rem;
  width: 21.7rem;
  padding: 1.1rem 1rem 0.9rem 1rem;
  text-align: left;
  border: 1px solid #334155;
}

.recursos-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.giant-avatar {
  margin-top: 2rem;
  font-size: 7rem;
  font-weight: 700;
}

.text-card {
  color:#d1d5db;
}

.text-left {
  width: 40rem;
  text-align: left;
}

</style>
