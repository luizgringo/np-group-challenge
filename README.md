# NP Group Challenge - Visualization Library

This project is a modern library of visualizations and templates, developed with React, TypeScript, and Vite. The application provides an intuitive interface to explore and manage different types of visualizations, dashboards, and templates.

## 🚀 Technologies Used

- **React 19.0.0**: JavaScript framework for building the interface
- **TypeScript**: JavaScript superset for adding static typing
- **Vite**: Build tool and dev server
- **TailwindCSS**: CSS framework for styling
- **Framer Motion**: Library for animations
- **D3.js**: Library for creating data visualizations
- **Biome**: Linter and formatter
- **pnpm**: Package manager

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── AssetModal/      # Modal for detailed asset display
│   ├── TabContents/     # Content for different tabs
│   │   ├── Cards/       # Card components
│   │   └── Contents/    # Type-specific content
│   ├── SearchBar.tsx    # Search component
│   └── TabNavigation.tsx # Tab navigation
├── data/                # Mock data for the application
│   ├── CardsMockData.json
│   └── KPIQuestionsMockData.json
├── pages/              # Application pages
│   └── Home.tsx       # Main page
├── styles/            # Global styles
│   └── index.css     # Tailwind and custom styles
├── theme/             # Theme components
│   └── MainLayout.tsx # Main layout
├── types/             # TypeScript type definitions
└── main.tsx          # Application entry point
```

## 🎯 Main Features

1. **Category Navigation**
   - Featured
   - KPI
   - Layouts
   - Storyboards
   - DataViz
   - Trending

2. **Search and Filters**
   - Real-time search
   - Tag filtering
   - Dynamic results

3. **Asset Visualization**
   - Informative cards
   - Detailed modal
   - Interactive preview
   - Usage metrics

4. **Interactivity**
   - Smooth animations
   - Visual feedback
   - Keyboard navigation
   - Accessibility

## 🏗️ Architecture

### Components

- **BaseCard**: Base component for card display
- **TrendingCard**: Specialized variation of BaseCard
- **AssetModal**: Modal for detailed display
- **DataVizPreview**: Interactive data visualization
- **SearchBar**: Search component
- **TabNavigation**: Category navigation

### Data Types

```typescript
// Main card types
type CardType = 'dataVizCards' | 'featuredCards' | 'kpiCards' | 
               'layoutCards' | 'storyboardCards' | 'trendingCards';

// Base card structure
interface BaseCard {
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    lastUpdated: string;
    contentType: string;
    used: number;
    pagesNumber: number;
}
```

## 🎨 Styling

The project uses TailwindCSS for styling, with a consistent design system:

- **Colors**: Professional grayscale palette
- **Typography**: Modern and readable system
- **Spacing**: Consistent spacing system
- **Components**: Componentized and reusable design
- **Responsiveness**: Adaptive layout for different screens

## 🚦 Quality Control

- **TypeScript**: Static typing for error prevention
- **Biome**: Code linting and formatting
- **Accessibility**: ARIA labels and roles implementation
- **Componentization**: Well-defined reusable components

## 🛠️ How to Run

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
pnpm install
```

3. Run in development mode
```bash
pnpm dev
```

4. Build for production
```bash
pnpm build
```

5. Lint code
```bash
pnpm lint
```

## 📈 Performance

The project has been optimized for performance through:

- Automatic code splitting
- Component lazy loading
- Import optimization
- Asset minification
- Efficient caching

## 🔒 Best Practices

- Clean and well-documented code
- Reusable components
- Strong typing with TypeScript
- Modern React patterns
- Accessibility as a priority
- Automated testing (to be implemented)

## 🔄 Development Cycle

1. **Local Development**
   - Hot Module Replacement
   - Real-time TypeScript
   - Automatic linting

2. **Code Quality**
   - Biome for linting
   - TypeScript for type checking
   - Consistent formatting

3. **Build and Deploy**
   - Optimized Vite build
   - Minified assets
   - Clean and organized code
