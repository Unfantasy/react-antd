/**
 * @name: 首页
 */

import React, { Component } from 'react';
import { Carousel } from 'antd';
import Loading from '../common/loading';
// import carouselImg1 from '../../asset/img/p2328081971.jpg';
// import carouselImg2 from '../../asset/img/xixi_02.png';
// import carouselImg3 from '../../asset/img/xixi_10.jpg';
// import { mySite } from '../constants';
import './style.scss';

// const TabPane = Tabs.TabPane;
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
    }, 200);
  }

  render() {
    const { loading } = this.state;
    return (
      <Loading loading={loading}>
        <h2>欢迎使用react + antd创建项目</h2>
        <Carousel>
          {/* <div>
            <img
              src={carouselImg1}
              alt="carousel示例图片1"
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </div>
          <div>
            <img
              src={carouselImg2}
              alt="carousel示例图片2"
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </div>
          <div>
            <img
              src={carouselImg3}
              alt="carousel示例图片3"
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </div> */}
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <h4>更多组件请自行查看<a href="https://ant.design/docs/react/introduce-cn">antd-mobile官方文档</a></h4>
      </Loading>
    );
  }
}
