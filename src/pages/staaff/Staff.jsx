import filter from "../../assets/Branch/filter-lines.png"
import addbtn from "../../assets/Branch/plus_add_outline_24px.png"
import building from "../../assets/Branch/building.png"
import { Search, X, AlertTriangle, User, Building, Percent, Mail, Lock, Camera, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { addStaff, deleteStaff, getBranch, getStaff, updateStaff } from "../../apiServeces/apiServices"
import toast, { Toaster } from "react-hot-toast"

export default function STaffData() {
    const [staffData,setStaffData]= useState([])
    const [addStaffModal,setAddStaffModal]=useState(false)
    const [deleteModal, setDeleteModal] = useState({ isOpen: false, staff: null });
    const [branches, setBranches] = useState([])
    const [pagination, setPagination] = useState({ page: 1, limit: 12, total: 0, pages: 0 })
    const [currentPage, setCurrentPage] = useState(1)
    const [search,setsearch]=useState('')
    const [staffForm, setStaffForm] = useState({
        name: '',
        branch: '',
        salaryType: 'commission',
        commission: '',
        email: '',
        mobile: '',
        enableLogin: true,
        // otp: ['', '', '', ''],
        password: '',
        photo: null
    });
    const [editingStaff, setEditingStaff] = useState(null);
    const [filterModal, setFilterModal] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState('');

    const adminId=localStorage.getItem('adminId')

    const handleDeleteClick = (staff) => {
        setDeleteModal({ isOpen: true, staff });
    };

    const handleDeleteConfirm = () => {
        console.log('Deleting staff:', deleteModal.staff);
        setDeleteModal({ isOpen: false, staff: null });
    };

    const handleDeleteCancel = () => {
        setDeleteModal({ isOpen: false, staff: null });
    };

    async function GetStaffData(page = 1) {
        try {
          const response = selectedBranch ? 
            await getStaff(search, page, selectedBranch) : 
            await getStaff(search, page); 
        if(response.data){
            setStaffData(response.data || [])
            setPagination(response.pagination || { page: 1, limit: 10, total: 0, pages: 0 })
        }
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(()=>{
        GetStaffData(currentPage)
    },[currentPage,search,selectedBranch])

    async function GetBranchData() {
        try {
            // setLoading(true)
            const response = await getBranch()
            if (response.success) {
                setBranches(response.branches)
            }
        } catch (error) {
            // toast.error('Failed to load branches')
        } 
        // finally {
        //     setLoading(false)
        // }
    }

    async function AddStaffData() {
        try {
            const dummyImageUrl = 'https://saloon-bucket.s3.amazonaws.com/staff/dummy-staff-image.jpg';
            const salaryData = staffForm.salaryType === 'commission' 
                ? { commission_rate: staffForm.commission }
                : { fixed_salary: staffForm.commission };
            const response=await addStaff(adminId,staffForm.branch,staffForm.name,dummyImageUrl,staffForm.mobile,staffForm.salaryType,staffForm.email,salaryData)
            setAddStaffModal( false );
            if (response.success) {
                toast.success('Staff added successfully');
                GetStaffData(currentPage)
                setStaffForm({ name: '',
        branch: '',
        salaryType: 'commission',
        commission: '',
        email: '',
        mobile: '',
        enableLogin: true,
        // otp: ['', '', '', ''],
        password: '',
        photo: null})
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function HandelDdelete() {
        try {
            const response= await deleteStaff(deleteModal?.staff?._id)
            if (response) {
                handleDeleteCancel()
                GetStaffData(currentPage)
                toast.success("succesfully deleted")
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleEditClick = (staff) => {
        setEditingStaff(staff);
        setStaffForm({
            name: staff.staff_name,
            branch: staff.branch_id?._id || '',
            salaryType: staff.salary_type,
            commission: staff.commission || '',
            email: staff.email,
            mobile: staff.mobile,
            enableLogin: staff.enableLogin || true,
            // password: '',
            photo: null
        });
        setAddStaffModal(true);
        GetBranchData();
    };

    async function HandleUpdate() {
        try {
            const dummyImageUrl = 'https://saloon-bucket.s3.amazonaws.com/staff/dummy-staff-image.jpg';
            const salaryData = staffForm.salaryType === 'commission' 
                ? { commission_rate: staffForm.commission }
                : { fixed_salary: staffForm.commission };
            const response = await updateStaff(editingStaff._id, staffForm.branch, staffForm.name, dummyImageUrl, staffForm.mobile, staffForm.salaryType, staffForm.email, salaryData);
            if (response) {
                setAddStaffModal(false);
                setEditingStaff(null);
                GetStaffData(currentPage);
                toast.success('Staff updated successfully');
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to update staff');
        }
    }
    return (
        <div className="w-full  scroll-smooth overflow-auto" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
            <Toaster position="top-right" />

            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-0 pl-7">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="relative w-full sm:w-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            className="pl-10 pr-3 h-10 w-full sm:w-64 lg:w-80 border rounded-md border-gray-200 focus:outline-none shadow-sm bg-white focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                            type="text" placeholder="Search"
                            value={search}
                            onChange={(e)=>{setsearch(e.target.value)}}
                        />
                    </div>
                    <button onClick={() => {setFilterModal(true); GetBranchData();}} className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 w-full sm:w-auto justify-center">
                        <img className="w-4 h-4" src={filter} alt="" />
                        <span className="sm:inline">Filter</span>
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button onClick={()=>{setAddStaffModal(true);setEditingStaff(null);GetBranchData()}} className="bg-[#187A85] px-4 py-2 mr-7 rounded-md text-white flex items-center justify-center gap-2 hover:bg-[#129bd3] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl w-full sm:w-auto">
                        <img className="w-4 h-4" src={addbtn} alt="" />
                        Add Staff
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 p-7 sm:gap-x-8 md:gap-x-18 will-change-scroll">
                {staffData.map((branch, index) => (
                    <div key={index} className="h-[253px] w-[253px] bg-[#187A85] rounded-xl p-4 flex flex-col justify-between transition-transform duration-200 hover:scale-105">
                        <div className="text-center">
                            <img className="rounded-full w-30 h-30 mx-auto mb-2 object-cover" src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" alt="" />
                            <span className="text-white font-medium text-lg">{branch.staff_name}</span>
                        </div>

                        <div className="flex items-center justify-between -mt-2">
                            <div className="flex items-center gap-1">
                                <img className="h-4 w-4" src={building} alt="" />
                                <span className="text-white text-xs">{branch?.branch_id?.branch_name || 'No Branch'}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <img className="h-4 w-4" src={building} alt="" />
                                <span className="text-white text-xs">{branch.salary_type}</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button 
                                onClick={() => handleEditClick(branch)}
                                className="flex-1 bg-white py-1 px-2 rounded text-xs font-medium hover:bg-gray-100 transition-colors"
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => handleDeleteClick(branch)}
                                className="flex-1 bg-red-500 py-1 px-2 rounded text-xs font-medium text-white hover:bg-red-600 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filter Modal */}
            {filterModal && (
                <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
                    <div className="bg-white rounded-lg w-full max-w-md p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Filter by Branch</h2>
                            <button onClick={() => setFilterModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <div className="space-y-3">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="branch"
                                    value=""
                                    checked={selectedBranch === ''}
                                    onChange={(e) => setSelectedBranch(e.target.value)}
                                    className="mr-3 text-[#187A85] focus:ring-[#187A85]"
                                />
                                All Branches
                            </label>
                            {branches.map((branch) => (
                                <label key={branch._id} className="flex items-center">
                                    <input
                                        type="radio"
                                        name="branch"
                                        value={branch.branch_name}
                                        checked={selectedBranch === branch.branch_name}
                                        onChange={(e) => setSelectedBranch(e.target.value)}
                                        className="mr-3 text-[#187A85] focus:ring-[#187A85]"
                                    />
                                    {branch.branch_name}
                                </label>
                            ))}
                        </div>
                        
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={() => setFilterModal(false)}
                                className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {setFilterModal(false); setCurrentPage(1);}}
                                className="flex-1 px-4 py-2 bg-[#187A85] text-white rounded-lg hover:bg-[#129bd3] transition-colors"
                            >
                                Apply Filter
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Pagination */}
            {pagination.pages > 1 && (
                <div className="flex justify-end mr-5 md:mr-35 items-center gap-2 py-4">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    
                    {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-1 border rounded ${
                                currentPage === page
                                    ? 'bg-[#187A85] text-white border-[#187A85]'
                                    : 'hover:bg-gray-50'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, pagination.pages))}
                        disabled={currentPage === pagination.pages}
                        className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            )}

            {/* add staff modal */}
            {addStaffModal&&
                <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
                    <div className="bg-white rounded-lg w-full max-w-2xl max-h-[100vh] lg:max-h-[90vh] overflow-y-auto p-6">
                        <div className="flex justify-center relative items-center mb-2">
                            <div>
                            <button onClick={() => {setAddStaffModal(false); setEditingStaff(null);}} className="text-gray-400 hover:text-gray-600 absolute right-5 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                                <h2 className="text-lg font-semibold text-gray-900">{editingStaff ? 'Edit Staff' : 'Add new staff'}</h2>
                                <p className="text-gray-600 text-sm mt-1">{editingStaff ? 'Update staff details' : 'Enter staff details to include them in your salon\'s team list.'}</p>
                            </div>
                        </div>

                        <form onSubmit={(e) => {e.preventDefault(); editingStaff ? HandleUpdate() : AddStaffData();}} className="space-y-2">
                            {/* Photo Upload */}
                            <div className="flex justify-center mb-2">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                                        {staffForm.photo ? (
                                            <img src={URL.createObjectURL(staffForm.photo)} alt="Preview" className="w-full h-full object-cover rounded-full" />
                                        ) : (
                                            <User className="w-8 h-8 text-gray-400" />
                                        )}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => document.getElementById('photo-upload').click()}
                                        className="absolute -bottom-1 -right-1 bg-[#187A85] p-2 rounded-full text-white hover:bg-[#129bd3] transition-colors"
                                    >
                                        <Camera className="w-4 h-4" />
                                    </button>
                                    <input
                                        id="photo-upload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => setStaffForm({...staffForm, photo: e.target.files[0]})}
                                    />
                                </div>
                            </div>

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        value={staffForm.name}
                                        onChange={(e) => setStaffForm({...staffForm, name: e.target.value})}
                                        className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                                        placeholder="Enter staff name"
                                    />
                                </div>
                            </div>

                            {/* Branch */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                                <div className="relative">
                                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <select
                                        value={staffForm.branch}
                                        onChange={(e) => setStaffForm({...staffForm, branch: e.target.value})}
                                        className="max-w-lg pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85] appearance-none"
                                    >
                                        <option value="">Select branch</option>
                                        {branches.map((branch,inedx)=>(
                                        <option value={branch._id}>{branch?.branch_name}</option>

                                        ))}
                                        {/* <option value="main">Main Branch</option>
                {/* {staffData.map((branch, index) => ( */}
                                        <option value="downtown">Downtown Branch</option> */}
                                    </select>
                                </div>
                            </div>

                            {/* Salary Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Salary type</label>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setStaffForm({...staffForm, salaryType: 'commission'})}
                                        className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
                                            staffForm.salaryType === 'commission'
                                                ? 'bg-[#187A85] text-white border-[#187A85]'
                                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        Commission
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStaffForm({...staffForm, salaryType: 'fixed'})}
                                        className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
                                            staffForm.salaryType === 'fixed'
                                                ? 'bg-[#187A85] text-white border-[#187A85]'
                                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        Fixed
                                    </button>
                                </div>
                            </div>

                            {/* Commission/Salary */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {staffForm.salaryType === 'commission' ? 'Commission (%)' : 'Salary'}
                                </label>
                                <div className="relative">
                                    <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="number"
                                        value={staffForm.commission}
                                        onChange={(e) => setStaffForm({...staffForm, commission: e.target.value})}
                                        className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                                        placeholder={staffForm.salaryType === 'commission' ? 'Enter commission %' : 'Enter salary amount'}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="email"
                                        value={staffForm.email}
                                        onChange={(e) => setStaffForm({...staffForm, email: e.target.value})}
                                        className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                                        placeholder="Enter email address"
                                    />
                                </div>
                            </div>

                            {/* Mobile */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="tel"
                                        value={staffForm.mobile}
                                        onChange={(e) => setStaffForm({...staffForm, mobile: e.target.value})}
                                        className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                                        placeholder="Enter mobile number"
                                    />
                                </div>
                            </div>

                            {/* Enable Login Toggle */}
                            <div className="flex items-center justify-between py-2">
                                <span className="text-sm font-medium text-gray-700">Enable login for this staff</span>
                                <button
                                    type="button"
                                    onClick={() => setStaffForm({...staffForm, enableLogin: !staffForm.enableLogin})}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${staffForm.enableLogin ? 'bg-[#187A85]' : 'bg-gray-200'}`}
                                >
                                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${staffForm.enableLogin ? 'translate-x-6' : 'translate-x-1'}`} />
                                </button>
                            </div>

                            {/* OTP - Commented out */}
                            {/* {staffForm.enableLogin && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
                                    <div className="flex gap-2">
                                        {staffForm.otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                maxLength="1"
                                                value={digit}
                                                onChange={(e) => {
                                                    const newOtp = [...staffForm.otp];
                                                    newOtp[index] = e.target.value;
                                                    setStaffForm({...staffForm, otp: newOtp});
                                                }}
                                                className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )} */}

                            {/* Password */}
                            {/* {staffForm.enableLogin && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="password"
                                            value={staffForm.password}
                                            onChange={(e) => setStaffForm({...staffForm, password: e.target.value})}
                                            className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                </div>
                            )} */}

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => {setAddStaffModal(false); setEditingStaff(null);}}
                                    className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-[#187A85] text-white rounded-lg hover:bg-[#129bd3] transition-colors"
                                >
                                    {editingStaff ? 'Update Staff' : 'Add Staff'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }

            {/* Delete Modal */}
            {deleteModal.isOpen && (
                <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 transform animate-slideIn">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="w-6 h-6 text-red-500" />
                                <h2 className="text-lg font-semibold text-gray-900">Delete Staff</h2>
                            </div>
                            <button onClick={handleDeleteCancel} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete <span className="font-medium text-xl text-red-500"> {deleteModal.staff?.staff_name} </span>? 
                            This action cannot be undone.
                        </p>
                        
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={handleDeleteCancel}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={HandelDdelete}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideIn {
                    from { 
                        opacity: 0;
                        transform: scale(0.9) translateY(-20px);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-slideIn {
                    animation: slideIn 0.3s ease-out;
                }
            `}</style>
        </div>
    )
}