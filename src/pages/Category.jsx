import React, { Component } from 'react'
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import products from '../utils/products.json';

 

class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: {},
            items: []
        }
    }
    componentDidMount() {
        const { match } = this.props;
        const categoryName = match.params.categoryName;
       

        this.setState({
            category: products[categoryName],
            items: products[categoryName].items
        });
    }

    render() {
        return (
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <h2 className="mb-5">{ this.state.category.name }</h2>
                    <ProductList products={this.state.items} />
                </div>
            </Layout>
        );
    }
}

export default Category;