# Sales Command Center

An interactive presentation tool combined with a real-time dashboard built with React, TypeScript, and Vite. This application enables users to seamlessly switch between Presentation Mode and Presenter View while showcasing real-time KPI updates.

![Overview Dashboard](https://github.com/user-attachments/assets/b62d7b1d-e9dc-40b8-bcd8-1ae5f939d51d)

## Features

### 📊 Overview Dashboard
- Display high-level KPIs (Total Sales, Monthly Goals, Growth Rate, ARR)
- Real-time data updates with simulated WebSocket updates
- Clear CTAs for starting presentations and accessing presenter view
- Interactive charts showing sales performance and trends

### 🎯 Navigation
- Slide-based navigation for jumping between sections
- Five main sections: Overview, Sales Analytics, Marketing Performance, Team Performance, and Reports Library
- Responsive sidebar navigation

### 🎨 Presentation Mode
- Full-screen presentation with real-time data updates
- Keyboard shortcuts for easy navigation (Arrow keys, ESC)
- Slide counter and navigation controls
- Clean, distraction-free interface

### 👨‍🏫 Presenter View
- Split-screen view showing current slide and next slide
- Speaker notes for each slide
- Quick navigation to any slide
- Perfect for preparing and delivering presentations

### 📈 Dashboard Sections

#### Sales Analytics
- Interactive charts for sales data over time
- Top products table with revenue and growth metrics
- Export functionality for PDF and Excel formats

#### Marketing Performance
- Campaign ROI visualization
- Lead generation statistics
- Conversion rate metrics
- Campaign performance cards

#### Team Performance
- Leaderboards with ranking
- Individual team member statistics
- Team summary metrics

#### Reports Library
- Searchable and filterable saved reports
- Tag-based organization
- Multiple report types (sales, marketing, team)

### ✨ Special Features

- **Real-time Updates**: Mock WebSocket integration for KPI refresh every 3 seconds
- **Export Functionality**: Export data to PDF and Excel formats
- **Dark/Light Mode**: Theme toggle for user preference
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Keyboard Shortcuts**: Navigate presentations efficiently
  - `→` / `n` - Next slide
  - `←` / `p` - Previous slide
  - `Esc` - Exit presentation mode

## Tech Stack

- **React 19.1.1** - UI framework
- **TypeScript** - Type safety
- **Vite 7.1.12** - Fast build tool
- **Recharts** - Data visualization
- **Lucide React** - Icon library
- **jsPDF** - PDF export
- **xlsx** - Excel export
- **Socket.IO Client** - Real-time updates (ready for integration)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/chris-bit1010010/SalesCommandCenter.git
cd SalesCommandCenter
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to \`http://localhost:5173\`

### Building for Production

\`\`\`bash
npm run build
\`\`\`

The production-ready files will be in the \`dist\` directory.

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── KPICard.tsx
│   │   ├── ChartPanel.tsx
│   │   ├── Leaderboard.tsx
│   │   └── Navigation.tsx
│   ├── dashboard/       # Dashboard sections
│   │   ├── Overview.tsx
│   │   ├── SalesAnalytics.tsx
│   │   ├── MarketingPerformance.tsx
│   │   ├── TeamPerformance.tsx
│   │   └── ReportsLibrary.tsx
│   └── presentation/    # Presentation components
│       ├── PresentationMode.tsx
│       └── PresenterView.tsx
├── contexts/           # React contexts
│   ├── ThemeContext.tsx
│   └── PresentationContext.tsx
├── hooks/             # Custom React hooks
│   └── useRealtimeUpdates.ts
├── utils/            # Utility functions
│   └── export.ts
├── data/             # Mock data generators
│   └── mockData.ts
├── types/            # TypeScript type definitions
│   └── index.ts
└── App.tsx           # Main application component
\`\`\`

## Screenshots

### Overview Dashboard (Light Mode)
![Overview Light](https://github.com/user-attachments/assets/b62d7b1d-e9dc-40b8-bcd8-1ae5f939d51d)

### Sales Analytics
![Sales Analytics](https://github.com/user-attachments/assets/27979b21-cf59-4fe3-af67-f60eba1e9caa)

### Dark Mode
![Dark Mode](https://github.com/user-attachments/assets/2cb734f5-6d22-4145-a3bf-255a185860da)

### Presentation Mode
![Presentation Mode](https://github.com/user-attachments/assets/fd531b49-a411-4899-8b8d-aff36931ced4)

## Usage Guide

### Starting a Presentation

1. Navigate to any dashboard section
2. Click the "Start Presentation" button
3. Use arrow keys or navigation buttons to move between slides
4. Press ESC to exit presentation mode

### Using Presenter View

1. Click "Presenter View" from the overview page
2. View your current slide, speaker notes, and next slide preview
3. Click on any slide in the navigation panel to jump to it
4. Close the presenter view when done

### Exporting Data

1. Navigate to Sales Analytics section
2. Click "Export PDF" or "Export Excel"
3. The file will be downloaded to your default downloads folder

### Toggling Theme

- Click the moon/sun icon in the navigation sidebar
- Your preference is saved in localStorage

## Extending the Application

### Adding Real WebSocket Support

Replace the mock implementation in \`src/hooks/useRealtimeUpdates.ts\` with actual WebSocket connection:

\`\`\`typescript
import io from 'socket.io-client';

const socket = io('your-websocket-server-url');

socket.on('kpi-update', (data) => {
  // Handle real-time updates
});
\`\`\`

### Adding New Dashboard Sections

1. Create a new component in \`src/components/dashboard/\`
2. Add the route to \`src/App.tsx\`
3. Add navigation item in \`src/components/common/Navigation.tsx\`
4. Add slide data in \`src/contexts/PresentationContext.tsx\`

### Customizing Charts

Modify chart configurations in the respective dashboard components using Recharts API:
- Chart types (Line, Bar, Area, Pie, etc.)
- Colors and styling
- Tooltips and legends
- Animations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with React and Vite for optimal performance
- Icons provided by Lucide React
- Charts powered by Recharts
- Export functionality using jsPDF and xlsx

## Contact

For questions or feedback, please open an issue on GitHub.
