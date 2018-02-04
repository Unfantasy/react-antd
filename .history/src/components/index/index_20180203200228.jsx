/**
 * @name: 首页
 */

import React, { Component } from 'react';
import { Carousel, Tabs, Badge, WhiteSpace, WingBlank } from 'antd';
import Loading from '../common/loading';
import carouselImg1 from '../../asset/img/p2328081971.jpg';
import carouselImg2 from '../../asset/img/xixi_02.png';
import carouselImg3 from '../../asset/img/xixi_10.jpg';
// import { mySite } from '../constants';
import './style.scss';

const TabPane = Tabs.TabPane;
// const alert = Modal.alert;

export default class extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      initialHeight: 200,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    const { loading } = this.state;
    return (
      <Loading loading={loading}>
        <h2>欢迎使用react + antd创建项目</h2>
        <WhiteSpace size="lg" />
        <Tabs defaultActiveKey="1" swipeable={false}>
          <TabPane tab={<Badge text={'3'}>First Tab</Badge>} key="1">
            <WingBlank>
              <h3>跑马灯</h3>
            </WingBlank>
            <Carousel
              autoplay={false}
              infinite
              selectedIndex={1}
              swipeSpeed={35}
            >
              <img
                src={carouselImg1}
                alt="carousel示例图片1"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
              <img
                src={carouselImg2}
                alt="carousel示例图片2"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
              <img
                src={carouselImg3}
                alt="carousel示例图片3"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </Carousel>
            <WhiteSpace size="lg" />
            <WingBlank>
              <h4>更多组件请自行查看<a href="https://mobile.ant.design/docs/react/introduce-cn">antd-mobile官方文档</a></h4>
            </WingBlank>
          </TabPane>
          <TabPane tab="Second Tab" key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              Content of Second Tab
            </div>
          </TabPane>
          <TabPane tab={<Badge dot>Third Tab</Badge>} key="3">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              Content of Third Tab
            </div>
          </TabPane>
        </Tabs>
      </Loading>
    );
  }
}
