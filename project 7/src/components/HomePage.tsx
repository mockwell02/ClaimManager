import React, { useState } from 'react';
import { BarChart3, Users, FileText, MessageSquare, Calendar, Inbox, ChevronRight, Home, TrendingUp, Heart, Bed, Coffee } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart, Legend } from 'recharts';

export default function HomePage() {
  const [timeFrame, setTimeFrame] = useState('monthly');
  
  const stats = [
    { title: 'Family Services', icon: Heart, stats: { 'Families Served': '293', 'Average Stay (days)': '18', 'Occupancy Rate': '87%' } },
    { title: 'Medicaid Claims', icon: FileText, stats: { 'Submitted': '127', 'Pending': '42', 'Approved': '68', 'Denied': '17' } },
    { title: 'House Capacity', icon: Bed, stats: { 'Total Rooms': '56', 'Available': '7', 'Maintenance': '2', 'Waitlist Families': '12' } },
    { title: 'Volunteer Hours', icon: Users, stats: { 'This Month': '842', 'YTD': '5,320' } },
    { title: 'Meal Program', icon: Coffee, stats: { 'Meals Served': '1,230', 'Meal Groups': '28' } },
    { title: 'Family Support', icon: Heart, stats: { 'Care Packages': '43', 'Transportation Assists': '86', 'Special Events': '9' } }
  ];

  const incomeExpenseData = [
    { month: 'Aug 23', expense: 42000, income: 58000 },
    { month: 'Sep 23', expense: 48000, income: 62000 },
    { month: 'Oct 23', expense: 40000, income: 55000 },
    { month: 'Nov 23', expense: 65000, income: 72000 },
    { month: 'Dec 23', expense: 52000, income: 84000 },
    { month: 'Jan 24', expense: 38000, income: 52000 },
    { month: 'Feb 24', expense: 41000, income: 58000 },
    { month: 'Mar 24', expense: 45000, income: 61000 },
    { month: 'Apr 24', expense: 48000, income: 62000 },
    { month: 'May 24', expense: 43000, income: 59000 },
    { month: 'Jun 24', expense: 39000, income: 54000 },
    { month: 'Jul 24', expense: 42000, income: 57000 }
  ];

  const claimsData = [
    { month: 'Sep 23', 'Hospitality': 20, 'Meals': 15, 'Transportation': 8 },
    { month: 'Oct 23', 'Hospitality': 22, 'Meals': 16, 'Transportation': 10 },
    { month: 'Nov 23', 'Hospitality': 25, 'Meals': 18, 'Transportation': 12 },
    { month: 'Dec 23', 'Hospitality': 30, 'Meals': 22, 'Transportation': 14 },
    { month: 'Jan 24', 'Hospitality': 28, 'Meals': 20, 'Transportation': 13 },
    { month: 'Feb 24', 'Hospitality': 24, 'Meals': 18, 'Transportation': 11 },
    { month: 'Mar 24', 'Hospitality': 26, 'Meals': 19, 'Transportation': 12 },
    { month: 'Apr 24', 'Hospitality': 29, 'Meals': 21, 'Transportation': 13 },
    { month: 'May 24', 'Hospitality': 31, 'Meals': 23, 'Transportation': 15 },
    { month: 'Jun 24', 'Hospitality': 27, 'Meals': 20, 'Transportation': 12 },
    { month: 'Jul 24', 'Hospitality': 25, 'Meals': 18, 'Transportation': 11 }
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
              <h1 className="text-xl font-semibold">RMHC Claims Management Dashboard</h1>
              <p className="text-white/80 text-sm mt-1">Welcome back! Here's your family services overview</p>
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
                <h3 className="font-medium text-gray-800">Family Accommodation Claims</h3>
                <p className="text-2xl font-bold text-gray-900">127</p>
                <p className="text-sm text-gray-500">23 new this month</p>
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
                <h3 className="font-medium text-gray-800">Pending Medicaid Review</h3>
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
                <h3 className="font-medium text-gray-800">Approved Claims</h3>
                <p className="text-2xl font-bold text-gray-900">68</p>
                <p className="text-sm text-gray-500">12 approved this month</p>
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

          {/* Claims by Service Type Chart */}
          <div className="bg-white rounded shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-semibold text-gray-800">Claims by Service Type</h3>
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
                <AreaChart data={claimsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280' }} axisLine={{ stroke: '#e5e7eb' }} />
                  <YAxis tick={{ fill: '#6b7280' }} axisLine={{ stroke: '#e5e7eb' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Area name="Hospitality" type="monotone" dataKey="Hospitality" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                  <Area name="Meals" type="monotone" dataKey="Meals" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Area name="Transportation" type="monotone" dataKey="Transportation" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Financials & Claims Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-md font-semibold text-gray-800">FINANCIAL SUMMARY</h3>
              <div className="p-2 bg-gray-100 rounded">
                <BarChart3 className="text-gray-600" size={20} />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700 text-sm">Total Medicaid Claims:</span>
                <span className="font-bold text-green-600">$292,800.00</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700 text-sm">Average Claim Amount:</span>
                <span className="font-bold text-blue-600">$2,300.00</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700 text-sm">Pending Claims Value:</span>
                <span className="font-bold text-amber-600">$96,600.00</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700 text-sm">Approved Claims Value:</span>
                <span className="font-bold text-green-600">$156,400.00</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              View Financial Report
            </button>
          </div>

          <div className="bg-white rounded shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-md font-semibold text-gray-800">CLAIMS SUMMARY</h3>
              <div className="p-2 bg-gray-100 rounded">
                <Calendar className="text-gray-600" size={20} />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div>
                  <span className="text-gray-700 text-sm">Pending Claims</span>
                  <p className="text-xs text-gray-500">Awaiting Medicaid review</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                  42
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div>
                  <span className="text-gray-700 text-sm">Approved Claims</span>
                  <p className="text-xs text-gray-500">Successfully processed</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                  68
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div>
                  <span className="text-gray-700 text-sm">Denied Claims</span>
                  <p className="text-xs text-gray-500">Requires follow-up</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                  17
                </div>
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              Manage Claims
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}