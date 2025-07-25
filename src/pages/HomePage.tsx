//맨처음 페이지임, 최신상품을 보여줄것
import { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import ProductGrid from "../components/product/ProductGrid";
import dummy from "../data/dummy.json"
import { type Product } from "../types/product";
import { Container } from "react-bootstrap";
import FloatingButton from "../components/common/FloatingButton";


const Home: React.FC = () =>{

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        setProducts(dummy as Product[]);
    }, []);

    return(
        <Container >
            <Banner></Banner>
            <h3 className="text-center mt-4 mb-4"><b>최신 상품</b></h3>
            <ProductGrid products={products}></ProductGrid>
            <FloatingButton></FloatingButton>
            <Banner></Banner>
        </Container>
    );
}

export default Home;