// // import { useEffect, useState } from "react";

// // const Home = () => {
// //   const [carts, setCarts] = useState([]);

// //   useEffect(() => {
// //     fetch("https://dummyjson.com/carts")
// //       .then(res => res.json())
// //       .then(data => setCarts(data.carts));
// //   }, []);

// //   const deleteProduct = (cartId, productId) => {
    
// //     setCarts(prev =>
// //       prev.map(cart =>
// //         cart.id === cartId
// //           ? { ...cart, products: cart.products.filter(p => p.id !== productId) }
// //           : cart
// //       )
// //     );
// //   };

// //   return (
// //     <div className="d-flex flex-column" style={{ height: "100vh", overflow: "auto" }}>
// //       <h2>Carts & Products</h2>

// //       {carts.map(cart => (
// //         <div key={cart.id} className="mb-5">
// //           <h4>Cart ID: {cart.id} (User: {cart.userId})</h4>
// //           <table className="table table-warning">
// //             <thead className="table-dark">
// //               <tr>
// //                 <th>Product ID</th>
// //                 <th>Title</th>
// //                 <th>Price</th>
// //                 <th>Quantity</th>
// //                 <th>Total</th>
// //                 <th>Discount %</th>
// //                 <th>Discounted Total</th>
// //                 <th>Thumbnail</th>
// //                 <th>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {cart.products.map(product => (
// //                 <tr key={product.id}>
// //                   <td>{product.id}</td>
// //                   <td>{product.title}</td>
// //                   <td>${product.price}</td>
// //                   <td>{product.quantity}</td>
// //                   <td>${product.total}</td>
// //                   <td>{product.discountPercentage}%</td>
// //                   <td>${product.discountedTotal}</td>
// //                   <td>
// //                     <img
// //                       src={product.thumbnail}
// //                       alt={product.title}
// //                       style={{ width: "60px", height: "60px", objectFit: "cover" }}
// //                     />
// //                   </td>
// //                   <td>
// //                     <button
// //                       onClick={() => deleteProduct(cart.id, product.id)}
// //                       className="btn btn-danger btn-sm"
// //                     >
// //                       Delete
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Home;

// import { useEffect, useState } from "react";

// const Home = () => {
//   const [carts, setCarts] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/carts")
//       .then(res => res.json())
//       .then(data => setCarts(data.carts));
//   }, []);

//   const deleteProduct = (cartId, productId) => {
//     setCarts(prev =>
//       prev.map(cart =>
//         cart.id === cartId
//           ? { ...cart, products: cart.products.filter(p => p.id !== productId) }
//           : cart
//       )
//     );
//   };

//   return (
//     <div className="d-flex flex-column" style={{ height: "100vh", overflow: "auto" }}>
//       <h2>Carts & Products</h2>
//       {carts.map(cart => (
//         <div key={cart.id} className="mb-5">
//           <h4>Cart ID: {cart.id} (User: {cart.userId})</h4>
//           <div className="d-flex flex-wrap gap-3">
//             {cart.products.map(product => (
//               <div
//                 key={product.id}
//                 className="card"
//                 style={{
//                   width: "18rem",
//                   background: "#fafafa",
//                   border: "1px solid #eaeaea",
//                   borderRadius: "8px",
//                   boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//                   marginBottom: "20px",
//                   padding: "10px"
//                 }}
//               >
//                 <img
//                   src={product.thumbnail}
//                   alt={product.title}
//                   className="card-img-top"
//                   style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "6px" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title}</h5>
//                   <p className="card-text">
//                     <strong>Product ID:</strong> {product.id}<br />
//                     <strong>Price:</strong> ${product.price}<br />
//                     <strong>Quantity:</strong> {product.quantity}<br />
//                     <strong>Total:</strong> ${product.total}<br />
//                     <strong>Discount %:</strong> {product.discountPercentage}%<br />
//                     <strong>Discounted Total:</strong> ${product.discountedTotal}
//                   </p>
//                   <button
//                     onClick={() => deleteProduct(cart.id, product.id)}
//                     className="btn btn-danger btn-sm"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2>Users List</h2>
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {user.email}<br />
                  <strong>Phone:</strong> {user.phone}<br />
                  <strong>Website:</strong> {user.website}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;