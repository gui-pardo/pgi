import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import MainPage from '../pages/mainPage/mainPage';
import ExerCicioInferior from '../pages/exercicioInferior/exercicioInferior';
import AgachamentoBarraSolta from '../pages/exercicioInferior/agachamentoBarraSolta';
import AgachamentoUnilateral from '../pages/exercicioInferior/agachamentoUnilateral';
import ExercicioSuperior from '../pages/exercicioSuperior/exercicioSuperior';
import AgachamentoBulgaro from '../pages/exercicioInferior/agachamentoBulgaro';
import LegPress from '../pages/exercicioInferior/legPress';
import CrucifixoLateral from '../pages/exercicioSuperior/crucifixoLateral';
import RemadaComHalteres from '../pages/exercicioSuperior/remadaComHalteres';
import TricepsFrances from '../pages/exercicioSuperior/tricepsFrances';
import SupinoInclinado from '../pages/exercicioSuperior/supinoInclinado';
import SupinoReto from '../pages/exercicioSuperior/supinoReto';
import RoscaMartelo from '../pages/exercicioSuperior/roscaMartelo';
import CadeiraExtensora from '../pages/exercicioInferior/cadeiraExtensora';
import { About, Suplementacao, AtividadesCardioVasculares, Nutricao } from '../pages';
import Stiff from '../pages/exercicioInferior/stiff';
import MesaFlexora from '../pages/exercicioInferior/mesaFlexora';
import Login from '../pages/login/login';
import ElevacaoLateral from '../pages/exercicioSuperior/elevacaoLateral';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" exact component={MainPage} />

      <Route path="/exercicio/inferior" exact component={ExerCicioInferior} />
      <Route path="/exercicio/inferior/agachamento-unilateral" component={AgachamentoUnilateral} />
      <Route path="/exercicio/inferior/stiff" component={Stiff} />
      <Route path="/exercicio/inferior/agachamento-barra-solta" component={AgachamentoBarraSolta} />
      <Route path="/exercicio/inferior/agachamento-bulgaro" component={AgachamentoBulgaro} />
      <Route path="/exercicio/inferior/leg-press" component={LegPress} />
      <Route path="/exercicio/inferior/cadeira-extensora" component={CadeiraExtensora} />
      <Route path="/exercicio/inferior/mesa-flexora" component={MesaFlexora} />

      <Route path="/exercicio/superior" exact component={ExercicioSuperior} />
      <Route path="/exercicio/superior/elevacao-lateral" component={ElevacaoLateral} />
      <Route path="/exercicio/superior/crucifixo-lateral" component={CrucifixoLateral} />
      <Route path="/exercicio/superior/remada-com-halteres" component={RemadaComHalteres} />
      <Route path="/exercicio/superior/triceps-frances" component={TricepsFrances} />
      <Route path="/exercicio/superior/supino-inclinado" component={SupinoInclinado} />
      <Route path="/exercicio/superior/supino-reto" component={SupinoReto} />
      <Route path="/exercicio/superior/rosca-martelo" component={RoscaMartelo} />

      <Route path="/sobre" component={About} />
      <Route path="/suplementacao" component={Suplementacao} />
      <Route path="/atividadeCardioVasculares" component={AtividadesCardioVasculares} />
      <Route path="/nutricao" component={Nutricao} />

      <Route path="/login" component={Login} />
    </>
  );
};

export default AppRoutes;
