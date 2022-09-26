import {
  CharacterScreen,
  LandingScreen,
  GameScreen,
} from '../components/index.js';

export const routerModule = {
  routes: [
    {
      path: '/',
      component: LandingScreen,
      name: 'landing-screen',
      // props: true
		},
    {
      path: '/character',
      component: CharacterScreen,
      name: 'character-screen',
      // props: true
		},
    {
      path: '/game',
      component: GameScreen,
      name: 'game-screen',
      // props: true
		},
	]
};

{
  routerModule
}
