# NLW Setup - WEB

> NLW Setup Web Project: created during RocketSeat's NLW Setup event

## 👨‍💻 Main technologies 👩‍💻

- Typescript
- Vite Js
- React Js
- Tailwind Css
- Service Worker (Push Notification)

### 📚 Additional libraries 🗃️

- phosphor-react
- dayjs
- @radix-ui/react-dialog
- @radix-ui/react-popover
- @radix-ui/react-progress
- clsx
- @radix-ui/react-checkbox
- axios

## 📃 Guide 📖

- Install and config Tailwind CSS:

  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p
  - tailwind.config.cjs: content: ["./src/**/*.{html,tsx,css}"],
  - src/styles/global.css:

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

## 💡 Ideas for the next level ➕

- Authentication (firebase, auth0)
- Push Notifications (mobile) / Service Workers (web)
- Public profile with summary chart

## 🔗 Utils links ✨

- 1: https://tailwindcss.com/docs/installation/using-postcss
- 2: https://www.radix-ui.com/docs/primitives/components/dialog
- 3: https://www.radix-ui.com/docs/primitives/components/popover
- 4: https://www.radix-ui.com/docs/primitives/components/progress
- 5: https://www.radix-ui.com/docs/primitives/components/checkbox
- 6: https://developer.mozilla.org/pt-BR/docs/Web/API/Service_Worker_API/Using_Service_Workers
- 7: https://developer.mozilla.org/pt-BR/docs/Web/API/PushManager

## 🔗 Projects repositories links ✨

- [Server project](server)

- [Web project](web)

- [Mobile project](mobile)
