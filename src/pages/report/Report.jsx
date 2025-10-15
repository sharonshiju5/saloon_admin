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
        <div className="p-5">
            <div className="w-full h-15 p-4 grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3">
                <div className="bg-green-800 rounded-sm p-3 pl-5">d</div>
                <div className="bg-green-800 rounded-sm p-3 pl-5">d</div>
                <div className="bg-green-800 rounded-sm p-3 pl-5 ">d</div>
            </div>
            <div className="w-full mt-35 md:mt-5 flex justify-between capitalize ">
                <div>
                    <button onClick={()=>{setReportfeild(true)}} className=" p-3 capitalize rounded-md mr-5">
                        staff report
                        {
                            reprtfeild&&
                        <div className="bg-[#187A85] h-1 w-4/5 rounded-2xl animate-underlineSlide"></div>
                        }
                    </button>
                    <button onClick={()=>{setReportfeild(false)}} className=" capitalize p-3 rounded-md">
                        branch report
                        {
                            !reprtfeild &&
                        <div className="bg-[#187A85] h-1 w-4/5 rounded-2xl animate-underlineSlide"></div>
                        }
                    </button>
                </div>
                <button className="bg-blue-600 p-3 capitalize rounded-md">
                    download 
                </button>
            </div>
            <div className="w-full h-auto  p-5">
                <div className="overflow-x-auto">
                    <table className="w-full border-1 min-w-[800px]">
                    <thead className="bg-[#187A85] text-white">
                        <tr className="capitalize">
                            <th className="text-left px-4 py-3">date</th>
                            <th className="text-left px-4 py-3">branches</th>
                            <th className="text-left px-4 py-3">staff</th>
                            <th className="text-left px-4 py-3">number</th>
                            <th className="text-left px-4 py-3">type</th>
                            <th className="text-right px-4 py-3">credited</th>
                            <th className="text-right px-4 py-3">debited</th>
                            <th className="text-right px-4 py-3">balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salonTransactions.map((transaction, index) => (
                            <tr key={index} className="border-b odd:bg-white even:bg-[#d4faff] hover:bg-gray-50">
                                <td className="px-4 py-3">{transaction.date}</td>
                                <td className="px-4 py-3">{transaction.branch}</td>
                                <td className="px-4 py-3">{transaction.staff}</td>
                                <td className="px-4 py-3">{transaction.number}</td>
                                <td className="px-4 py-3">{transaction.type}</td>
                                <td className="px-4 py-3 text-right">{transaction.credited}</td>
                                <td className="px-4 py-3 text-right">{transaction.debited}</td>
                                <td className="px-4 py-3 text-right">{transaction.balance}</td>
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