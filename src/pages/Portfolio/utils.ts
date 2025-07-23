import BookWise from "../../assets/book-wise.png";
import Delivery from "../../assets/delivery.png";
import DesignSystem from "../../assets/designSystem.png";
import Diet from "../../assets/diet.png";
import DTMoney from "../../assets/dtmoney.png";
import FastFeet from "../../assets/fastfeet.png";
import Forum from "../../assets/forum.png";
import GithubBlog from "../../assets/githubBlog.png";
import Gym from "../../assets/gym.png";
import IgniteCall from "../../assets/igniteCall.png";
import PetFinder from "../../assets/petFinder.png";
import Pizzashop from "../../assets/pizzashop-api.png";
import ShopIgnite from "../../assets/shop-ignite.png";
import SocialFeed from "../../assets/social-feed.png";
import Timer from "../../assets/timer.png";
import ToDoList from "../../assets/todolist.png";
import Transaction from "../../assets/transactionApp.png";
import Water from "../../assets/water.png";

export type Project = {
  id: number;
  name: string;
  image: string;
  category: "Front-end" | "Back-end" | "Full-stack" | "Mobile";
  githubLink: string;
  githubLinkBackEnd?: string;
  liveLink?: string;
  description: string;
  detailedDescription: string;
  techs: string[];
  learned: string[];
};

