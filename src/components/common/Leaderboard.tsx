import { Trophy, Medal } from 'lucide-react';
import type { TeamMember } from '../../types';
import './Leaderboard.css';

interface LeaderboardProps {
  members: TeamMember[];
  title?: string;
}

export const Leaderboard = ({ members, title = 'Team Leaderboard' }: LeaderboardProps) => {
  return (
    <div className="leaderboard">
      <h3 className="leaderboard__title">{title}</h3>
      <div className="leaderboard__list">
        {members.map((member, index) => (
          <div 
            key={member.id} 
            className={`leaderboard__item ${index < 3 ? 'leaderboard__item--top' : ''}`}
          >
            <div className="leaderboard__rank">
              {index === 0 && <Trophy size={20} className="leaderboard__icon leaderboard__icon--gold" />}
              {index === 1 && <Medal size={20} className="leaderboard__icon leaderboard__icon--silver" />}
              {index === 2 && <Medal size={20} className="leaderboard__icon leaderboard__icon--bronze" />}
              {index > 2 && <span className="leaderboard__rank-number">{member.rank}</span>}
            </div>
            <div className="leaderboard__info">
              <div className="leaderboard__name">{member.name}</div>
              <div className="leaderboard__stats">
                <span>{member.deals} deals</span>
              </div>
            </div>
            <div className="leaderboard__sales">
              ${(member.sales / 1000).toFixed(0)}K
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
