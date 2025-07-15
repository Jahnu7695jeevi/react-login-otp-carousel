import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Navigation } from 'lucide-react';

) => void;
  showNearestPartner;
  onToggleNearestPartner: (value) => void;
}

const FilterBar.FC<FilterBarProps> = ({
  onFilterChange,
  showNearestPartner,
  onToggleNearestPartner
}) => {
  const [filters, setFilters] = useState({
    city: '',
    category: ''
  });

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'];
  const categories = ['cake', 'dates', 'gifts', 'dry nuts'];

  const handleFilterUpdate = (key, value) => {
    const newFilters = { ...filters, [key] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = { city: '', category: '' };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm animate-fade-in">
      <div className="grid grid-cols-1 md-cols-4 gap-4 items-end">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">City</label>
          <Select value={filters.city} onValueChange={(value) => handleFilterUpdate('city', value)}>
            <SelectTrigger className="w-full bg-white border-blue-200 focus-2 focus-blue-500">
              <SelectValue placeholder="Select city..." />
            </SelectTrigger>
            <SelectContent className="bg-white border border-blue-200 shadow-lg z-50">
              {cities.map((city) => (
                <SelectItem key={city} value={city} className="hover-blue-50">
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Category</label>
          <Select value={filters.category} onValueChange={(value) => handleFilterUpdate('category', value)}>
            <SelectTrigger className="w-full bg-white border-blue-200 focus-2 focus-blue-500">
              <SelectValue placeholder="Select category..." />
            </SelectTrigger>
            <SelectContent className="bg-white border border-blue-200 shadow-lg z-50">
              {categories.map((category) => (
                <SelectItem key={category} value={category} className="hover-blue-50 capitalize">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Button 
            variant="outline" 
            onClick={clearFilters}
            className="w-full hover-blue-50 border-blue-200 text-blue-600 transition-colors duration-200"
          >
            Clear Filters
          </Button>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-blue-100">
        <div className="flex items-center space-x-3">
          <Switch
            checked={showNearestPartner}
            onCheckedChange={onToggleNearestPartner}
            className="data-[state=checked]-[#2E86FF]"
          />
          <div className="flex items-center space-x-2">
            <Navigation className="h-4 w-4 text-[#2E86FF]" />
            <label className="text-sm font-medium text-gray-700">
              Show nearest available delivery partner
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;