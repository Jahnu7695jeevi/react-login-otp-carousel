
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Dashboard = () => {
  const [isEventsDialogOpen, setIsEventsDialogOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [isCityDialogOpen, setIsCityDialogOpen] = useState(false);

  const cityData = {
    Chennai: {
      companies: [
        { name: "TCS Chennai", employees: 850 },
        { name: "Infosys Chennai", employees: 720 },
        { name: "Wipro Chennai", employees: 650 },
        { name: "HCL Chennai", employees: 470 },
        { name: "Cognizant Chennai", employees: 200 }
      ]
    },
    Coimbatore: {
      companies: [
        { name: "Lakshmi Mills", employees: 320 },
        { name: "PSG Tech Park", employees: 280 },
        { name: "KG Denim", employees: 450 },
        { name: "Bannari Amman Group", employees: 380 },
        { name: "Texmo Industries", employees: 224 }
      ]
    },
    Madurai: {
      companies: [
        { name: "Madurai Textiles", employees: 420 },
        { name: "Thiagarajar Mills", employees: 380 },
        { name: "Pandian Chemicals", employees: 350 },
        { name: "Madura Coats", employees: 480 },
        { name: "Southern Petrochemicals", employees: 473 }
      ]
    },
    Hosur: {
      companies: [
        { name: "TVS Motor Company", employees: 580 },
        { name: "Ashok Leyland", employees: 420 },
        { name: "Titan Industries", employees: 350 },
        { name: "Bharat Electronics", employees: 180 },
        { name: "Hosur Industries", employees: 70 }
      ]
    }
  };

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    setIsCityDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Flash Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 backdrop-blur-sm shadow-sm border border-blue-200/60">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-blue-700">Total Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">124</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 backdrop-blur-sm shadow-sm border border-emerald-200/60">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-emerald-700">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-800">8,247</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 backdrop-blur-sm shadow-sm border border-purple-200/60">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-purple-700">Events This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-800">47</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100/50 backdrop-blur-sm shadow-sm border border-amber-200/60">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-amber-700">Events This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-800">12</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-rose-50 to-rose-100/50 backdrop-blur-sm shadow-sm border border-rose-200/60">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-rose-700">Active Vendors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-rose-800">36</div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Events Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/90 backdrop-blur-sm shadow-sm border border-slate-200/60">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">Today's Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">Total Events Today</span>
              <Dialog open={isEventsDialogOpen} onOpenChange={setIsEventsDialogOpen}>
                <DialogTrigger asChild>
                  <button className="text-2xl text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                    15
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Today's Events Breakdown</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg border border-pink-200">
                      <span className="text-pink-700">Birthdays</span>
                      <span className="text-xl text-pink-800">6</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                      <span className="text-purple-700">Wedding Anniversaries</span>
                      <span className="text-xl text-purple-800">4</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                      <span className="text-blue-700">Work Anniversaries</span>
                      <span className="text-xl text-blue-800">5</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">Completed</span>
              <span className="text-2xl text-slate-800">8</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">Pending</span>
              <span className="text-2xl text-slate-800">7</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">Companies Involved</span>
              <span className="text-2xl text-slate-800">12</span>
            </div>
          </CardContent>
        </Card>

        {/* City-wise Distribution */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-sm border border-slate-200/60">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">City-wise Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div 
              className="p-3 rounded-lg bg-slate-50/80 border border-slate-200/40 hover:bg-slate-100/80 transition-colors cursor-pointer"
              onClick={() => handleCityClick('Chennai')}
            >
              <div className="font-semibold text-slate-800">Chennai</div>
              <div className="text-sm text-slate-600">45 Companies</div>
              <div className="text-sm text-slate-600">2,890 Employees</div>
            </div>

            <div 
              className="p-3 rounded-lg bg-slate-50/80 border border-slate-200/40 hover:bg-slate-100/80 transition-colors cursor-pointer"
              onClick={() => handleCityClick('Coimbatore')}
            >
              <div className="font-semibold text-slate-800">Coimbatore</div>
              <div className="text-sm text-slate-600">28 Companies</div>
              <div className="text-sm text-slate-600">1,654 Employees</div>
            </div>

            <div 
              className="p-3 rounded-lg bg-slate-50/80 border border-slate-200/40 hover:bg-slate-100/80 transition-colors cursor-pointer"
              onClick={() => handleCityClick('Madurai')}
            >
              <div className="font-semibold text-slate-800">Madurai</div>
              <div className="text-sm text-slate-600">32 Companies</div>
              <div className="text-sm text-slate-600">2,103 Employees</div>
            </div>

            <div 
              className="p-3 rounded-lg bg-slate-50/80 border border-slate-200/40 hover:bg-slate-100/80 transition-colors cursor-pointer"
              onClick={() => handleCityClick('Hosur')}
            >
              <div className="font-semibold text-slate-800">Hosur</div>
              <div className="text-sm text-slate-600">19 Companies</div>
              <div className="text-sm text-slate-600">1,600 Employees</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* City Details Dialog */}
      <Dialog open={isCityDialogOpen} onOpenChange={setIsCityDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedCity} - Company Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {selectedCity && cityData[selectedCity as keyof typeof cityData]?.companies.map((company, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                <span className="text-slate-700">{company.name}</span>
                <span className="text-lg text-slate-800">{company.employees.toLocaleString()} employees</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
