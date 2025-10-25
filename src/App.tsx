import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { PresentationProvider } from './contexts/PresentationContext';
import { Navigation } from './components/common/Navigation';
import { Overview } from './components/dashboard/Overview';
import { SalesAnalytics } from './components/dashboard/SalesAnalytics';
import { MarketingPerformance } from './components/dashboard/MarketingPerformance';
import { TeamPerformance } from './components/dashboard/TeamPerformance';
import { ReportsLibrary } from './components/dashboard/ReportsLibrary';
import { PresentationMode } from './components/presentation/PresentationMode';
import { PresenterView } from './components/presentation/PresenterView';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'sales':
        return <SalesAnalytics />;
      case 'marketing':
        return <MarketingPerformance />;
      case 'team':
        return <TeamPerformance />;
      case 'reports':
        return <ReportsLibrary />;
      default:
        return <Overview />;
    }
  };

  return (
    <ThemeProvider>
      <PresentationProvider>
        <div className="app">
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          <main className="app__main">
            {renderSection()}
          </main>
          <PresentationMode />
          <PresenterView />
        </div>
      </PresentationProvider>
    </ThemeProvider>
  );
}

export default App;
