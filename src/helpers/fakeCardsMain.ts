import { ICardsMain } from '../pages/mainPage/types'

export const fakeCardsMain: ICardsMain[] = [
  {
    id: 1,
    img: '/assets/images/BeneficiosMusculacao.png',
    description: 'Benefícios da musculação',
    route: '/sobre',
  },
  
    
  {
    id: 2,
    img: '/assets/images/suplementacao.png',
    description: 'Importância da Suplementação',
    route: '/suplementacao',
  },
  {
    id: 3,
    img: '/assets/images/Aerobico.png',
    description: 'Importância de Atividades Cardiovasculares',
    route: '/atividadeCardioVasculares',
  },

  {
    id: 4,
    img: '/assets/images/Nutri.png',
    description: 'Importância Do Acompanhamento Nutricional',
    route: '/nutricao',
  }
]
