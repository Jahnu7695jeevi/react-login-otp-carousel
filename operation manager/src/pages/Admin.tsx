
import AdminPanel from "@/components/AdminPanel";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50/40 to-red-50/30">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-rose-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-800 to-rose-600 bg-clip-text text-transparent">Admin Panel</h1>
                <p className="text-sm text-rose-700">System administration and configuration</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-gradient-to-r from-rose-50 to-pink-50 text-rose-700 border-rose-200/60 shadow-sm">
                Operations Manager
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <AdminPanel />
        </div>
      </div>
    </div>
  );
};

export default Admin;
