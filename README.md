npm install
ionic serve

### compilar para apk
npm run build
npx cap sync android
cd android
./gradlew assembleDebug

### compilar para ios
npx cap sync ios
npx cap open ios

El VITE_GOOGLE_CLIENT_ID  es necesario para la app de android y web, el de android no se usa