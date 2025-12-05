# APLIKASIKITA

![APLIKASIKITA Banner](public/hero-new.png)

## Overview

**APLIKASIKITA** is a modern SaaS platform built with Next.js 16, utilizing a robust stack designed for scalability and performance. This repository contains the source code, documentation, and infrastructure configurations.

### 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Database**: PostgreSQL with [Prisma ORM](https://www.prisma.io/)
- **Authentication**: [Better Auth](https://github.com/polar-sh/better-auth)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Email**: React Email & Resend
- **Payments**: Polar.sh Integration

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (Latest LTS recommended)
- [pnpm](https://pnpm.io/) (Package manager)
- PostgreSQL database URL

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/madearga/APLIKASI.git
    cd aplikasikita
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Configure Environment:**

    Copy the example entry:
    ```bash
    cp .env.example .env.local
    ```
    *Update `.env.local` with your local database URL and API keys.*

4.  **Database Setup:**

    Push the schema to your local database:
    ```bash
    pnpm prisma:push
    ```

5.  **Run Development Server:**

    ```bash
    pnpm dev
    ```
    Access the app at `http://localhost:3000`.

## 📂 Project Structure

```bash
.
├── app                  # Next.js App Router & Server Actions
├── components           # React components (UI, Dashboard, Auth)
├── content              # MDX Content for Blog/Help/Legal
├── emails               # Transactional Email Templates
├── lib                  # Utilities, Config, & Libs
├── prisma               # Database Schema
└── public               # Static Assets
```

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Start the development server with Turbopack. |
| `pnpm build` | Build the application for production. |
| `pnpm start` | Start the production server. |
| `pnpm aplikasikita` | Full setup: installs deps & pushes DB schema. |
| `pnpm email` | Run React Email preview server. |
| `pnpm lint` | Lint the codebase. |

## 👤 Author

**Argakuka**
- [GitHub](https://github.com/madearga)
- [LinkedIn](https://linkedin.com/in/argakuka)

---
© 2025 APLIKASIKITA. All rights reserved.
