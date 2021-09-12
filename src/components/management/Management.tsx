import { Layout, Menu, message } from 'antd'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

export default function Management() {
  const history = useHistory()
  useEffect(() => {
    const code = sessionStorage.getItem('code')
    if (code !== '200') {
      message.error('请先登录管理员账户')
      history.push('/')
    }
  })
  return (
    <Layout style={{height: "100vh"}}>
      <Layout.Sider>
        <Menu theme="dark" mode="vertical">
          <Menu.Item>新建比赛简介</Menu.Item>
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
      <Layout.Content>111</Layout.Content>
    </Layout>
  )
}
