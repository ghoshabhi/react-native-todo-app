import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();

export default class App {
  constructor() {
    this.startApp();
  }

  startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'TodoApp.Home', // unique ID registered with Navigation.registerScreen
        title: 'Home' // title of the screen as appears in the nav bar (optional)
      }
    });
  }
}
