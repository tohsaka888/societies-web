import { Button, Layout, Affix } from 'antd'
// import React, { useCallback } from 'react'
import '../style/Management.css'
// import { useParams } from 'react-router-dom'

// type BaseInfo = {
//   title: string;
//   label: [title: string]
// }

export default function AddManagement() {
  // const [state, dispatch] = useReducer(titleReducer, {title: '',label: [{title: ''}]})
  return (
    <Layout.Content>
      <div className="management-title">{'title'}</div>
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
