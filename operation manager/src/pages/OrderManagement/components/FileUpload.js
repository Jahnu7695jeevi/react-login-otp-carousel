import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Upload, FileSpreadsheet, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Order } from '../types/order';



const FileUpload.FC<FileUploadProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDragOver = (e.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = async (files[]) => {
    const xlsxFile = files.find(file => 
      file.name.endsWith('.xlsx') || file.name.endsWith('.xls')
    );

    if (!xlsxFile) {
      toast({
        title: "Invalid file type",
        description: "Please upload an Excel (.xlsx) file",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);
    setProgress(0);

    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    try {
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      
      const newOrders[] = [
        {
          id.now(),
          vendorId: 'VND004',
          vendorName: 'Uploaded Vendor A',
          orderDate: '25-12-2024',
          city: 'Chennai',
          zone: 'Zone D',
          pinCode: '600001',
          category: 'cake',
          uploadStatus: 'idle'
        },
        {
          id.now() + 1,
          vendorId: 'VND005',
          vendorName: 'Uploaded Vendor B',
          orderDate: '25-12-2024',
          city: 'Hyderabad',
          zone: 'Zone E',
          pinCode: '500001',
          category: 'dates',
          uploadStatus: 'idle'
        }
      ];

      setProgress(100);
      setTimeout(() => {
        setUploading(false);
        setProgress(0);
        onUpload(newOrders);
        
        toast({
          title: "Upload complete",
          description: `Successfully uploaded ${newOrders.length} orders`,
          className: "border-green-200 bg-green-50 text-green-800"
        });

        
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }, 500);

    } catch (error) {
      setUploading(false);
      setProgress(0);
      toast({
        title: "Upload failed",
        description: "There was an error processing your file",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 transition-all duration-300 hover-[#2E86FF] animate-fade-in">
      <div
        className={`
          relative transition-all duration-300 rounded-lg p-6
          ${isDragging ? 'bg-blue-50 border-[#2E86FF]' : 'bg-gray-50'}
          ${uploading ? 'pointer-events-none' : 'cursor-pointer'}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !uploading && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className="text-center">
          {uploading ? (
            <div className="space-y-4">
              <div className="animate-spin mx-auto">
                <FileSpreadsheet className="h-12 w-12 text-[#2E86FF]" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-900">Processing file...</p>
                <Progress value={progress} className="w-full max-w-xs mx-auto" />
                <p className="text-sm text-gray-500">{progress}% complete</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 text-[#2E86FF] transition-transform duration-200 hover-110">
                <Upload className="w-full h-full" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">
                  Upload Orders Excel File
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Drag and drop your .xlsx file here, or click to browse
                </p>
              </div>
              <Button 
                className="bg-[#2E86FF] hover-blue-600 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                Choose File
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;