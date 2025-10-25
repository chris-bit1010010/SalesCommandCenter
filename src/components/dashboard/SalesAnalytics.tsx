import { ChartPanel } from '../common/ChartPanel';
import { generateSalesData, generateTopProducts } from '../../data/mockData';
import { Download } from 'lucide-react';
import { exportToPDF, exportToExcel, formatCurrency } from '../../utils/export';
import './SalesAnalytics.css';

export const SalesAnalytics = () => {
  const salesData = generateSalesData();
  const topProducts = generateTopProducts();

  const handleExportPDF = () => {
    exportToPDF('Sales Analytics', topProducts, ['name', 'sales', 'revenue', 'growth']);
  };

  const handleExportExcel = () => {
    exportToExcel('Sales Analytics', topProducts);
  };

  return (
    <div className="sales-analytics">
      <div className="section-header">
        <div>
          <h2 className="section-title">Sales Analytics</h2>
          <p className="section-subtitle">Detailed sales performance and product insights</p>
        </div>
        <div className="section-actions">
          <button className="btn btn--secondary btn--sm" onClick={handleExportPDF}>
            <Download size={16} />
            Export PDF
          </button>
          <button className="btn btn--secondary btn--sm" onClick={handleExportExcel}>
            <Download size={16} />
            Export Excel
          </button>
        </div>
      </div>

      <div className="sales-analytics__charts">
        <ChartPanel
          title="Sales Trends"
          data={salesData}
          type="line"
          dataKeys={[
            { key: 'sales', color: '#428bca', name: 'Sales' },
            { key: 'target', color: '#5cb85c', name: 'Target' },
          ]}
          height={400}
        />
      </div>

      <div className="sales-analytics__products">
        <h3 className="subsection-title">Top Products</h3>
        <div className="products-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
                <th>Revenue</th>
                <th>Growth</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, index) => (
                <tr key={index}>
                  <td className="product-name">{product.name}</td>
                  <td>{product.sales}</td>
                  <td>{formatCurrency(product.revenue)}</td>
                  <td className={product.growth >= 0 ? 'growth-positive' : 'growth-negative'}>
                    {product.growth > 0 ? '+' : ''}{product.growth}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
