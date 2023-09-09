# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Project Setup

- download the zip file or clone the repository

### backend project

- Navigate to the backend directory and install all dependencies
- `cd backend `
- `npm install`

* **Make sure that MONGODB installed to your system**

- Or download the mongodb from [mongodb](https://www.mongodb.com/try/download/community)

- Open the terminal (ctrl + ~)
- Run the server by typing
- `nodemon index.js`
- It will create the mongodb with name **expensedb** with two documents
- **categories**
- **expenses**

### Postman

- Make sure to have postman installed in your system.
- Or go head and download the postman from [postman](https://www.postman.com/)
- Go head to https://localhost:9000/api/categories
- **Check all end poinst from routes folder**
- If you want to change port go head **Config folder** and change port.

### Frontend Project

- Navigate to the frontend directory
- `cd frontend`
- Then install all dependencies
- `npm i`
- Run the application
- `npm run dev`
- Then click the url **(command + click)**
- It will run on port **5173**

### Good Lucky

### Author

- **Abdallah Mahmoud**
- If you have any issues contact me at [Abdallah](https://www.facebook.com/abdallahriig)
