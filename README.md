# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# How to run project

## Package Manager


In the project directory, you can use Yarn as the package manager. First, run:

    yarn

This command installs all the project's dependencies. To start the local development server, use the following command:

    yarn start

The project will be accessible at [http://localhost:3000](http://localhost:3000/).
To build the project for production use the following command:

    yarn build

To serve the production build, you can use the following command:

    serve -s build

Again, the project will be accessible at [http://localhost:3000](http://localhost:3000/).

# Folder structure

the structure of the project is inspired by Atomic Design.


    .
    src/
    ├── components/
    │   ├── elements/
    │   │   ├── button/
    │   │   │   ├── Button.tsx
    |   |   |   ├── button.module.css
    │   │   │   └── Button.test.js
    │   │   ├── card
    │   │   ├── ...
    │   │   └── index.ts
    │   ├── fragments/
    │   │   ├── UserCard/
    │   │   │   ├── UserCard.tsx
    │   │   │   └── UserCard.test.js
    │   │   ├── ...
    │   │   └── index.ts
    │   ├── layout/
    │   │   ├── header/
    │   │   │   └── Header.tsx
    │   │   ├── footer
    │   │   ├── container
    │   │   ├── pageLayout
    │   │   ├── ...
    │   │   └── index.ts
    │   └── pages/
    │       ├── home/
    │       │   ├── components/
    │       │   │   ├── AnyComponent.tsx
    │       │   └── Home.tsx
    │       └── index.ts
    ├── utils/
    │   ├── objectToQueryString.ts
    │   ├── request
    │   ├── ...
    │   └── index.ts
    ├── hooks/
    │   ├── useFetchRandomUser.ts
    │   ├── ...
    │   └── index.ts
    ├── consts/
    │   ├── endpoints.ts
    │   ├── externalLinks.ts
    │   ├── ...
    │   └── index.ts
    └── types/
        ├── user.ts
        ├── ...
        └── index.ts



components folder divided to four modules as following:

1.  Elements: This folder contains shared components, also known as common components, that cannot be further divided into smaller independent components.
2.  Fragments: Fragments are reusable components that are built using elements. They combine multiple elements to form more complex and self-contained components.
3.  Layouts: The layouts folder encompasses components related to the overall layout and container structure of the application. These components define the high-level structure and positioning of other components.
4.  Pages: The pages folder contains components specific to individual pages. These components are unique to a particular.

In addition to these modules, there are other ones such as utils, hooks, queries, ...

Within this architecture, each module has its own index file that serves as a central point of export for all the components within that module.
