import { Search, ChevronLeft, ChevronRight, Info, FileText, Check, Home, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ClaimsDashboard() {
  const navigate = useNavigate();
  const [resolvedMismatches, setResolvedMismatches] = useState<string[]>([]);

  const handleResolveMismatch = (e: React.MouseEvent, claimId: string) => {
    e.stopPropagation();
    setResolvedMismatches(prev => [...prev, claimId]);
  };

  const handleViewClaim = (claimId: string) => {
    navigate(`/claims/${claimId}`);
  };

  const claimsData = [
    {
      id: '17878',
      rule: 'Medicaid-Eligible Family Stay',
      description: 'Family accommodation for child receiving treatment at Children\'s Hospital.',
      fdos: '4/9/23 - 4/15/23',
      datePaid: '5/15/23',
      months: 1,
      claimLine: 7,
      scheduledCheckout: '4/15/23',
      actualCheckout: '4/13/23',
      hasDateMismatch: true,
      familyName: 'Johnson',
      childName: 'Emma Johnson',
      childAge: '6',
      medicaidId: 'MD78901234',
      totalBilled: '$980.00',
      totalAllowed: '$840.00',
      totalPaid: '$840.00',
      totalNotPaid: '$140.00',
      dailyRate: '$140.00',
      totalNights: 7,
      actualNights: 5,
      revCodes: '0658 0270',
      roomType: 'Family Suite',
      facilityId: 'RMHC-ATL-01',
      eligibilityStatus: 'Verified',
      status: 'Medicaid-Eligible Family Stay'
    },
    {
      id: '18456',
      rule: 'Medicaid-Pending Verification',
      description: 'Family accommodation for child receiving outpatient therapy.',
      fdos: '5/1/23 - 5/10/23',
      datePaid: 'Pending',
      months: 1,
      claimLine: 10,
      scheduledCheckout: '5/10/23',
      actualCheckout: '5/10/23',
      hasDateMismatch: false,
      familyName: 'Garcia',
      childName: 'Miguel Garcia',
      childAge: '4',
      medicaidId: 'MD65432198',
      totalBilled: '$1,400.00',
      totalAllowed: 'Pending',
      totalPaid: '$0.00',
      totalNotPaid: '$1,400.00',
      dailyRate: '$140.00',
      totalNights: 10,
      actualNights: 10,
      revCodes: '0658 0270 0272',
      roomType: 'Family Suite',
      facilityId: 'RMHC-ATL-01',
      eligibilityStatus: 'Pending Verification',
      status: 'Medicaid-Pending Verification'
    },
    {
      id: '19023',
      rule: 'Medicaid-Approved Stay',
      description: 'Family accommodation for child receiving extended inpatient care.',
      fdos: '6/15/23 - 7/15/23',
      datePaid: '8/1/23',
      months: 1,
      claimLine: 31,
      scheduledCheckout: '7/15/23',
      actualCheckout: '7/12/23',
      hasDateMismatch: true,
      familyName: 'Williams',
      childName: 'Tyler Williams',
      childAge: '9',
      medicaidId: 'MD12345678',
      totalBilled: '$4,340.00',
      totalAllowed: '$4,200.00',
      totalPaid: '$4,200.00',
      totalNotPaid: '$140.00',
      dailyRate: '$140.00',
      totalNights: 31,
      actualNights: 28,
      revCodes: '0658 0270 0272 0273',
      roomType: 'Extended Stay Suite',
      facilityId: 'RMHC-ATL-01',
      eligibilityStatus: 'Verified',
      status: 'Medicaid-Approved Stay'
    },
    {
      id: '19245',
      rule: 'Medicaid-Eligible Transportation',
      description: 'Family accommodation with transportation services to Children\'s Hospital.',
      fdos: '7/5/23 - 7/12/23',
      datePaid: '8/15/23',
      months: 1,
      claimLine: 8,
      scheduledCheckout: '7/12/23',
      actualCheckout: '7/12/23',
      hasDateMismatch: false,
      familyName: 'Thompson',
      childName: 'Aiden Thompson',
      childAge: '3',
      medicaidId: 'MD87654321',
      totalBilled: '$1,260.00',
      totalAllowed: '$1,260.00',
      totalPaid: '$1,260.00',
      totalNotPaid: '$0.00',
      dailyRate: '$140.00',
      totalNights: 8,
      actualNights: 8,
      revCodes: '0658 0270 0273',
      roomType: 'Family Suite',
      facilityId: 'RMHC-ATL-01',
      eligibilityStatus: 'Verified',
      status: 'Medicaid-Eligible Transportation'
    }
  ];

  const dateMismatchCount = claimsData.filter(c => c.hasDateMismatch && !resolvedMismatches.includes(c.id)).length;

  return (
    <div className="min-h-screen bg-gray-50" style={{ backgroundColor: '#e9e6e5' }}>
      {/* Navigation Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs py-1 px-2">
        <div className="container mx-auto">
          <p className="truncate">RMHC Dashboard / Client: Ronald McDonald House Charities / Project Name: Medicaid Claims Management - Family Accommodation Services</p>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="container mx-auto flex items-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center mr-4 hover:text-[#fec528] transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" />
            <span>Back to Claims</span>
          </button>
          <span className="mx-2 text-gray-400">/</span>
          <p>Family Accommodation Claims</p>
        </div>
      </div>

      {/* Header with Search */}
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
              <Search size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-amber-600" />
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="font-semibold text-gray-800">Client: Ronald McDonald House Charities</div>
            <div className="text-sm text-gray-600">Project: RMHC Family Support 1.0</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 py-2">
        <div className="bg-white rounded-lg shadow-md p-2 mb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center">
              <Info className="text-amber-500 mr-2" size={18} />
              <h2 className="text-lg font-semibold text-gray-800">Family Accommodation Claims ({claimsData.length})</h2>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-gray-600 mr-2 text-sm">ALL</span>
                <span className="text-sm text-amber-600">Filter by Status</span>
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-48 border border-gray-300 rounded py-1 px-2 text-sm"
                />
                <Search size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-amber-600" />
              </div>
              <span className="text-sm text-amber-600">advanced search</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-between mt-2 gap-2">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span>1 Of {Math.ceil(claimsData.length / 10)}</span>
              <ChevronLeft size={14} className="text-amber-600" />
              <ChevronRight size={14} className="text-amber-600" />
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
                <span className="text-sm text-amber-600">See Other Statuses</span>
              </div>
            </div>
          </div>
        </div>

        {/* Date Mismatch Alert Banner */}
        {dateMismatchCount > 0 && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-3 rounded shadow-sm">
            <div className="flex items-start">
              <div className="text-red-500 mr-3 mt-0.5 flex-shrink-0">
                ⚠️
              </div>
              <div>
                <h3 className="font-medium text-red-800">Date Mismatch Alert</h3>
                <p className="text-sm text-red-700 mt-1">
                  {dateMismatchCount} claims have a discrepancy between scheduled checkout and actual checkout dates. 
                  This may affect Medicaid reimbursement. Please review and resolve these claims.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {claimsData.map((claim) => (
            <div 
              key={claim.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleViewClaim(claim.id)}
            >
              {/* Date Mismatch Alert */}
              {claim.hasDateMismatch && !resolvedMismatches.includes(claim.id) && (
                <div className="bg-red-50 border-b border-red-100 p-2 flex items-center">
                  <div className="flex items-center w-full">
                    <button 
                      className="bg-red-600 hover:bg-red-700 text-white text-xs py-1.5 px-4 mr-4 rounded-md flex items-center shadow-sm font-medium"
                      onClick={(e) => handleResolveMismatch(e, claim.id)}
                    >
                      <Check size={14} className="mr-1" />
                      Resolve Date Mismatch
                    </button>
                    <span className="text-red-800 text-sm">
                      Date mismatch detected: Scheduled checkout: {claim.scheduledCheckout}, Actual checkout: {claim.actualCheckout}
                    </span>
                  </div>
                </div>
              )}
              
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-2 border-b border-amber-200">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-gray-700 font-medium mr-2">{claim.id}</span>
                    <FileText size={14} className="text-amber-600" />
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800 mr-1">Status:</span>
                    <span className={`${
                      claim.rule.includes('Pending') 
                        ? 'text-amber-600' 
                        : claim.rule.includes('Approved') 
                          ? 'text-green-600' 
                          : 'text-blue-600'
                    }`}>{claim.rule}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-2 border-b border-gray-200 bg-amber-50/50 text-xs text-gray-700">
                <p>{claim.description}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-2 border-b border-gray-200 text-xs">
                <div>
                  <p className="text-gray-600">Stay Period:</p>
                  <p className="font-medium">{claim.fdos}</p>
                </div>
                <div>
                  <p className="text-gray-600">Date Paid:</p>
                  <p className="font-medium">{claim.datePaid}</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-600">Total Nights:</p>
                    <p className="font-medium">{claim.totalNights}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Actual Nights:</p>
                    <p className={`font-medium ${claim.hasDateMismatch ? 'text-amber-600' : ''}`}>
                      {claim.actualNights}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-2 border-b border-gray-200 text-xs">
                <div>
                  <p className="text-gray-600">Family:</p>
                  <p className="font-medium">{claim.familyName}</p>
                </div>
                <div>
                  <p className="text-gray-600">Child:</p>
                  <p className="font-medium">{claim.childName}, Age {claim.childAge}</p>
                </div>
                <div>
                  <p className="text-gray-600">Medicaid ID:</p>
                  <p className="font-medium">{claim.medicaidId}</p>
                </div>
              </div>
              
              <div className="p-2 border-b border-gray-200 text-xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                  <div>
                    <p className="text-gray-600">Total Billed:</p>
                    <p className="font-medium">{claim.totalBilled}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Allowed:</p>
                    <p className="font-medium">{claim.totalAllowed}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Daily Rate:</p>
                    <p className="font-medium">{claim.dailyRate}</p>
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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <div>
                    <p className="text-gray-600">Revenue Codes:</p>
                    <p className="font-medium break-all">{claim.revCodes}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      0658: Ronald McDonald House<br />
                      0270: Medical Supplies<br />
                      {claim.revCodes.includes('0272') && '0272: Sterile Supplies\n'}
                      {claim.revCodes.includes('0273') && '0273: Transportation'}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Room Type:</p>
                    <p className="font-medium">{claim.roomType}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Eligibility Status:</p>
                    <p className={`font-medium ${
                      claim.eligibilityStatus === 'Verified' 
                        ? 'text-green-600' 
                        : claim.eligibilityStatus === 'Pending Verification'
                          ? 'text-amber-600'
                          : 'text-red-600'
                    }`}>{claim.eligibilityStatus}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-2 text-xs">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">Facility ID:</p>
                    <p className="font-medium">{claim.facilityId}</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex items-center text-amber-600">
                      <Home size={14} className="mr-1" />
                      <span>Lodging</span>
                    </div>
                    <div className="flex items-center text-amber-600">
                      <Calendar size={14} className="mr-1" />
                      <span>{claim.totalNights} nights</span>
                    </div>
                    <div className="flex items-center text-amber-600">
                      <Users size={14} className="mr-1" />
                      <span>Family of {Math.floor(Math.random() * 3) + 2}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}