import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Propertylist() {
  const [data, setData] = useState([]);

  const handleDelete = (Property_id) => {
    setData(data.filter((item) => item.Property_id !== Property_id));
    console.log(data);
  };
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get("api/v1/property");
      setData(data.data);
      console.log(data.data);
    };
    getdata();
  }, []);

  const columns = [
    {
      field: "Property_id  ",
      headerName: "Property_id  ",
      width: 120,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.Property_id}</div>;
      },
    },

    {
      field: "Owner name",
      headerName: "Owner name",
      width: 160,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.Full_name}</div>;
      },
    },
    {
      field: "Price",
      headerName: "Price",
      width: 150,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.price}</div>;
      },
    },
    {
      field: "Bed",
      headerName: "Bed",
      width: 170,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.Bed}</div>;
      },
    },
    {
      field: "Bathroom",
      headerName: "Bathroom",
      width: 190,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.bath}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.Property_id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.Property_id)}
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
        getRowId={(row) => row.Property_id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
