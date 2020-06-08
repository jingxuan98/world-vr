import React,{Component} from 'react';
import { Card, Avatar } from 'antd';
import { Row, Col} from 'antd';
import '../node_modules/antd/dist/antd.css';
import { EyeOutlined } from '@ant-design/icons';
import './App.css';

//Import Pages
import Spain from './places/Spain'
import Us from "./places/Us"
import Russia from "./places/Russia"
import Korea from "./places/Korea"
import Japan from "./places/Japan"
import Italy from "./places/Italy"
import Greece from "./places/Greece"
import Germany from "./places/Germany"

//Import Preview Pictures
import mallorca from './assets/mallorca-spain.jpg'
import fountaingrove from './assets/fountaingrove-us.jpg'
import church from './assets/yaroslavl-russia.jpg'
import gyeongbokgung from './assets/gyeongbokgung-korea.jpg'
import kishimojin from './assets/kishimojin-japan.jpg'
import momo from './assets/momostaircase-italy.jpg'
import peach from './assets/veria-greece.jpg'
import monreal from './assets/monreal-germany.jpg'

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
                    src={mallorca}
                  />
                }
                actions={[
                  <Link to="/spain"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Mallorca, Spain"
                  description="Mallorca (Majorca) is  known forsheltered coves and Roman and Moorish remains"
                />
              </Card>

            </Col>

            <Col className="cards" span={this.state.columnSpan}>
            <Card
              
                cover={
                  <img
                    alt="example"
                    src={fountaingrove}
                  />
                }
                actions={[
                  <Link to="/us"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Fountaingrove, US"
                  description="This Fountaingrove mansion is built by Norman Hudson's crew by hands 20 years ago"
                />
              </Card>
              
            </Col>

            
            <Col className="cards" span={this.state.columnSpan}>
              <Card
                
                cover={
                  <img
                    alt="example"
                    src={church}
                  />
                }
                actions={[
                  <Link to="/russia"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Church of Elijah Prophet, Russia"
                  description="Church of Elijah The Prophet is the most beautiful and best-perserved monument of Yaroslavl"
                />
              </Card>
              
            </Col>

            <Col className="cards" span={this.state.columnSpan}>
              <Card
                
                cover={
                  <img
                    alt="example"
                    src={gyeongbokgung}
                  />
                }
                actions={[
                  <Link to="/korea"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Gyeongbokgung Palace, Korea"
                  description="Gyeongbokgung Palace is the largest palace of the Five Grand Palaces built by the Joseon Dynasty"
                />
              </Card>
              
            </Col>

            <Col className="cards" span={this.state.columnSpan}>
              <Card
              
                cover={
                  <img
                    alt="example"
                    src={kishimojin}
                  />
                }
                actions={[
                  <Link to="/japan"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Kishimojin Temple, Japan"
                  description="Kishimojin Temple is a place of worship for the goddess of safe birth and childrearing"
                />
              </Card>

            </Col>

            <Col className="cards" span={this.state.columnSpan}>
            <Card
              
                cover={
                  <img
                    alt="example"
                    src={momo}
                  />
                }
                actions={[
                  <Link to="/italy"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Momo Staircase, Italy"
                  description="Momo (Bramante) Staircase is the name given to the spiral stairs of Vatican Museums"
                />
              </Card>
              
            </Col>

            
            <Col className="cards" span={this.state.columnSpan}>
              <Card
                
                cover={
                  <img
                    alt="example"
                    src={peach}
                  />
                }
                actions={[
                  <Link to="/greece"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Peach Trees Orchard, Greece"
                  description="4300 hectares of peach trees will blossom in Imathia to celebrate the Budding Peach Blossom Festival"
                />
              </Card>
              
            </Col>

            <Col className="cards" span={this.state.columnSpan}>
              <Card
                
                cover={
                  <img
                    alt="example"
                    src={monreal}
                  />
                }
                actions={[
                  <Link to="/germany"><EyeOutlined key="view"/> View</Link>
                ]}
              >
                <Meta
                  title="Monreal, Germany"
                  description="Monreal Village is a municipality in the district of Mayen-Koblenz in Rhineland-Palatinate, Germany"
                />
              </Card>
              
            </Col>

          </Row>
        </div>
        




        <Switch>
          <Route path="/spain">
            <Spain/>
          </Route>
          <Route path="/us">
            <Us/>
          </Route>
          <Route path="/russia">
            <Russia/>
          </Route>
          <Route path="/korea">
            <Korea/>
          </Route>
          <Route path="/japan">
            <Japan/>
          </Route>
          <Route path="/italy">
            <Italy/>
          </Route>
          <Route path="/greece">
            <Greece/>
          </Route>
          <Route path="/germany">
            <Germany/>
            </Route>
        </Switch>
      </Router>
    );
  }
}

export default Selection;
