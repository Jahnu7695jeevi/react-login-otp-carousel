
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface VendorOnboardingProps {
  onBack: () => void;
}

const VendorOnboarding = ({ onBack }: VendorOnboardingProps) => {
  const [formData, setFormData] = useState({
    vendorType: "",
    vendorName: "",
    contactNo: "",
    mobileNumber: "",
    email: "",
    gstNumber: "",
    address1: "",
    address2: "",
    townVillage: "",
    city: "",
    state: "",
    pincode: "",
    gpsLocation: "",
    managerName: "",
    managerPhone: "",
    managerEmail: "",
    storeContact: "",
    headofficeAddress: "",
    headofficePhone: "",
    headofficeEmail: "",
    headofficeContactPerson: "",
    headofficeContactDesignation: "",
    headofficeContactPhone: "",
    headofficeContactEmail: "",
    remark: "",
    accountHolderName: "",
    bankName: "",
    accountNo: "",
    ifscCode: "",
    bankBranch: "",
    bankAddress: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Vendor data:", formData);
    // Here you would typically send the data to your backend
    onBack();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={onBack} className="p-2">
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Vendor/Supplier Onboarding</h2>
          <p className="text-sm text-gray-500">Complete vendor registration with all required details</p>
        </div>
      </div>

      {/* Vendor Form - Basic Details */}
      <Card>
        <CardHeader>
          <CardTitle>Vendor Form - Basic Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vendorType">Vendor Type *</Label>
              <Select value={formData.vendorType} onValueChange={(value) => handleInputChange("vendorType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Please select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gifts">Gifts & Hampers</SelectItem>
                  <SelectItem value="catering">Catering Services</SelectItem>
                  <SelectItem value="printing">Printing Services</SelectItem>
                  <SelectItem value="decoration">Decoration Services</SelectItem>
                  <SelectItem value="photography">Photography Services</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vendorName">Vendor Name *</Label>
              <Input
                id="vendorName"
                placeholder="Enter vendor name"
                value={formData.vendorName}
                onChange={(e) => handleInputChange("vendorName", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactNo">Contact No *</Label>
              <Input
                id="contactNo"
                placeholder="Enter contact no"
                value={formData.contactNo}
                onChange={(e) => handleInputChange("contactNo", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobileNumber">Mobile Number *</Label>
              <Input
                id="mobileNumber"
                placeholder="Enter mobile no"
                value={formData.mobileNumber}
                onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gstNumber">GST Number *</Label>
              <Input
                id="gstNumber"
                placeholder="Enter GST number"
                value={formData.gstNumber}
                onChange={(e) => handleInputChange("gstNumber", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address1">Address 1 *</Label>
              <Input
                id="address1"
                placeholder="Enter address"
                value={formData.address1}
                onChange={(e) => handleInputChange("address1", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address2">Address 2</Label>
              <Input
                id="address2"
                placeholder="Enter address2"
                value={formData.address2}
                onChange={(e) => handleInputChange("address2", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="townVillage">Town & Village *</Label>
              <Input
                id="townVillage"
                placeholder="Enter Town & Village"
                value={formData.townVillage}
                onChange={(e) => handleInputChange("townVillage", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State *</Label>
              <Input
                id="state"
                placeholder="Enter State"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pincode">Pincode *</Label>
              <Input
                id="pincode"
                placeholder="Enter pincode"
                value={formData.pincode}
                onChange={(e) => handleInputChange("pincode", e.target.value)}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="gpsLocation">GPS Location Link *</Label>
              <Input
                id="gpsLocation"
                placeholder="Enter GPS Location Link"
                value={formData.gpsLocation}
                onChange={(e) => handleInputChange("gpsLocation", e.target.value)}
              />
            </div>
          </div>

          {/* Manager Details */}
          <div className="pt-4 border-t">
            <h4 className="text-lg font-medium mb-4">Manager Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="managerName">Manager name *</Label>
                <Input
                  id="managerName"
                  placeholder="Enter Manager Name"
                  value={formData.managerName}
                  onChange={(e) => handleInputChange("managerName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="managerPhone">Manager Phone *</Label>
                <Input
                  id="managerPhone"
                  placeholder="Enter Manager Phone"
                  value={formData.managerPhone}
                  onChange={(e) => handleInputChange("managerPhone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="managerEmail">Manager Email *</Label>
                <Input
                  id="managerEmail"
                  type="email"
                  placeholder="Enter Manager Email"
                  value={formData.managerEmail}
                  onChange={(e) => handleInputChange("managerEmail", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Store Details */}
          <div className="pt-4 border-t">
            <h4 className="text-lg font-medium mb-4">Store Details</h4>
            <div className="space-y-2">
              <Label htmlFor="storeContact">Store General Contact *</Label>
              <Input
                id="storeContact"
                placeholder="Enter Store General Number"
                value={formData.storeContact}
                onChange={(e) => handleInputChange("storeContact", e.target.value)}
              />
            </div>
          </div>

          {/* Head Office Details */}
          <div className="pt-4 border-t">
            <h4 className="text-lg font-medium mb-4">Head Office Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="headofficeAddress">Headoffice Address *</Label>
                <Input
                  id="headofficeAddress"
                  placeholder="Enter Headoffice Address"
                  value={formData.headofficeAddress}
                  onChange={(e) => handleInputChange("headofficeAddress", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="headofficePhone">Headoffice Phone *</Label>
                <Input
                  id="headofficePhone"
                  placeholder="Enter Headoffice Phone"
                  value={formData.headofficePhone}
                  onChange={(e) => handleInputChange("headofficePhone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="headofficeEmail">Headoffice Email *</Label>
                <Input
                  id="headofficeEmail"
                  type="email"
                  placeholder="Enter Headoffice Email"
                  value={formData.headofficeEmail}
                  onChange={(e) => handleInputChange("headofficeEmail", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="headofficeContactPerson">Headoffice Contact Person *</Label>
                <Input
                  id="headofficeContactPerson"
                  placeholder="Enter Headoffice Contact Person"
                  value={formData.headofficeContactPerson}
                  onChange={(e) => handleInputChange("headofficeContactPerson", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="headofficeContactDesignation">Headoffice Contact Designation *</Label>
                <Input
                  id="headofficeContactDesignation"
                  placeholder="Enter Headoffice Contact Designation"
                  value={formData.headofficeContactDesignation}
                  onChange={(e) => handleInputChange("headofficeContactDesignation", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="headofficeContactPhone">Headoffice Contact Phone *</Label>
                <Input
                  id="headofficeContactPhone"
                  placeholder="Enter Headoffice Contact Phone"
                  value={formData.headofficeContactPhone}
                  onChange={(e) => handleInputChange("headofficeContactPhone", e.target.value)}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="headofficeContactEmail">Headoffice Contact Person Email *</Label>
                <Input
                  id="headofficeContactEmail"
                  type="email"
                  placeholder="Enter Headoffice Contact Person Email"
                  value={formData.headofficeContactEmail}
                  onChange={(e) => handleInputChange("headofficeContactEmail", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="remark">Remark *</Label>
            <Textarea
              id="remark"
              placeholder="Enter remark"
              value={formData.remark}
              onChange={(e) => handleInputChange("remark", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Bank Form - Basic Details */}
      <Card>
        <CardHeader>
          <CardTitle>Bank Form - Basic Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="accountHolderName">Account Holder Name *</Label>
              <Input
                id="accountHolderName"
                placeholder="Enter Account Holder Name"
                value={formData.accountHolderName}
                onChange={(e) => handleInputChange("accountHolderName", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bankName">Bank Name *</Label>
              <Input
                id="bankName"
                placeholder="Enter Bank name"
                value={formData.bankName}
                onChange={(e) => handleInputChange("bankName", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="accountNo">Account No *</Label>
              <Input
                id="accountNo"
                placeholder="Enter Account No"
                value={formData.accountNo}
                onChange={(e) => handleInputChange("accountNo", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ifscCode">IFSC Code *</Label>
              <Input
                id="ifscCode"
                placeholder="Enter IFSC Code"
                value={formData.ifscCode}
                onChange={(e) => handleInputChange("ifscCode", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bankBranch">Bank Branch *</Label>
              <Input
                id="bankBranch"
                placeholder="Enter Bank Branch"
                value={formData.bankBranch}
                onChange={(e) => handleInputChange("bankBranch", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bankAddress">Bank Address *</Label>
              <Input
                id="bankAddress"
                placeholder="Enter Bank address"
                value={formData.bankAddress}
                onChange={(e) => handleInputChange("bankAddress", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={onBack}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
          Add Vendor
        </Button>
      </div>
    </div>
  );
};

export default VendorOnboarding;
