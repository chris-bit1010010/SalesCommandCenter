# Sales Command Center

An interactive presentation tool combined with a real-time dashboard for sales analytics and performance tracking. Built with React, TypeScript, and Vite.

![Overview Page Light](https://github.com/user-attachments/assets/9f09c0d7-d0ee-4e8e-b6f6-15f18d973796)

## Features

### 📊 Overview Dashboard
- **Real-time KPI Updates**: Live tracking of Total Sales, Monthly Goals, Growth Rate, and ARR
- **Interactive Charts**: Dynamic sales performance visualization with Recharts
- **Team Leaderboard**: Real-time team performance rankings with progress indicators
- **Live Status Indicator**: Shows connection status for real-time data updates

### 🎥 Presentation Mode
- **Full-screen Presentation**: Immersive presentation experience with slide navigation
- **Keyboard Shortcuts**: Navigate with arrow keys (←/→), Space bar, or ESC to exit
- **Multiple Slides**: Overview, Sales Trends, Top Products, and Team Performance
- **Smooth Transitions**: Professional slide transitions and animations

### 🎤 Presenter View
- **Dual-screen Layout**: Current slide + Next slide preview
- **Speaker Notes**: Detailed notes for each slide to guide presentations
- **Presentation Info**: Real-time clock, slide counter, and progress indicator
- **Navigation Controls**: Easy slide navigation with visual progress dots

### 📈 Dashboard Sections
1. **Sales Analytics**: Charts, tables, and sales data over time
2. **Marketing Performance**: Campaign ROI, lead generation, and conversion funnels
3. **Team Performance**: Leaderboards, activity summaries, and individual stats
4. **Reports Library**: Searchable and taggable saved reports with filtering

### ✨ Special Features
- **Real-time Updates**: Simulated WebSocket connection with data updates every 5 seconds
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Card-based UI**: Clean, modern interface with color-coded indicators
- **Navigation**: Intuitive routing between different sections

## Technology Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7
- **Routing**: React Router DOM 7.9.4
- **Charts**: Recharts 3.3.0
- **Icons**: Lucide React 0.548.0
- **Styling**: Tailwind CSS 4.x
- **Real-time**: Socket.IO Client 4.8.1 (mock implementation)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chris-bit1010010/SalesCommandCenter.git
cd SalesCommandCenter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
SalesCommandCenter/
├── src/
│   ├── components/
│   │   ├── common/           # Reusable UI components
│   │   │   ├── KPICard.tsx
│   │   │   ├── ChartPanel.tsx
│   │   │   ├── Leaderboard.tsx
│   │   │   └── Navigation.tsx
│   │   ├── dashboard/        # Dashboard-specific components
│   │   └── presentation/     # Presentation-specific components
│   ├── pages/
│   │   ├── OverviewPage.tsx
│   │   ├── PresentationPage.tsx
│   │   ├── PresenterViewPage.tsx
│   │   ├── SalesPage.tsx
│   │   ├── MarketingPage.tsx
│   │   ├── TeamPage.tsx
│   │   └── ReportsPage.tsx
│   ├── hooks/
│   │   ├── useTheme.tsx
│   │   ├── useRealTimeData.ts
│   │   └── useKeyboardShortcuts.ts
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   ├── data/
│   │   └── mockData.ts       # Mock data for demo
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Usage Guide

### Navigation
- **Dashboard**: Main overview page with KPIs and quick actions
- **Presentation**: Full-screen presentation mode with slides
- **Presenter View**: Dual-screen presenter mode with notes
- **Sales**: Detailed sales analytics and reports
- **Marketing**: Marketing campaign performance
- **Team**: Team member performance and leaderboards
- **Reports**: Searchable report library

### Keyboard Shortcuts (Presentation Mode)
- `→` or `Space`: Next slide
- `←`: Previous slide
- `ESC`: Exit presentation mode

### Dark/Light Mode
Click the theme toggle button in the navigation bar to switch between light and dark modes. Your preference is saved automatically.

## Extending the Application

### Adding New KPIs
Edit `src/data/mockData.ts` and add new KPI objects to the `mockKPIs` array:

```typescript
{
  id: 'new-kpi',
  title: 'New Metric',
  value: 1000,
  change: 5.5,
  prefix: '$',
  trend: 'up',
  target: 1200
}
```

### Creating New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update the navigation in `src/components/common/Navigation.tsx`

### Integrating Real WebSocket
Replace the mock implementation in `src/hooks/useRealTimeData.ts` with actual Socket.IO connection:

```typescript
import io from 'socket.io-client';

const socket = io('your-backend-url');
socket.on('kpiUpdate', (data) => {
  setKpis(data);
});
```

## Screenshots

### Overview Dashboard (Light Mode)
![Overview Light](https://github.com/user-attachments/assets/9f09c0d7-d0ee-4e8e-b6f6-15f18d973796)

### Overview Dashboard (Dark Mode)
![Overview Dark](https://github.com/user-attachments/assets/e00c148d-11ef-46e3-ac4d-51e4294f1b31)

### Presentation Mode
![Presentation](https://github.com/user-attachments/assets/54459396-f234-44bb-bc4b-fad28822fc3d)

### Presenter View
![Presenter View](https://github.com/user-attachments/assets/3c1ed3af-702b-4329-a103-710ed35c57c8)

### Sales Analytics
![Sales Analytics](https://github.com/user-attachments/assets/054ab918-5b9e-4403-954a-a5c98fcc9d01)

## Development

### Linting
```bash
npm run lint
```

### Type Checking
```bash
tsc --noEmit
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue in the GitHub repository.
