import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, XCircle, Clock, Mail, MessageSquare, User, Calendar, Settings } from 'lucide-react';

const TaskDetailModal = ({ task, isOpen, onClose }) => {
  const [editMode, setEditMode] = useState(false);
  const [frequency, setFrequency] = useState(task?.frequency || 'D');
  const [time, setTime] = useState(task?.time || '05');

  if (!task) return null;

  const greetingHistory = [
    {
      id,
      recipient: 'John Doe',
      email: 'john.doe@company.com',
      phone: '+91-9876543210',
      greetingType: 'Birthday',
      sentDate: '2024-06-20 07',
      status: 'S',
      channel: 'Email'
    },
    {
      id,
      recipient: 'Jane Smith',
      email: 'jane.smith@company.com',
      phone: '+91-9876543211',
      greetingType: 'Anniversary',
      sentDate: '2024-06-20 07',
      status: 'S',
      channel: 'WhatsApp'
    },
    {
      id,
      recipient: 'Mike Johnson',
      email: 'mike.johnson@company.com',
      phone: '+91-9876543212',
      greetingType: 'Birthday',
      sentDate: '2024-06-21 07',
      status: 'F',
      channel: 'Email'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'S' <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'F' <XCircle className="w-4 h-4 text-red-500" />;
      default <Clock className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getChannelIcon = (channel) => {
    switch (channel) {
      case 'Email' <Mail className="w-4 h-4 text-blue-500" />;
      case 'WhatsApp' <MessageSquare className="w-4 h-4 text-green-500" />;
      default <MessageSquare className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-slate-50">
        <DialogHeader className="border-b border-slate-200 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="font-mono text-lg font-bold bg-indigo-50 text-indigo-700 border-indigo-200">
                {task.id}
              </Badge>
              <DialogTitle className="text-2xl font-bold text-slate-800">
                {task.description}
              </DialogTitle>
            </div>
            <Button
              onClick={() => setEditMode(!editMode)}
              variant="outline"
              className="border-indigo-200 text-indigo-600 hover-indigo-50"
            >
              <Settings className="w-4 h-4 mr-2" />
              {editMode ? 'Cancel Edit' : 'Edit Task'}
            </Button>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-100/50">
            <TabsTrigger value="overview" className="data-[state=active]-white data-[state=active]-sm">
              Overview
            </TabsTrigger>
            <TabsTrigger value="greetings" className="data-[state=active]-white data-[state=active]-sm">
              Greeting History
            </TabsTrigger>
            <TabsTrigger value="recipients" className="data-[state=active]-white data-[state=active]-sm">
              Recipients
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Calendar className="w-5 h-5" />
                    Schedule Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Frequency</label>
                    {editMode ? (
                      <Select value={frequency} onValueChange={setFrequency}>
                        <SelectTrigger className="bg-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="D">Daily</SelectItem>
                          <SelectItem value="W">Weekly</SelectItem>
                          <SelectItem value="M">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-slate-600">Daily</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Execution Time</label>
                    {editMode ? (
                      <Input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="bg-white"
                      />
                    ) : (
                      <p className="text-slate-600">{task.time} Hrs IST</p>
                    )}
                  </div>
                  {editMode && (
                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover-green-600 hover-emerald-600">
                      Save Changes
                    </Button>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Settings className="w-5 h-5" />
                    Task Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Executions:</span>
                    <span className="font-semibold">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Success Rate:</span>
                    <span className="font-semibold text-green-600">94.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Last Execution:</span>
                    <span className="font-semibold">Today 05</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Next Execution:</span>
                    <span className="font-semibold text-blue-600">Tomorrow 05</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="greetings" className="space-y-4 mt-6">
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {greetingHistory.map((greeting) => (
                <Card key={greeting.id} className="hover-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {getChannelIcon(greeting.channel)}
                        <div>
                          <h4 className="font-semibold text-slate-800">{greeting.greetingType} Greeting</h4>
                          <p className="text-sm text-slate-600">Sent on {greeting.sentDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(greeting.status)}
                        <Badge className={greeting.status === 'S' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                          {greeting.status === 'S' ? 'Delivered' : 'Failed'}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recipients" className="space-y-4 mt-6">
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {greetingHistory.map((recipient) => (
                <Card key={recipient.id} className="hover-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800">{recipient.recipient}</h4>
                        <p className="text-sm text-slate-600">{recipient.email}</p>
                        <p className="text-sm text-slate-600">{recipient.phone}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-slate-700">{recipient.greetingType}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {getChannelIcon(recipient.channel)}
                          {getStatusIcon(recipient.status)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailModal;