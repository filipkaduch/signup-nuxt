# Signup form using Nuxt 3

![Screenshot 2025-03-09 at 17 39 13](https://github.com/user-attachments/assets/3820b726-1274-465a-a8b8-cde0278ae639)

Signup form using Nuxt 3 and Provet Cloud Design system.
Components list which were used for optimal tree shaking:
- ProvetButton
- ProvetCard
- ProvetCheckbox
- ProvetInput
- ProvetStack

App components:
SignupForm.vue - handling form and its field validations
SuccessCard.vue - displayed after successful form filling, access is prevented until `SignupForm.vue` saves valid information


## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Run Unit tests:

```bash
# npm
npm run test
```
