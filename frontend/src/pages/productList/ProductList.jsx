import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { buyer } from "../../dummyData";
import axios from "axios";
export default function ProductList() {
  const [data, setData] = useState(buyer);
  // const { client, setting } = useState(buyer);

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get("api/v1/");
      setData(data.data);
      console.log(data.data);
      console.log(buyer)
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
      field: "Property",
      headerName: "Property",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.Watchlist} alt="" />
          </div>
        );
      },
    },
    {
      field: "FirstName",
      headerName: "FirstName",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListItem">{params.row.Buyer_firstname}</div>
        );
      },
    },
    {
      field: "LastName",
      headerName: "LastName",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="productListItem">{params.row.Buyer_lastname}</div>
        );
      },
    },
    {
      field: "BoughtProperty",
      headerName: "BoughtProperty",
      width: 190,
      renderCell: (params) => {
        return (
          <div className="productListItem">{params.row.Bought_property}</div>
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
