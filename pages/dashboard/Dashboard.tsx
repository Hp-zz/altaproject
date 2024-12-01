import React, {useState, useEffect} from "react";
import { Tag } from "antd";
import './styles.css'
import MyCalendar from '../../components/calendar';
import LineChartComponent from "../../components/charts";
import ChartSection from "../../components/charts";
import { setEmitFlags } from "typescript";
import Device from "../../components/device";
import Sidebar from "../../components/sidebar";
import MainContent from "../../components/mainContent";
import RightSidebar from "../../components/rightSidebar";
import DeviceForm from "../../components/DeviceForm";
import DeviceDetails from "../../components/DeviceDetails";
import DeviceUpdateForm from "../../components/DeviceUpdateForm";
const data = [
    { date: '01', value: 2000 },
    { date: '07', value: 3500 },
    { date: '13', value: 3000 },
    { date: '19', value: 4221 }, // Example peak value
    { date: '25', value: 3200 },
    { date: '31', value: 2800 },
  ];
const Dashboard = () => {
    const [degree, setDegree] = useState(30);
    const [data1, setData1] = useState<any|null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleReceiveSelectedIndex = (index:number)=>{
        setSelectedIndex(index);
    }
    const deviceData = {
        deviceCode: 'KIO_01',
        deviceName: 'Kiosk',
        ipAddress: '128.172.308',
        deviceType: 'Kiosk',
        username: 'Linkhyo011',
        password: 'CMS',
        services: 'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
      };
      const deviceData1 = {
        deviceCode: 'KIO_01',
        deviceName: 'Kiosk',
        ipAddress: '128.172.308',
        deviceType: 'Kiosk',
        username: 'Linkhyo011',
        password: 'CMS',
        services: [
          'Khám tim mạch',
          'Khám sản phụ khoa',
          'Khám răng hàm mặt',
          'Khám tai mũi họng',
          'Khám hô hấp',
          'Khám tổng quát',
        ],
      };

      const data = [
        {
          key: "1",
          deviceId: "KIO_01",
          deviceName: "Kiosk",
          ip: "192.168.1.10",
          status: "Ngừng hoạt động",
          connection: "Mất kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "2",
          deviceId: "KIO_02",
          deviceName: "Kiosk",
          ip: "192.168.1.11",
          status: "Hoạt động",
          connection: "Kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "1",
          deviceId: "KIO_01",
          deviceName: "Kiosk",
          ip: "192.168.1.10",
          status: "Ngừng hoạt động",
          connection: "Mất kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "2",
          deviceId: "KIO_02",
          deviceName: "Kiosk",
          ip: "192.168.1.11",
          status: "Hoạt động",
          connection: "Kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "1",
          deviceId: "KIO_01",
          deviceName: "Kiosk",
          ip: "192.168.1.10",
          status: "Ngừng hoạt động",
          connection: "Mất kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "2",
          deviceId: "KIO_02",
          deviceName: "Kiosk",
          ip: "192.168.1.11",
          status: "Hoạt động",
          connection: "Kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "1",
          deviceId: "KIO_01",
          deviceName: "Kiosk",
          ip: "192.168.1.10",
          status: "Ngừng hoạt động",
          connection: "Mất kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "2",
          deviceId: "KIO_02",
          deviceName: "Kiosk",
          ip: "192.168.1.11",
          status: "Hoạt động",
          connection: "Kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "1",
          deviceId: "KIO_01",
          deviceName: "Kiosk",
          ip: "192.168.1.10",
          status: "Ngừng hoạt động",
          connection: "Mất kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "2",
          deviceId: "KIO_02",
          deviceName: "Kiosk",
          ip: "192.168.1.11",
          status: "Hoạt động",
          connection: "Kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "1",
          deviceId: "KIO_01",
          deviceName: "Kiosk",
          ip: "192.168.1.10",
          status: "Ngừng hoạt động",
          connection: "Mất kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "2",
          deviceId: "KIO_02",
          deviceName: "Kiosk",
          ip: "192.168.1.11",
          status: "Hoạt động",
          connection: "Kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "1",
          deviceId: "KIO_01",
          deviceName: "Kiosk",
          ip: "192.168.1.10",
          status: "Ngừng hoạt động",
          connection: "Mất kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        {
          key: "2",
          deviceId: "KIO_02",
          deviceName: "Kiosk",
          ip: "192.168.1.11",
          status: "Hoạt động",
          connection: "Kết nối",
          services: "Khám tim mạch, Khám mắt",
        },
        // More rows...
      ];
    
      // Table columns
      const columns = [
        {
          title: "Mã thiết bị",
          dataIndex: "deviceId",
          key: "deviceId",
        },
        {
          title: "Tên thiết bị",
          dataIndex: "deviceName",
          key: "deviceName",
        },
        {
          title: "Địa chỉ IP",
          dataIndex: "ip",
          key: "ip",
        },
        {
          title: "Trạng thái hoạt động",
          dataIndex: "status",
          key: "status",
          render: (status: string) =>
            status === "Hoạt động" ? (
              <Tag color="green">Hoạt động</Tag>
            ) : (
              <Tag color="red">Ngừng hoạt động</Tag>
            ),
        },
        {
          title: "Trạng thái kết nối",
          dataIndex: "connection",
          key: "connection",
          render: (connection: string) =>
            connection === "Kết nối" ? (
              <Tag color="green">Kết nối</Tag>
            ) : (
              <Tag color="red">Mất kết nối</Tag>
            ),
        },
        {
          title: "Dịch vụ sử dụng",
          dataIndex: "services",
          key: "services",
          render: (services: string) => (
            <>
              {services} <a href="#">Xem thêm</a>
            </>
          ),
        },
        {
          title: "",
          key: "actions",
          render: () => (
            <>
              <a href="#" style={{ marginRight: 10 }}
              >
                Chi tiết
              </a>
              <a href="#"
              >Cập nhật</a>
            </>
          ),
        },
      ];
      const columnsSvc = [
        {
          title: "Mã dịch vụ",
          dataIndex: "serviceId",
          key: "serviceId",
        },
        {
          title: "Tên dịch vụ",
          dataIndex: "serviceName",
          key: "servicName",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
          },
        {
          title: "Trạng thái hoạt động",
          dataIndex: "status",
          key: "status",
          render: (status: string) =>
            status === "Hoạt động" ? (
              <Tag color="green">Hoạt động</Tag>
            ) : (
              <Tag color="red">Ngừng hoạt động</Tag>
            ),
        },
        {
          title: "",
          key: "actions",
          render: () => (
            <>
              <a href="#" style={{ marginRight: 10 }}
              >
                Chi tiết
              </a>
              <a href="#"
              >Cập nhật</a>
            </>
          ),
        },
      ];
      const dataSvc = [
        {
          key: "1",
          serviceId: "KIO_01",
          serviceName: "Kiosk",
          description: 'Mô tả dịch vụ 1',
          status: "Ngừng hoạt động",
        },
        {
            key: "2",
            serviceId: "KIO_01",
            serviceName: "Kiosk",
            description: 'Mô tả dịch vụ 1',
            status: "Ngừng hoạt động",
          },
          {
            key: "3",
            serviceId: "KIO_01",
            serviceName: "Kiosk",
            description: "Mô tả dịch vụ 1",
            status: "Ngừng hoạt động",
          },
          {
            key: "4",
            serviceId: "KIO_01",
            serviceName: "Kiosk",
            description: 'Mô tả dịch vụ 1',
            status: "Ngừng hoạt động",
          },
          {
            key: "5",
            serviceId: "KIO_01",
            serviceName: "Kiosk",
            description: 'Mô tả dịch vụ 1',
            status: "Ngừng hoạt động",
          },
          {
            key: "6",
            serviceId: "KIO_01",
            serviceName: "Kiosk",
            description: 'Mô tả dịch vụ 1',
            status: "Ngừng hoạt động",
          },
          {
            key: "7",
            serviceId: "KIO_01",
            serviceName: "Kiosk",
            description: 'Mô tả dịch vụ 1',
            status: "Ngừng hoạt động",
          }
        // More rows...
      ];
    const getServiceInfo = () =>{
        const token = localStorage.getItem('token');
        fetch('https://192.168.80.188:7251/api/Device/devicesinfor', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response=>response.json())
        .then((data:any)=>{
            console.log(data);
            setDegree(Math.round((data?.active/data?.total)*360));
            setData1(data)}
        )
        .catch(error=>console.log(error))
    }
    const handleUpdate = (updatedData: any) => {
        console.log('Cập nhật dữ liệu:', updatedData);
      };
    
      const handleCancel = () => {
        console.log('Hủy cập nhật');
      };
    useEffect(()=>{
        getServiceInfo();
    },[])
    return(
        <div className="container">
            <Sidebar sendSelectedIndex={handleReceiveSelectedIndex} />
            {selectedIndex==0?
            <div className="rightContainer">
            <MainContent />
            <RightSidebar />
            </div>
            :selectedIndex==1?
                <Device key={`device-index-1`}
                headerText="Thiến bị > Danh sách thiết bị"
                sendSelectedIndex={handleReceiveSelectedIndex} 
                data={data} columns={columns}
                />
            :selectedIndex==2?
            <DeviceForm />
            :selectedIndex==3?
            <DeviceDetails device={deviceData} />
            :selectedIndex==4?
            <DeviceUpdateForm
            initialValues={deviceData1}
            onSubmit={handleUpdate}
            onCancel={handleCancel}
          />
          :<Device headerText="Dịch vụ > Danh sách dịch vụ"
          key={`device-index-5`}
          sendSelectedIndex={handleReceiveSelectedIndex} 
          data={dataSvc} columns={columnsSvc}
          />        
            }
        </div>
    )
}
export default Dashboard;