
import VendorManagement from "@/components/VendorManagement";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const Vendors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50/40 to-yellow-50/30">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">Vendor Management</h1>
                <p className="text-sm text-amber-700">Manage your vendor relationships and partnerships</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border-amber-200/60 shadow-sm">
                Operations Manager
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <VendorManagement />
        </div>
      </div>
    </div>
  );
};

export default Vendors;
