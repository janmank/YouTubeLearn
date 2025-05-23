# 📚 YouTubeLearn – Expo + React Native Video App

A lightweight mobile learning app based on YouTube content. Built with Expo, TypeScript, Redux, Gluestack UI, and `react-native-video`.

---

## 🚀 Features

- Custom YouTube video sliders by topic
- Fully responsive and themed interface
- Built with native support using EAS

---

## ✅ Requirements

Make sure the following are installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [EAS CLI](https://docs.expo.dev/eas/install/)
- Git

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/janmank/YouTubeLearn
cd YouTubeLearn
```

### 2. Install dependencies

```bash
yarn install
```

## 🧪 Run the app

## ✅ OPTION 1: Use ready-made .apk (Android only)

Not hosted at this point

## 🧱 OPTION 2: Build it yourself with EAS

### 1. Login to Expo (or create an account)

```bash
npx expo login
```

### 2. Install EAS CLI

```bash
yarn global add eas-cli
```

### 3. Build the development version

```bash
eas build --profile development --platform android
```

For iOS, run the same command with --platform ios and use a Mac with Xcode, but it was tested on android, so reccomend build on android

### 4. Download and install the .apk (or run on simulator)
