import React, { useState } from "react";

const Billing = () => {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const [item, setItem] = useState({
    model: "",
    imei: "",
    price: ""
  });

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handlePrint = () => {
    window.print(); // Simple print dialog
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">i-mobile</h2>

      {/* Input Section */}
      <div className="card p-3 mb-4 shadow">
        <h5>Customer Details</h5>
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Customer Name"
              name="name"
              value={customer.name}
              onChange={handleCustomerChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Phone Number"
              name="phone"
              value={customer.phone}
              onChange={handleCustomerChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Address"
              name="address"
              value={customer.address}
              onChange={handleCustomerChange}
            />
          </div>
        </div>

        <h5 className="mt-3">Item Details</h5>
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Mobile Model"
              name="model"
              value={item.model}
              onChange={handleItemChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="IMEI Number"
              name="imei"
              value={item.imei}
              onChange={handleItemChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Price (₹)"
              name="price"
              value={item.price}
              onChange={handleItemChange}
            />
          </div>
        </div>
      </div>

      {/* Bill Preview */}
      <div className="card p-4 shadow">
        <h4 className="text-center mb-3">Bill Preview</h4>
        <div>
          <p><strong>Customer Name:</strong> {customer.name || "—"}</p>
          <p><strong>Phone:</strong> {customer.phone || "—"}</p>
          <p><strong>Address:</strong> {customer.address || "—"}</p>
        </div>
        <hr />
        <div>
          <p><strong>Mobile Model:</strong> {item.model || "—"}</p>
          <p><strong>IMEI:</strong> {item.imei || "—"}</p>
          <p><strong>Price:</strong> ₹ {item.price || "—"}</p>
        </div>

        
         {/* Payment Mode */}
        <p><strong>Payment Mode:</strong> UPI </p>

        {/* Footer */}
        <hr />
        <p className="text-center ">Thank you for shopping with us!</p>
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={handlePrint}>
            Generate Bill / Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
