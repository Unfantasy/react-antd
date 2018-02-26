/**
 * @name: 首页
 */

import React, { Component } from 'react';
import { Carousel } from 'antd';
// import { mySite } from '../constants';
import './style.scss';

// const TabPane = Tabs.TabPane;
// const alert = Modal.alert;

export default class extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 200);
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center', lineHeight: '80px' }}>欢迎使用react + antd创建项目</h2>
        <Carousel autoplay>
          <div className="carousel-img-box"><h3>1</h3></div>
          <div className="carousel-img-box"><h3>2</h3></div>
          <div className="carousel-img-box"><h3>3</h3></div>
          <div className="carousel-img-box"><h3>4</h3></div>
        </Carousel>
        <br />
        <br />
        <h4>更多组件请自行查看<a href="https://ant.design/docs/react/introduce-cn">antd官方文档</a></h4>
      </div>
    );
  }
}
