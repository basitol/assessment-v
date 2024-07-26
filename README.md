This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

# User Management System

This is a User Management System built with Next.js and Tailwind CSS. It allows you to manage users and roles in your business.

## Features

- View a list of users and their roles
- Add a new user
- Edit an existing user
- Delete a user

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system
   ```

2. **Install dependencies**
   First, run the development server:

Make sure you have Node.js installed, then run:

```
npm install
```

3. **Set up environment variables**

Create a .env.local file in the root directory and add your environment variables. For example:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

**Running the project**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Usage
Viewing Users
Navigate to the Users & Roles page to view the list of users.

Adding a New User
Click the "New User" button and fill out the form to add a new user.

Editing an Existing User
Click the "Edit" button next to a user to edit their details.

Deleting a User
Click the "Remove" button next to a user to delete them from the list.

API
The project uses a REST API to manage users. The API endpoints are:

GET /api/users: Fetch all users
POST /api/users: Create a new user
PUT /api/users/:id: Update a user
DELETE /api/users/:id: Delete a user
# assessment-v
