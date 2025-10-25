import { useState } from 'react';
import { Search, FileText, Tag } from 'lucide-react';
import { generateReports } from '../../data/mockData';
import type { Report } from '../../types';
import './ReportsLibrary.css';

export const ReportsLibrary = () => {
  const [reports] = useState<Report[]>(generateReports());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || report.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="reports-library">
      <div className="section-header">
        <div>
          <h2 className="section-title">Reports Library</h2>
          <p className="section-subtitle">Access and manage saved reports</p>
        </div>
      </div>

      <div className="reports-library__filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${selectedType === 'all' ? 'filter-btn--active' : ''}`}
            onClick={() => setSelectedType('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${selectedType === 'sales' ? 'filter-btn--active' : ''}`}
            onClick={() => setSelectedType('sales')}
          >
            Sales
          </button>
          <button
            className={`filter-btn ${selectedType === 'marketing' ? 'filter-btn--active' : ''}`}
            onClick={() => setSelectedType('marketing')}
          >
            Marketing
          </button>
          <button
            className={`filter-btn ${selectedType === 'team' ? 'filter-btn--active' : ''}`}
            onClick={() => setSelectedType('team')}
          >
            Team
          </button>
        </div>
      </div>

      <div className="reports-library__grid">
        {filteredReports.map(report => (
          <div key={report.id} className="report-card">
            <div className="report-card__icon">
              <FileText size={24} />
            </div>
            <h4 className="report-card__title">{report.title}</h4>
            <p className="report-card__description">{report.description}</p>
            <div className="report-card__tags">
              {report.tags.map((tag, index) => (
                <span key={index} className="report-tag">
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
            <div className="report-card__footer">
              <span className="report-card__date">{new Date(report.createdAt).toLocaleDateString()}</span>
              <button className="btn btn--sm btn--primary">View</button>
            </div>
          </div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="reports-library__empty">
          <FileText size={48} />
          <p>No reports found matching your criteria</p>
        </div>
      )}
    </div>
  );
};
