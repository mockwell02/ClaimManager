import React from 'react';
import { ArrowLeft, ArrowRight, Printer, Mail, FileText, Bell, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ClaimDetail() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/claims');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex items-center">
          <button 
            onClick={handleBack}
            className="flex items-center mr-4 hover:text-[#fec528] transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" />
            <span>Back to Claims</span>
          </button>
          <span className="mx-2 text-gray-400">/</span>
          <p>Recovery Queue</p>
        </div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Case No."
              className="border border-gray-300 rounded px-3 py-1 w-32 focus:outline-none focus:ring-2 focus:ring-[#fec528]/50 focus:border-[#fec528]"
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded px-3 py-1 pr-8 w-64 focus:outline-none focus:ring-2 focus:ring-[#fec528]/50 focus:border-[#fec528]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <span className="sr-only">Search</span>
                🔍
              </button>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="font-semibold text-gray-800">Client: Professional Benefits Administrators</div>
            <div className="text-sm text-gray-600">Project: PBA Project 2.01</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md border border-gray-100">
          {/* Case Navigation */}
          <div className="border-b border-gray-200 p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="p-2 rounded-full bg-[#e9e6e5] text-mcdonalds-red">⚙️</span>
                <span className="font-semibold text-gray-800">Case No.: 515-98-36</span>
                <span className="bg-[#e9e6e5] text-mcdonalds-red px-3 py-1 rounded-full text-sm font-medium">Reporting Only</span>
              </div>
              <div className="flex space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" title="Print">
                  <Printer className="text-gray-600 hover:text-mcdonalds-red" size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" title="Email">
                  <Mail className="text-gray-600 hover:text-mcdonalds-red" size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" title="Documents">
                  <FileText className="text-gray-600 hover:text-mcdonalds-red" size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" title="Notifications">
                  <Bell className="text-gray-600 hover:text-mcdonalds-red" size={20} />
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Previous Case No.: 113-87-36</span>
                <span className="bg-[#e9e6e5] text-mcdonalds-red px-2 py-0.5 rounded-full text-xs">RecoveryReportingOnly</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1 rounded hover:bg-gray-100 transition-colors">
                  <ArrowLeft className="text-mcdonalds-red" size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 transition-colors">
                  <ArrowRight className="text-mcdonalds-red" size={16} />
                </button>
                <span className="text-gray-600">Next Case No.: 5495-98-36</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">RecoveryOrphaned</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 p-6">
            {/* Left Column */}
            <div className="col-span-12 md:col-span-4">
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <FileText className="text-mcdonalds-red mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">UNIVERSITY OF CHICAGO MEDICAL CENTER</h3>
                    <p className="text-sm text-gray-600">1122 PAYSPHERE CIR</p>
                    <p className="text-sm text-gray-600">CHICAGO, IL</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2 text-gray-800">Patient: ALONDRA GARCIA</h4>
                  <div className="text-sm space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>DOB:</span>
                      <span>1/12/97</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date Paid:</span>
                      <span>6/8/20</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check:</span>
                      <span>15000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Billed:</span>
                      <span>$ 33,390.22</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="col-span-12 md:col-span-4">
              <div className="bg-[#e9e6e5]/30 rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="font-semibold mb-4 text-gray-800">RECOVERY OVERVIEW</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Claim ID:</span>
                    <span className="text-gray-800">515-98-36</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Provider Tax ID:</span>
                    <span className="text-gray-800">363685183</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Overpayment:</span>
                    <span className="text-mcdonalds-red font-medium">$7,673.35</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-4 text-gray-800">Patient Information</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Account: <span className="text-gray-800">88375913</span></p>
                      <p className="text-gray-600">Patient ID: <span className="text-gray-800">98529688</span></p>
                    </div>
                    <div>
                      <p className="text-gray-600">Member: <span className="text-gray-800">ALONDRA GARCIA</span></p>
                      <p className="text-gray-600">Member ID: <span className="text-gray-800">98529688</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-12 md:col-span-4">
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-green-600 font-semibold mb-4">YOUR TASK</h3>
                <p className="text-sm mb-6 text-gray-600">No activity planned, set one up now!</p>
                <button className="w-full bg-mcdonalds-red text-white rounded-lg py-3 hover:bg-mcdonalds-red/90 transition-colors font-medium shadow-sm">
                  SCHEDULE ACTIVITY
                </button>
              </div>
            </div>
          </div>

          {/* Claims Table */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Claim Details</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Dates</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PL</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPT Code</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Units</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Billed</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orig Allowed</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correct Allowed</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CR</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Copay</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deduct</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coins</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Refund</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overpayment</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 py-3 text-sm text-gray-600">5/13/20</td>
                    <td className="px-3 py-3 text-sm text-gray-600">22</td>
                    <td className="px-3 py-3 text-sm text-gray-600">99305</td>
                    <td className="px-3 py-3 text-sm text-gray-600">1</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 942.00</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 942.00</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-gray-600">H010</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 0.00</td>
                    <td className="px-3 py-3 text-sm font-medium text-mcdonalds-red">$ 173.80</td>
                  </tr>
                  <tr className="bg-amber-50/50">
                    <td colSpan={13} className="px-3 py-2 text-sm text-gray-600">
                      <span className="font-medium text-amber-800">H010</span> - DUPLICATE PAYMENT. THESE CHARGES SHOULD HAVE BEEN DENIED AS DUPLICATE. DUPLICATE FACILITY CHARGES
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 py-3 text-sm text-gray-600">5/13/20</td>
                    <td className="px-3 py-3 text-sm text-gray-600">22</td>
                    <td className="px-3 py-3 text-sm text-gray-600">99305</td>
                    <td className="px-3 py-3 text-sm text-gray-600">1</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 5,321.00</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 5,748.69</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-gray-600">H010</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-gray-600">$ 0.00</td>
                    <td className="px-3 py-3 text-sm font-medium text-mcdonalds-red">$ 5,098.75</td>
                  </tr>
                  <tr className="bg-amber-50/50">
                    <td colSpan={13} className="px-3 py-2 text-sm text-gray-600">
                      <span className="font-medium text-amber-800">H010</span> - DUPLICATE PAYMENT. THESE CHARGES SHOULD HAVE BEEN DENIED AS DUPLICATE. DUPLICATE FACILITY CHARGES
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50 font-semibold">
                    <td colSpan={4} className="px-3 py-3 text-sm text-gray-700">TOTALS</td>
                    <td className="px-3 py-3 text-sm text-gray-700">$ 6,263.00</td>
                    <td className="px-3 py-3 text-sm text-gray-700">$ 6,691.69</td>
                    <td className="px-3 py-3 text-sm text-gray-700">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-gray-700"></td>
                    <td className="px-3 py-3 text-sm text-gray-700">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-gray-700">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-gray-700">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-gray-700">$ 0.00</td>
                    <td className="px-3 py-3 text-sm text-mcdonalds-red font-bold">$ 7,673.35</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="space-y-1 text-sm mb-4 md:mb-0">
                <p className="font-medium text-gray-700">Send Payments To:</p>
                <p className="text-gray-600">Case ID: <span className="text-gray-800">515-98-36</span></p>
                <p className="text-gray-600">Provider Tax ID: <span className="text-gray-800">363685183</span></p>
                <p className="text-gray-600">Total Overpayment: <span className="text-mcdonalds-red font-medium">$7,673.35</span></p>
              </div>
              <div className="text-3xl font-bold text-mcdonalds-red bg-white py-3 px-6 rounded-lg shadow-sm border border-gray-200">
                $7,673.35
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}