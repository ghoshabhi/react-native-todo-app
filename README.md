# React Native Todo App

This is a sample todo app built with React Native for sole purposes of learning the ReactNative framework and practice different methods on building a mobile app.

<div>
<img style="margin: 20" src="https://user-images.githubusercontent.com/19292575/36933159-76cfff0a-1e89-11e8-8a52-985869a08476.png" width="250" height="450">

<img style="margin: 20" src="https://user-images.githubusercontent.com/19292575/36933160-7a2f33e6-1e89-11e8-8365-a83d4bb7f57b.png" width="250" height="450" />

<img style="margin: 20" src="https://user-images.githubusercontent.com/19292575/36933161-7a4bf328-1e89-11e8-927f-d6b8619c665e.png" width="250" height="450" />

</div>

# How to Run ?

You will need `react-native-cli` installed on your machine. Steps for installation can be found [here](https://facebook.github.io/react-native/docs/getting-started.html). After you have successfully installed `react-native-cli` confirm by writing following command on your terminal:

```shell
> react-native --version

> react-native-cli: 2.0.1
  react-native: 0.54.0
```

Run the following command to install the app and link dependencies

```shell
> yarn && react-native link
```

If you prefer `npm`:

```shell
> npm install && react-native link
```

Start the packager by running the following commands. Make sure you have Android emulator running before this.

```shell
> react-native run-ios && react-native run-android
```

# Packages Used

* [wix/react-native-navigation](https://wix.github.io/react-native-navigation)
* [ramda.js](ramdajs.com)
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

# Roadmap

* [x] Add Navigation
* [ ] Add a screen to show details on Todo
* [ ] Use `styled-component` to style the app
* [ ] Build a backend API using Node and MongoDB to power the app for multiple users
* [ ] Use `flow`
