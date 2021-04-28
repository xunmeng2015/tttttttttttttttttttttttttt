/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 *
 * @see You can view component api by: https://github.com/ant-design/ant-design-pro-layout
 */
import type {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
import React, { useState, useEffect, ReactElement } from 'react';
import { NavBar, Icon, TabBar } from 'antd-mobile';
import MainPage from '@/pages/mainPage';

export type BasicLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
} & ProLayoutProps;

export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: Record<string, MenuDataItem>;
};

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    return {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
  });

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  let {
    children,
    location = {
      pathname: '/',
    },
  } = props;

  const [navSelect, setNavSelect] = useState<any>('Koubei');
  const [navState, setNavState] = useState<boolean>(false);
  const [navElement, setNavElement] = useState<React.FC>(MainPage);

  useEffect(() => {
    console.log(navSelect);
    children = MainPage;
  }, [navSelect]);

  // const { formatMessage } = useIntl();

  return (
    <ProLayout
      menuRender={false}
      headerRender={() => {
        return (
          <div>
            <NavBar
              mode="light"
              style={{ height: '100%' }}
              icon={<Icon type="left" />}
              onLeftClick={() => console.log('onLeftClick')}
            >
              NavBar
            </NavBar>
          </div>
        );
      }}
      fixedHeader={true}
      disableContentMargin={true}
      footerRender={() => {
        return (
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            tabBarPosition="bottom"
            hidden={navState}
            prerenderingSiblingsNumber={0}
          >
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              title="Koubei"
              key="Koubei"
              // badge={'new'}
              selected={navSelect === 'Koubei'}
              onPress={() => {
                setNavSelect('Koubei');
              }}
              // data-seed="logId1"
            >
              <MainPage></MainPage>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              title="Friend"
              key="Friend"
              selected={navSelect === 'Friend'}
              onPress={() => {
                setNavSelect('Friend');
              }}
            >
              Friend
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{
                uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
              }}
              title="My"
              key="my"
              selected={navSelect === 'My'}
              onPress={() => {
                setNavSelect('My');
              }}
            >
              MY
            </TabBar.Item>
          </TabBar>
        );
      }}
      // menuDataRender={menuDataRender}
      // rightContentRender={() => <RightContent />}
    >
      {children}
    </ProLayout>
  );
};

export default BasicLayout;
