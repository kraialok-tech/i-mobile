import React from "react";
import { Card, Button } from "react-bootstrap";

const Bill = () => {
  const billData = {
    shopName: "i-Mobile Shop",
    shopAddress: "123 Market Road, Pune",
    billNo: "INV-1001",
    date: new Date().toLocaleDateString(),
    customer: {
      name: "John Doe",
      phone: "+91 9876543210",
    },
    items: [
      { name: "iPhone 15 Pro", qty: 1, price: 145000 },
      { name: "Samsung Galaxy S24", qty: 1, price: 125000 },
    ],
    paymentMode: "UPI",
  };

  const totalAmount = billData.items.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div className="container mt-4">
      <Card className="shadow-lg p-4">
        {/* Shop Info */}
        <h2 className="text-center mb-3">{billData.shopName}</h2>
        <p className="text-center">{billData.shopAddress}</p>
        <hr />

        {/* Bill Info */}
        <div className="d-flex justify-content-between">
          <div>
            <p><strong>Bill No:</strong> {billData.billNo}</p>
            <p><strong>Date:</strong> {billData.date}</p>
          </div>
          <div>
            <p><strong>Customer:</strong> {billData.customer.name}</p>
            <p><strong>Phone:</strong> {billData.customer.phone}</p>
          </div>
        </div>
        <hr />

        {/* Item Table */}
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price (₹)</th>
              <th>Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            {billData.items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price.toLocaleString()}</td>
                <td>{(item.qty * item.price).toLocaleString()}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" className="text-end"><strong>Grand Total</strong></td>
              <td><strong>{totalAmount.toLocaleString()}</strong></td>
            </tr>
          </tbody>
        </table>

        {/* Payment Mode */}
        <p><strong>Payment Mode:</strong> {billData.paymentMode}</p>

        {/* Footer */}
        <hr />
        <p className="text-center">Thank you for shopping with us!</p>
        <div className="d-flex justify-content-center">
          <Button variant="primary" onClick={() => window.print()}>
            Print Bill
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Bill;
