import filter from "../../assets/Branch/filter-lines.png"
import addbtn from "../../assets/Branch/plus_add_outline_24px.png"
import building from "../../assets/Branch/building.png"
import { Search, X, AlertTriangle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getStaff } from "../../apiServeces/apiServices"

export default function STaffData() {
    const [staffData,setStaffData]= useState([])
    const [deleteModal, setDeleteModal] = useState({ isOpen: false, staff: null });

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

    async function GetStaffData() {
        try {
          const response = await getStaff(); 
        if(response.staff){
            setStaffData(response.staff)
        }
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(()=>{
        GetStaffData()
    },[])
    return (
        <div className="w-full  scroll-smooth overflow-auto" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-0 pl-7">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="relative w-full sm:w-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            className="pl-10 pr-3 h-10 w-full sm:w-64 lg:w-80 border rounded-md border-gray-200 focus:outline-none shadow-sm bg-white focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                            type="text" placeholder="Search"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 w-full sm:w-auto justify-center">
                        <img className="w-4 h-4" src={filter} alt="" />
                        <span className="sm:inline">Filter</span>
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button className="bg-[#187A85] px-4 py-2 mr-7 rounded-md text-white flex items-center justify-center gap-2 hover:bg-[#129bd3] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl w-full sm:w-auto">
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
                                <span className="text-white text-xs">{branch?.branch_id}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <img className="h-4 w-4" src={building} alt="" />
                                <span className="text-white text-xs">commission:{branch?.commission_rate}</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 bg-white py-1 px-2 rounded text-xs font-medium hover:bg-gray-100 transition-colors">Edit</button>
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
                            Are you sure you want to delete <span className="font-medium">"{deleteModal.staff?.name}"</span>? 
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
                                onClick={handleDeleteConfirm}
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