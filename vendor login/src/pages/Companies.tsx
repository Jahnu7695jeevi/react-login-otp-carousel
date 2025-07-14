
import CompanyList from "@/components/CompanyList";
import CompanyOnboarding from "@/components/CompanyOnboarding";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Companies = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/40 to-violet-50/30">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-blue-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">Companies</h1>
                <p className="text-sm text-blue-700">Manage company registrations and details</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200/60 shadow-sm">
                Operations Manager
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {showOnboarding ? (
            <CompanyOnboarding onBack={() => setShowOnboarding(false)} />
          ) : (
            <CompanyList onAddCompany={() => setShowOnboarding(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Companies;
