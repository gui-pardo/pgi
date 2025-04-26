import React from 'react'
import { Route } from 'react-router'
import MainPage from '../pages/mainPage/mainPage'
import ExerCicioInferior from '../pages/exercicioInferior/exercicioInferior'
import AgachamentoBarraSolta from '../pages/exercicioInferior/agachamentoBarraSolta'
import AgachamentoUnilateral from '../pages/exercicioInferior/agachamentoUnilateral'
import ExercicioSuperior from '../pages/exercicioSuperior/exercicioSuperior'
import AgachamentoBulgaro from '../pages/exercicioInferior/agachamentoBulgaro' 
import LegPress from '../pages/exercicioInferior/legPress' 
import CrucifixoLateral from '../pages/exercicioSuperior/crucifixoLateral'
import RemadaComHalteres from '../pages/exercicioSuperior/remadaComHalteres'
import TricepsFrances from '../pages/exercicioSuperior/tricepsFrances'
import SupinoInclinado from '../pages/exercicioSuperior/supinoInclinado'
import SupinoReto from '../pages/exercicioSuperior/supinoReto'
import RoscaMartelo from '../pages/exercicioSuperior/roscaMartelo'
import CadeiraExtensora from '../pages/exercicioInferior/cadeiraExtensora'
import { About, Suplementacao, AtividadesCardioVasculares, Nutricao } from '../pages'
import Stiff from '../pages/exercicioInferior/stiff'
import MesaFlexora from '../pages/exercicioInferior/mesaFlexora'
import Login from '../pages/login/login'
//import CriarConta from '../pages/login/criarConta'
import ElevacaoLateral from '../pages/exercicioSuperior/elevacaoLateral'



const AppRoutes: React.FC = () => {
  return (
    <>
      {/* dashboard */}
      <Route path='/' exact={true}>
        <MainPage />
      </Route>

     
      <Route path='/exercicio/inferior'>
        <ExerCicioInferior />
      </Route>
      

      <Route path='/exercicio/inferior/agachamento-unilateral'>
        <AgachamentoUnilateral />
      </Route>

      <Route path='/exercicio/inferior/stiff'>
        <Stiff />
      </Route>
      
      <Route path='/exercicio/inferior/agachamento-barra-solta'>
        <AgachamentoBarraSolta />
      </Route>

      <Route path='/exercicio/inferior/agachamento-bulgaro'>
        <AgachamentoBulgaro />
      </Route>

      <Route path='/exercicio/inferior/leg-press'>
        <LegPress />
      </Route>

      <Route path='/exercicio/inferior/cadeira-extensora'>
        <CadeiraExtensora />
      </Route>

      <Route path='/exercicio/inferior/mesa-flexora'>
        <MesaFlexora />
      </Route>

      
      <Route path='/exercicio/superior'>
        <ExercicioSuperior />
      </Route>

      <Route path='/exercicio/superior/elevacao-lateral'>
        <ElevacaoLateral/>
      </Route>

      <Route path='/exercicio/superior/crucifixo-lateral'>
        <CrucifixoLateral />
      </Route>

      <Route path='/exercicio/superior/remada-com-halteres'>
        <RemadaComHalteres />
      </Route>

      <Route path='/exercicio/superior/triceps-frances'>
        <TricepsFrances />
      </Route>

      <Route path='/exercicio/superior/supino-inclinado'>
        <SupinoInclinado />
      </Route>

      <Route path='/exercicio/superior/supino-reto'>
        <SupinoReto />
      </Route>

      <Route path='/exercicio/superior/rosca-martelo'>
        <RoscaMartelo />
      </Route>

       {/* About */}
       <Route path='/sobre'>
         <About />
       </Route>

       <Route path='/suplementacao'>
          <Suplementacao/>
       </Route>

       <Route path='/atividadeCardioVasculares'>
          <AtividadesCardioVasculares/>
       </Route>

       <Route path='/nutricao'>
          <Nutricao/>
       </Route>

      <Route path = '/login'>
          <Login/>
      </Route>
      
    </>
  )
}

export default AppRoutes
