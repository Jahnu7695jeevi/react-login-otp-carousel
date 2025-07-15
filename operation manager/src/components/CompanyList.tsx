import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Edit, Eye, FileText, User, Filter, Upload } from "lucide-react";
import { useState } from "react";

interface CompanyListProps {
  onAddCompany: () => void;
}

const CompanyList = ({ onAddCompany }: CompanyListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const companies = [
    {
      id: 1,
      name: "TechCorp Solutions",
      type: "Parent Company",
      investor: "Sequoia Capital",
      city: "Chennai",
      status: "Active",
      eventPreferences: {
        occasions: ["Birthday", "Wedding Anniversary", "Work Anniversary", "Company Anniversary"],
        celebrateWith: ["Employee Birthday", "Spouse Birthday", "Kid 1 Birthday"],
        giftPreference: "Varied (Different gifts or cakes based on employee levels)"
      },
      contactManager: {
        name: "Rajesh Kumar",
        contact: "+91 98765 43210",
        email: "rajesh.kumar@techcorp.com"
      }
    },
    {
      id: 2,
      name: "Innovation Labs",
      type: "Individual Unit",
      investor: "Accel Partners",
      city: "Coimbatore",
      status: "Active",
      eventPreferences: {
        occasions: ["Birthday", "Wedding Anniversary", "Work Anniversary", "Company Anniversary"],
        celebrateWith: ["Employee Birthday", "Spouse Birthday", "Kid 1 Birthday"],
        giftPreference: "Varied (Different gifts or cakes based on employee levels)"
      },
      contactManager: {
        name: "Priya Sharma",
        contact: "+91 87654 32109",
        email: "priya.sharma@innovationlabs.com"
      }
    },
    {
      id: 3,
      name: "Global Systems",
      type: "Parent Company",
      investor: "Kalaari Capital",
      city: "Madurai",
      status: "Inactive",
      eventPreferences: {
        occasions: ["Birthday", "Wedding Anniversary", "Work Anniversary", "Company Anniversary"],
        celebrateWith: ["Employee Birthday", "Spouse Birthday"],
        giftPreference: "Varied (Different gifts or cakes based on employee levels)"
      },
      contactManager: {
        name: "Arun Patel",
        contact: "+91 76543 21098",
        email: "arun.patel@globalsystems.com"
      }
    },
    {
      id: 4,
      name: "Smart Solutions",
      type: "Individual Unit",
      investor: "Nexus Venture",
      city: "Hosur",
      status: "Active",
      eventPreferences: {
        occasions: ["Birthday", "Wedding Anniversary", "Work Anniversary", "Company Anniversary"],
        celebrateWith: ["Employee Birthday", "Spouse Birthday", "Kid 1 Birthday"],
        giftPreference: "Varied (Different gifts or cakes based on employee levels)"
      },
      contactManager: {
        name: "Meera Singh",
        contact: "+91 98765 43210",
        email: "meera.singh@smartsolutions.com"
      }
    }
  ];

  // Filter companies based on search and filters
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.investor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || company.type === typeFilter;
    const matchesCity = cityFilter === "all" || company.city === cityFilter;
    const matchesStatus = statusFilter === "all" || company.status === statusFilter;
    
    return matchesSearch && matchesType && matchesCity && matchesStatus;
  });

  // Get unique values for filter options
  const uniqueTypes = [...new Set(companies.map(c => c.type))];
  const uniqueCities = [...new Set(companies.map(c => c.city))];
  const uniqueStatuses = [...new Set(companies.map(c => c.status))];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Company Management</h2>
          <p className="text-gray-600">Manage all registered companies and their details</p>
        </div>
        <Button onClick={onAddCompany} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Company
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col space-y-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search companies..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>
              
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Company Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {uniqueTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={cityFilter} onValueChange={setCityFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  {uniqueCities.map(city => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  {uniqueStatuses.map(status => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setSearchTerm("");
                  setTypeFilter("all");
                  setCityFilter("all");
                  setStatusFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">S.No.</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">COMPANY NAME</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">COMPANY TYPE</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">INVESTOR</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">CITY</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">STATUS</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCompanies.map((company, index) => (
                  <tr key={company.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 font-medium text-gray-900">{company.name}</td>
                    <td className="py-3 px-4 text-gray-600">{company.type}</td>
                    <td className="py-3 px-4 text-gray-600">{company.investor}</td>
                    <td className="py-3 px-4 text-gray-600">{company.city}</td>
                    <td className="py-3 px-4">
                      <Badge 
                        variant={company.status === 'Active' ? 'default' : 'secondary'}
                        className={company.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                      >
                        {company.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle>Company Details - {company.name}</DialogTitle>
                            </DialogHeader>
                            <CompanyDetailsModal company={company} />
                          </DialogContent>
                        </Dialog>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {filteredCompanies.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No companies found matching your filters.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const CompanyDetailsModal = ({ company }: { company: any }) => {
  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="contract">Contract</TabsTrigger>
        <TabsTrigger value="subscription">Subscription</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      
      <TabsContent value="details" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              Company Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Company Name</label>
                <p className="text-gray-900">{company.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Company Type</label>
                <p className="text-gray-900">{company.type}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Investor</label>
                <p className="text-gray-900">{company.investor}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">City</label>
                <p className="text-gray-900">{company.city}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="contract" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Contract Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4">
                <Button variant="outline" className="mt-2">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Contract PDF
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2">Upload PDF contracts for this company</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="subscription" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Subscription Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Occasions like to celebrate:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700">Birthday</Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700">Wedding Anniversary</Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700">Work Anniversary</Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700">Company Anniversary</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Prefer to celebrate with:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-700">Employee Birthday</Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700">Spouse Birthday</Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700">Kid 1 Birthday</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">For Special Occasions, would you prefer:</h4>
              <Badge variant="outline" className="bg-purple-50 text-purple-700">
                Varied (Different gifts or cakes based on employee levels)
              </Badge>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="contact" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Point of Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700">Manager Name</label>
              <p className="text-gray-900">{company.contactManager.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Contact</label>
              <p className="text-gray-900">{company.contactManager.contact}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email ID</label>
              <p className="text-gray-900">{company.contactManager.email}</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default CompanyList;
