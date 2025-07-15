import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Download, Eye, Image as ImageIcon, MapPin, Phone, Mail, Package, Truck } from "lucide-react";

const OpsView = () => {
  const events = [
    {
      id: 1,
      company: "TechCorp Solutions",
      companyEmail: "hr@techcorp.com",
      companyPhone: "+91 98765 43210",
      companyAddress: "Tech Park, Bangalore",
      occasion: "Birthday",
      eventDate: "2024-01-15",
      person: "Rahul Kumar",
      relation: "Employee",
      image: "Generated",
      email: "Sent",
      whatsapp: "Pending",
      gift: "CAKEB01",
      birthdayImageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=400&fit=crop",
      birthdayWish: "Happy Birthday Rahul! Wishing you a wonderful year ahead filled with joy and success!",
      vendorName: "Sweet Delights",
      cakeFlavor: "Chocolate Truffle",
      cakeWeight: "1 kg",
      giftAmount: "₹500",
      vendorContact: "+91 98765 43210",
      vendorGps: "https://maps.google.com/?q=Sweet+Delights+Chennai",
      orderId: "ORD-2024-001",
      courier: "Raj Delivery Services",
      courierContact: "+91 87654 32109",
      deliveryDate: "Jan 15, 2024 - 4:00 PM",
      deliveryAddress: "Tech Park, Bangalore - Floor 3, Desk 45",
      deliveryTime: "4:00 PM",
      deliveryEmail: "rahul.kumar@techcorp.com",
      deliveryPhone: "+91 98765 43210"
    },
    {
      id: 2,
      company: "Innovation Labs",
      companyEmail: "admin@innovationlabs.com",
      companyPhone: "+91 87654 32109",
      companyAddress: "Innovation Hub, Mumbai",
      occasion: "Work Anniversary",
      eventDate: "2024-01-16",
      person: "Priya Sharma",
      relation: "Employee",
      image: "Pending",
      email: "Sent",
      whatsapp: "Sent",
      gift: "FLOWG02",
      birthdayImageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=400&fit=crop",
      birthdayWish: "Congratulations Priya on your work anniversary! Thank you for your dedication and hard work!",
      vendorName: "Flower Paradise",
      cakeFlavor: "Vanilla Delight",
      cakeWeight: "1.5 kg",
      giftAmount: "₹750",
      vendorContact: "+91 76543 21098",
      vendorGps: "https://maps.google.com/?q=Flower+Paradise+Mumbai",
      orderId: "ORD-2024-002",
      courier: "Express Delivery",
      courierContact: "+91 65432 10987",
      deliveryDate: "Jan 16, 2024 - 3:00 PM",
      deliveryAddress: "Innovation Hub, Mumbai - Building A, Floor 2",
      deliveryTime: "3:00 PM",
      deliveryEmail: "priya.sharma@innovationlabs.com",
      deliveryPhone: "+91 87654 32109"
    },
    {
      id: 3,
      company: "Global Systems",
      companyEmail: "contact@globalsystems.com",
      companyPhone: "+91 76543 21098",
      companyAddress: "Global Tower, Delhi",
      occasion: "Wedding Anniversary",
      eventDate: "2024-01-17",
      person: "Arun Patel",
      relation: "Employee",
      image: "Generated",
      email: "Pending",
      whatsapp: "Generated",
      gift: "DRYF03",
      birthdayImageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=400&fit=crop",
      birthdayWish: "Happy Anniversary Arun! May your love continue to grow stronger with each passing year!",
      vendorName: "Dry Fruits Delight",
      cakeFlavor: "Red Velvet",
      cakeWeight: "2 kg",
      giftAmount: "₹1000",
      vendorContact: "+91 65432 10987",
      vendorGps: "https://maps.google.com/?q=Dry+Fruits+Delight+Delhi",
      orderId: "ORD-2024-003",
      courier: "Quick Delivery",
      courierContact: "+91 54321 09876",
      deliveryDate: "Jan 17, 2024 - 5:00 PM",
      deliveryAddress: "Global Tower, Delhi - Floor 5, Cabin 12",
      deliveryTime: "5:00 PM",
      deliveryEmail: "arun.patel@globalsystems.com",
      deliveryPhone: "+91 76543 21098"
    }
  ];

  const ImageViewerModal = ({ event }) => (
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle>Birthday Image - {event.person}</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="relative">
          <img
            src={event.birthdayImageUrl}
            alt={`Birthday image for ${event.person}`}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
            <div className="text-white text-center p-4">
              <h3 className="text-xl font-bold mb-2">{event.person}</h3>
              <p className="text-sm">{event.birthdayWish}</p>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p><span className="font-medium">Person:</span> {event.person}</p>
          <p><span className="font-medium">Occasion:</span> {event.occasion}</p>
          <p><span className="font-medium">Date:</span> {event.eventDate}</p>
        </div>
      </div>
    </DialogContent>
  );

  const EventDetailModal = ({ event }) => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Event Execution Details</DialogTitle>
      </DialogHeader>
      <Tabs defaultValue="event-info" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="event-info">Event Information</TabsTrigger>
          <TabsTrigger value="delivery-info">Delivery Information</TabsTrigger>
          <TabsTrigger value="delivery-item">Delivery Item</TabsTrigger>
          <TabsTrigger value="vendor-details">Vendor Details</TabsTrigger>
          <TabsTrigger value="execution-status">Execution Status</TabsTrigger>
        </TabsList>
        
        <TabsContent value="event-info" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Event & Employee Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-medium text-gray-700">Name of Employee:</span>
                  <p className="text-gray-900">{event.person}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Occasion:</span>
                  <p className="text-gray-900">{event.occasion}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Event Date:</span>
                  <p className="text-gray-900">{event.eventDate}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Relation:</span>
                  <p className="text-gray-900">{event.relation}</p>
                </div>
                <div className="col-span-2">
                  <span className="font-medium text-gray-700">Company:</span>
                  <p className="text-gray-900">{event.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivery-info" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Delivery Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Delivery Address:</span>
                <p className="text-gray-900">{event.deliveryAddress}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Delivery Time:</span>
                <p className="text-gray-900">{event.deliveryTime}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-medium text-gray-700">Email ID:</span>
                  <p className="text-gray-900 flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    {event.deliveryEmail}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Contact Number:</span>
                  <p className="text-gray-900 flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    {event.deliveryPhone}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivery-item" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Subscription Items
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Cake:</span>
                <p className="text-gray-900">{event.cakeFlavor}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Cake Weight:</span>
                <p className="text-gray-900">{event.cakeWeight}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Gift Amount:</span>
                <p className="text-gray-900">{event.giftAmount}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Gift ID:</span>
                <p className="text-gray-900 font-mono">{event.gift}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vendor-details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                Vendor Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Vendor Name:</span>
                <p className="text-gray-900">{event.vendorName}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Vendor Contact:</span>
                <p className="text-gray-900">{event.vendorContact}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Vendor GPS Address:</span>
                <a 
                  href={event.vendorGps} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Location
                </a>
              </div>
              <div>
                <span className="font-medium text-gray-700">Order ID:</span>
                <p className="text-gray-900">{event.orderId}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Courier:</span>
                <p className="text-gray-900">{event.courier}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Courier Contact:</span>
                <p className="text-gray-900">{event.courierContact}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="execution-status" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Execution Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Image:</span>
                {event.image === 'Generated' ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        <Badge variant="default" className="cursor-pointer hover:bg-primary/80">
                          <ImageIcon className="w-3 h-3 mr-1" />
                          {event.image}
                        </Badge>
                      </Button>
                    </DialogTrigger>
                    <ImageViewerModal event={event} />
                  </Dialog>
                ) : (
                  <Badge variant="secondary">
                    {event.image}
                  </Badge>
                )}
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Email:</span>
                <Badge variant={event.email === 'Sent' ? 'default' : 'secondary'}>
                  {event.email}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">WhatsApp:</span>
                <Badge variant={event.whatsapp === 'Sent' || event.whatsapp === 'Generated' ? 'default' : 'secondary'}>
                  {event.whatsapp}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Gift ID:</span>
                <span className="font-mono text-sm">{event.gift}</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Ops View List</h2>
          <p className="text-gray-600">Manage events for the next 7 days</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Download className="w-4 h-4 mr-2" />
          Download Data
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="techcorp">TechCorp Solutions</SelectItem>
                <SelectItem value="innovation">Innovation Labs</SelectItem>
                <SelectItem value="global">Global Systems</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Occasion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="birthday">Birthday</SelectItem>
                <SelectItem value="anniversary">Anniversary</SelectItem>
                <SelectItem value="work-anniversary">Work Anniversary</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Relation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employee">Employee</SelectItem>
                <SelectItem value="spouse">Spouse</SelectItem>
                <SelectItem value="child">Child</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">S.No.</th>
                  <th className="text-left py-3 px-4 font-semibold">EVENT DATE</th>
                  <th className="text-left py-3 px-4 font-semibold">OCCASION</th>
                  <th className="text-left py-3 px-4 font-semibold">NAME OF EMPLOYEE</th>
                  <th className="text-left py-3 px-4 font-semibold">COMPANY NAME</th>
                  <th className="text-left py-3 px-4 font-semibold">RELATION</th>
                  <th className="text-left py-3 px-4 font-semibold">IMAGE</th>
                  <th className="text-left py-3 px-4 font-semibold">EMAIL</th>
                  <th className="text-left py-3 px-4 font-semibold">WHATSAPP</th>
                  <th className="text-left py-3 px-4 font-semibold">GIFT</th>
                  <th className="text-left py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={event.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{event.eventDate}</td>
                    <td className="py-3 px-4">{event.occasion}</td>
                    <td className="py-3 px-4">{event.person}</td>
                    <td className="py-3 px-4 font-medium">{event.company}</td>
                    <td className="py-3 px-4">{event.relation}</td>
                    <td className="py-3 px-4">
                      {event.image === 'Generated' ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="p-0 h-auto">
                              <Badge variant="default" className="cursor-pointer hover:bg-primary/80">
                                <ImageIcon className="w-3 h-3 mr-1" />
                                {event.image}
                              </Badge>
                            </Button>
                          </DialogTrigger>
                          <ImageViewerModal event={event} />
                        </Dialog>
                      ) : (
                        <Badge variant="secondary">
                          {event.image}
                        </Badge>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={event.email === 'Sent' ? 'default' : 'secondary'}>
                        {event.email}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={event.whatsapp === 'Sent' || event.whatsapp === 'Generated' ? 'default' : 'secondary'}>
                        {event.whatsapp}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 font-mono text-sm">{event.gift}</td>
                    <td className="py-3 px-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <EventDetailModal event={event} />
                      </Dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpsView;
