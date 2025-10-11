import filter from "../../assets/Branch/filter-lines.png"
import addbtn from "../../assets/Branch/plus_add_outline_24px.png"
import building from "../../assets/Branch/building.png"
import { Search } from 'lucide-react'
export default function Branch() {

    const branches = [
        {
            id: 1,
            name: "Branch 1",
            address: "123 Main St, City, Country",
            phone: "+00000000000000",
            email: "branch1@example.com",
            status: "Active",
            created_at: "2023-08-01",
            updated_at: "2023-08-05"
        },
        {
            id: 2,
            name: "Branch 2",
            address: "456 Elm St, City, Country",
            phone: "+00000000000000",
            email: "branch2@example.com",
            status: "Inactive",
            created_at: "2023-08-02",
            updated_at: "2023-08-06"
        },
        {
            id: 3,
            name: "Branch 2",
            address: "456 Elm St, City, Country",
            phone: "+00000000000000",
            email: "branch2@example.com",
            status: "Inactive",
            created_at: "2023-08-02",
            updated_at: "2023-08-06"
        },
        {
            id: 4,
            name: "Branch 2",
            address: "456 Elm St, City, Country",
            phone: "+00000000000000",
            email: "branch2@example.com",
            status: "Inactive",
            created_at: "2023-08-02",
            updated_at: "2023-08-06"
        },
        {
            id: 5,
            name: "Branch 2",
            address: "456 Elm St, City, Country",
            phone: "+00000000000000",
            email: "branch2@example.com",
            status: "Inactive",
            created_at: "2023-08-02",
            updated_at: "2023-08-06"
        },
        {
            id: 6,
            name: "Branch 2",
            address: "456 Elm St, City, Country",
            phone: "+00000000000000",
            email: "branch2@example.com",
            status: "Inactive",
            created_at: "2023-08-02",
            updated_at: "2023-08-06"
        },{
            id: 6,
            name: "Branch 2",
            address: "456 Elm St, City, Country",
            phone: "+00000000000000",
            email: "branch2@example.com",
            status: "Inactive",
            created_at: "2023-08-02",
            updated_at: "2023-08-06"
        },{
            id: 6,
            name: "Branch 2",
            address: "456 Elm St, City, Country",
            phone: "+00000000000000",
            email: "branch2@example.com",
            status: "Inactive",
            created_at: "2023-08-02",
            updated_at: "2023-08-06"
        },{
            id: 6,
            name: "Branch 2",
            address: "456 Elm St, City, Country",
            phone: "+00000000000000",
            email: "branch2@example.com",
            status: "Inactive",
            created_at: "2023-08-02",
            updated_at: "2023-08-06"
        },{
            id: 6,
            name: "Branch 2",
            address: "456 Elm St, City, Country",
            phone: "+00000000000000",
            email: "branch2@example.com",
            status: "Inactive",
            created_at: "2023-08-02",
            updated_at: "2023-08-06"
        },{
            id: 6,
            name: "Branch 2",
            address: "456 Elm St, City, Country",
            phone: "+00000000000000",
            email: "branch2@example.com",
            status: "Inactive",
            created_at: "2023-08-02",
            updated_at: "2023-08-06"
        },
        // Add more branches as needed
    ];

    return (
        <div className="w-full scroll-smooth overflow-auto" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-5 p-5">
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
                    <button className="bg-[#187A85] px-4 py-2 rounded-md text-white flex items-center justify-center gap-2 hover:bg-[#129bd3] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl w-full sm:w-auto">
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
                            <h1 className="text-2xl text-white">{branch.name}</h1>
                            <div className="w-full flex items-center">
                            <img src={building} alt="" />
                            <span className="text-white text-sm mt-3 ml-2">{branch.address}</span>
                            </div>
                        </div>
                        <div className="w-full flex justify-around">
                            <button className="w-1/3 bg-white mt-2 rounded-md">Edit</button>
                            <button className="w-1/3 bg-white mt-2 rounded-md">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}