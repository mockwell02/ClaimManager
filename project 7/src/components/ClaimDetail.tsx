import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Printer, Mail, FileText, Bell, ChevronLeft, AlertTriangle, Check, Search } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ClaimDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [claim, setClaim] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [dateMismatchResolved, setDateMismatchResolved] = useState(false);

  // Simulated claim data - in a real app, this would come from an API or context
  useEffect(() => {
    // This simulates fetching the claim data
    const fetchClaim = () => {
      setLoading(true);
      
      // Sample data that matches our dashboard
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
          previousClaim: { id: '17877', status: 'Pending' },
          nextClaim: { id: '17879', status: 'Approved' },
          houseLocation: 'RONALD MCDONALD HOUSE AUSTIN',
          address: '1315 Barbara Jordan Blvd',
          city: 'Austin, TX',
          accountNumber: 'RMHC-2023-0042',
          primaryGuardian: 'MARIA JOHNSON',
          providerID: 'TX74892651',
          task: 'Medicaid claim needs to be submitted by Friday',
          serviceDetails: [
            {
              dates: '4/9/23 - 4/12/23',
              type: 'Family Accommodation',
              code: 'RMHC-100',
              nights: 3,
              rate: '$ 140.00',
              total: '$ 420.00',
              status: 'Pending',
              eligible: 'Yes',
              note: 'Family accommodation during child\'s treatment at Children\'s Hospital'
            },
            {
              dates: '4/12/23 - 4/15/23',
              type: 'Family Accommodation',
              code: 'RMHC-100',
              nights: 2, // Actual nights (due to early checkout)
              rate: '$ 140.00',
              total: '$ 420.00', // This shows the billed amount (not matching actual)
              status: 'Pending',
              eligible: 'Yes',
              note: 'Extended stay due to treatment requirements'
            }
          ]
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
          previousClaim: { id: '18455', status: 'Approved' },
          nextClaim: { id: '18457', status: 'Pending' },
          houseLocation: 'RONALD MCDONALD HOUSE ATLANTA',
          address: '795 Gatewood Rd NE',
          city: 'Atlanta, GA',
          accountNumber: 'RMHC-2023-0043',
          primaryGuardian: 'ELENA GARCIA',
          providerID: 'GA65432198',
          task: 'Verify Medicaid eligibility documentation by Monday',
          serviceDetails: [
            {
              dates: '5/1/23 - 5/10/23',
              type: 'Family Accommodation',
              code: 'RMHC-100',
              nights: 10,
              rate: '$ 140.00',
              total: '$ 1,400.00',
              status: 'Pending',
              eligible: 'Pending',
              note: 'Family accommodation during child\'s outpatient therapy'
            }
          ]
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
          previousClaim: { id: '19022', status: 'Approved' },
          nextClaim: { id: '19024', status: 'Pending' },
          houseLocation: 'RONALD MCDONALD HOUSE CHICAGO',
          address: '211 E Grand Ave',
          city: 'Chicago, IL',
          accountNumber: 'RMHC-2023-0044',
          primaryGuardian: 'ROBERT WILLIAMS',
          providerID: 'IL98765432',
          task: 'Update discharge summary with final treatment notes',
          serviceDetails: [
            {
              dates: '6/15/23 - 7/15/23',
              type: 'Extended Stay Accommodation',
              code: 'RMHC-200',
              nights: 28,
              rate: '$ 140.00',
              total: '$ 4,340.00',
              status: 'Approved',
              eligible: 'Yes',
              note: 'Extended family accommodation during child\'s inpatient treatment'
            }
          ]
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
          previousClaim: { id: '19244', status: 'Approved' },
          nextClaim: { id: '19246', status: 'Pending' },
          houseLocation: 'RONALD MCDONALD HOUSE DALLAS',
          address: '4707 Bengal St',
          city: 'Dallas, TX',
          accountNumber: 'RMHC-2023-0045',
          primaryGuardian: 'SARAH THOMPSON',
          providerID: 'TX12378945',
          task: 'Submit transportation receipts for reimbursement',
          serviceDetails: [
            {
              dates: '7/5/23 - 7/12/23',
              type: 'Family Accommodation & Transportation',
              code: 'RMHC-300',
              nights: 8,
              rate: '$ 140.00',
              total: '$ 1,120.00',
              status: 'Approved',
              eligible: 'Yes',
              note: 'Family accommodation during child\'s treatment'
            },
            {
              dates: '7/5/23 - 7/12/23',
              type: 'Transportation Services',
              code: 'RMHC-301',
              nights: 8,
              rate: '$ 17.50',
              total: '$ 140.00',
              status: 'Approved',
              eligible: 'Yes',
              note: 'Daily transportation to Children\'s Hospital'
            }
          ]
        }
      ];
      
      const foundClaim = claimsData.find(c => c.id === id);
      
      if (foundClaim) {
        setClaim(foundClaim);
      } else {
        // Default to the first claim if ID not found
        setClaim(claimsData[0]);
      }
      
      setLoading(false);
    };
    
    fetchClaim();
  }, [id]);

  const handleBack = () => {
    navigate('/claims');
  };

  const handleResolveDateMismatch = () => {
    setDateMismatchResolved(true);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading claim details...</div>;
  }

  if (!claim) {
    return <div className="min-h-screen flex items-center justify-center">Claim not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{ backgroundColor: '#e9e6e5' }}>
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs py-1 px-2">
        <div className="container mx-auto">
          <p className="truncate">RMHC Dashboard / Client: Ronald McDonald House Charities / Project Name: Medicaid Claims Management - Family Accommodation Services</p>
        </div>
      </div>

      {/* Back Navigation */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="container mx-auto flex items-center">
          <button 
            onClick={handleBack}
            className="flex items-center mr-4 hover:text-[#fec528] transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" />
            <span>Back to Claims</span>
          </button>
          <span className="mx-2 text-gray-400">/</span>
          <p>Claim Detail: {claim.id}</p>
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
              <Search size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-amber-600" />
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="font-semibold text-gray-800">Client: Ronald McDonald House Charities</div>
            <div className="text-sm text-gray-600">Project: RMHC Family Support 1.0</div>
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
                <span className="p-2 rounded-full bg-[#e9e6e5] text-red-600">⚙️</span>
                <span className="font-semibold text-gray-800">Case No.: RMHC-2023-{claim.id}</span>
                <span className="bg-[#e9e6e5] text-red-600 px-3 py-1 rounded-full text-sm font-medium">Medicaid Claim</span>
              </div>
              <div className="flex space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" title="Print">
                  <Printer className="text-gray-600 hover:text-red-600" size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" title="Email">
                  <Mail className="text-gray-600 hover:text-red-600" size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" title="Documents">
                  <FileText className="text-gray-600 hover:text-red-600" size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" title="Notifications">
                  <Bell className="text-gray-600 hover:text-red-600" size={20} />
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Previous Case No.: RMHC-2023-{claim.previousClaim?.id || '00'}</span>
                <span className={`${
                  claim.previousClaim?.status === 'Pending' 
                    ? 'bg-[#e9e6e5] text-amber-600' 
                    : claim.previousClaim?.status === 'Approved' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                } px-2 py-0.5 rounded-full text-xs`}>{claim.previousClaim?.status || 'N/A'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1 rounded hover:bg-gray-100 transition-colors">
                  <ArrowLeft className="text-amber-600" size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100 transition-colors">
                  <ArrowRight className="text-amber-600" size={16} />
                </button>
                <span className="text-gray-600">Next Case No.: RMHC-2023-{claim.nextClaim?.id || '00'}</span>
                <span className={`${
                  claim.nextClaim?.status === 'Pending' 
                    ? 'bg-[#e9e6e5] text-amber-600' 
                    : claim.nextClaim?.status === 'Approved' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                } px-2 py-0.5 rounded-full text-xs`}>{claim.nextClaim?.status || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* Date Mismatch Alert */}
          {claim.hasDateMismatch && !dateMismatchResolved && (
            <div className="bg-amber-50 border-b border-amber-100 p-3 flex items-center justify-between">
              <div className="flex items-center">
                <AlertTriangle size={18} className="text-amber-500 mr-2" />
                <span className="text-amber-800 text-sm">
                  Date mismatch detected: Scheduled checkout: {claim.scheduledCheckout}, Actual checkout: {claim.actualCheckout}
                </span>
              </div>
              <button 
                className="bg-green-100 hover:bg-green-200 text-green-800 text-xs py-1 px-3 rounded flex items-center"
                onClick={handleResolveDateMismatch}
              >
                <Check size={14} className="mr-1" />
                Resolve
              </button>
            </div>
          )}

          <div className="grid grid-cols-12 gap-6 p-6">
            {/* Left Column */}
            <div className="col-span-12 md:col-span-4">
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <FileText className="text-red-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">{claim.houseLocation}</h3>
                    <p className="text-sm text-gray-600">{claim.address}</p>
                    <p className="text-sm text-gray-600">{claim.city}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2 text-gray-800">Family: {claim.familyName}</h4>
                  <div className="text-sm space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Child's Age:</span>
                      <span>{claim.childAge} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stay Dates:</span>
                      <span>{claim.fdos}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Length of Stay:</span>
                      <span>{claim.totalNights} nights</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Claim:</span>
                      <span>{claim.totalBilled}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="col-span-12 md:col-span-4">
              <div className="bg-[#e9e6e5]/30 rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="font-semibold mb-4 text-gray-800">CLAIM OVERVIEW</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Claim ID:</span>
                    <span className="text-gray-800">RMHC-2023-{claim.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Medicaid Provider ID:</span>
                    <span className="text-gray-800">{claim.providerID}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Claim Amount:</span>
                    <span className="text-red-600 font-medium">{claim.totalBilled}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-4 text-gray-800">Family Information</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Account: <span className="text-gray-800">{claim.accountNumber}</span></p>
                      <p className="text-gray-600">Medicaid ID: <span className="text-gray-800">{claim.medicaidId}</span></p>
                    </div>
                    <div>
                      <p className="text-gray-600">Primary Guardian: <span className="text-gray-800">{claim.primaryGuardian}</span></p>
                      <p className="text-gray-600">Child: <span className="text-gray-800">{claim.childName}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-12 md:col-span-4">
              <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-green-600 font-semibold mb-4">YOUR TASK</h3>
                <p className="text-sm mb-6 text-gray-600">{claim.task}</p>
                <button className="w-full bg-red-600 text-white rounded-lg py-3 hover:bg-red-700 transition-colors font-medium shadow-sm">
                  SUBMIT CLAIM
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
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Type</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Code</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nights</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eligible</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {claim.serviceDetails.map((service: any, index: number) => (
                    <React.Fragment key={index}>
                      <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-3 py-3 text-sm text-gray-600">{service.dates}</td>
                        <td className="px-3 py-3 text-sm text-gray-600">{service.type}</td>
                        <td className="px-3 py-3 text-sm text-gray-600">{service.code}</td>
                        <td className="px-3 py-3 text-sm text-gray-600">{service.nights}</td>
                        <td className="px-3 py-3 text-sm text-gray-600">{service.rate}</td>
                        <td className="px-3 py-3 text-sm text-red-600 font-medium">{service.total}</td>
                        <td className="px-3 py-3 text-sm text-gray-600">{service.status}</td>
                        <td className="px-3 py-3 text-sm font-medium text-green-600">{service.eligible}</td>
                      </tr>
                      {service.note && (
                        <tr className="bg-blue-50/50">
                          <td colSpan={8} className="px-3 py-2 text-sm text-gray-600">
                            <span className="font-medium text-blue-800">Note:</span> {service.note}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50 font-semibold">
                    <td colSpan={4} className="px-3 py-3 text-sm text-gray-700">TOTALS</td>
                    <td className="px-3 py-3 text-sm text-gray-700">{claim.dailyRate}</td>
                    <td className="px-3 py-3 text-sm text-red-600 font-bold">{claim.totalBilled}</td>
                    <td colSpan={2} className="px-3 py-3 text-sm text-gray-700">100% Medicaid Eligible</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="space-y-1 text-sm mb-4 md:mb-0">
                <p className="font-medium text-gray-700">Claim Information:</p>
                <p className="text-gray-600">Case ID: <span className="text-gray-800">RMHC-2023-{claim.id}</span></p>
                <p className="text-gray-600">Medicaid Provider ID: <span className="text-gray-800">{claim.providerID}</span></p>
                <p className="text-gray-600">Total Claim Amount: <span className="text-red-600 font-medium">{claim.totalBilled}</span></p>
              </div>
              <div className="text-3xl font-bold text-red-600 bg-white py-3 px-6 rounded-lg shadow-sm border border-gray-200">
                {claim.totalBilled}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}