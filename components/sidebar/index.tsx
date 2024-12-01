// components/Sidebar/Sidebar.tsx
import React from "react";
import { Menu } from "antd";
import {
  DashboardOutlined,
  DesktopOutlined,
  FileOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";
type SideBarProps = {
  sendSelectedIndex: (index:number) => void;
}
const Sidebar = (props:SideBarProps) => {
  const handleMenuClick = (index:number)=>{
    props.sendSelectedIndex(index);
  }
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="./images/Logo.png" alt="Logo" />
      </div>
      <Menu
        mode="vertical"
        theme="light"
        defaultSelectedKeys={["1"]}
        className="menu"
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}
        onClick={()=>handleMenuClick(0)}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}
         onClick={()=>handleMenuClick(1)}
        >
          Thiết bị
        </Menu.Item>
        <Menu.Item key="3" icon={<FileOutlined />}
         onClick={()=>handleMenuClick(5)}
        >
          Dịch vụ
        </Menu.Item>
        <Menu.Item key="4" icon={<FileOutlined />}>
          Cấp số
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          Báo cáo
        </Menu.Item>
        <Menu.Item key="6" icon={<SettingOutlined />}>
          Cài đặt hệ thống
        </Menu.Item>
        <Menu.Item key="7" icon={<LogoutOutlined />} className="logout">
          Đăng xuất
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
