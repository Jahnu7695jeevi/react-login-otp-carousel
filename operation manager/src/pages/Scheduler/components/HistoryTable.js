import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Clock, User, MessageSquare, Mail, Image, ChevronDown, Eye } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import HistoryDetailModal from '@/components/HistoryDetailModal';

const HistoryTable = ({ data }) => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'S' <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'F' <XCircle className="w-4 h-4 text-red-500" />;
      case 'P' <Clock className="w-4 h-4 text-yellow-500" />;
      default <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'S' 'bg-green-100 text-green-700 border-green-200';
      case 'F' 'bg-red-100 text-red-700 border-red-200';
      case 'P' 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'S' 'Success';
      case 'F' 'Failed';
      case 'P' 'Pending';
      default 'Unknown';
    }
  };

  const handleOptionSelect = (record, option) => {
    setSelectedRecord(record);
    setSelectedOption(option);
    setIsDetailModalOpen(true);
  };

  const getAvailableOptions = (record) => {
    const options = [
      { key: 'employeeId', label: 'Employee Id', icon, available },
      { key: 'opsId', label: 'Ops Id', icon, available }
    ];

    
    if (record.scheduleName.toLowerCase().includes('email')) {
      options.push({ key: 'emailId', label: 'Email Id', icon, available.emailId });
    } else if (record.scheduleName.toLowerCase().includes('whatsapp')) {
      options.push({ key: 'whatsappId', label: 'WhatsApp Id', icon, available.whatsappId });
    }

    options.push({ key: 'image', label: 'Image', icon, available.imageUrl });

    return options.filter(option => option.available);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-slate-100 to-gray-100 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Serial No.</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Schedule ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Schedule Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Create Date & Time</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.serial}
                className={`border-b border-slate-100 hover-gradient-to-r hover-slate-50/50 hover-gray-50/50 transition-all duration-200 ${
                  index % 2 === 0 ? 'bg-white/50' : 'bg-slate-50/30'
                }`}
              >
                <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                  {String(row.serial).padStart(3, '0')}
                </td>
                <td className="px-6 py-4">
                  <Badge variant="outline" className="font-mono text-xs font-bold bg-indigo-50 text-indigo-700 border-indigo-200">
                    {row.scheduleId}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-sm text-slate-700 font-medium">
                  {row.scheduleName}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 font-mono">
                  {row.createDateTime}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(row.status)}
                    <Badge className={`text-xs ${getStatusColor(row.status)}`}>
                      {getStatusText(row.status)}
                    </Badge>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex items-center gap-2 text-indigo-600 hover-indigo-700 hover-indigo-50 p-2"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="end" 
                      className="w-48 bg-white border border-slate-200 shadow-lg z-50"
                    >
                      {getAvailableOptions(row).map((option) => {
                        const IconComponent = option.icon;
                        return (
                          <DropdownMenuItem
                            key={option.key}
                            onClick={() => handleOptionSelect(row, option.key)}
                            className="flex items-center gap-2 cursor-pointer hover-slate-50 focus-slate-50"
                          >
                            <IconComponent className="w-4 h-4" />
                            {option.label}
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <HistoryDetailModal
        record={selectedRecord}
        selectedOption={selectedOption}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
      />
    </>
  );
};

export default HistoryTable;