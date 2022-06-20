import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { buyer } from "../../dummyData";
import axios from "axios";
/*** "cnic": "1234567891017",
            "Selling_id": "abcd1234",
            "Seller_firstname": "hammad",
            "Seller_lastname": "aslam",
            "Seller_email": "hammad@gmail.com",
            "Seller_password": "12345678",
            "Sold_property": null,
            "Owned_property": null,
            "Available": 0 */
export default function ProductList() {
  const [data, setData] = useState([]);
  // const { client, setting } = useState(buyer);

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get("api/v1/sellers");
      setData(data.data);
      console.log(data.data);
      console.log(buyer);
    };
    getdata();
  }, []);
  const handleDelete = (cnic) => {
    setData(data.filter((item) => item.cnic !== cnic));
    console.log(data);
  };

  const columns = [
    {
      field: "cnic",
      headerName: "cnic",
      width: 120,
      rendercell: (params) => {
        return <div className="productListItem">{params.row.cnic}</div>;
      },
    },

    {
      field: "Selling_id",
      headerName: "Selling_id",
      width: 160,
      rendercell: (params) => {
        return (
          <div className="productListItem">
            {params.row.Selling_id}
          </div>
        );
      },
    },
    {
      field: "Full_name",
      headerName: "Full_name",
      width: 150,
      rendercell: (params) => {
        return (
          <div className="productListItem">{params.row.Full_name}</div>
        );
      },
    },
    {
      field: "Seller_email",
      headerName: "Seller_email",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="productListItem">{params.row.Seller_email}</div>
        );
      },
    },
    {
      field: "Sold_property",
      headerName: "Sold_property",
      width: 190,
      renderCell: (params) => {
        return (
          <div className="productListItem">{params.row.Sold_property}</div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.cnic}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.cnic)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row.cnic}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
