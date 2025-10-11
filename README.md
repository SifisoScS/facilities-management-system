# Facilities Management System Frontend

The Facilities Management System is a modern, Next.js-based web application designed to provide a comprehensive dashboard for facility management operations. Featuring a ARISAN SIFISO-inspired UI with animated cards, interactive charts, and a progress bar, it offers a visually appealing and functional interface for managing strategic intelligence, facilities operations, and service provider dashboards. The project is built with scalability in mind, ready for backend integration to display real-time analytics and metrics.
Features

Hero Section: A visually striking hero with a gradient overlay and inspirational quote, showcasing the system's purpose.
Operations Overview: Interactive Bar and Pie charts (using recharts) displaying completion rates and performance metrics.
Strategic Facilities Intelligence: 9 animated dashboard cards with backdrop-blur-md effects, linking to pages like /strategic-intelligence/sustainability-ledger.
Facilities Management Dashboards: 9 cards with hover effects, linking to pages like /smart-insights.
Service Providers: 5 cards with colored borders, linking to pages like /service-providers/leitch-landscape.
Progress Bar: A loading animation (bprogress) styled with Tailwind CSS, visible for 3 seconds on page load.
Testing: Comprehensive unit tests (Jest) and end-to-end tests (Cypress) for UI and navigation.
Clean Repository: Optimized with .gitignore to exclude build artifacts, reducing tracked files significantly.

Prerequisites

Node.js: Version 18.x or higher.
npm: Version 8.x or higher.
Git: For version control.
Optional: Python 3.x and a virtual environment if integrating with a backend.

Installation

Clone the Repository:
git clone <repository-url>
cd facilities-management-system/frontend

Install Dependencies:
npm install

Set Up Environment (if needed):

Create a .env.local file in frontend/ for environment variables (e.g., API endpoints).
Example:NEXT_PUBLIC_API_URL=<http://localhost:8000>

Usage

Run the Development Server:
npm run dev

Open <http://localhost:3000> in your browser.
Explore the hero section, charts, and card links.

Build for Production:
npm run build
npm run start

Run Tests:

Unit tests (Jest):npm run test

End-to-end tests (Cypress, with npm run dev running):npm run test:e2e

Or open Cypress UI:npx cypress open

Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
© 2025 ARISAN SIFISO. All rights reserved.
Future Enhancements
