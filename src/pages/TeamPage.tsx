import { Users } from 'lucide-react';
import { Leaderboard } from '../components/common/Leaderboard';
import { mockTeamMembers } from '../data/mockData';

export function TeamPage() {
  const activityData = [
    { day: 'Mon', calls: 45, meetings: 12, emails: 89 },
    { day: 'Tue', calls: 52, meetings: 15, emails: 102 },
    { day: 'Wed', calls: 48, meetings: 10, emails: 95 },
    { day: 'Thu', calls: 55, meetings: 18, emails: 110 },
    { day: 'Fri', calls: 42, meetings: 14, emails: 88 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Team Performance
            </h1>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Individual performance metrics and team leaderboards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Leaderboard */}
          <div>
            <Leaderboard members={mockTeamMembers} />
          </div>

          {/* Activity Heatmap */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Weekly Activity Summary
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-900 dark:text-white">Day</th>
                    <th className="text-right py-3 px-4 text-gray-900 dark:text-white">Calls</th>
                    <th className="text-right py-3 px-4 text-gray-900 dark:text-white">Meetings</th>
                    <th className="text-right py-3 px-4 text-gray-900 dark:text-white">Emails</th>
                  </tr>
                </thead>
                <tbody>
                  {activityData.map((day) => (
                    <tr key={day.day} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                        {day.day}
                      </td>
                      <td className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">
                        {day.calls}
                      </td>
                      <td className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">
                        {day.meetings}
                      </td>
                      <td className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">
                        {day.emails}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Individual Stats */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Team Member Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockTeamMembers.map((member) => {
                const achievement = (member.sales / member.target) * 100;
                return (
                  <div 
                    key={member.id}
                    className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Sales:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          ${(member.sales / 1000).toFixed(0)}k
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Deals:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {member.deals}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Target:</span>
                        <span className={`font-medium ${
                          achievement >= 100 ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'
                        }`}>
                          {achievement.toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
