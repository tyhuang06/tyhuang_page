import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

import img_yelpcamp from '../images/yelpcamp.jpg';
import img_bomberman from '../images/bomberman.jpg';
import img_portfolio from '../images/portfolio.jpg';
import img_painter from '../images/painter.jpg';
import img_colorgame from '../images/color_game.jpg';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            items: [
                {
                    id:0,
                    title: 'Personal Page 個人網站',
                    desc_simple: 'React ReactBootstrap',
                    desc_full: 
                        <React.Fragment>
                            <p>為了想練習React而製作的個人網站(事後覺得好像不太需要用到React)，包含了作品集、下載履歷和寄送訊息功能</p>
                            <h5>Description</h5>
                            <ul>
                                <li>React + React Bootstrap</li>
                                <li>使用 React Modal 呈現作品詳細資料</li>
                                <li>藉由 Bootstrap Grid System 排版</li>
                                <li>使用Formspree在只使用前端的情況下實作寄信表單</li>
                                <li>部屬在GitHub Pages</li>
                            </ul>
                            <div className="view-btn-contain">
                                <a class="view-btn" href="https://tyhuang06.github.io/tyhuang_page/" target ="_blank">Demo</a>
                                <a class="view-btn" href="https://github.com/tyhuang06/tyhuang_page" target ="_blank">Source</a>
                            </div>
                        </React.Fragment>,
                    img: img_portfolio
                },
                {
                    id:1,
                    title: 'Yelpcamp 露營地分享網站',
                    desc_simple: 'HTML CSS JavaScript Bootstrap 4 Node.js Express MongoDB',
                    desc_full: 
                        <React.Fragment>
                            <p>Yelpcamp是一個露營地資訊分享網站，包含價格、所在位置和使用者經驗分享。使用者可以新增、更新、刪除自己分享的營地資訊及留言。</p>
                            <h5>Description</h5>
                            <ul>
                                <li>前端: HTML / CSS / JavaScript + Bootstrap 4</li>
                                <li>後端: Node.js / Express + MongoDB</li>
                                <li>有完整CRUD功能並使用RESTful Routes</li>
                                <li>串接Mapbox API以顯示露營地所在的地圖位置</li>
                                <li>部署在Heroku</li>
                            </ul>
                            <div className="view-btn-contain">
                                <a class="view-btn" href="https://yelp-camp-deploy.herokuapp.com/" target ="_blank">Demo</a>
                                <a class="view-btn" href="https://github.com/tyhuang06/Yelpcamp" target ="_blank">Source</a>
                            </div>
                            
                        </React.Fragment>,
                    img: img_yelpcamp
                },
                {
                    id:2,
                    title: 'Bomberman',
                    desc_simple: 'C++ OOD Allegro',
                    desc_full: 
                        <React.Fragment>
                            <p>Bomberman是程式設計課的雙人期末專題，靈感來自於炸彈人遊戲。我負責主要遊戲運作邏輯(勝利、死亡條件)、地圖製作(不同障礙物類型)、敵人動作(移動、死亡)</p>
                            <h5>Description</h5>
                            <ul>
                                <li>C++ 和 Allegro Library</li>
                                <li>將BFS演算法應用在敵人的自動尋路</li>
                            </ul>
                            <div className="view-btn-contain">
                                <a class="view-btn" href="https://github.com/tyhuang06/Bomberman" target ="_blank">Source</a>
                            </div>
                        </React.Fragment>,
                    img: img_bomberman
                },
                {
                    id:3,
                    title: 'Canvas Painter',
                    desc_simple: 'HTML CSS JavaScript',
                    desc_full: 
                        <React.Fragment>
                            <p>簡易版小畫家，軟體實驗課的作業。</p>
                            <h5>Description</h5>
                            <ul>
                                <li>使用 HTML5 canvas element 和 JavaScript 完成</li>
                                <li>有紀錄使用者的操作(支援復原、返回、重新整理等功能)</li>
                                <li>可以把畫的內容下載成圖片</li>
                            </ul>
                        </React.Fragment>,
                    img: img_painter
                },
                {
                    id:4,
                    title: 'Color Guessing Game',
                    desc_simple: 'HTML CSS JavaScript',
                    desc_full: 
                        <React.Fragment>
                            <p>使用 JavaScript 操作 DOM 的猜顏色遊戲，下方方塊會出現一些隨機的顏色，使用者要猜出標題所寫的 RGB 是哪個顏色。</p>
                            <h5>Description</h5>
                            <ul>
                                <li>主要使用 JavaScript 完成遊戲邏輯, 搭配 CSS 排版</li>
                                <li>簡單模式會出現三種顏色，困難則是六種</li>
                            </ul>
                        </React.Fragment>,
                    img: img_colorgame
                }
            ],
            activeModal: null
        }
    }

    handleClose = () => {
        this.setState({
            activeModal: null
        });
    }

    handleOpen = (id) => {
        this.setState({
            activeModal: id
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return (
                <React.Fragment>
                <Col lg={6}>
                    <div className="project_box" onClick={() => this.handleOpen(item.id)}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.desc_simple}
                            </Card.Text>
                            <Button variant="primary">More</Button>
                        </Card.Body>
                    </div>
                </Col>
                <Modal 
                    className="project_full_info"
                    centered 
                    show={this.state.activeModal === item.id} 
                    onHide={() => this.handleClose()}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{item.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            <Image fluid src={item.img} />
                        </p>
                        
                        <p>
                            {item.desc_full}
                        </p>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.handleClose()}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </React.Fragment>
            );
        });
    }

    render() {
        return(
            <React.Fragment>
                <Container id="project">
                    <Row>
                        <Col sm={12} className="project_title">
                            <h2>PROJECTS</h2>
                            <div className="line-pj"></div>
                            <p>Check out my latest projects</p>
                        </Col>
                    </Row>
                    <Row>
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Projects;