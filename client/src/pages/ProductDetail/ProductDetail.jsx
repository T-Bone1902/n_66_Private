import React from "react";
import NavBar from '../../components/NavBar/NavBar';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
// import ProductLeftMenu from '../../components/ProductLeftMenu/ProductLeftMenu';


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            ProductsDetail: []
         }
    }


    componentDidMount() {
        fetch(`http://localhost:3001/products/${this.props.match.params.id}`, {
            // body: JSON.stringify({}),
            
          })
            .then(response => {
              return response.json();
              // return console.log(response);
            })
            .then(json => {
              this.setState({ ProductsDetail: json });
            });
    }

    render() { 
        return ( 
            <>
                <NavBar/>
                <ProductCarousel data={this.state.ProductsDetail}/>
                
            </>
        );
    }
}
 
export default ProductDetail;