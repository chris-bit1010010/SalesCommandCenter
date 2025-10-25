import { Moon, Sun, BarChart3, TrendingUp, Users, FileText, Home } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import './Navigation.css';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const { theme, toggleTheme } = useTheme();

  const sections = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'sales', label: 'Sales', icon: BarChart3 },
    { id: 'marketing', label: 'Marketing', icon: TrendingUp },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  return (
    <nav className="navigation">
      <div className="navigation__brand">
        <BarChart3 size={32} />
        <span className="navigation__brand-text">SCC</span>
      </div>
      <div className="navigation__links">
        {sections.map(section => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              className={`navigation__link ${activeSection === section.id ? 'navigation__link--active' : ''}`}
              onClick={() => onSectionChange(section.id)}
            >
              <Icon size={20} />
              <span className="navigation__link-text">{section.label}</span>
            </button>
          );
        })}
      </div>
      <div className="navigation__footer">
        <button
          className="navigation__theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  );
};
