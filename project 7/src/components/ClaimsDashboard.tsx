import React from 'react';
import { Search, ChevronLeft, ChevronRight, Info, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ClaimsDashboard() {
  const navigate = useNavigate();

  const claimsData = [
    {
      id: '17878',
      rule: 'MSPR-Prof',
      description: 'Multiple procedures performed by the same physician or other qualified health care professional on the same date of service during the same patient encounter may be subject to multiple procedure reduction for secondary and subsequent procedures. Standard payment adjustments rules for multiple procedures apply. Apply the appropriate reduction to this code (100%, 50%, 50%, 50%).',
      fdos: '4/9/20 - 8/11/20',
      datePaid: '5/15/20',
      months: 3,
      claimLine: 51,
      totalBilled: '$180,296.87',
      totalAllowed: '$124,843.12',
      totalCoPay: '$48.33',
      totalDeductible: '$65.00',
      totalUnitsAllowed: '0.00',
      totalUnitsBilled: '95.00',
      totalPaid: '$124,729.84',
      totalNotPaid: '$124,729.84',
      cptCodes: '73721 77014 77336 99442 84153 77417 J8217 85025 99402 77301',
      revCodes: '0333 0321 0636 0350 0331 0300 0810',
      modifiers: '26',
      pos: '22,96,11',
      diagCodes: 'C61.Z0 R900000 F4010 F940 99995 G473.Z0000 K5190 E785.Z9079 V95',
      networks: 'HEOS NET STAND'
    },
    {
      id: '16152',
      rule: 'No Mod CPT ClaimIQ',
      description: 'Modifier missing for procedure code that typically requires a modifier for accurate billing.',
      fdos: '4/9/20 - 8/11/20',
      datePaid: '5/18/20',
      months: 5,
      claimLine: 51,
      totalBilled: '$180,296.87',
      totalAllowed: '$124,843.12',
      totalCoPay: '$48.33',
      totalDeductible: '$65.00',
      totalUnitsAllowed: '0.00',
      totalUnitsBilled: '95.00',
      totalPaid: '$124,729.84',
      totalNotPaid: '$124,729.84',
      cptCodes: '73721 77014 77336 99442 84153 99402 77417 J8217 77301',
      revCodes: '0333 0321 0636 0350 0331 0300 0810',
      modifiers: '26',
      pos: '22,96,11',
      diagCodes: 'C61.Z0 R900000 F4010 F940 99995 G473.Z0000 K5190 E785.Z9079 V95',
      networks: 'HEOS NET STAND'
    },
    {
      id: '10450',
      rule: 'Global Surgery ClaimIQ',
      description: 'The global period is the number of days during which all necessary services normally furnished by a physician (before, during, and after the procedure) are included in the reimbursement for the procedure performed.',
      fdos: '4/9/20 - 8/11/20',
      datePaid: '5/20/20',
      months: 4,
      claimLine: 51,
      totalBilled: '$180,296.87',
      totalAllowed: '$124,843.12',
      totalCoPay: '$48.33',
      totalDeductible: '$65.00',
      totalUnitsAllowed: '0.00',
      totalUnitsBilled: '95.00',
      totalPaid: '$124,729.84',
      totalNotPaid: '$124,729.84',
      cptCodes: '73721 77014 77336 99442 84153 99402 77417 J8217 77301',
      revCodes: '0333 0321 0636 0350 0331 0300 0810',
      modifiers: '26',
      pos: '22,96,11',
      diagCodes: 'C61.Z0 R900000 F4010 F940 99995 G473.Z0000 K5190 E785.Z9079 V95',
      networks: 'HEOS NET STAND'
    },
    {
      id: '22456',
      rule: 'Duplicate Billing ClaimIQ',
      description: 'Multiple claims for the same service on the same date for the same patient indicate potential duplicate billing. Review for consolidated billing requirements.',
      fdos: '3/15/20 - 7/22/20',
      datePaid: '4/30/20',
      months: 6,
      claimLine: 47,
      totalBilled: '$145,782.33',
      totalAllowed: '$98,432.55',
      totalCoPay: '$35.00',
      totalDeductible: '$75.00',
      totalUnitsAllowed: '0.00',
      totalUnitsBilled: '82.00',
      totalPaid: '$98,322.55',
      totalNotPaid: '$98,322.55',
      cptCodes: '99213 J0696 96372 99214 G0008 90471 90686',
      revCodes: '0510 0517 0636 0350 0331 0300',
      modifiers: '25',
      pos: '11,22',
      diagCodes: 'J06.9 R50.9 Z23 J18.9 N39.0 E11.9 I10',
      networks: 'HEOS NET STAND'
    },
    {
      id: '31289',
      rule: 'Unbundling ClaimIQ',
      description: 'Separate billing for procedures that should be billed together as a comprehensive service. Review NCCI edits and CPT coding guidelines.',
      fdos: '5/12/20 - 9/30/20',
      datePaid: '6/15/20',
      months: 4,
      claimLine: 62,
      totalBilled: '$210,456.90',
      totalAllowed: '$156,789.45',
      totalCoPay: '$50.00',
      totalDeductible: '$100.00',
      totalUnitsAllowed: '0.00',
      totalUnitsBilled: '110.00',
      totalPaid: '$156,639.45',
      totalNotPaid: '$156,639.45',
      cptCodes: '29881 29877 29874 76000 J3301 J2001',
      revCodes: '0360 0370 0710 0250 0272',
      modifiers: '59',
      pos: '24,22',
      diagCodes: 'M23.2 M17.11 M25.561 S83.242A',
      networks: 'HEOS NET PREM'
    },
    {
      id: '42781',
      rule: 'Medical Necessity ClaimIQ',
      description: 'Services provided do not meet medical necessity criteria based on diagnosis codes submitted. Additional documentation may be required.',
      fdos: '6/3/20 - 10/15/20',
      datePaid: '7/10/20',
      months: 5,
      claimLine: 38,
      totalBilled: '$87,654.32',
      totalAllowed: '$65,432.10',
      totalCoPay: '$30.00',
      totalDeductible: '$50.00',
      totalUnitsAllowed: '0.00',
      totalUnitsBilled: '45.00',
      totalPaid: '$65,352.10',
      totalNotPaid: '$65,352.10',
      cptCodes: '70450 70553 72148 73721 76700',
      revCodes: '0320 0350 0351 0352',
      modifiers: 'TC',
      pos: '11,22',
      diagCodes: 'R51 M54.5 M25.552 R10.9 R42',
      networks: 'HEOS NET STAND'
    },
    {
      id: '53492',
      rule: 'Frequency Limitation ClaimIQ',
      description: 'Service exceeds the allowed frequency for the time period based on policy guidelines. Review frequency limitations for this procedure.',
      fdos: '7/8/20 - 11/22/20',
      datePaid: '8/15/20',
      months: 4,
      claimLine: 42,
      totalBilled: '$92,345.67',
      totalAllowed: '$76,543.21',
      totalCoPay: '$40.00',
      totalDeductible: '$75.00',
      totalUnitsAllowed: '0.00',
      totalUnitsBilled: '50.00',
      totalPaid: '$76,428.21',
      totalNotPaid: '$76,428.21',
      cptCodes: '99213 99214 99215 G0402 G0438',
      revCodes: '0510 0517 0521',
      modifiers: '25',
      pos: '11',
      diagCodes: 'E11.9 I10 E78.5 Z00.00 Z13.6',
      networks: 'HEOS NET PREM'
    },
    {
      id: '64123',
      rule: 'Authorization Required ClaimIQ',
      description: 'Prior authorization is required for this service. Verify authorization was obtained before service was rendered.',
      fdos: '8/15/20 - 12/30/20',
      datePaid: '9/20/20',
      months: 5,
      claimLine: 55,
      totalBilled: '$175,432.89',
      totalAllowed: '$142,876.54',
      totalCoPay: '$45.00',
      totalDeductible: '$80.00',
      totalUnitsAllowed: '0.00',
      totalUnitsBilled: '75.00',
      totalPaid: '$142,751.54',
      totalNotPaid: '$142,751.54',
      cptCodes: '27447 27130 29881 20610 J7325',
      revCodes: '0360 0370 0710',
      modifiers: '50',
      pos: '22,24',
      diagCodes: 'M17.0 M16.0 M23.2 M25.561',
      networks: 'HEOS NET PREM'
    },
    {
      id: '75834',
      rule: 'Diagnosis Code Required ClaimIQ',
      description: 'Missing or invalid diagnosis code for the procedure performed. Verify appropriate diagnosis code selection.',
      fdos: '9/1/20 - 1/15/21',
      datePaid: '10/5/20',
      months: 5,
      claimLine: 43,
      totalBilled: '$98,765.43',
      totalAllowed: '$78,654.32',
      totalCoPay: '$35.00',
      totalDeductible: '$60.00',
      totalUnitsAllowed: '0.00',
      totalUnitsBilled: '60.00',
      totalPaid: '$78,559.32',
      totalNotPaid: '$78,559.32',
      cptCodes: '99213 99214 99215 G0402',
      revCodes: '0510 0517 0521',
      modifiers: '25',
      pos: '11',
      diagCodes: 'R51 M54.5 M25.552',
      networks: 'HEOS NET STAND'
    },
    {
      id: '86245',
      rule: 'Maximum Units Exceeded ClaimIQ',
      description: 'The number of units billed exceeds the maximum allowed units per date of service.',
      fdos: '10/1/20 - 2/28/21',
      datePaid: '11/15/20',
      months: 5,
      claimLine: 48,
      totalBilled: '$156,789.12',
      totalAllowed: '$123,456.78',
      totalCoPay: '$40.00',
      totalDeductible: '$70.00',
      totalUnitsAllowed: '0.00',
      totalUnitsBilled: '85.00',
      totalPaid: '$123,346.78',
      totalNotPaid: '$123,346.78',
      cptCodes: '96372 J0696 96365 J1745',
      revCodes: '0260 0510 0636',
      modifiers: '59',
      pos: '11,22',
      diagCodes: 'M06.9 M05.79 R53.83',
      networks: 'HEOS NET PREM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white text-xs py-1 px-2">
        <div className="container mx-auto">
          <p className="truncate">TM Dashboard / Client: Professional Benefits Administrators Project Name: PBA Project 2.21-Insurance PBA 2.21 - All EOBs 10-2-2022 - results /</p>
        </div>
      </div>

      <div className="container mx-auto px-2 py-2">
        <div className="bg-white rounded-lg shadow-md p-2 mb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center">
              <Info className="text-blue-600 mr-2" size={18} />
              <h2 className="text-lg font-semibold text-gray-800">Analysis Results (4259)</h2>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-gray-600 mr-2 text-sm">ALL</span>
                <span className="text-sm text-blue-600">Filter by Rule</span>
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-48 border border-gray-300 rounded py-1 px-2 text-sm"
                />
                <Search size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600" />
              </div>
              <span className="text-sm text-blue-600">advanced search</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-between mt-2 gap-2">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span>1 Of 428</span>
              <ChevronLeft size={14} className="text-blue-600" />
              <ChevronRight size={14} className="text-blue-600" />
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-1"># Per Page:</span>
                <select className="border border-gray-300 rounded py-0.5 px-1 text-sm">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Default - New</span>
                <span className="text-sm text-blue-600">See Other Dispositions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {claimsData.map((claim) => (
            <div 
              key={claim.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/claims/${claim.id}`)}
            >
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-2 border-b border-amber-200">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-gray-700 font-medium mr-2">{claim.id}</span>
                    <FileText size={14} className="text-amber-600" />
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800 mr-1">Rule:</span>
                    <span className="text-blue-700">{claim.rule}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-2 border-b border-gray-200 bg-amber-50/50 text-xs text-gray-700">
                <p>{claim.description}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-2 border-b border-gray-200 text-xs">
                <div>
                  <p className="text-gray-600">FDOS - TDOS (range):</p>
                  <p className="font-medium">{claim.fdos}</p>
                </div>
                <div>
                  <p className="text-gray-600">Date Paid (From - To):</p>
                  <p className="font-medium">{claim.datePaid}</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-600">Number of Months:</p>
                    <p className="font-medium">{claim.months}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Claim Line (total):</p>
                    <p className="font-medium text-amber-600">{claim.claimLine}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-2 border-b border-gray-200 text-xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                  <div>
                    <p className="text-gray-600">Total Billed:</p>
                    <p className="font-medium">{claim.totalBilled}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Allowed:</p>
                    <p className="font-medium">{claim.totalAllowed}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Co-Pay:</p>
                    <p className="font-medium">{claim.totalCoPay}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Deductible:</p>
                    <p className="font-medium">{claim.totalDeductible}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Units Allowed:</p>
                    <p className="font-medium">{claim.totalUnitsAllowed}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Units Billed:</p>
                    <p className="font-medium">{claim.totalUnitsBilled}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Paid:</p>
                    <p className="font-medium text-green-600">{claim.totalPaid}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Not Paid:</p>
                    <p className="font-medium text-red-600">{claim.totalNotPaid}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-2 border-b border-gray-200 text-xs">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  <div>
                    <p className="text-gray-600">CPT Codes:</p>
                    <p className="font-medium break-all">{claim.cptCodes}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Rev Codes:</p>
                    <p className="font-medium break-all">{claim.revCodes}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Modifiers:</p>
                    <p className="font-medium">{claim.modifiers}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">POS:</p>
                    <p className="font-medium">{claim.pos}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Diag Codes:</p>
                    <p className="font-medium break-all">{claim.diagCodes}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-2 text-xs">
                <div className="flex justify-between">
                  <p className="text-gray-600">Networks:</p>
                  <p className="font-medium">{claim.networks}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}