
import OpsView from "@/components/OpsView";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const OpsViewPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50/40 to-fuchsia-50/30">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-purple-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">Ops View</h1>
                <p className="text-sm text-purple-700">Operations management and event tracking</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-gradient-to-r from-purple-50 to-violet-50 text-purple-700 border-purple-200/60 shadow-sm">
                Operations Manager
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <OpsView />
        </div>
      </div>
    </div>
  );
};

export default OpsViewPage;
