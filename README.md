# Signup form using Nuxt 3

![Screenshot 2025-03-09 at 17 39 13](https://github.com/user-attachments/assets/3820b726-1274-465a-a8b8-cde0278ae639)

Signup form using Nuxt 3 and Provet Cloud Design system.
Components list which were used for optimal tree shaking:
- ProvetButton
- ProvetCard
- ProvetCheckbox
- ProvetInput
- ProvetStack
- ProvetLayout
- ProvetSpinner
- ProvetNavigation
- ProvetHeader

App components:
SignupForm.vue - handling form and its field validations
SuccessCard.vue - displayed after successful form filling, access is prevented until `SignupForm.vue` saves valid information and creates authorized session

## Second round review: 
Added simple Auth flow utilising `sidebase/nuxt-auth` and cookies which covers access of respective pages. `index.vue` is available to only unauthenticated users and `success.vue` only after authentication. `success.vue` offers signout which resets the flow. Also added `MainDefaultLayout.vue` which is the skeleton for both pages but their metadata and access differs in their respective pages layouts `default.vue` for authenticated users and `guest.vue` for unauthenticated. Also added small performance optimisation for `SignupFormStore` method validateFields where we leave out the object initialization and go directly to assigning errors if there are any. Same principle was applied to submethod `validateField` which utilises early returns and object initialization only when needed. Validation conditions where moved out of the scope of the method and are called only when relevant.


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
