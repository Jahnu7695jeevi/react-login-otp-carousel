
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";

interface CompanyOnboardingProps {
  onBack: () => void;
}

const CompanyOnboarding = ({ onBack }: CompanyOnboardingProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Customer Onboarding</h2>
          <p className="text-gray-600">Complete company registration and setup</p>
        </div>
      </div>

      {/* Company Information */}
      <Card>
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="country">Country*</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="company-name">Customer Registered Name*</Label>
              <Input id="company-name" placeholder="Enter registered company name" />
            </div>
            <div>
              <Label htmlFor="company-type">Company Type*</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="parent">Parent Company</SelectItem>
                  <SelectItem value="individual">Individual Unit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="industry">Industry*</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="gstr">GSTR No*</Label>
              <Input id="gstr" placeholder="Enter GSTR No" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="active" />
              <Label htmlFor="active">Active</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Address Information */}
      <Card>
        <CardHeader>
          <CardTitle>Address Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="street1">Street Name 1*</Label>
              <Input id="street1" placeholder="Enter street name 1" />
            </div>
            <div>
              <Label htmlFor="street2">Street Name 2</Label>
              <Input id="street2" placeholder="Enter street name 2" />
            </div>
            <div>
              <Label htmlFor="city">City*</Label>
              <Input id="city" placeholder="Enter city" />
            </div>
            <div>
              <Label htmlFor="state">State*</Label>
              <Input id="state" placeholder="Enter state" />
            </div>
            <div>
              <Label htmlFor="postal">Postal Code*</Label>
              <Input id="postal" placeholder="Enter postal code" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Point of Contact */}
      <Card>
        <CardHeader>
          <CardTitle>Point of Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contact-name">Designated Point of Contact Name*</Label>
              <Input id="contact-name" placeholder="Enter point of contact name" />
            </div>
            <div>
              <Label htmlFor="email">Email*</Label>
              <Input id="email" type="email" placeholder="Enter email address" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number*</Label>
              <Input id="phone" placeholder="Enter phone number" />
            </div>
            <div>
              <Label htmlFor="role-app">Role in App*</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="designation">Role/Designation*</Label>
              <Input id="designation" placeholder="Enter designation" />
            </div>
            <div>
              <Label htmlFor="customer-id">Customer ID*</Label>
              <Input id="customer-id" value="CUST00029" disabled />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
          Submit Onboarding
        </Button>
      </div>
    </div>
  );
};

export default CompanyOnboarding;
