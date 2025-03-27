import React, { useState } from 'react';
import { BarChart3, Users, FileText, MessageSquare, Calendar, Inbox, ChevronRight, Home, TrendingUp } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart, Legend } from 'recharts';

export default function HomePage() {
  const [timeFrame, setTimeFrame] = useState('monthly');
  
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

  // Custom tooltip styles
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
          <p className="font-medium text-gray-800">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Header - Matching ClaimDetail style */}
      <div className="bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold">Claims Management Dashboard</h1>
              <p className="text-white/80 text-sm mt-1">Welcome back! Here's your business overview</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 text-sm rounded flex items-center transition-colors">
                <Home size={16} className="mr-1" />
                Overview
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 text-sm rounded flex items-center transition-colors">
                <TrendingUp size={16} className="mr-1" />
                Reports
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-6">
        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Claims</h3>
                <p className="text-2xl font-bold text-gray-900">127</p>
                <p className="text-sm text-gray-500">23 new this week</p>
              </div>
              <div className="p-2 bg-gray-100 rounded">
                <FileText className="text-gray-600" size={20} />
              </div>
            </div>
            <button className="mt-3 text-blue-600 text-sm font-medium flex items-center hover:text-blue-700 transition-colors">
              View details
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="bg-white rounded shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Pending Review</h3>
                <p className="text-2xl font-bold text-gray-900">42</p>
                <p className="text-sm text-gray-500">7 require immediate action</p>
              </div>
              <div className="p-2 bg-gray-100 rounded">
                <Calendar className="text-gray-600" size={20} />
              </div>
            </div>
            <button className="mt-3 text-blue-600 text-sm font-medium flex items-center hover:text-blue-700 transition-colors">
              View details
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="bg-white rounded shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Resolved</h3>
                <p className="text-2xl font-bold text-gray-900">89</p>
                <p className="text-sm text-gray-500">12 resolved this week</p>
              </div>
              <div className="p-2 bg-gray-100 rounded">
                <Users className="text-gray-600" size={20} />
              </div>
            </div>
            <button className="mt-3 text-blue-600 text-sm font-medium flex items-center hover:text-blue-700 transition-colors">
              View details
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {stats.map((section) => (
            <div key={section.title} className="bg-white rounded shadow p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-md font-semibold text-gray-800">{section.title}</h3>
                <div className="p-2 bg-gray-100 rounded">
                  <section.icon className="text-gray-600" size={20} />
                </div>
              </div>
              <div className="space-y-2">
                {Object.entries(section.stats).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600 text-sm">{key}:</span>
                    <span className="font-medium text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
              <button className="mt-3 text-blue-600 text-sm font-medium flex items-center hover:text-blue-700 transition-colors">
                View details
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Income/Expense Chart */}
          <div className="bg-white rounded shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-semibold text-gray-800">Income/Expense</h3>
              <div className="flex rounded overflow-hidden border border-gray-200">
                <button 
                  className={`px-3 py-1 text-xs ${timeFrame === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                  onClick={() => setTimeFrame('monthly')}
                >
                  Monthly
                </button>
                <button 
                  className={`px-3 py-1 text-xs ${timeFrame === 'quarterly' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                  onClick={() => setTimeFrame('quarterly')}
                >
                  Quarterly
                </button>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={incomeExpenseData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280' }} axisLine={{ stroke: '#e5e7eb' }} />
                  <YAxis tick={{ fill: '#6b7280' }} axisLine={{ stroke: '#e5e7eb' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Bar name="Expense" dataKey="expense" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  <Line name="Income" type="monotone" dataKey="income" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3, fill: '#3b82f6', stroke: '#3b82f6' }} activeDot={{ r: 5 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Project Tasks Chart */}
          <div className="bg-white rounded shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-semibold text-gray-800">Project Tasks</h3>
              <div className="flex rounded overflow-hidden border border-gray-200">
                <button 
                  className={`px-3 py-1 text-xs ${timeFrame === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                  onClick={() => setTimeFrame('monthly')}
                >
                  Monthly
                </button>
                <button 
                  className={`px-3 py-1 text-xs ${timeFrame === 'quarterly' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                  onClick={() => setTimeFrame('quarterly')}
                >
                  Quarterly
                </button>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={projectTasksData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280' }} axisLine={{ stroke: '#e5e7eb' }} />
                  <YAxis tick={{ fill: '#6b7280' }} axisLine={{ stroke: '#e5e7eb' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Area name="TEAM A" type="monotone" dataKey="TEAM A" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                  <Area name="TEAM B" type="monotone" dataKey="TEAM B" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Area name="TEAM C" type="monotone" dataKey="TEAM C" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Accounting & Projects Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-md font-semibold text-gray-800">ACCOUNTING</h3>
              <div className="p-2 bg-gray-100 rounded">
                <BarChart3 className="text-gray-600" size={20} />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700 text-sm">Net Income:</span>
                <span className="font-bold text-green-600">$192,827.00</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700 text-sm">Expenses:</span>
                <span className="font-bold text-red-600">$63,800.00</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700 text-sm">Profit/Loss:</span>
                <span className="font-bold text-blue-600">$129,027.00</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700 text-sm">Cost of Goods:</span>
                <span className="font-bold text-red-600">$23,342.00</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              View Financial Report
            </button>
          </div>

          <div className="bg-white rounded shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-md font-semibold text-gray-800">PROJECTS</h3>
              <div className="p-2 bg-gray-100 rounded">
                <Calendar className="text-gray-600" size={20} />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div>
                  <span className="text-gray-700 text-sm">Active Projects</span>
                  <p className="text-xs text-gray-500">Currently in progress</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  18
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div>
                  <span className="text-gray-700 text-sm">Tasks Pending</span>
                  <p className="text-xs text-gray-500">Awaiting completion</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                  270
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div>
                  <span className="text-gray-700 text-sm">Tasks Completed</span>
                  <p className="text-xs text-gray-500">Successfully finished</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                  1,631
                </div>
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              Manage Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}