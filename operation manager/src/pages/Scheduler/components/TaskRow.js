import React, { useState } from 'react';
import { Clock, Eye, Save, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const TaskRow = ({ task, index, onClick }) => {
  const [isActive, setIsActive] = useState(task.isActive);
  const [frequency, setFrequency] = useState(task.frequency);
  const [time, setTime] = useState(task.time);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Data Collection' 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Content Generation' 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Communication' 'bg-green-100 text-green-700 border-green-200';
      default 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleSave = () => {
    
    console.log('Saving task:', { ...task, isActive, frequency, time });
  };

  return (
    <div className={`group p-6 border-b border-slate-100 hover-gradient-to-r hover-indigo-50/50 hover-purple-50/50 transition-all duration-200 ${
      index % 2 === 0 ? 'bg-white/50' : 'bg-slate-50/30'
    }`}>
      <div className="flex items-center gap-6">
        {}
        <div className="min-w-[80px]">
          <Badge variant="outline" className="font-mono text-sm font-bold bg-indigo-50 text-indigo-700 border-indigo-200">
            {task.id}
          </Badge>
        </div>

        {}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-slate-800 group-hover-indigo-700 transition-colors">
              {task.description}
            </h3>
            <Badge className={`text-xs ${getCategoryColor(task.category)}`}>
              {task.category}
            </Badge>
          </div>
        </div>

        {}
        <div className="flex items-center gap-2">
          <Checkbox
            checked={isActive}
            onCheckedChange={setIsActive}
            className="data-[state=checked]-green-500 data-[state=checked]-green-500"
          />
          <span className="text-sm text-slate-600 min-w-[50px]">
            {isActive ? 'Active' : 'Inactive'}
          </span>
        </div>

        {}
        <div className="min-w-[120px]">
          <Select value={frequency} onValueChange={setFrequency}>
            <SelectTrigger className="bg-white/80 border-slate-200 hover-indigo-300 transition-colors">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white/95 backdrop-blur-sm">
              <SelectItem value="D">Daily</SelectItem>
              <SelectItem value="W">Weekly</SelectItem>
              <SelectItem value="M">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {}
        <div className="min-w-[120px]">
          <div className="relative">
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="bg-white/80 border-slate-200 hover-indigo-300 transition-colors pl-10"
            />
            <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {}
        <div className="flex items-center gap-2">
          <Button
            onClick={handleSave}
            size="sm"
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover-green-600 hover-emerald-600 text-white shadow-md hover-lg transition-all duration-200"
          >
            <Save className="w-4 h-4 mr-1" />
            Save
          </Button>
          
          <Button
            onClick={() => onClick(task)}
            size="sm"
            variant="outline"
            className="border-indigo-200 text-indigo-600 hover-indigo-50 hover-indigo-300 transition-all duration-200"
          >
            <Eye className="w-4 h-4 mr-1" />
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskRow;