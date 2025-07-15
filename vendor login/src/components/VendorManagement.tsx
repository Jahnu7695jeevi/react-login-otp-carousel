
import { useState } from "react";
import { Plus, Search, Star, Phone, Mail, MapPin, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import VendorOnboarding from "./VendorOnboarding";

const VendorManagement = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const vendors = [
    {
      id: 1,
      name: "GiftCorp",
      location: "Chennai, TN",
      category: "Gifts & Hampers",
      email: "john@giftcorp.com",
      phone: "+91-9876543210",
      rating: 4.8,
      orders: 45,
      status: "active",
      vendorType: "Gift Shop",
      gstNumber: "33AABCU9603R1ZN",
      gpsAddress: "https://maps.google.com/?q=GiftCorp+Chennai",
      headOffice: "123 Main Street, Chennai, TN 600001",
      giftTypes: ["Cakes", "Flowers", "Hampers"],
      prices: ["₹500-1000", "₹300-800", "₹1000-2500"],
      catalogPdf: "giftcorp-catalog.pdf",
      accountHolder: "GiftCorp Private Limited",
      bankName: "State Bank of India",
      accountNo: "12345678901",
      ifscCode: "SBIN0001234",
      bankBranch: "Chennai Main",
      bankAddress: "Anna Salai, Chennai",
      contactNo: "+91-9876543210",
      managerName: "Rajesh Kumar",
      managerPhone: "+91-9876543211",
      managerEmail: "rajesh@giftcorp.com",
      storeContact: "+91-9876543212"
    },
    {
      id: 2,
      name: "CreativeHub",
      location: "Coimbatore, TN",
      category: "Digital Design",
      email: "design@creativehub.com",
      phone: "+91-9876543211",
      rating: 4.9,
      orders: 32,
      status: "active",
      vendorType: "Design Service",
      gstNumber: "33BBCDE9604R2ZO",
      gpsAddress: "https://maps.google.com/?q=CreativeHub+Coimbatore",
      headOffice: "456 Design Street, Coimbatore, TN 641001",
      giftTypes: ["Custom Designs", "Digital Cards", "Banners"],
      prices: ["₹200-500", "₹100-300", "₹500-1500"],
      catalogPdf: "creativehub-catalog.pdf",
      accountHolder: "CreativeHub Solutions",
      bankName: "HDFC Bank",
      accountNo: "12345678902",
      ifscCode: "HDFC0001235",
      bankBranch: "Coimbatore RS Puram",
      bankAddress: "RS Puram, Coimbatore",
      contactNo: "+91-9876543211",
      managerName: "Priya Nair",
      managerPhone: "+91-9876543213",
      managerEmail: "priya@creativehub.com",
      storeContact: "+91-9876543214"
    },
    {
      id: 3,
      name: "LuxuryGifts",
      location: "Madurai, TN",
      category: "Premium Gifts",
      email: "sales@luxurygifts.com",
      phone: "+91-9876543212",
      rating: 4.7,
      orders: 18,
      status: "active",
      vendorType: "Gift Shop",
      gstNumber: "33CDEFG9605R3ZP",
      gpsAddress: "https://maps.google.com/?q=LuxuryGifts+Madurai",
      headOffice: "789 Luxury Avenue, Madurai, TN 625001",
      giftTypes: ["Premium Hampers", "Luxury Items", "Corporate Gifts"],
      prices: ["₹2000-5000", "₹3000-8000", "₹1500-3000"],
      catalogPdf: "luxurygifts-catalog.pdf",
      accountHolder: "Luxury Gifts Enterprises",
      bankName: "ICICI Bank",
      accountNo: "12345678903",
      ifscCode: "ICIC0001236",
      bankBranch: "Madurai Main",
      bankAddress: "West Masi Street, Madurai",
      contactNo: "+91-9876543212",
      managerName: "Arun Selvam",
      managerPhone: "+91-9876543215",
      managerEmail: "arun@luxurygifts.com",
      storeContact: "+91-9876543216"
    },
    {
      id: 4,
      name: "QuickPrint",
      location: "Hosur, TN",
      category: "Printing Services",
      email: "orders@quickprint.com",
      phone: "+91-9876543213",
      rating: 4.5,
      orders: 12,
      status: "pending",
      vendorType: "Cake Shop",
      gstNumber: "33DEFGH9606R4ZQ",
      gpsAddress: "https://maps.google.com/?q=QuickPrint+Hosur",
      headOffice: "321 Print Lane, Hosur, TN 635109",
      giftTypes: ["Custom Prints", "Photo Frames", "Banners"],
      prices: ["₹100-300", "₹200-600", "₹300-800"],
      catalogPdf: "quickprint-catalog.pdf",
      accountHolder: "QuickPrint Services",
      bankName: "Canara Bank",
      accountNo: "12345678904",
      ifscCode: "CNRB0001237",
      bankBranch: "Hosur Branch",
      bankAddress: "Bangalore Road, Hosur",
      contactNo: "+91-9876543213",
      managerName: "Suresh Babu",
      managerPhone: "+91-9876543217",
      managerEmail: "suresh@quickprint.com",
      storeContact: "+91-9876543218"
    }
  ];

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const VendorDetailsModal = ({ vendor }) => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Vendor Details - {vendor.name}</DialogTitle>
      </DialogHeader>
      <Tabs defaultValue="vendor-details" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="vendor-details">Vendor Details</TabsTrigger>
          <TabsTrigger value="catalog">Catalog</TabsTrigger>
          <TabsTrigger value="banking-details">Banking Details</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        
        <TabsContent value="vendor-details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Vendor Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Vendor Name:</span>
                <p className="text-gray-900">{vendor.name}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Vendor Type:</span>
                <p className="text-gray-900">{vendor.vendorType}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Contact:</span>
                <p className="text-gray-900">{vendor.phone}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Email ID:</span>
                <p className="text-gray-900">{vendor.email}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">GST Number:</span>
                <p className="text-gray-900">{vendor.gstNumber}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">GPS Address:</span>
                <a 
                  href={vendor.gpsAddress} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Location
                </a>
              </div>
              <div>
                <span className="font-medium text-gray-700">Head Office Details:</span>
                <p className="text-gray-900">{vendor.headOffice}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="catalog" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Catalog</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="font-medium text-gray-700">Available Items:</span>
                <div className="mt-2 space-y-3">
                  {vendor.giftTypes.map((type, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded border">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{type}</h4>
                          <p className="text-sm text-gray-600">Price Range: {vendor.prices[index]}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {type === "Cakes" ? "Chocolate, Vanilla, Red Velvet flavors available" :
                             type === "Flowers" ? "Fresh roses, lilies, mixed bouquets" :
                             "Premium quality items with customization options"}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {vendor.prices[index]}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-medium text-gray-700">Catalog PDF:</span>
                <div className="mt-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View {vendor.catalogPdf}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="banking-details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Banking Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Account Holder Name:</span>
                <p className="text-gray-900">{vendor.accountHolder}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Bank Name:</span>
                <p className="text-gray-900">{vendor.bankName}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Account No:</span>
                <p className="text-gray-900">{vendor.accountNo}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">IFSC Code:</span>
                <p className="text-gray-900">{vendor.ifscCode}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Bank Branch:</span>
                <p className="text-gray-900">{vendor.bankBranch}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Bank Address:</span>
                <p className="text-gray-900">{vendor.bankAddress}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="font-medium text-gray-700">Contact No:</span>
                <p className="text-gray-900">{vendor.contactNo}</p>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-700 mb-2">Manager Details</h4>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium text-gray-600">Manager Name:</span>
                    <p className="text-gray-900">{vendor.managerName}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Manager Phone:</span>
                    <p className="text-gray-900">{vendor.managerPhone}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Manager Email:</span>
                    <p className="text-gray-900">{vendor.managerEmail}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-700 mb-2">Store Details</h4>
                <div>
                  <span className="font-medium text-gray-600">Store General Contact:</span>
                  <p className="text-gray-900">{vendor.storeContact}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );

  if (showOnboarding) {
    return <VendorOnboarding onBack={() => setShowOnboarding(false)} />;
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-800">Total Vendors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">4</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-800">Active Vendors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">3</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-800">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">107</div>
          </CardContent>
        </Card>
      </div>

      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Vendor Directory</h2>
          <p className="text-sm text-gray-500">All registered vendors and their details</p>
        </div>
        <Button onClick={() => setShowOnboarding(true)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Vendor
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search vendors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Vendors Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vendor</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Edit</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredVendors.map((vendor) => (
                <TableRow key={vendor.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{vendor.name}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {vendor.location}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{vendor.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {vendor.email}
                      </div>
                      <div className="text-sm flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {vendor.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {vendor.rating}
                    </div>
                  </TableCell>
                  <TableCell>{vendor.orders}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={vendor.status === "active" ? "default" : "secondary"}
                      className={vendor.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                    >
                      {vendor.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <VendorDetailsModal vendor={vendor} />
                      </Dialog>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorManagement;
