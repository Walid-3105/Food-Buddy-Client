# FoodBuddy

FoodBuddy is a Community Food Sharing and Surplus Reduction Platform designed to minimize food waste by connecting donors with those in need. The platform enables users to donate, request, and manage food with a focus on security, responsiveness, and ease of use.

## Live URL

[FoodBuddy Live Site](https://assignment-11-a70b0.web.app/)
[FoodBuddy Live Site-2](https://assignment-11-a70b0.firebaseapp.com/)

---

## Key Features

- **Authentication System**

  - Email/password-based login and registration.
  - Google or GitHub login integration.
  - Form validation for password strength (uppercase, lowercase, length).
  - Error messages and toast notifications for successful/failed login or registration.

- **Food Management (CRUD Operations)**

  - Add Food: Allows donors to share surplus food.
  - View Food: Lists all available food items for users to explore.
  - Update Food: Editable fields for updating food details.
  - Delete Food: Remove unwanted food entries with confirmation.

- **Food Requesting**

  - Users can request available food.
  - Requested food is moved to a dedicated section for better management.
  - Automatically updates food status to "requested."

- **Home Page**

  - Dynamic banner/slider for an engaging user experience.
  - Featured Foods section showcasing the top 6 food items by quantity.
  - Extra sections to enhance visual appeal.

- **Available Foods Page**

  - Filters and sorting based on expiration dates.
  - Search functionality by food name.
  - Toggle layout between two-column and three-column grids.

- **Manage My Foods**

  - A private section for users to view and manage food donations they’ve added.
  - Includes options for updating or deleting food entries.

- **My Food Requests**

  - A private section where users can view all the food they have requested.
  - Displayed in a tabular or card format.

- **Responsiveness**

  - Fully optimized for mobile, tablet, and desktop devices.

- **JWT Security**

  - Secure authentication using JWT tokens.
  - Protect private routes and validate user sessions.

- **TanStack Query**

  - Implemented for fetching and managing API data.
  - Mutation feature utilized for dynamic updates.

- **Search and Sorting**
  - Search functionality by food name.
  - Sorting by expiration date.

---

## Additional Features

- **Environment Variables**

  - Secured Firebase configuration and MongoDB credentials with `.env` files.

- **Deployment Guidelines**

  - Ensures no CORS/404/504 errors on the live site.
  - Authorized domain added for Firebase.

- **Optional Enhancements**
  - Integrated animations using Framer Motion.
  - Axios custom hook (AxiosSecure) for API calls.
  - Utilized additional Tailwind libraries (e.g., Shadcn, Chakra UI).

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Walid-3105/Food-Buddy-Client.git
   ```
