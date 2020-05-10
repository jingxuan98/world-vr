import React,{Component} from 'react';
import { Card, Avatar } from 'antd';
import { Row, Col} from 'antd';
import '../node_modules/antd/dist/antd.css';
import { EyeOutlined } from '@ant-design/icons';
import './App.css';
import Spain from './places/Spain'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Meta } = Card;


class Selection extends Component {
  state = {
    columnSpan : 0,
  }

  componentDidMount(){
    this.handleCalculateSpan();
    window.addEventListener('resize',this.handleCalculateSpan);
  }

  componentWillUnmount(){
      window.removeEventListener('resize',this.handleCalculateSpan);
  }

  handleCalculateSpan = () => {
    
    let currentWidth = window.innerWidth;

    if (currentWidth > 991 && currentWidth < 4000 && this.state.columnSpan !== 6)
        this.setState({
            columnSpan : 6
        })
    else if (currentWidth > 767 && currentWidth < 992 && this.state.columnSpan !== 8)
        this.setState({
            columnSpan : 8
        });
    else if (currentWidth > 424 && currentWidth < 768 && this.state.columnSpan !== 12)
        this.setState({
            columnSpan : 12
        })
    else if (currentWidth < 425 && this.state.columnSpan !== 24)
        this.setState({
            columnSpan : 24
        })
}



  render(){
    return (
      <Router>
        <div className="container">
          <div className="title">
            <h2 style={{color:"#fff", fontWeight: "700"}}>Spaces</h2>
            </div>
          
          <Row 
          className="row-class"
          justify="space-around"
        
          >
            <Col className="cards" span={this.state.columnSpan}>
              <Card
              
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Link to="/spain"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Card title"
                  description="This is the description"
                />
              </Card>

            </Col>

            <Col className="cards" span={this.state.columnSpan}>
            <Card
              
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Link to="/spain"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Card title"
                  description="This is the description"
                />
              </Card>
              
            </Col>

            
            <Col className="cards" span={this.state.columnSpan}>
              <Card
                
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Link to="/spain"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Card title"
                  description="This is the description"
                />
              </Card>
              
            </Col>

            <Col className="cards" span={this.state.columnSpan}>
              <Card
                
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Link to="/spain"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Card title"
                  description="This is the description"
                />
              </Card>
              
            </Col>

            <Col className="cards" span={this.state.columnSpan}>
              <Card
              
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Link to="/spain"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Card title"
                  description="This is the description"
                />
              </Card>

            </Col>

            <Col className="cards" span={this.state.columnSpan}>
            <Card
              
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Link to="/spain"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Card title"
                  description="This is the description"
                />
              </Card>
              
            </Col>

            
            <Col className="cards" span={this.state.columnSpan}>
              <Card
                
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Link to="/spain"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Card title"
                  description="This is the description"
                />
              </Card>
              
            </Col>

            <Col className="cards" span={this.state.columnSpan}>
              <Card
                
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Link to="/spain"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Card title"
                  description="This is the description"
                />
              </Card>
              
            </Col>

          </Row>
        </div>
        




        <Switch>
          <Route path="/spain">
            <Spain/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Selection;
