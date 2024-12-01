// components/RightSidebar/RightSidebar.tsx
import React from "react";
import { Calendar } from "antd";
import SummaryItem from "../summaryItem";
import { LaptopOutlined, SettingOutlined, FileTextOutlined, BellOutlined } from "@ant-design/icons";
import "./RightSidebar.css";

const RightSidebar: React.FC = () => {
  const summaryData = [
    {
      percentage: 90,
      title: "Thiết bị",
      value: 4221,
      active: 3799,
      inactive: 422,
      icon: <LaptopOutlined />,
      color: "#FA8C16",
    },
    {
      percentage: 76,
      title: "Dịch vụ",
      value: 276,
      active: 210,
      inactive: 66,
      icon: <SettingOutlined />,
      color: "#52C41A",
    },
    {
      percentage: 86,
      title: "Cấp số",
      value: 4221,
      active: 3721,
      inactive: 500,
      icon: <FileTextOutlined />,
      color: "#409EFF",
    },
  ];

  return (
    <div className="right-sidebar">
      <div className="user-info">
        <BellOutlined className="notification-icon" />
        <div className="user">
          <p>Xin chào</p>
          <h3>Lê Quỳnh Ái Vân</h3>
        </div>
      </div>
      <h2>Tổng quan</h2>
      <div className="summary">
        {summaryData.map((item, index) => (
          <SummaryItem
            key={index}
            percentage={item.percentage}
            title={item.title}
            value={item.value}
            active={item.active}
            inactive={item.inactive}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
      <div className="summary">
        <Calendar fullscreen={false} />
      </div>
    </div>
  );
};

export default RightSidebar;
