import React from "react";
import NavBar from '../../components/NavBar/NavBar';
// import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductsData: '[]'
        }
    }

    componentDidMount() {

        fetch('/products', {

            // body: JSON.stringify({}),
            headers: {
                'content-type': 'application/json'
            },
            method: 'get'
        })
            .then(response => {
                // return response.json();
                return console.log(response);
            })
            // .then(json => {
            //     this.setState({ ProductsData: json });
            // })
    }

    render() {
        return (
            <>
                <NavBar />
                {/* <ProductCarousel /> */}
                <div className="mt-5 pt-5">
                    <h3 className="text-center mt-5 pt-5">
                        {this.state.ProductsData}
                    </h3>
                </div>
            </>
        );
    }
}

export default ProductList;