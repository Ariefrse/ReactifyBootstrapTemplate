# ReactifyBootstrap

A modern, responsive React job board template built with React, TypeScript, Bootstrap, and Framer Motion. This template provides a beautiful UI for job listings, company showcases, and recruitment websites.



## Features

- 🎨 Modern UI with customizable theme colors
- 📱 Fully responsive design for all devices
- 🔄 Smooth animations powered by Framer Motion
- 🧩 Modular component structure for easy customization
- 🔍 Job search functionality
- 📊 Company showcase section
- 🌐 Customizable navigation with dropdown menus
- 🚀 Built with React 18, TypeScript, and Bootstrap 5

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ariefrse/ReactifyBootstrap.git
   cd ReactifyBootstrap
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
ReactifyBootstrap/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── config/         # Site configuration
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML entry point
└── package.json        # Project dependencies and scripts
```

## Customization

### Site Configuration

The site can be easily customized by editing the `src/config/siteConfig.ts` file. This file contains all the configuration options for the site, including:

- Company information
- SEO settings
- Theme colors
- Hero section content
- Partner companies
- Job listings
- Navigation menu items

### Styling

The project uses a combination of Bootstrap 5 and custom CSS. Global styles are defined in `src/index.css`.

## Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Tech Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.


