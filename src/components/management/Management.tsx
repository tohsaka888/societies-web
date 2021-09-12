import { Layout, Menu, message } from 'antd'
import React, { useEffect } from 'react'
import { Route, useHistory } from 'react-router'
import AddManagement from './AddManagement'
import EditManagement from './EditManagement'

export default function Management() {
  const history = useHistory()
  useEffect(() => {
    const code = sessionStorage.getItem('code')
    if (code !== '200') {
      message.error('请先登录管理员账户')
      history.push('/')
    } else {
      history.push('/management/add/1')
    }
  }, [history])
  return (
    <Layout style={{height: "100vh"}}>
      <Layout.Sider>
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">新建比赛简介</Menu.Item>
          <Menu.Item>新建比赛详情</Menu.Item>
          <Menu.Item>新建公告</Menu.Item>
          <Menu.Item>新建获奖名单</Menu.Item>
          <Menu.Item>新建图床</Menu.Item>
          <Menu.Item>修改比赛简介</Menu.Item>
          <Menu.Item>修改比赛详情</Menu.Item>
          <Menu.Item>修改公告</Menu.Item>
          <Menu.Item>修改获奖名单</Menu.Item>
        </Menu>
      </Layout.Sider>
      <Route path="/management/add/:id">
        <AddManagement title={'新增比赛'} />
      </Route>
      <Route path="/management/edit/:id" component={EditManagement} />
    </Layout>
  )
}
