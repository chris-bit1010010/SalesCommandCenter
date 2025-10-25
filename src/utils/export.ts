import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const exportToPDF = (title: string, data: any[], columns: string[]) => {
  const doc = new jsPDF();
  
  doc.setFontSize(18);
  doc.text(title, 14, 22);
  
  doc.setFontSize(11);
  doc.setTextColor(100);
  
  // Prepare table data
  const tableData = data.map(item => 
    columns.map(col => {
      const value = item[col];
      if (typeof value === 'number') {
        return value.toLocaleString();
      }
      return value || '';
    })
  );
  
  autoTable(doc, {
    head: [columns.map(col => col.charAt(0).toUpperCase() + col.slice(1))],
    body: tableData,
    startY: 30,
    styles: { fontSize: 10 },
    headStyles: { fillColor: [66, 139, 202] },
  });
  
  doc.save(`${title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const exportToExcel = (title: string, data: any[]) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, title);
  
  XLSX.writeFile(workbook, `${title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.xlsx`);
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPercent = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value);
};
