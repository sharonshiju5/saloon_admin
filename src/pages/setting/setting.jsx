import { User, Mail, Building, Phone, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Setting() {
    const [adminData, setAdminData] = useState({
        admin_name: '',
        email: '',
        shop_name: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        // Get admin data from localStorage
        const storedAdmin = localStorage.getItem('admin');
        if (storedAdmin) {
            const admin = JSON.parse(storedAdmin);
            setAdminData({
                admin_name: admin.admin_name || '',
                email: admin.email || '',
                shop_name: admin.shop_name || '',
                phone: admin.phone || '',
                address: admin.address || ''
            });
        }
    }, []);

    return (
        <div className="w-full p-7">
            <div className="bg-white rounded-lg shadow-sm border p-6 max-w-2xl">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Admin Profile</h2>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-[#187A85]" />
                        <div>
                            <p className="text-sm text-gray-500">Name</p>
                            <p className="font-medium text-gray-900">{adminData.admin_name || 'Not provided'}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-[#187A85]" />
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium text-gray-900">{adminData.email || 'Not provided'}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Building className="w-5 h-5 text-[#187A85]" />
                        <div>
                            <p className="text-sm text-gray-500">Shop Name</p>
                            <p className="font-medium text-gray-900">{adminData.shop_name || 'Not provided'}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#187A85]" />
                        <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium text-gray-900">{adminData.phone || 'Not provided'}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#187A85]" />
                        <div>
                            <p className="text-sm text-gray-500">Address</p>
                            <p className="font-medium text-gray-900">{adminData.address || 'Not provided'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}