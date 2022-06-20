// import "./productList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { buyer } from "../../dummyData";
// import {Property} from "../../dummyData"
// export default function Propertylist() {
//   const [data, setData] = useState(buyer);

//   const handleDelete = (property_id  ) => {
//     setData(data.filter((item) => item.property_id   !== property_id  ));
//     console.log(data);
//   };

//   const columns = [
//     {
//       field: "property_id  ",
//       headerName: "property_id  ",
//       width: 120,
//       rendercell: (params) => {
//         return <div className="productListItem">{params.row.property_id  }</div>;
//       },
//     },

//     {
//       field: "Property",
//       headerName: "Property",
//       width: 160,
//       renderCell: (params) => {
//         return (
//           <div className="productListItem">
//             <img className="productListImg" src={params.row.Watchlist} alt="" />
//           </div>
//         );
//       },
//     },
//     {
//       field: "FirstName",
//       headerName: "FirstName",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <div className="productListItem">{params.row.Buyer_firstname}</div>
//         );
//       },
//     },
//     {
//       field: "LastName",
//       headerName: "LastName",
//       width: 170,
//       renderCell: (params) => {
//         return (
//           <div className="productListItem">{params.row.Buyer_lastname}</div>
//         );
//       },
//     },
//     {
//       field: "BoughtProperty",
//       headerName: "BoughtProperty",
//       width: 190,
//       renderCell: (params) => {
//         return (
//           <div className="productListItem">{params.row.Bought_property}</div>
//         );
//       },
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/product/" + params.row.property_id  }>
//               <button className="productListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="productListDelete"
//               onClick={() => handleDelete(params.row.property_id  )}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="productList">
//       <DataGrid
//         rows={data}
//         disableSelectionOnClick
//         columns={columns}
//         getRowId={(row) => row.cnic}
//         pageSize={8}
//         checkboxSelection
//       />
//     </div>
//   );
// }
