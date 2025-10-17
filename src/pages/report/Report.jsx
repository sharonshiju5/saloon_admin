import { useState } from "react";


export default function Reports() {

    const [reprtfeild,setReportfeild]=useState(true)
    const salonTransactions = [
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        },
        {
            date: "03/10/2026",
            branch: "man salon",
            staff: "athul",
            number: "77770 77770",
            type: "cash",
            credited: 2000,
            debited: 3000,
            balance: 4000
        }
    ];

    return (
        <div className="min-w-0 flex-1 capitalize" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#187A85] rounded-lg p-4 text-white transform transition-transform duration-200 hover:scale-105">
                    <h3 className="text-sm opacity-80">Total Revenue</h3>
                    <p className="text-2xl font-bold">₹45,000</p>
                </div>
                <div className="bg-[#129bd3] rounded-lg p-4 text-white transform transition-transform duration-200 hover:scale-105">
                    <h3 className="text-sm opacity-80">Total Transactions</h3>
                    <p className="text-2xl font-bold">156</p>
                </div>
                <div className="bg-green-600 rounded-lg p-4 text-white transform transition-transform duration-200 hover:scale-105">
                    <h3 className="text-sm opacity-80">Active Staff</h3>
                    <p className="text-2xl font-bold">12</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex flex-wrap gap-2">
                    <button onClick={()=>{setReportfeild(true)}} className="px-4 py-2 capitalize rounded-md transition-colors hover:bg-gray-100">
                        staff report
                        {reprtfeild && <div className="bg-[#187A85] h-1 w-4/5 rounded-2xl animate-underlineSlide mt-1"></div>}
                    </button>
                    <button onClick={()=>{setReportfeild(false)}} className="px-4 py-2 capitalize rounded-md transition-colors hover:bg-gray-100">
                        branch report
                        {!reprtfeild && <div className="bg-[#187A85] h-1 w-4/5 rounded-2xl animate-underlineSlide mt-1"></div>}
                    </button>
                </div>
                <button className="bg-[#187A85] hover:bg-[#129bd3] text-white px-4 py-2 capitalize rounded-md transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl w-full sm:w-auto">
                    download report
                </button>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="overflow-x-auto border rounded-xl border-gray-300">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#187A85]">
                                <th className="text-left px-6 py-4 text-white font-semibold whitespace-nowrap">Date</th>
                                <th className="text-left px-6 py-4 text-white font-semibold whitespace-nowrap">Branch</th>
                                <th className="text-left px-6 py-4 text-white font-semibold whitespace-nowrap">Staff</th>
                                <th className="text-left px-6 py-4 text-white font-semibold whitespace-nowrap">Number</th>
                                <th className="text-left px-6 py-4 text-white font-semibold whitespace-nowrap">Type</th>
                                <th className="text-right px-6 py-4 text-white font-semibold whitespace-nowrap">Credited</th>
                                <th className="text-right px-6 py-4 text-white font-semibold whitespace-nowrap">Debited</th>
                                <th className="text-right px-6 py-4 text-white font-semibold whitespace-nowrap">Balance</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {salonTransactions.map((transaction, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">{transaction.date}</td>
                                    <td className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap capitalize">{transaction.branch}</td>
                                    <td className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap capitalize">{transaction.staff}</td>
                                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">{transaction.number}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                                            {transaction.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-green-600 font-semibold text-right whitespace-nowrap">₹{transaction.credited}</td>
                                    <td className="px-6 py-4 text-red-600 font-semibold text-right whitespace-nowrap">₹{transaction.debited}</td>
                                    <td className="px-6 py-4 text-gray-900 font-semibold text-right whitespace-nowrap">₹{transaction.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
             <style jsx>{`
 @keyframes underlineSlide {
        0% {
            transform: scaleX(0);
            transform-origin: left;
            opacity: 0;
        }
        100% {
            transform: scaleX(1);
            transform-origin: left;
            opacity: 1;
        }
    }
    
    .animate-underlineSlide {
        animation: underlineSlide 0.35s ease-out forwards;
    }
    `}</style>
{/* </div> */}
        </div>
        
    )
    
}