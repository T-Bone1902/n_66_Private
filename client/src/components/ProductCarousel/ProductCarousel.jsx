import React from "react";
import Slider from "react-slick";
import { Container, Row, Col, Tabs, Tab, Card } from "react-bootstrap";
import "./ProductCarousel.css";

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // nav1: null,
      // nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const mainSettings = {
      // dots: false,
      // infinite: true,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      // vertical: false,
      // verticalSwiping: false,
    };

    const thumbSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true
    };

    //
    const { data } = this.props;
    console.log(data);
    return (
      <>
        <Container className="ProductCarousel">
          <Row className="mt-5 carouselsRow">
            <Col md={8} className="d-flex justify-content-center">
              <div className="mr-5 sideCarousel">
                <Slider
                  {...thumbSettings}
                  className="thumbCarousel"
                  asNavFor={this.state.nav2}
                  ref={slider => (this.slider1 = slider)}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="pic">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/AquaMarinaBettaHM.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/41DLXCwR5JL._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/41rho+I3ahL._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/51BdzZfQw9L._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/51IDb-O1pML._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/51L+SY7tg2L._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/51m+z4wrBbL._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/51mgLZ2YjBL._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                </Slider>
              </div>

              <div className="">
                <Slider
                  {...mainSettings}
                  className="mainCarousel"
                  asNavFor={this.state.nav1}
                  ref={slider => (this.slider2 = slider)}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="pic2">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/AquaMarinaBettaHM.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic2">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/41DLXCwR5JL._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic2">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/41rho+I3ahL._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic2">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/51BdzZfQw9L._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic2">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/51IDb-O1pML._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic2">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/51L+SY7tg2L._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic2">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/51m+z4wrBbL._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                  <div className="pic2">
                    <img
                      src="http://localhost:3000/images/products/AquaMarinaBettaHM/51mgLZ2YjBL._AC_SL1000_.jpg"
                      alt="AquaMarinaBettaHM"
                    />
                  </div>
                </Slider>
              </div>
            </Col>

            <Col lg={4}>
              {data.map(item => (
                <div key={item.product_id} className="detailCard">
                  <div>
                    <h2>{item.product_name}</h2>
                    <h5>NT$ {item.produc_price}</h5>
                    <a href="#1" className="wishBtn mx-auto" role="button">
                      加入願望清單
                    </a>
                    <a href="#2" className="addToCartBtn mx-auto" role="button">
                      放入購物車
                    </a>
                    <p>免費快遞送貨 / 免費退貨</p>
                  </div>

                  <div>
                    <h4>規格說明</h4>
                    <Tabs
                      defaultActiveKey="profile"
                      id="uncontrolled-tab-example"
                    >
                      <Tab eventKey="home" title="材質">
                        <p>
                          {item.produc_material}
                        </p>
                      </Tab>
                      <Tab eventKey="profile" title="內容">
                        <p>
                          {JSON.parse(item.product_intro)[0]}
                        </p>
                      </Tab>
                      <Tab eventKey="contact" title="重量">
                        <p>{item.product_weight}</p>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
          <h1 className=" mx-auto text-center">還可搭配</h1>
          <Row className="recommend  pt-5 d-flex ">
            <Col sm={6} md={4} className="cardFrame">
              <Card className="product-card">
                <div className="photoFrame">
                  <Card.Img
                    variant="top"
                    src="http://localhost:3000/images/products/OrtovoxFreeRider26L/free-ride-free-rider-24-46736-night-blue-blend-hir5da0941bdd2ef_1200x2000.jpg"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Ortovox FreeRider 26L 背包</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} md={4} className="cardFrame">
              <Card className="product-card">
                <div className="photoFrame">
                  <Card.Img
                    variant="top"
                    src="http://localhost:3000/images/products/GrandOfuton/BD-050_BIG.JPG"
                  />
                </div>
                <Card.Body>
                  <Card.Title>日式單人睡墊組</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} md={4} className="cardFrame">
              <Card className="product-card">
                <div className="photoFrame">
                  <Card.Img
                    variant="top"
                    src="http://localhost:3000/images/products/GasGrillBurner\GS-355_BIG.JPG"
                  />
                </div>
                <Card.Body>
                  <Card.Title>瓦斯燒烤爐 雪峰苑</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} md={4} className="cardFrame">
              <Card className="product-card">
                <div className="photoFrame">
                  <Card.Img
                    variant="top"
                    src="http://localhost:3000/images/products/GigaPowerBFLantern/GL-300A_BIG.JPG"
                  />
                </div>
                <Card.Body>
                  <Card.Title>GP瓦斯營燈</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ProductCarousel;
