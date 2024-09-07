import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order!</h2>
      <p>
        Your order has been placed successfully. You will receive an email soon.
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <p>Order Number: {order.orderNumber}</p>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Shipping Information</h4>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Items Ordered</h4>
          {order.products.map((product) => (
            <div key={product.id} className="flex justify-between mt-2">
              <p>
                {product.name} x {product.quantity}
              </p>
              <p>${product.price * product.quantity}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <span>Total price: </span>
        <span className="font-semibold">${order.totalPrice}</span>
      </div>
      <div className="mt-6">
        <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600">
          Order Tracking
        </button>
        <button
          className="ml-4 bg-red-500 text-white py-2 px-4 hover:bg-red-600"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Order;
