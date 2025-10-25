import { Leaderboard } from '../common/Leaderboard';
import { generateTeamMembers } from '../../data/mockData';
import { Users, Target, Award } from 'lucide-react';
import './TeamPerformance.css';

export const TeamPerformance = () => {
  const teamMembers = generateTeamMembers();

  const totalDeals = teamMembers.reduce((sum, member) => sum + member.deals, 0);
  const avgDealsPerPerson = (totalDeals / teamMembers.length).toFixed(1);

  return (
    <div className="team-performance">
      <div className="section-header">
        <div>
          <h2 className="section-title">Team Performance</h2>
          <p className="section-subtitle">Individual and team metrics</p>
        </div>
      </div>

      <div className="team-performance__summary">
        <div className="summary-card">
          <div className="summary-card__icon">
            <Users size={32} />
          </div>
          <div className="summary-card__content">
            <div className="summary-card__label">Total Team Members</div>
            <div className="summary-card__value">{teamMembers.length}</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-card__icon">
            <Target size={32} />
          </div>
          <div className="summary-card__content">
            <div className="summary-card__label">Total Deals Closed</div>
            <div className="summary-card__value">{totalDeals}</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-card__icon">
            <Award size={32} />
          </div>
          <div className="summary-card__content">
            <div className="summary-card__label">Avg Deals per Person</div>
            <div className="summary-card__value">{avgDealsPerPerson}</div>
          </div>
        </div>
      </div>

      <div className="team-performance__leaderboard">
        <Leaderboard members={teamMembers} />
      </div>
    </div>
  );
};
