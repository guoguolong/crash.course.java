import React from 'react';
import { ConfigProvider, DatePicker, message as Message, Alert} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';

import 'moment/locale/zh-cn';

moment.locale('zh-cn');

export default class App extends React.Component {
  state = {
    date: null,
  };

  handleChange = date => {
    Message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`);
    this.setState({ date });
  };
  render() {
    const { date } = this.state;
    return (
      <ConfigProvider locale={zhCN}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <a href="https://sohu.com/">Fan Zei.</a><br/>
          <div className="bee">Ant Design</div>
          <DatePicker onChange={this.handleChange} />
          <div style={{ marginTop: 20 }}>
            <Alert message={date ? date.format('YYYY-MM-DD') : '未选择'} type="success" />
          </div>
        </div>
      </ConfigProvider>
    );
  }
}