export const projects: Project[] = [
  {
    id: 7,
    image: ShopIgnite,
    name: "Shop Ignite",
    category: "Front-end",
    githubLink: "https://github.com/ithauront/shop-ignite",
    liveLink: "https://shop-ignite-mu.vercel.app/",
    description:
      "An e-commerce application built with Next.js and Stripe for handling payments.",
    detailedDescription:
      "An e-commerce application built with Next.js and Stripe for handling payments. This project was developed as a learning exercise to explore fullstack capabilities using Next.js API routes and static site generation. This project is deployed on Vercel, which provides seamless integration with Next.js.You can test the entire purchase flow using Stripe test cards (see “Test Payments” section). After checkout, you will be redirected to a success or fail page based on the payment result.",
    techs: [
      "Next.js",
      "React",
      "Axios",
      "Stripe API",
      "Phosphor Icons",
      "Keen Slider",
      "Stiches",
    ],
    learned: [
      "How to use Next.js API routes to simulate a backend",
      "Managing global cart state with React Context API",
      "Dynamic routing and fallback pages",
      "Integrating Stripe Checkout",
      "Using SSG and SSR depending on the page needs",
      "Making a carousel using keen-slider lib",
      "Using Stitches for styling",
      "Deploying a fullstack Next.js app on Vercel and managing environment variables",
    ],
  },

  {
    id: 6,
    image: GithubBlog,
    name: "Github Blog",
    category: "Front-end",
    githubLink: "https://github.com/ithauront/githubBlog",
    liveLink: "https://ithauront.github.io/githubBlog",
    description:
      "A modern blog application built with React + TypeScript where every post is actually a GitHub Issue.",
    detailedDescription:
      "A modern blog application built with React + TypeScript where every post is actually a GitHub Issue. This project uses the GitHub API to fetch and render content directly from issues of a public repository, making it easy to write and manage content in Markdown. Users can browse blog posts, view details, and read rich formatted content, all powered by GitHub issues. Anyone with write access to the linked GitHub repository can post content by simply opening a new issue.",
    techs: [
      "React",
      "TypeScript",
      "Vite",
      "React Router DOM",
      "Styled Components",
      "React Markdown",
      "React Syntax Highlighter",
      "Zod",
      "GitHub REST API",
    ],
    learned: [
      "Using GitHub as a CMS",
      "Markdown rendering in React",
      "Syntax highlighting with Prism",
      "Context and custom hooks",
      "Form search with react-hook-form",
      "Deploying Vite + React + Router on GitHub Pages",
      "API integration without backend",
    ],
  },
  {
    id: 4,
    image: Delivery,
    name: "Coffee Delivery",
    category: "Front-end",
    githubLink: "https://github.com/ithauront/delivery",
    liveLink: "https://ithauront.github.io/delivery/",
    description:
      "This is a delivery app for a coffee shop. Built with React, TypeScript, and Vite",
    detailedDescription:
      "This is a mock delivery app for a coffee shop, developed as part of my frontend learning journey. It is a fully client-side application built with React, TypeScript, and Vite, featuring routing, forms, local storage, and context-based state management, all without any backend integration. The project simulates a shopping experience where users can browse coffees, add them to a cart, fill in their delivery address, select a payment method, and place an order.",
    techs: [
      "TypeScript",
      "React",
      "Vite",
      "React Router DOM",
      "Phosphor Icons",
      "Styled Components",
      "CSS",
      "React Hook Form",
      "Local Storage API",
      "Geolocation API",
    ],
    learned: [
      "Componentization and conditional layout rendering",
      "React Context for global state sharing",
      "Geolocation usage with reverse geocoding via API",
      "Form handling and validation using controlled components",
      "Form data persistence with localStorage",
      "Dynamic component behavior based on route context",
      "Responsive design using styled-components",
    ],
  },
  {
    id: 5,
    image: DTMoney,
    name: "DTMoney",
    category: "Front-end",
    githubLink: "https://github.com/ithauront/dtMoney",
    liveLink: "https://ithauront.github.io/dtMoney/",
    description:
      "A simple and functional financial transaction tracker built with React, TypeScript, and Vite.",
    detailedDescription:
      "A simple and functional financial transaction tracker built with React, TypeScript, and Vite. This project is part of my self-learning journey in frontend development, and includes a fully functional frontend integrated with a live mock API. The application allows users to: View their transaction history, Search/filter transactions,Add new income or outcome transactions",
    techs: [
      "React",
      "TypeScript",
      "Vite",
      "Styled-components",
      "React Hook Form",
      " Zod",
      "Phosphor Icons",
      "@radix-ui/react-dialog",
      "use-context-selector",
      "json-server as a mock backend",
      "Axios",
    ],
    learned: [
      "Context isolation for cleaner component structure",
      "Custom hooks for derived state (useSummary)",
      "Controlled components and Controller from react-hook-form",
      "Type-safe schemas with zod",
      "Code organization for separation of concerns",
      "GitHub Pages + Vite deploy",
      "Hosting and deploying a live API using Render",
    ],
  },
  {
    id: 1,
    image: SocialFeed,
    name: "Social-feed",
    category: "Front-end",
    githubLink: "https://github.com/ithauront/social-feed",
    liveLink: "https://ithauront.github.io/social-feed/",
    description:
      "This is a simple social feed project built with React.js, CSS, and HTML",
    detailedDescription:
      "This is a simple social feed project built with React.js, CSS, and HTML as part of my frontend learning journey in 2023. The main goal was to practice component structure, styling, and basic usage of libraries like date-fns and phosphor-react. Since it was one of my first projects it is hardcoded",
    techs: ["React", "Vite", "CSS", "Date-fns", "Phosphor Icons"],
    learned: [
      "Creating and composing React components",
      "Using props and state",
      "Styling components with CSS",
      "Formatting relative dates using date-fns",
      "Using icons from phosphor-react",
    ],
  },

  {
    id: 3,
    image: ToDoList,
    name: "ToDo List",
    category: "Front-end",
    githubLink: "https://github.com/ithauront/ToDoList",
    liveLink: "https://ithauront.github.io/ToDoList/",
    description:
      "This is a simple and functional to-do list application built with React, TypeScript, and Vite",
    detailedDescription:
      "This is a simple and functional to-do list application built with React, TypeScript, and Vite as part of my frontend learning journey. The project focuses on working with React state management, component structure, and user interactions without any backend integration.",
    techs: ["React", "TypeScript", "Vite", "CSS", "Phosphor Icons"],
    learned: [
      "React state management and component architecture",
      "TypeScript with React",
      "Handling user input and list rendering",
      "Icon integration with Phosphor React",
      "Clean and responsive UI with CSS",
    ],
  },
  {
    id: 2,
    image: Timer,
    name: "Timer",
    category: "Front-end",
    githubLink: "https://github.com/ithauront/timer",
    liveLink: "https://ithauront.github.io/timer/",
    description:
      "This is a timer application built with React, TypeScript, Vite, and Styled-Components. The project simulates task cycles with countdowns.",
    detailedDescription:
      "This is a timer application built with React, TypeScript, Vite, and Styled-Components. The project simulates task cycles with countdowns. The project simulates task cycles with countdowns. It features state management with React Context and Reducers, form validation with Zod, and persistence with localStorage.",
    techs: [
      "React",
      "TypeScript",
      "Vite",
      "React Hook Form",
      "Styled-components",
      "Phosphor Icons",
      "React Router DOM",
      "Immer",
      "Date-fns",
      "ESLint",
      " Zod",
    ],
    learned: [
      "Managing global state with Context + useReducer",
      "Persisting data locally via localStorage",
      "Validating forms using zod + react-hook-form",
      "Styling with styled-components",
      "Using useEffect for time-based updates",
      "Structuring reusable components and clean architecture",
      "Setting up a project with Vite + ESLint + TypeScript",
    ],
  },

  {
    id: 8,
    image: Water,
    name: "Water ripple effect repo",
    category: "Front-end",
    githubLink: "https://github.com/ithauront/water-effect-react",
    liveLink: "https://ithauront.github.io/water-effect-react/",
    description:
      "This repository was created to help developers implement a ripple effect on mouse movement using React and Styled Components",
    detailedDescription:
      "This repository was created to help developers implement a ripple effect on mouse movement using React and Styled Components. The idea came from my personal need for this effect, and not finding any existing repositories that provided it for React. Easy customization of colors and background image Usability with React and Styled Components",
    techs: ["React", "Styled-components"],
    learned: [
      "How to directly manipulate DOM elements for custom animation behaviors.",
      "Using getBoundingClientRect to accurately calculate the mouse position relative to an element.",
      "Creating and managing dynamically injected elements with setTimeout and automatic removal.",
      "Implementing custom CSS animations using styled-components and keyframes.",
      "Controlling multiple ripple instances with staggered delays for enhanced user interaction.",
      "Using media queries within styled-components to ensure responsive layout adjustments.",
    ],
  },
  {
    id: 9,
    image: DesignSystem,
    name: "Gengarlax UI — Design System",
    category: "Front-end",
    githubLink: "https://github.com/ithauront/design-system",
    liveLink: "https://ithauront.github.io/design-system",
    description:
      "A small component library built with React, Radix UI, Stitches, and TurboRepo.",
    detailedDescription:
      "A small component library built with React, Radix UI, Stitches, and TurboRepo. The goal of this project was to explore the architecture of a scalable and customizable design system, along with publishing packages to npm and documenting components using Storybook.",
    techs: ["TurboRepo", "Stitches", "Radix UI", "Storybook"],
    learned: [
      "How to structure a monorepo using TurboRepo and workspaces",
      "How to build and publish reusable components to npm",
      "Creating a design token system to ensure consistency in spacing, colors and typography",
      "Leveraging Radix UI Primitives for accessible component bases",
      "Customizing Radix styles with Stitches and creating a theme system",
      "Writing and documenting components in Storybook",
      "Publishing the documentation to GitHub Pages",
      "Handling build and release pipelines with Changesets",
    ],
  },
  {
    id: 15,
    image: FastFeet,
    name: "Fast feet API",
    category: "Back-end",
    githubLink: "https://github.com/ithauront/fast-feet-nest",
    description:
      "A delivery management system designed for both delivery personnel and administrators. ",
    detailedDescription:
      "A delivery management system designed for both delivery personnel and administrators. This application facilitates the management of deliveries, users, and recipients, providing extensive controls. It was made to study DDD (Domain-Driven Design), Domain Events and Clean Architecture",
    techs: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "Docker",
      "Cloudflare R2",
      "AWS SDK",
      "Sendinblue",
      "Zod",
      "Vitest ",
    ],
    learned: [
      "Clean Architecture with DDD using NestJS.",
      "Multiple user types with strict business rules and RBAC.",
      "Building a complete password reset flow.",
      "Using Redis for caching.",
      "Integrating file upload using a domain-agnostic uploader interface with Cloudflare R2.",
      "Writing over 250 tests, covering unit, integration, and end-to-end scenarios.",
      "Creating and protecting routes using guards and role decorators.",
      "Implementing an audit trail system with status logs for delivery tracking.",
      "Automating initial setup (like seeding an initial admin) in a safe, idempotent way.",
    ],
  },

  {
    id: 12,
    image: Gym,
    name: "Gym check-in API",
    category: "Back-end",
    githubLink: "https://github.com/ithauront/solid",
    description:
      "This application simulates a check-in API system for gym users, inspired by business models like Gympass.",
    detailedDescription:
      "This application simulates a check-in system for gym users, inspired by business models like Gympass. A user with an active pass can check in to partner gyms under specific conditions. These rules and behaviors are shaped by well-defined functional requirements, business rules, and non-functional requirements. All logic is decoupled and organized in use cases, repositories, and controllers, following domain-driven thinking. The project is fully covered with unit and E2E tests using Vitest and Supertest.",
    techs: [
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Vitest",
      "Supertest",
      "Zod",
      "JWT",
      "Cookies",
      "Docker",
    ],
    learned: [
      "Functional Design & Business Logic",
      "Clean Architecture & SOLID",
      "Testing",
      "Authentication & Authorization",
      "Geolocation & Validation",
      "Tooling & Developer Experience",
      "Continuous Integration with GitHub Actions",
    ],
  },
  {
    id: 13,
    image: PetFinder,
    name: "Pet finder API",
    category: "Back-end",
    githubLink: "https://github.com/ithauront/petFinder",
    description:
      "This project simulates a pet adoption platform where organizations can register animals and visitors can search for pets available for adoption.",
    detailedDescription:
      "A fully-tested and modular RESTful API built with Fastify, Prisma, and PostgreSQL. Designed with SOLID principles and clean architecture, this project simulates a pet adoption platform where organizations can register animals and visitors can search for pets available for adoption.",
    techs: [
      "TypeScript",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Vitest",
      "Supertest",
      "Zod",
      "JWT",
      "Cookies",
      "Axios",
      "Docker",
    ],
    learned: [
      "Functional Design & Business Logic",
      "Clean Architecture & SOLID",
      "Testing",
      "Authentication & RBAC",
      "Search & Filtering",
      "Tooling & Developer Experience",
    ],
  },
  {
    id: 14,
    image: Forum,
    name: "Forum API",
    category: "Back-end",
    githubLink: "https://github.com/ithauront/nest-clean",
    description:
      "Forum application where students and teachers can ask and answer questions.",
    detailedDescription:
      "Forum application where students and teachers can ask and answer questions. It was developed using Domain-Driven Design (DDD) principles to ensure a clear separation of concerns, maintainable business logic, and a shared understanding of the domain across all parts of the code.",
    techs: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Zod",
      "JWT",
      "Vitest",
      "@faker-js/faker ",
      "dayjs",
      "JWT with RSA",
      "Docker",
      "Cloudflare R2",
      "AWS SDK",
      "ioredis",
      "dotenv",
      "Passport.js",
      "bcryptjs",
      "@nestjs/jwt ",
    ],
    learned: [
      "Apply Domain-Driven Design (DDD).",
      "Domain events to trigger side effects.",
      "Test using in-memory repositories and factory helpers.",
      "Separating enterprise logic from application services.",
      "Ubiquitous language concepts.",
      "How to mock cryptographic services.",
      "Test isolation environment.",
      "waitFor() utilities handle asynchronous logic.",
      "Aply Passport strategy",
      "Apply Dependency Injection.",
      "Configure Cloudflare R2 with AWS SDK and NestJS.",
    ],
  },
  {
    id: 11,
    image: Diet,
    name: "Diet API",
    category: "Back-end",
    githubLink: "https://github.com/ithauront/diet",
    liveLink: "https://diet-pilo.onrender.com/docs",
    description:
      "A backend API built with Fastify, TypeScript, Knex, and SQLite/PostgreSQL to power a meal tracking application.",
    detailedDescription:
      "A backend API built with Fastify, TypeScript, Knex, and SQLite/PostgreSQL to power a meal tracking application. This project was designed to simulate a full-featured dietary log system with user management, session authentication via cookies, and personal metrics.",
    techs: [
      "TypeScript",
      "Fastify",
      "Knex",
      "SQLite",
      "Zod",
      "Vitest",
      "Supertest",
    ],
    learned: [
      "Session-based authentication using cookies and Fastify middleware",
      "Password hashing and secure user identification",
      "Building RESTful APIs with Fastify and Knex",
      "Creating and managing database schemas and migrations",
      "Writing and organizing integration tests with Vitest and Supertest",
      "Validating environment variables using Zod",
      "Designing summary and metric routes with business logic",
      "Structuring a backend project that simulates production behavior",
      "Building parallel frontend/backend projects with distinct learning goals",
      "Using Swagger to document and expose backend routes",
    ],
  },

  {
    id: 10,
    image: Transaction,
    name: "Transaction API",
    category: "Back-end",
    githubLink: "https://github.com/ithauront/apiRest",
    description:
      "A structured and testable RESTful API built with Fastify, Knex, and SQLite that simulates a personal finance tracker backend.",
    detailedDescription:
      "A structured and testable RESTful API built with Fastify, Knex, and SQLite that simulates a personal finance tracker backend. It supports creating, listing, and summarizing financial transactions, organized per user session using cookies. Although this backend was developed as a standalone project focused on backend architecture, testing, and database handling, it shares the core logic with a frontend project I also built: dtmoney.",
    techs: [
      "Fastify",
      "Knex",
      "SQLite",
      "Zod",
      "Vitest",
      "Supertest",
      "Dotenv",
    ],
    learned: [
      "Structured backend with Fastify + Knex",
      "Environment configuration using dotenv + Zod",
      "SQL migration and DB versioning",
      "Full integration testing with Vitest",
      "Cookie-based session handling",
      "RESTful route design and validation",
      "Planning and separating functional requirements vs. business rules",
    ],
  },
  {
    id: 18,
    image: Pizzashop,
    name: "Pizzashop",
    category: "Full-stack",
    githubLink: "https://github.com/ithauront/pizzashop",
    githubLinkBackEnd: "https://github.com/ithauront/pizzashop-api",
    description:
      "Pizzashop is a complete restaurant order management application.",
    detailedDescription:
      "Pizzashop is a complete restaurant order management application that displays statistics, orders, items, and more. It includes a fully integrated frontend and backend, both running locally for a full-stack development experience. The backend leverages modern technologies such as Bun, Elysia, and Drizzle.",
    techs: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "React Router DOM",
      "React Hook Form",
      "Zod",
      "React Query (TanStack)",
      "Axios",
      "Lucide Icons",
      "Date-fns",
      "Sonner",
      "Vitest",
      "Playwright",
      "Helmet",
      "Bun",
      "Elysia",
      "Drizzle ORM",
      "Nodemailer",
      "Docker",
      "PostgreSQL",
      "@paralleldrive/cuid2",
      "dayjs",
      "faker",
    ],
    learned: [
      "Creating responsive dashboards and theme switching",
      "Handling complex UI states using React Query cache",
      "Writing maintainable code",
      "Writing tests at both unit and end-to-end levels",
      "Integrating with backend",
      "Styling with Tailwind CSS",
      "Magic link authentication",
      "JWT-based session signing",
      "Seed generation with realistic mock data using Faker",
      "Nodemailer test integration with Ethereal email accounts",
    ],
  },
  {
    id: 16,
    image: IgniteCall,
    name: "Ignite Call",
    category: "Full-stack",
    githubLink: "https://github.com/ithauront/ignite-call",
    liveLink: "https://ignite-call-six-wheat.vercel.app",
    description:
      "This project allows users to authenticate via Google, see their calendar availability, and receive new meeting invitations. To login in this app you have to use the test user (click in learn more)",
    detailedDescription:
      "A fullstack scheduling application built with Next.js, designed to simplify appointment scheduling by integrating seamlessly with Google Calendar. The app is published on Google Cloud in test mode. Only users added to the OAuth test list can authenticate unless using the test account: Email: testignitecalltest@gmail.com Password: testignite12call3",
    techs: [
      "Next.js",
      "TypeScript",
      "Stitches",
      "NextAuth",
      "Google APIs",
      "React Hook Form",
      "Zod",
      "React Query (TanStack)",
      "Prisma",
      "Axios",
      "Day.js",
      "Phosphor Icons",
      "Next-Seo",
      "Nookies",
    ],
    learned: [
      "How to integrate Google OAuth 2.0 in a Next.js app",
      "Configuring a project on Google Cloud Console",
      "Requesting access to the Google Calendar API",
      "Using NextAuth for server-side session management",
      "Working with Prisma ORM",
      "Styling with Stitches and building responsiveness",
      "Deploying a full-stack Next.js app on Vercel",
      "Building dynamic routes with Next.js",
      "Using React Query to handle data fetching, caching, and automatic revalidation",
      "Implementing SEO using next-seo and the DefaultSeo component",
    ],
  },
  {
    id: 17,
    image: BookWise,
    name: "Book Wise",
    category: "Full-stack",
    githubLink: "https://github.com/ithauront/book-wise",
    liveLink: "https://book-wise-tan.vercel.app",
    description:
      "BookWise is a fullstack application that works as a book-focused social network. Built entirely with Next.js, using PostgreSQL (Neon) and Prisma on the backend.",
    detailedDescription:
      "BookWise is a fullstack application that works as a book-focused social network, where users can log in with GitHub or Google accounts, Rate books and write short reviews, Add books to their reading list, Explore reviews from other users, Search books by title, author, or filter by category.The app is built entirely with Next.js, using PostgreSQL (Neon) and Prisma on the backend, and styled with Stitches on the frontend. It is fully deployed via Vercel.",
    techs: [
      "Next.js",
      "TypeScript",
      "Prisma ORM",
      "Neon PostgreSQL",
      "NextAuth",
      "Stitches",
      "Zod",
      "React Hook Form",
      "Axios",
      "Day.js",
      "Phosphor Icons",
      "Nookies",
    ],
    learned: [
      "Configure OAuth apps for both Google and GitHub",
      "Managing authentication tokens and session persistence",
      "Using Prisma to model complex relations",
      "Seeding with Prisma",
      "Setting up PostgreSQL database using Neon",
      "Deploying fullstack apps with Vercel",
      "Building reusable UI components with Stitches",
      "Handling form logic and validation cleanly with React Hook Form + Zod",
      "Secure cookie management for server-side authentication with Nookies",
    ],
  },
];
