import { Search, Eye, EyeOff, X } from 'lucide-react'
import { useEffect, useState } from "react"
import { addBranch, getBranch } from "../../apiServeces/apiServices"
import toast, { Toaster } from 'react-hot-toast'
import filter from "../../assets/Branch/filter-lines.png"
import addbtn from "../../assets/Branch/plus_add_outline_24px.png"
import building from "../../assets/Branch/building.png"
import Group from "../../assets/Branch/Group.png"
import Address from "../../assets/Branch/routing.png"
import map from "../../assets/Branch/map-pin.png"
import mail from "../../assets/Branch/mail.png"
import lock from "../../assets/Branch/lock.png"



export default function Branch() {

    const [branches, setBranches] = useState([])
    const [branchModal, setbranchModal] = useState(false)
    const adminData = JSON.parse(localStorage.getItem('admin'));
    const adminId = adminData?.admin_id;

    const [branchData, setBranchData] = useState({
        branchbranch_name: "",
        address: "",
        location: "",
        email: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    async function GetBranchData() {
        try {
            const response = await getBranch()
            if (response.success) {
                setBranches(response.branches)
            }
        } catch (error) {
            toast.error('Failed to load branches')
        }
    }

    useEffect(() => {
        GetBranchData()
    }, [])

    async function handelSubmit() {
        try {
            const response = await addBranch(branchData.branchbranch_name, branchData.location, branchData.email, branchData.password, adminId)
            if (response.success) {
                toast.success('Branch added successfully!')
                setbranchModal(false)
                setBranchData({
                    branchbranch_name: "",
                    address: "",
                    location: "",
                    email: "",
                    password: "",
                })
                GetBranchData()
            } else {
                toast.error(response.message || 'Failed to add branch')
            }
        } catch (error) {
            toast.error('Failed to add branch')
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
                        />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 w-full sm:w-auto justify-center">
                        <img className="w-4 h-4" src={filter} alt="" />
                        <span className="sm:inline">Filter</span>
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button onClick={() => setbranchModal(true)} className="bg-[#187A85] px-4 py-2 mr-7 rounded-md text-white flex items-center justify-center gap-2 hover:bg-[#129bd3] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl w-full sm:w-auto">
                        <img className="w-4 h-4" src={addbtn} alt="" />
                        Add Branch
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6 p-7 gap-x-12 will-change-scroll">
                {branches.map((branch, index) => (
                    <div key={index} className="w-full h-[193px] bg-[#0A9DD7] rounded-xl p-4 transform transition-transform duration-200 hover:scale-105">
                        {/* <span className="text-white font-medium">{branch.name}</span> */}
                        <div className="h-4/5 bg-[#187A85] p-5 grid grid-rows-2 gap-0 w-full  rounded-xl">
                            <h1 className="text-2xl text-white">{String(branch.branch_name || 'No Name')}</h1>
                            <div className="w-full flex items-center">
                                <img src={building} alt="" />
                                <span className="text-white text-sm mt-3 ml-2">{String(branch.location || 'No Location')}</span>
                            </div>
                        </div>
                        <div className="w-full flex justify-around">
                            <button className="w-1/3 bg-white mt-2 rounded-md">Edit</button>
                            <button className="w-1/3 bg-white mt-2 rounded-md">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            {branchModal &&
                <div className="fixed  inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white relative rounded-lg shadow-lg w-11/12 max-w-md p-6">
                        <button onClick={() => setbranchModal(false)} className='absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-gray-500 hover:text-gray-700'>
                            <X className="w-4 h-4" />
                        </button>
                        <div className="w-full flex flex-col justify-center text-center items-center mb-4">
                            <h2 className="text-2xl font-semibold mb-2 mt-4">Add branch information</h2>
                            <h2>Add and manage branch details to keep <br /> your business organized.</h2>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <span className="text-1xl">Branch Name</span>
                                <div className="relative">
                                    <img className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10" src={Group} alt="" />
                                    <input
                                        className="w-full pl-12 pr-3 py-2 shadow-2xl rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                                        type="text"
                                        name="branchbranch_name"
                                        value={branchData.branchbranch_name}
                                        onChange={(e) => { setBranchData({ ...branchData, [e.target.name]: e.target.value, }) }}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-1xl">address</span>
                                <div className="relative">
                                    <img className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10" src={Address} alt="" />
                                    <input
                                        className="w-full pl-12 pr-3 py-2 shadow-2xl rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                                        type="text"
                                        name="address"
                                        value={branchData.address}
                                        onChange={(e) => { setBranchData({ ...branchData, [e.target.name]: e.target.value, }) }}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-1xl"> location</span>
                                <div className="relative">
                                    <img className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10" src={map} alt="" />
                                    <input
                                        className="w-full pl-12 pr-3 py-2 shadow-2xl rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                                        type="text"
                                        name="location"
                                        value={branchData.location}
                                        onChange={(e) => { setBranchData({ ...branchData, [e.target.name]: e.target.value, }) }}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-1xl"> email</span>
                                <div className="relative">
                                    <img className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10" src={mail} alt="" />
                                    <input
                                        className="w-full pl-12 pr-3 py-2 shadow-2xl rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                                        type="text"
                                        name="email"
                                        value={branchData.email}
                                        onChange={(e) => { setBranchData({ ...branchData, [e.target.name]: e.target.value, }) }}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-1xl">password</span>
                                <div className="relative">
                                    <img className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10" src={lock} alt="" />
                                    <input
                                        className="w-full pl-12 pr-12 py-2 shadow-2xl rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#187A85] focus:border-[#187A85]"
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={branchData.password}
                                        onChange={(e) => { setBranchData({ ...branchData, [e.target.name]: e.target.value, }) }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setbranchModal(false)}
                                    className='border border-gray-300 w-2/5 p-1.5 rounded-lg hover:bg-gray-300'
                                >
                                    cancel
                                </button>
                                <button
                                    onClick={handelSubmit}
                                    className='border border-gray-300 w-2/5 p-1.5 rounded-lg hover:bg-[#0d5962] bg-[#187A85] text-white'
                                >
                                    save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}