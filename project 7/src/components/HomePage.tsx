import React from 'react';
import { BarChart3, Users, FileText, MessageSquare, Calendar, Inbox } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart } from 'recharts';

export default function HomePage() {
  const stats = [
    { title: 'CMS', icon: FileText, stats: { Traffic: '1293', Interactions: '23', 'Sign Ups': '15' } },
    { title: 'CRM', icon: Users, stats: { Outbound: '80,230', Inbound: '439', 'Active contacts': '268,332', Deals: '12' } },
    { title: 'INVENTORY', icon: BarChart3, stats: { Orders: '11', Production: '230', Warehouse: '87,220', 'Supply chain': '110' } },
    { title: 'MARKETING', icon: MessageSquare, stats: { Messages: '42', Engagement: '12' } },
    { title: 'TICKETING', icon: Calendar, stats: { New: '1', Active: '3', Closed: '21' } },
    { title: 'PERSONAL', icon: Inbox, stats: { Inbox: '43', Appointments: '8', 'Task(s) / Goals(s)': '9' } }
  ];

  const incomeExpenseData = [
    { month: 'Aug 23', expense: 420, income: 22 },
    { month: 'Sep 23', expense: 480, income: 42 },
    { month: 'Oct 23', expense: 400, income: 35 },
    { month: 'Nov 23', expense: 650, income: 27 },
    { month: 'Dec 23', expense: 220, income: 44 },
    { month: '2024', expense: 380, income: 22 },
    { month: 'Feb 24', expense: 180, income: 18 },
    { month: 'Mar 24', expense: 350, income: 31 },
    { month: 'Apr 24', expense: 480, income: 22 },
    { month: 'May 24', expense: 280, income: 22 },
    { month: 'Jun 24', expense: 150, income: 12 },
    { month: 'Jul 24', expense: 120, income: 15 }
  ];

  const projectTasksData = [
    { month: 'Sep 23', 'TEAM A': 20, 'TEAM B': 45, 'TEAM C': 25 },
    { month: 'Oct 23', 'TEAM A': 15, 'TEAM B': 30, 'TEAM C': 28 },
    { month: 'Nov 23', 'TEAM A': 25, 'TEAM B': 38, 'TEAM C': 32 },
    { month: 'Dec 23', 'TEAM A': 30, 'TEAM B': 55, 'TEAM C': 35 },
    { month: '2024', 'TEAM A': 12, 'TEAM B': 48, 'TEAM C': 38 },
    { month: 'Feb 24', 'TEAM A': 20, 'TEAM B': 38, 'TEAM C': 42 },
    { month: 'Mar 24', 'TEAM A': 35, 'TEAM B': 42, 'TEAM C': 45 },
    { month: 'Apr 24', 'TEAM A': 22, 'TEAM B': 35, 'TEAM C': 48 },
    { month: 'May 24', 'TEAM A': 45, 'TEAM B': 32, 'TEAM C': 52 },
    { month: 'Jun 24', 'TEAM A': 25, 'TEAM B': 38, 'TEAM C': 48 },
    { month: 'Jul 24', 'TEAM A': 35, 'TEAM B': 42, 'TEAM C': 38 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((section) => (
            <div key={section.title} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
                <section.icon className="text-[#fec528]" size={24} />
              </div>
              <div className="space-y-3">
                {Object.entries(section.stats).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-medium text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Income/Expense Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Income/Expense</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={incomeExpenseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="expense" fill="#DA291C" />
                  <Line type="monotone" dataKey="income" stroke="#fec528" strokeWidth={2} dot={{ r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Project Tasks Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Tasks</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={projectTasksData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="TEAM A" stackId="1" stroke="#DA291C" fill="#DA291C" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="TEAM B" stackId="1" stroke="#fec528" fill="#fec528" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="TEAM C" stackId="1" stroke="#e9e6e5" fill="#e9e6e5" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Accounting & Projects Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">ACCOUNTING</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Net Income:</span>
                <span className="font-medium text-green-600">$192,827.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Expenses:</span>
                <span className="font-medium text-red-600">$63,800.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Profit/Loss:</span>
                <span className="font-medium text-[#fec528]">$129,027.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cost of Goods:</span>
                <span className="font-medium text-red-600">$23,342.00</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">PROJECTS</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Active:</span>
                <span className="font-medium">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tasks Pending:</span>
                <span className="font-medium">270</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tasks Completed:</span>
                <span className="font-medium">1,631</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}