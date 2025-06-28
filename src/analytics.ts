import ReactGA from 'react-ga4';

export const initGA = (id: string) => {
  ReactGA.initialize(id);
};

export const trackPageview = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};
