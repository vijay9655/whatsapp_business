import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 50,
      color: "black"
    }}
    
  />
);
const Spinloading = ({value}) => <Spin style={{position:'absolute',marginTop:'-8%'}} spinning={value} indicator={antIcon} />;
export default Spinloading;
