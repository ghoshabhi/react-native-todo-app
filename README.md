# React Native Todo App

This is a sample todo app built with React Native for sole purposes to understand React Native.

![simulator screen shot - iphone 8](https://user-images.githubusercontent.com/19292575/36895673-9d5ff69a-1dc4-11e8-984f-e055226371ba.png)

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

* [ramda.js](ramdajs.com)
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

# Roadmap

* [ ] Add Navigation
* [ ] Build a backend API using Node and MongoDB to power the app for multiple users
* [ ] Use `flow`
