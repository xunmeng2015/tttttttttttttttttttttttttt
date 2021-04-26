import { NavBar, Icon } from 'antd-mobile';
// import { PlusOutlined } from '@ant-design/icons';
// import { Button, message, Input, Drawer } from 'antd';
import React, { useState, useRef } from 'react';
// import { useIntl, FormattedMessage } from 'umi';
// import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
// import type { ProColumns, ActionType } from '@ant-design/pro-table';
// import ProTable from '@ant-design/pro-table';
// import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
// import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
// import ProDescriptions from '@ant-design/pro-descriptions';
// import type { FormValueType } from './components/UpdateForm';
// import UpdateForm from './components/UpdateForm';
// import { rule, addRule, updateRule, removeRule } from '@/services/ant-design-pro/api';


const test: React.FC = () => {
  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        // rightContent={[
        //   <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        //   <Icon key="1" type="ellipsis" />,
        // ]}
      >NavBar</NavBar>

      {/* <NavBar
        mode="dark"
        leftContent="Back"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar> */}
    </div>
  )
};

export default test