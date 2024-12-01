// components/DeviceList.tsx
import React, { useEffect, useState } from "react";
import { Table, Select, Input, Button, Tag } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import "./DeviceList.css";
import AddDeviceButton from "../AddDeviceButton";
import UserSection from "../userSection";
const { Option } = Select;
type DeviceListProps = {
  sendSelectedIndex: (index:number) => void;
  data: any[];
  columns: any[];
  headerText: string;
}
const DeviceList = (props: DeviceListProps) => {
  const [search, setSearch] = useState("");
  const [internalData, setInternalData] = useState<any>([]);
  const [internalColumns, setInternalColumns] = useState<any>([]);
  const receiveStatus = (status:boolean) => {
    if(status){
      props.sendSelectedIndex(2);
    }
  }
  // Sample data for the table
  useEffect(() => {
    return () => {
      // Cleanup internal state when component unmounts
      setInternalData([]);
      setInternalColumns([]);
    };
  }, []);
  useEffect(()=>{
    setInternalColumns(props.columns);
    setInternalData(props.data);
  },[props.data])
  return (
    <div className="device-list">
      <div className="top-bar">
      <h2>{props.headerText}</h2>
      <UserSection />
      </div>
       {/* User section */}
      {/* Filters */}
      <div className="filters">
        <div className="leftFilterItem">
          <div className="filterItem">
            <span style={{marginBottom:'5px'}}>Trạng thái hoạt động</span>
            <Select defaultValue="Tất cả" style={{ width: 180 }} className="filter">
                <Option value="all">Tất cả</Option>
                <Option value="active">Hoạt động</Option>
                <Option value="inactive">Ngừng hoạt động</Option>
            </Select>
          </div>
          <div className="filterItem">
        <span style={{marginBottom:'5px'}}>Trạng thái kết nối</span>
        <Select defaultValue="Tất cả" style={{ width: 180 }} className="filter">
          <Option value="all">Tất cả</Option>
          <Option value="connected">Kết nối</Option>
          <Option value="disconnected">Mất kết nối</Option>
        </Select>
          </div>
        </div>
        <div className="leftFilterItem">
          <div className="filterItem">
            <span style={{marginBottom:'5px'}}>Từ khóa</span>
            <Input
          placeholder="Nhập từ khóa"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 240 }}
          suffix={<SearchOutlined />}
            />
          </div>
      </div>
      </div>
      <div className="middleData">
      <Table style={{width:'88%'}}
        dataSource={internalData}
        columns={internalColumns}
        pagination={{ pageSize: 5 }}
        className="device-table"
      />
      <div style={{width:'10%', marginLeft:'10px', display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
      <AddDeviceButton sendStatus={receiveStatus}  />
      </div>
      </div>    
    </div>
  );
};
export default DeviceList;
