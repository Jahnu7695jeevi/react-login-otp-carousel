import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Edit, Trash2, Users, Gift, Calendar, Filter, Eye, FileSpreadsheet } from "lucide-react";
import { useState } from "react";

const AdminPanel = () => {
  const [isGiftDialogOpen, setIsGiftDialogOpen] = useState(false);
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
  const [isExcelDataDialogOpen, setIsExcelDataDialogOpen] = useState(false);
  const [selectedGiftCategory, setSelectedGiftCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [giftFilter, setGiftFilter] = useState("all");
  const [customEvent, setCustomEvent] = useState({
    name: "",
    date: "",
    description: ""
  });

  const excelEventData = [
    { date: "January 1", eventName: "New Year's Day", scope: "National", category: "Celebration", activities: "Welcome kids, team lunch, goal-setting workshops" },
    { date: "January 26", eventName: "Republic Day", scope: "National", category: "Cultural", activities: "Flag hoisting, cultural dress-up, quiz on constitution" },
    { date: "Last Friday of January", eventName: "Fun at Work Day", scope: "Global", category: "Fun Day", activities: "Office games, talent show, surprise treats" },
    { date: "February 4", eventName: "World Cancer Day", scope: "Global", category: "Health Awareness", activities: "Cancer screening, awareness webinar" },
    { date: "February 17", eventName: "Random Acts of Kindness Day", scope: "Global", category: "CSR/Values", activities: "Kindness wall, gratitude sharing" },
    { date: "March 8", eventName: "International Women's Day", scope: "Global", category: "Diversity & Inclusion", activities: "Panel with women leaders, giveaways" },
    { date: "First Friday of March", eventName: "Employee Appreciation Day", scope: "Global", category: "Recognition", activities: "Award ceremony, thank-you notes" },
    { date: "March 22", eventName: "World Water Day", scope: "Global", category: "Environmental", activities: "Water-saving pledge, awareness video" },
    { date: "March (varies)", eventName: "Holi", scope: "India", category: "Cultural Festival", activities: "Color-themed dress day, traditional lunch" },
    { date: "March (whole month)", eventName: "National Safety Month", scope: "India", category: "Safety", activities: "Safety drills, PPE audits, slogan competitions" },
    { date: "April 7", eventName: "World Health Day", scope: "Global", category: "Health Awareness", activities: "Yoga session, free health check-up" },
    { date: "April 22", eventName: "Earth Day", scope: "Global", category: "Environmental", activities: "Plant a tree campaign, zero-plastic day" },
    { date: "Apr-28", eventName: "World Day for Safety and Health at Work", scope: "Global", category: "Safety", activities: "Workshop on workplace safety, hazard hunt" },
    { date: "May 1", eventName: "Labour Day", scope: "National", category: "Recognition", activities: "Shoutouts for ground/support staff" },
    { date: "May (First week)", eventName: "Mental Health Week", scope: "Global", category: "Wellbeing", activities: "Mindfulness session, stress relief room" },
    { date: "June 5", eventName: "World Environment Day", scope: "Global", category: "Environmental", activities: "Green workspace challenge, eco swap" },
    { date: "June 21", eventName: "International Yoga Day", scope: "Global", category: "Wellbeing", activities: "Morning yoga + nutrition talk" },
    { date: "June (first week)", eventName: "World Environment Week", scope: "Global", category: "Environmental", activities: "Clean-up drives, energy saving challenge" },
    { date: "August 15", eventName: "Independence Day", scope: "India", category: "Cultural", activities: "Flag colors dress code, quiz on India" },
    { date: "Sep-05", eventName: "Teacher's Day", scope: "India", category: "Gratitude", activities: "Thank mentors in office, tribute videos" },
    { date: "September 21", eventName: "International Peace Day", scope: "Global", category: "Values", activities: "Peace pledge, white dress code" },
    { date: "September (whole month)", eventName: "Quality Month (India)", scope: "India", category: "Quality", activities: "Kaizen competition, quality awards, poster contest" },
    { date: "October 2", eventName: "Gandhi Jayanti", scope: "India", category: "Cultural/Values", activities: "Swachh Bharat event, non-violence message board" },
    { date: "October 10", eventName: "World Mental Health Day", scope: "Global", category: "Wellbeing", activities: "Therapist talk, stress relief activity" },
    { date: "November 13", eventName: "World Kindness Day", scope: "Global", category: "CSR/Values", activities: "Kindness campaign, secret appreciation" },
    { date: "November (varies)", eventName: "Diwali", scope: "India", category: "Cultural Festival", activities: "Ethnic wear, diya painting, sweets exchange" },
    { date: "November", eventName: "World Quality Month (Global)", scope: "Global", category: "Quality", activities: "5S training, cross-team QC game day" },
    { date: "December 25", eventName: "Christmas", scope: "Global", category: "Celebration", activities: "Secret Santa, decoration contest, holiday lunch" }
  ];

  const administrators = [
    { id: 1, name: "Admin User", email: "admin@inspirenest.com", contact: "+91 9876543210", role: "Super Admin", status: "Active" },
    { id: 2, name: "Operations Manager", email: "ops@inspirenest.com", contact: "+91 9876543211", role: "Admin", status: "Active" },
    { id: 3, name: "Support Lead", email: "support@inspirenest.com", contact: "+91 9876543212", role: "Moderator", status: "Active" }
  ];

  const giftCatalog = [
    { 
      id: 1, 
      name: "Chocolate Truffle Cake", 
      category: "Cake", 
      price: "₹800", 
      flavor: "Rich Chocolate Truffle",
      type: "Premium Cake",
      weight: "1 kg"
    },
    { 
      id: 2, 
      name: "Vanilla Delight Cake", 
      category: "Cake", 
      price: "₹750", 
      flavor: "Classic Vanilla",
      type: "Regular Cake",
      weight: "1 kg"
    },
    { 
      id: 3, 
      name: "Premium Mixed Dry Fruits", 
      category: "Dry Fruits", 
      price: "₹1200", 
      flavor: "Mixed Nuts",
      type: "Premium Gift Box",
      weight: "500g"
    },
    { 
      id: 4, 
      name: "Fresh Rose Bouquet", 
      category: "Flowers", 
      price: "₹600", 
      flavor: "Fresh Roses",
      type: "Flower Arrangement",
      weight: "12 stems"
    },
    { 
      id: 5, 
      name: "Amazon Gift Voucher", 
      category: "Gift Coupon", 
      price: "₹1000", 
      flavor: "Digital Voucher",
      type: "E-Gift Card",
      weight: "Digital"
    }
  ];

  const filteredGifts = giftFilter === "all" 
    ? giftCatalog 
    : giftCatalog.filter(gift => 
        giftFilter === "gifts" ? gift.category === "Flowers" || gift.category === "Gift Coupon" :
        giftFilter === "cakes" ? gift.category === "Cake" :
        giftFilter === "dry-fruits" ? gift.category === "Dry Fruits" : true
      );

  const handleAddCustomEvent = () => {
    console.log("Adding custom event:", customEvent);
    setCustomEvent({ name: "", date: "", description: "" });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Admin Panel</h2>
        <p className="text-gray-600">Manage administrators, catalog, and event calendar</p>
      </div>

      <Tabs defaultValue="administrators" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="administrators" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Administrators</span>
          </TabsTrigger>
          <TabsTrigger value="catalog" className="flex items-center space-x-2">
            <Gift className="w-4 h-4" />
            <span>Catalog</span>
          </TabsTrigger>
          <TabsTrigger value="events-calendar" className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Events Calendar</span>
          </TabsTrigger>
        </TabsList>

        {/* Administrators Tab */}
        <TabsContent value="administrators" className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Administrators</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-sky-50 via-blue-50/60 to-indigo-50/40 border-sky-200/60 shadow-lg backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-sky-100/80 to-blue-100/60 border-b border-sky-200/60 backdrop-blur-sm">
                <CardTitle className="text-sky-800 font-semibold">Add New Administrator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="admin-name" className="text-sky-800 font-medium">Name</Label>
                  <Input id="admin-name" placeholder="Enter administrator name" className="border-sky-300/60 bg-white/70 focus:border-sky-400 focus:ring-sky-200" />
                </div>
                <div>
                  <Label htmlFor="admin-email" className="text-sky-800 font-medium">Email</Label>
                  <Input id="admin-email" type="email" placeholder="Enter email address" className="border-sky-300/60 bg-white/70 focus:border-sky-400 focus:ring-sky-200" />
                </div>
                <div>
                  <Label htmlFor="admin-contact" className="text-sky-800 font-medium">Contact Number</Label>
                  <Input id="admin-contact" placeholder="Enter contact number" className="border-sky-300/60 bg-white/70 focus:border-sky-400 focus:ring-sky-200" />
                </div>
                <div>
                  <Label htmlFor="admin-role" className="text-sky-800 font-medium">Role</Label>
                  <Select>
                    <SelectTrigger className="border-sky-300/60 bg-white/70 focus:border-sky-400 focus:ring-sky-200">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="super-admin">Super Admin</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="moderator">Moderator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300">Add Administrator</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-50 via-gray-50/60 to-zinc-50/40 border-slate-200/60 shadow-lg backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-slate-100/80 to-gray-100/60 border-b border-slate-200/60 backdrop-blur-sm">
                <CardTitle className="text-slate-800 font-semibold">Current Administrators</CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <div className="space-y-3">
                  {administrators.map((admin) => (
                    <div key={admin.id} className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-white/90">
                      <div>
                        <div className="font-medium text-slate-900">{admin.name}</div>
                        <div className="text-sm text-slate-700">{admin.email}</div>
                        <div className="text-sm text-slate-700">{admin.contact}</div>
                        <Badge variant="outline" className="mt-1 border-slate-300/60 text-slate-700 bg-slate-50/80">{admin.role}</Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={admin.status === 'Active' ? 'default' : 'secondary'} className="bg-emerald-100 text-emerald-800 border-emerald-300/60">
                          {admin.status}
                        </Badge>
                        <Button variant="outline" size="sm" className="border-slate-300/60 text-slate-700 hover:bg-slate-50 hover:border-slate-400">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 border-red-300/60 hover:bg-red-50 hover:border-red-400">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Catalog Tab */}
        <TabsContent value="catalog" className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Catalog Management</h3>
            <Dialog open={isGiftDialogOpen} onOpenChange={setIsGiftDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Gift Option
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Gift Option</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="gift-name">Gift Name</Label>
                    <Input id="gift-name" placeholder="Enter gift name" />
                  </div>
                  <div>
                    <Label htmlFor="gift-category">Category</Label>
                    <Select value={selectedGiftCategory} onValueChange={setSelectedGiftCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="flowers">Flowers</SelectItem>
                        <SelectItem value="gift-coupon">Gift Coupon</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {selectedGiftCategory === "others" && (
                    <div>
                      <Label htmlFor="custom-category">Gift Specification</Label>
                      <Input 
                        id="custom-category" 
                        placeholder="Enter gift specification" 
                        value={customCategory}
                        onChange={(e) => setCustomCategory(e.target.value)}
                      />
                    </div>
                  )}
                  {selectedGiftCategory === "gift-coupon" && (
                    <div>
                      <Label htmlFor="gift-price">Price</Label>
                      <Input id="gift-price" placeholder="Enter price" />
                    </div>
                  )}
                  <div>
                    <Label htmlFor="gift-description">Description</Label>
                    <Textarea id="gift-description" placeholder="Enter gift description" />
                  </div>
                  <Button className="w-full" onClick={() => setIsGiftDialogOpen(false)}>
                    Add Gift Option
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card className="bg-gradient-to-br from-teal-50 via-cyan-50/60 to-emerald-50/40 border-teal-200/60 shadow-lg backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-teal-100/80 to-cyan-100/60 border-b border-teal-200/60 backdrop-blur-sm">
              <div className="flex justify-between items-center">
                <CardTitle className="text-teal-800 font-semibold">Available Gift Options</CardTitle>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-teal-700" />
                  <Select value={giftFilter} onValueChange={setGiftFilter}>
                    <SelectTrigger className="w-40 border-teal-300/60 bg-white/80 backdrop-blur-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="gifts">Gifts</SelectItem>
                      <SelectItem value="cakes">Cakes</SelectItem>
                      <SelectItem value="dry-fruits">Dry Fruits</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="space-y-4">
                {filteredGifts.map((gift) => (
                  <div key={gift.id} className="p-4 bg-white/80 backdrop-blur-sm border border-teal-200/60 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-white/90">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h4 className="font-medium text-lg text-teal-900">{gift.name}</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-teal-700">Category:</span>
                            <p className="text-teal-900">{gift.category}</p>
                          </div>
                          <div>
                            <span className="font-medium text-teal-700">Type:</span>
                            <p className="text-teal-900">{gift.type}</p>
                          </div>
                          <div>
                            <span className="font-medium text-teal-700">Flavor/Details:</span>
                            <p className="text-teal-900">{gift.flavor}</p>
                          </div>
                          <div>
                            <span className="font-medium text-teal-700">Weight/Size:</span>
                            <p className="text-teal-900">{gift.weight}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-teal-600">{gift.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Events Calendar Tab */}
        <TabsContent value="events-calendar" className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Events Calendar Management</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-violet-50 via-purple-50/60 to-indigo-50/40 border-violet-200/60 shadow-lg backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-violet-100/80 to-purple-100/60 border-b border-violet-200/60 backdrop-blur-sm">
                <CardTitle className="text-violet-800 font-semibold">Default Calendar Events</CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <div className="space-y-4">
                  <div className="text-center">
                    <Dialog open={isExcelDataDialogOpen} onOpenChange={setIsExcelDataDialogOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full bg-gradient-to-r from-violet-100/80 to-purple-100/60 border-violet-300/60 text-violet-800 hover:from-violet-200/80 hover:to-purple-200/60 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm font-medium">
                          <FileSpreadsheet className="w-5 h-5 mr-2" />
                          View Excel Data
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl max-h-[80vh]">
                        <DialogHeader>
                          <DialogTitle className="text-purple-800">Corporate Event Calendar</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="h-96 w-full">
                          <Table>
                            <TableHeader>
                              <TableRow className="bg-purple-50">
                                <TableHead className="w-32 text-purple-800 font-semibold">Date</TableHead>
                                <TableHead className="w-48 text-purple-800 font-semibold">Event Name</TableHead>
                                <TableHead className="w-24 text-purple-800 font-semibold">Scope</TableHead>
                                <TableHead className="w-32 text-purple-800 font-semibold">Category</TableHead>
                                <TableHead className="text-purple-800 font-semibold">Suggested Corporate Activities</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {excelEventData.map((event, index) => (
                                <TableRow key={index} className="hover:bg-purple-25">
                                  <TableCell className="font-medium text-sm text-purple-900">{event.date}</TableCell>
                                  <TableCell className="font-medium text-sm text-purple-900">{event.eventName}</TableCell>
                                  <TableCell className="text-sm">
                                    <Badge variant="outline" className="text-xs border-purple-300 text-purple-700 bg-purple-50">
                                      {event.scope}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-sm">
                                    <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                                      {event.category}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-sm text-purple-700">{event.activities}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                    <p className="text-sm text-violet-600 mt-2 font-medium">Click to view the complete event calendar data</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 via-amber-50/60 to-yellow-50/40 border-orange-200/60 shadow-lg backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-orange-100/80 to-amber-100/60 border-b border-orange-200/60 backdrop-blur-sm">
                <CardTitle className="text-orange-800 font-semibold">Add Custom Event</CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="event-name" className="text-orange-800 font-medium">Event Name</Label>
                    <Input
                      id="event-name"
                      placeholder="Enter event name"
                      value={customEvent.name}
                      onChange={(e) => setCustomEvent(prev => ({ ...prev, name: e.target.value }))}
                      className="border-orange-300/60 bg-white/80 focus:border-orange-400 focus:ring-orange-200 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="event-date" className="text-orange-800 font-medium">Event Date</Label>
                    <Input
                      id="event-date"
                      type="date"
                      value={customEvent.date}
                      onChange={(e) => setCustomEvent(prev => ({ ...prev, date: e.target.value }))}
                      className="border-orange-300/60 bg-white/80 focus:border-orange-400 focus:ring-orange-200 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="event-description" className="text-orange-800 font-medium">Description</Label>
                    <Textarea
                      id="event-description"
                      placeholder="Enter event description"
                      value={customEvent.description}
                      onChange={(e) => setCustomEvent(prev => ({ ...prev, description: e.target.value }))}
                      className="border-orange-300/60 bg-white/80 focus:border-orange-400 focus:ring-orange-200 backdrop-blur-sm"
                    />
                  </div>
                  <Button onClick={handleAddCustomEvent} className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md hover:shadow-lg transition-all duration-300 font-medium">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Custom Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;
