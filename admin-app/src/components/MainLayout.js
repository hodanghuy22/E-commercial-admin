import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import {AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUser, AiOutlineBgColors, AiOutlinePicLeft, AiOutlinePicRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import {SiBrandfolder} from 'react-icons/si'
import {BiCategory, BiLogoBlogger} from 'react-icons/bi'
import {FaClipboardList, FaBlog} from 'react-icons/fa'
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>HĐH</span>
            <span className='lg-logo'>Hồ Đăng Huy</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
            if(key == "signout"){

            }else{
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShoppingCart className='fs-4' />,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <AiOutlineShoppingCart className='fs-4' />,
                  label: 'Add Product',
                },
                {
                  key: 'product-list',
                  icon: <AiOutlineShoppingCart className='fs-4' />,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon: <SiBrandfolder className='fs-4'/>,
                  label: "Brand"
                },
                {
                  key: 'brand-list',
                  icon: <SiBrandfolder className='fs-4'/>,
                  label: "Brand List"
                },
                {
                  key: 'category',
                  icon: <BiCategory className='fs-4'/>,
                  label: "Category"
                },
                {
                  key: 'category-list',
                  icon: <BiCategory className='fs-4'/>,
                  label: "Category List"
                },
                {
                  key: 'color',
                  icon: <AiOutlineBgColors className='fs-4'/>,
                  label: "Color"
                },
                {
                  key: 'color-list',
                  icon: <AiOutlineBgColors className='fs-4'/>,
                  label: "Color List"
                },
              ]
            },
            {
              key: 'orders',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <BiLogoBlogger className='fs-4' />,
              label: 'Blogs',
              children: [
                {
                  key: 'blog',
                  icon: <FaBlog className='fs-4' />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <FaClipboardList className='fs-4' />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <FaBlog className='fs-4' />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <FaClipboardList className='fs-4' />,
                  label: 'Blog Category List',
                },
              ]
            },
            {
              key: 'enquiries',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className='d-flex justify-content-between ps-3 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <AiOutlinePicLeft /> : <AiOutlinePicRight />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className=''>
            <h1>gf</h1>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout