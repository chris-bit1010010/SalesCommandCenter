import { Trophy, TrendingUp } from 'lucide-react';
import type { TeamMember } from '../../types';

interface LeaderboardProps {
  members: TeamMember[];
  className?: string;
}

export function Leaderboard({ members, className = '' }: LeaderboardProps) {
  const sortedMembers = [...members].sort((a, b) => b.sales - a.sales);

  const getMedalColor = (index: number) => {
    if (index === 0) return 'text-yellow-500';
    if (index === 1) return 'text-gray-400';
    if (index === 2) return 'text-orange-600';
    return 'text-gray-300';
  };

  return (
    <div className={`bg-white dark:bg-deep-dark-200 rounded-lg shadow-md p-6 transition-colors border border-transparent dark:border-deep-dark-50 ${className}`}>
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Team Leaderboard</h3>
      </div>

      <div className="space-y-3">
        {sortedMembers.map((member, index) => {
          const achievement = (member.sales / member.target) * 100;
          const isOverTarget = achievement >= 100;

          return (
            <div 
              key={member.id}
              className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-deep-dark-300 hover:bg-gray-100 dark:hover:bg-deep-dark-100 transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8">
                {index < 3 ? (
                  <Trophy className={`w-5 h-5 ${getMedalColor(index)}`} />
                ) : (
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    #{index + 1}
                  </span>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {member.name}
                  </p>
                  <div className="flex items-center gap-1 ml-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      ${(member.sales / 1000).toFixed(0)}k
                    </span>
                    {isOverTarget && (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 dark:bg-deep-dark-400 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        isOverTarget ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${Math.min(achievement, 100)}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    {member.deals} deals
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
