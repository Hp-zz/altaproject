// components/AddDeviceButton.tsx
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import "./AddDeviceButton.css";
type AddDeviceButtonProps = {
  sendStatus: (status:boolean) => void;
}
const AddDeviceButton = (props:AddDeviceButtonProps) => {
  const handleClick = () => {
    props.sendStatus(true);
  }
  return (
    <div className="add-device-button">
      <PlusOutlined className="icon" onClick={handleClick} />
      <p>Thêm thiết bị</p>
    </div>
  );
};

export default AddDeviceButton;
