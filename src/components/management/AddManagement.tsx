import { Button, Layout, Affix } from 'antd'
import React from 'react'
import '../style/Management.css'

type Props = {
  title: string;
}

export default function AddManagement({title}: Props) {
  return (
    <Layout.Content>
      <div className="management-title">{title}</div>
      <div className="management-content">
        <div className="management-content-title">基本信息</div>
      </div>
      <Affix offsetBottom={0}>
        <div className="management-bottom">
          <Button style={{marginRight: '16px'}}>重置</Button>
          <Button type="primary">保存</Button>
        </div>
      </Affix>
    </Layout.Content>
  )
}
