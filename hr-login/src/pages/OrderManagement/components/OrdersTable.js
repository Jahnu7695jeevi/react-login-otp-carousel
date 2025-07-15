import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Upload, CheckCircle, Loader2 } from 'lucide-react';
import { Order } from '../types/order';



const OrdersTable.FC<OrdersTableProps> = ({ orders, showNearestPartner, onVendorUpload }) => {
  const getNearestPartner = (order) => {
    const partners = ['Rahul Kumar', 'Priya Sharma', 'Amit Singh', 'Neha Patel'];
    return partners[order.id % partners.length];
  };

  const getUploadButtonContent = (uploadStatus?) => {
    switch (uploadStatus) {
      case 'uploading' (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Uploading...
          </>
        );
      case 'completed' (
          <>
            <CheckCircle className="h-4 w-4" />
            Uploaded
          </>
        );
      case 'failed' (
          <>
            <Upload className="h-4 w-4" />
            Retry
          </>
        );
      default (
          <>
            <Upload className="h-4 w-4" />
            Upload
          </>
        );
    }
  };

  const getUploadButtonVariant = (uploadStatus?) => {
    switch (uploadStatus) {
      case 'completed' 'default';
      case 'failed' 'destructive';
      default 'outline';
    }
  };

  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case 'cake' 'bg-pink-100 text-pink-700 border-pink-300';
      case 'dates' 'bg-amber-100 text-amber-700 border-amber-300';
      case 'gifts' 'bg-purple-100 text-purple-700 border-purple-300';
      case 'dry nuts' 'bg-green-100 text-green-700 border-green-300';
      default 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-200">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
              Serial No.
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
              Vendor ID
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
              Vendor Name
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
              Order Date
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
              Category
            </th>
            {showNearestPartner && (
              <th className="px-6 py-4 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                Nearest Partner
              </th>
            )}
            <th className="px-6 py-4 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white/50 divide-y divide-blue-100">
          {orders.map((order, index) => (
            <tr 
              key={order.id} 
              className={`
                ${index % 2 === 0 ? 'bg-white/60' : 'bg-blue-25/30'} 
                hover-blue-100/50 transition-all duration-200 animate-fade-in
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                {String(order.id).padStart(3, '0')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Badge variant="outline" className="text-blue-600 border-blue-300 bg-blue-50">
                  {order.vendorId}
                </Badge>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                {order.vendorName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {order.orderDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Badge className={`${getCategoryBadgeColor(order.category)} capitalize`}>
                  {order.category}
                </Badge>
              </td>
              {showNearestPartner && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-700">{getNearestPartner(order)}</span>
                  </div>
                </td>
              )}
              <td className="px-6 py-4 whitespace-nowrap">
                <Button
                  size="sm"
                  variant={getUploadButtonVariant(order.uploadStatus)}
                  onClick={() => onVendorUpload(order.id)}
                  disabled={order.uploadStatus === 'uploading' || order.uploadStatus === 'completed'}
                  className={`
                    ${order.uploadStatus === 'completed' 
                      ? 'bg-green-500 hover-green-600 text-white border-green-500' 
                      : 'bg-blue-50 hover-blue-100 text-blue-600 border-blue-300'
                    }
                    transition-all duration-200 shadow-sm
                  `}
                >
                  {getUploadButtonContent(order.uploadStatus)}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {orders.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No orders found matching the current filters.</p>
        </div>
      )}
    </div>
  );
};

export default OrdersTable;