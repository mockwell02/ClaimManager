import React, { useState } from 'react';
import { BarChart3, FileText, MessageSquare, Calendar, Inbox, ChevronRight, Home, TrendingUp, Heart, Bed, Coffee, AlertTriangle, ArrowUp, Clock, Flag, Check, DollarSign, Users, Percent, AlertCircle, Activity, PieChart } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart, Legend, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

export default function HomePage() {
  const [timeFrame, setTimeFrame] = useState('monthly');
  const [kpiView, setKpiView] = useState('operational');
  
  const stats = [
    { title: 'Family Services', icon: Heart, stats: { 'Families Served': '293', 'Average Stay (days)': '18', 'Occupancy Rate': '87%' } },
    { title: 'Medicaid Claims', icon: FileText, stats: { 'Submitted': '127', 'Pending': '42', 'Approved': '68', 'Denied': '17' } },
    { 
      title: 'House Capacity', 
      icon: Bed, 
      stats: { 
        'Total Rooms': '56', 
        'Available': '7', 
        'Maintenance': '2', 
        'Waitlist Families': '12' 
      },
      alerts: {
        'Maintenance': { icon: Flag, color: 'text-red-500' }
      }
    },
    { 
      title: 'Volunteer Hours', 
      icon: Clock, 
      stats: { 
        'This Month': '842', 
        'YTD': '5,320' 
      },
      trends: {
        'This Month': { icon: ArrowUp, color: 'text-green-500', percent: '+12%' },
        'YTD': { icon: ArrowUp, color: 'text-green-500', percent: '+8%' }
      }
    },
    { title: 'Meal Program', icon: Coffee, stats: { 'Meals Served': '1,230', 'Meal Groups': '28' } },
    { title: 'Family Support', icon: Heart, stats: { 'Care Packages': '43', 'Transportation Assists': '86', 'Special Events': '9' } }
  ];

  // KPI data for administrators and billing managers
  const operationalKPIs = [
    { name: 'Claim Processing Time', value: '4.2', unit: 'days', trend: '-0.8', status: 'good' },
    { name: 'Claim Approval Rate', value: '78', unit: '%', trend: '+3.5', status: 'good' },
    { name: 'Denial Resolution Time', value: '6.8', unit: 'days', trend: '-1.2', status: 'good' },
    { name: 'Documentation Accuracy', value: '94', unit: '%', trend: '+2.1', status: 'good' }
  ];

  const financialKPIs = [
    { name: 'Reimbursement Rate', value: '92', unit: '%', trend: '+1.5', status: 'good' },
    { name: 'Avg. Claim Value', value: '2,300', unit: '$', trend: '+120', status: 'good' },
    { name: 'Revenue per Room', value: '5,230', unit: '$', trend: '+310', status: 'good' },
    { name: 'Cost per Family', value: '1,840', unit: '$', trend: '-85', status: 'good' }
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

  // Claims processing efficiency data
  const claimProcessingData = [
    { month: 'Aug 23', 'Processing Time': 5.8, 'Target': 5.0 },
    { month: 'Sep 23', 'Processing Time': 5.6, 'Target': 5.0 },
    { month: 'Oct 23', 'Processing Time': 5.2, 'Target': 5.0 },
    { month: 'Nov 23', 'Processing Time': 5.0, 'Target': 5.0 },
    { month: 'Dec 23', 'Processing Time': 4.9, 'Target': 5.0 },
    { month: 'Jan 24', 'Processing Time': 4.8, 'Target': 5.0 },
    { month: 'Feb 24', 'Processing Time': 4.7, 'Target': 5.0 },
    { month: 'Mar 24', 'Processing Time': 4.5, 'Target': 5.0 },
    { month: 'Apr 24', 'Processing Time': 4.4, 'Target': 5.0 },
    { month: 'May 24', 'Processing Time': 4.3, 'Target': 5.0 },
    { month: 'Jun 24', 'Processing Time': 4.2, 'Target': 5.0 },
    { month: 'Jul 24', 'Processing Time': 4.2, 'Target': 5.0 }
  ];

  // Claim status breakdown
  const claimStatusData = [
    { name: 'Approved', value: 68, color: '#36B37E' },
    { name: 'Pending', value: 42, color: '#F59E0B' },
    { name: 'Denied', value: 17, color: '#EF4444' }
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
    <div className="min-h-screen bg-gray-100" style={{ backgroundColor: '#e9e6e5' }}>
      {/* Dashboard Header - Matching ClaimDetail style */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:ml-6">
              <h1 className="text-xl font-semibold">Chapter Management Dashboard</h1>
              <p className="text-white/80 text-sm mt-1">Welcome back! Here's your family services overview</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2 md:mr-6">
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
        {/* Alert Banner for Critical Items */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded shadow-sm">
          <div className="flex items-start">
            <div className="text-red-500 mr-3 mt-0.5 flex-shrink-0">
              <AlertCircle size={20} />
            </div>
            <div>
              <h3 className="font-medium text-red-800">Action Required</h3>
              <p className="text-sm text-red-700 mt-1">
                7 pending claims require immediate attention due to documentation issues. 
                2 claims have exceeded the 30-day processing window.
              </p>
              <button className="mt-2 bg-red-600 hover:bg-red-700 text-white text-xs py-1.5 px-4 rounded-md flex items-center shadow-sm font-medium">
                <Check size={14} className="mr-1" />
                Review Urgent Claims
              </button>
            </div>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Family Accommodation Claims</h3>
                <p className="text-2xl font-bold text-gray-900">127</p>
                <p className="text-sm text-gray-500">23 new this month</p>
              </div>
              <div className="p-2 bg-[#fec528]/20 rounded-full">
                <FileText className="text-[#fec528]" size={24} />
              </div>
            </div>
            <button className="mt-3 text-red-600 text-sm font-medium flex items-center hover:text-red-700 transition-colors">
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
              <div className="p-2 bg-amber-100 rounded-full">
                <AlertTriangle className="text-amber-600" size={24} />
              </div>
            </div>
            <button className="mt-3 text-red-600 text-sm font-medium flex items-center hover:text-red-700 transition-colors">
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
              <div className="p-2 bg-green-100 rounded-full">
                <Check className="text-green-600" size={24} />
              </div>
            </div>
            <button className="mt-3 text-red-600 text-sm font-medium flex items-center hover:text-red-700 transition-colors">
              View details
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>

        {/* KPI Dashboard for Administrators & Billing Managers */}
        <div className="bg-white rounded shadow p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-semibold text-gray-800">Key Performance Indicators</h3>
            <div className="flex rounded overflow-hidden border border-gray-200">
              <button 
                className={`px-3 py-1 text-xs ${kpiView === 'operational' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setKpiView('operational')}
              >
                Operational
              </button>
              <button 
                className={`px-3 py-1 text-xs ${kpiView === 'financial' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setKpiView('financial')}
              >
                Financial
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {(kpiView === 'operational' ? operationalKPIs : financialKPIs).map((kpi) => (
              <div key={kpi.name} className="bg-gray-50 p-3 rounded">
                <div className="text-sm text-gray-600">{kpi.name}</div>
                <div className="flex items-end justify-between mt-1">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-gray-900">{kpi.value}</span>
                    <span className="text-sm text-gray-500 ml-1">{kpi.unit}</span>
                  </div>
                  <div className={`flex items-center text-xs ${kpi.status === 'good' ? 'text-green-500' : 'text-red-500'}`}>
                    {kpi.trend.startsWith('+') ? (
                      <ArrowUp size={14} className="mr-0.5" />
                    ) : (
                      <ArrowUp size={14} className="mr-0.5 transform rotate-180" />
                    )}
                    {kpi.trend.replace(/[+-]/, '')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {stats.map((section) => (
            <div key={section.title} className="bg-white rounded shadow p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-md font-semibold text-gray-800">{section.title}</h3>
                <div className="p-2 bg-[#fec528]/20 rounded-full">
                  {React.createElement(section.icon, { className: "text-[#fec528]", size: 20 })}
                </div>
              </div>
              <div className="space-y-2">
                {Object.entries(section.stats).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600 text-sm">{key}:</span>
                    <div className="flex items-center">
                      {section.title === 'House Capacity' && key === 'Maintenance' && section.alerts && (
                        React.createElement(Flag, { 
                          className: "text-red-500 mr-1.5", 
                          size: 16 
                        })
                      )}
                      <span className="font-medium text-gray-800">{value}</span>
                      {section.title === 'Volunteer Hours' && (key === 'This Month' || key === 'YTD') && section.trends && (
                        <div className="flex items-center ml-2">
                          {React.createElement(ArrowUp, { 
                            className: "text-green-500", 
                            size: 14 
                          })}
                          <span className="text-xs text-green-500 ml-0.5">
                            {key === 'This Month' ? '+12%' : '+8%'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-3 text-red-600 text-sm font-medium flex items-center hover:text-red-700 transition-colors">
                View details
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Claims Processing Efficiency Chart */}
          <div className="bg-white rounded shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-semibold text-gray-800">Claims Processing Efficiency</h3>
              <div className="flex rounded overflow-hidden border border-gray-200">
                <button 
                  className={`px-3 py-1 text-xs ${timeFrame === 'monthly' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                  onClick={() => setTimeFrame('monthly')}
                >
                  Monthly
                </button>
                <button 
                  className={`px-3 py-1 text-xs ${timeFrame === 'quarterly' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                  onClick={() => setTimeFrame('quarterly')}
                >
                  Quarterly
                </button>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={claimProcessingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280' }} axisLine={{ stroke: '#e5e7eb' }} />
                  <YAxis tick={{ fill: '#6b7280' }} axisLine={{ stroke: '#e5e7eb' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Bar name="Processing Time (days)" dataKey="Processing Time" fill="#fec528" barSize={20} />
                  <Line name="Target" type="monotone" dataKey="Target" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={false} />
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
                  className={`px-3 py-1 text-xs ${timeFrame === 'monthly' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                  onClick={() => setTimeFrame('monthly')}
                >
                  Monthly
                </button>
                <button 
                  className={`px-3 py-1 text-xs ${timeFrame === 'quarterly' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
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
                  <Area name="Meals" type="monotone" dataKey="Meals" stackId="1" stroke="#fec528" fill="#fec528" fillOpacity={0.6} />
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
              <div className="p-2 bg-[#fec528]/20 rounded-full">
                <BarChart3 className="text-[#fec528]" size={20} />
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
            <button className="mt-4 w-full bg-red-600 text-white py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors">
              View Financial Report
            </button>
          </div>

          <div className="bg-white rounded shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-md font-semibold text-gray-800">CLAIMS SUMMARY</h3>
              <div className="p-2 bg-[#fec528]/20 rounded-full">
                <PieChart className="text-[#fec528]" size={20} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-40 w-40 mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={claimStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {claimStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3 flex-1">
                {claimStatusData.map((status) => (
                  <div key={status.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: status.color }}></div>
                      <span className="text-sm text-gray-700">{status.name}</span>
                    </div>
                    <span className="font-medium">{status.value}</span>
                  </div>
                ))}
                <div className="pt-2">
                  <button className="w-full bg-red-600 text-white py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors">
                    Manage Claims
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}