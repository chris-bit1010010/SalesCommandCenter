import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks';
import { Navigation } from './components/common/Navigation';
import { OverviewPage } from './pages/OverviewPage';
import { PresentationPage } from './pages/PresentationPage';
import { PresenterViewPage } from './pages/PresenterViewPage';
import { SalesPage } from './pages/SalesPage';
import { MarketingPage } from './pages/MarketingPage';
import { TeamPage } from './pages/TeamPage';
import { ReportsPage } from './pages/ReportsPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Routes>
            {/* Full-screen routes without navigation */}
            <Route path="/presentation" element={<PresentationPage />} />
            <Route path="/presenter-view" element={<PresenterViewPage />} />
            
            {/* Regular routes with navigation */}
            <Route path="/*" element={
              <>
                <Navigation />
                <Routes>
                  <Route path="/" element={<OverviewPage />} />
                  <Route path="/sales" element={<SalesPage />} />
                  <Route path="/marketing" element={<MarketingPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/reports" element={<ReportsPage />} />
                </Routes>
              </>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
