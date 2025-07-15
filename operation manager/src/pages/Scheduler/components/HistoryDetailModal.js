import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Eye, Mail, MessageSquare, Image } from 'lucide-react';

const HistoryDetailModal = ({ record, selectedOption, isOpen, onClose }) => {
  if (!record || !selectedOption) return null;

  
  const getEmployeeDetails = (employeeId) => {
    const employees = {
      'EMP001': { id: 'EMP001', name: 'John Doe', email: 'john.doe@company.com', department: 'Engineering', birthday: '1990-03-15' },
      'EMP002': { id: 'EMP002', name: 'Jane Smith', email: 'jane.smith@company.com', department: 'Marketing', birthday: '1988-07-22' },
      'EMP003': { id: 'EMP003', name: 'Mike Johnson', email: 'mike.johnson@company.com', department: 'Sales', birthday: '1992-11-08' },
      'EMP004': { id: 'EMP004', name: 'Sarah Wilson', email: 'sarah.wilson@company.com', department: 'HR', birthday: '1985-05-12' }
    };
    return employees[employeeId] || { id, name: 'Unknown Employee', email: 'N/A', department: 'N/A', birthday: 'N/A' };
  };

  
  const getOpsViewDetails = (opsViewId) => {
    const opsViews = {
      'OPS001': { id: 'OPS001', viewName: 'Database Sync View', description: 'Employee data synchronization operations' },
      'OPS002': { id: 'OPS002', viewName: 'Email Content View', description: 'Email greeting content generation view' },
      'OPS003': { id: 'OPS003', viewName: 'WhatsApp Content View', description: 'WhatsApp greeting content generation view' },
      'OPS004': { id: 'OPS004', viewName: 'Message Delivery View', description: 'Message delivery tracking view' }
    };
    return opsViews[opsViewId] || { id, viewName: 'Unknown View', description: 'N/A' };
  };

  
  const getEmailDetails = (emailId) => {
    if (!emailId) return null;
    const emails = {
      'EMAIL001': { id: 'EMAIL001', subject: 'Happy Birthday!', recipient: 'jane.smith@company.com', sentAt: '2024-06-23 06', status: 'Delivered' }
    };
    return emails[emailId] || { id, subject: 'Unknown Email', recipient: 'N/A', sentAt: 'N/A', status: 'N/A' };
  };

  const getWhatsAppDetails = (whatsappId) => {
    if (!whatsappId) return null;
    const whatsapps = {
      'WA001': { id: 'WA001', message: 'Happy Anniversary!', recipient: '+91-9876543212', sentAt: '2024-06-23 06', status: 'Failed' },
      'WA002': { id: 'WA002', message: 'Happy Birthday!', recipient: '+91-9876543213', sentAt: '2024-06-23 07', status: 'Delivered' }
    };
    return whatsapps[whatsappId] || { id, message: 'Unknown Message', recipient: 'N/A', sentAt: 'N/A', status: 'N/A' };
  };

  const employee = getEmployeeDetails(record.employeeId);
  const opsView = getOpsViewDetails(record.opsViewId);
  const emailDetails = getEmailDetails(record.emailId);
  const whatsappDetails = getWhatsAppDetails(record.whatsappId);

  const renderSelectedContent = () => {
    switch (selectedOption) {
      case 'employeeId' (
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <User className="w-5 h-5" />
                Employee Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Employee ID:</span>
                <span className="font-semibold">{employee.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Name:</span>
                <span className="font-semibold">{employee.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Email:</span>
                <span className="font-semibold">{employee.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Department:</span>
                <span className="font-semibold">{employee.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Birthday:</span>
                <span className="font-semibold">{employee.birthday}</span>
              </div>
            </CardContent>
          </Card>
        );

      case 'opsId' (
          <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <Eye className="w-5 h-5" />
                Operations View Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Ops View ID:</span>
                <span className="font-semibold">{opsView.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">View Name:</span>
                <span className="font-semibold">{opsView.viewName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Description:</span>
                <span className="font-semibold text-sm">{opsView.description}</span>
              </div>
            </CardContent>
          </Card>
        );

      case 'emailId' emailDetails ? (
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Mail className="w-5 h-5" />
                Email Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Email ID:</span>
                <span className="font-semibold">{emailDetails.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Subject:</span>
                <span className="font-semibold">{emailDetails.subject}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Recipient:</span>
                <span className="font-semibold">{emailDetails.recipient}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Sent At:</span>
                <span className="font-semibold">{emailDetails.sentAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Status:</span>
                <span className="font-semibold">{emailDetails.status}</span>
              </div>
            </CardContent>
          </Card>
        ) ;

      case 'whatsappId' whatsappDetails ? (
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <MessageSquare className="w-5 h-5" />
                WhatsApp Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">WhatsApp ID:</span>
                <span className="font-semibold">{whatsappDetails.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Message:</span>
                <span className="font-semibold">{whatsappDetails.message}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Recipient:</span>
                <span className="font-semibold">{whatsappDetails.recipient}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Sent At:</span>
                <span className="font-semibold">{whatsappDetails.sentAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Status:</span>
                <span className="font-semibold">{whatsappDetails.status}</span>
              </div>
            </CardContent>
          </Card>
        ) ;

      case 'image' record.imageUrl ? (
          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <ImageIcon className="w-5 h-5" />
                Greeting Card
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm">
                This is the personalized greeting card that was generated and sent to {employee.name}
              </p>
              <div className="bg-white rounded-lg p-6 border-2 border-dashed border-orange-200 text-center">
                <div 
                  className="rounded-lg p-8 min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden"
                  style={{
                    backgroundImage: 'url(https:
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                  <div className="relative z-10 text-white text-center">
                    <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">
                      {emailDetails?.subject || whatsappDetails?.message || 'Happy Birthday!'}
                    </h3>
                    <p className="text-xl mb-4 drop-shadow-md">Dear {employee.name},</p>
                    <p className="text-lg drop-shadow-md">
                      Wishing you all the best on your special day!
                    </p>
                    <div className="mt-6 text-sm opacity-90">
                      Generated on {record.createDateTime}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) ;

      default null;
    }
  };

  const getModalTitle = () => {
    switch (selectedOption) {
      case 'employeeId' 'Employee Details';
      case 'opsId' 'Operations View Details';
      case 'emailId' 'Email Details';
      case 'whatsappId' 'WhatsApp Details';
      case 'image' 'Greeting Card';
      default 'Details';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-slate-50">
        <DialogHeader className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="font-mono text-lg font-bold bg-indigo-50 text-indigo-700 border-indigo-200">
              {record.scheduleId}
            </Badge>
            <DialogTitle className="text-2xl font-bold text-slate-800">
              {record.scheduleName} - {getModalTitle()}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="mt-6">
          {renderSelectedContent()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HistoryDetailModal;