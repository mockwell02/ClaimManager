import React from 'react';
import { ArrowLeft, ArrowRight, Printer, Mail, FileText, Bell } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ClaimDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate('/claims');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-blue-700 text-white text-sm py-1 px-4">
        <div className="container mx-auto">
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
              className="border border-gray-300 rounded px-3 py-1 w-32"
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded px-3 py-1 pr-8 w-64"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <span className="sr-only">Search</span>
                🔍
              </button>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg p-3">
            <div className="font-semibold">Client: Professional Benefits Administrators</div>
            <div className="text-sm">Project: PBA Project 2.01</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md">
          {/* Case Navigation */}
          <div className="border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-2 rounded-full bg-blue-100">⚙️</span>
                <span className="font-semibold">Case No.: 515-98-36</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Reporting Only</span>
              </div>
              <div className="flex space-x-4">
                <Printer className="text-gray-600" />
                <Mail className="text-gray-600" />
                <FileText className="text-gray-600" />
                <Bell className="text-gray-600" />
              </div>
            </div>
            <div className="flex justify-between mt-4 text-sm">
              <div className="flex items-center space-x-2">
                <span>Previous Case No.: 113-87-36</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">RecoveryReportingOnly</span>
              </div>
              <div className="flex items-center space-x-2">
                <ArrowLeft className="text-blue-600" size={16} />
                <ArrowRight className="text-blue-600" size={16} />
                <span>Next Case No.: 5495-98-36</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">RecoveryOrphaned</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 p-6">
            {/* Left Column */}
            <div className="col-span-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-start space-x-2">
                  <FileText className="text-blue-600" size={20} />
                  <div>
                    <h3 className="font-semibold">UNIVERSITY OF CHICAGO MEDICAL CENTER</h3>
                    <p className="text-sm text-gray-600">1122 PAYSPHERE CIR</p>
                    <p className="text-sm text-gray-600">CHICAGO, IL</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Patient: ALONDRA GARCIA</h4>
                  <div className="text-sm space-y-1">
                    <p>DOB: 1/12/97</p>
                    <p>Date Paid: 6/8/20</p>
                    <p>Check: 15000</p>
                    <p>Billed: $ 33,390.22</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="col-span-4">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold mb-4">RECOVERY OVERVIEW</h3>
                <div className="space-y-2 text-sm">
                  <p>Claim ID: 515-98-36</p>
                  <p>Provider Tax ID: 363685183</p>
                  <p>Total Overpayment: $7,673.35</p>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-4">Patient Information</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p>Account: 88375913</p>
                      <p>Patient ID: 98529688</p>
                    </div>
                    <div>
                      <p>Member: ALONDRA GARCIA</p>
                      <p>Member ID: 98529688</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="text-green-600 font-semibold mb-4">YOUR TASK</h3>
                <p className="text-sm mb-4">No activity planned, set one up now!</p>
                <button className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors">
                  SCHEDULE ACTIVITY
                </button>
              </div>
            </div>
          </div>

          {/* Claims Table */}
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Service Dates</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">PL</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">CPT Code</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Units</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Billed</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Orig Allowed</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Correct Allowed</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">CR</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Copay</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Deduct</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Coins</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Patient Refund</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Overpayment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-2 text-sm">5/13/20</td>
                    <td className="px-3 py-2 text-sm">22</td>
                    <td className="px-3 py-2 text-sm">99305</td>
                    <td className="px-3 py-2 text-sm">1</td>
                    <td className="px-3 py-2 text-sm">$ 942.00</td>
                    <td className="px-3 py-2 text-sm">$ 942.00</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">H010</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">$ 173.80</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td colSpan={13} className="px-3 py-2 text-sm text-gray-600">
                      H010 - DUPLICATE PAYMENT. THESE CHARGES SHOULD HAVE BEEN DENIED AS DUPLICATE. DUPLICATE FACILITY CHARGES
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm">5/13/20</td>
                    <td className="px-3 py-2 text-sm">22</td>
                    <td className="px-3 py-2 text-sm">99305</td>
                    <td className="px-3 py-2 text-sm">1</td>
                    <td className="px-3 py-2 text-sm">$ 5,321.00</td>
                    <td className="px-3 py-2 text-sm">$ 5,748.69</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">H010</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">$ 5,098.75</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td colSpan={13} className="px-3 py-2 text-sm text-gray-600">
                      H010 - DUPLICATE PAYMENT. THESE CHARGES SHOULD HAVE BEEN DENIED AS DUPLICATE. DUPLICATE FACILITY CHARGES
                    </td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="px-3 py-2 text-sm">TOTALS</td>
                    <td className="px-3 py-2 text-sm"></td>
                    <td className="px-3 py-2 text-sm"></td>
                    <td className="px-3 py-2 text-sm"></td>
                    <td className="px-3 py-2 text-sm">$ 6,263.00</td>
                    <td className="px-3 py-2 text-sm">$ 6,691.69</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm"></td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">$ 0.00</td>
                    <td className="px-3 py-2 text-sm">$ 7,673.35</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold mb-2">Send Payments To:</h4>
                <div className="text-sm">
                  <p>Case ID: 515-98-36</p>
                  <p>Provider Tax ID: 363685183</p>
                  <p>Total Overpayment: $7,673.35</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800">$7,673.35</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}