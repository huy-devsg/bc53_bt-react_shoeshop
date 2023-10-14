import React, { useState, useEffect } from 'react';
import data from './data.json';
import { ProductList } from './ProductList';
import { ProductDetailModal } from './ProductDetailModal';
import { CartModal } from './CartModal';

export const BTShoeShop = () => {
    const [productDetail, setProductDetail] = useState({
        id: 1,
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        price: 350,
        description:
            'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
            'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        quantity: 995,
        image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
    });

    const [carts, setCarts] = useState([]);

    const handleProductDetail = (product) => {
        setProductDetail(product);
    };

    const handleCarts = (product) => {
        const updatedCarts = [...carts];
        const index = updatedCarts.findIndex((value) => value.id === product.id);

        if (index === -1) {
            updatedCarts.push({ ...product, cartQuantity: 1 });
        } else {
            updatedCarts[index].cartQuantity += 1;
        }

        setCarts(updatedCarts);
    };

    const handleCartQuantity = (productId, quantity) => {
        const updatedCarts = carts.map((cartItem) => {
            if (cartItem.id === productId) {
                cartItem.cartQuantity = Math.max(cartItem.cartQuantity + quantity, 1);
            }
            return cartItem;
        });

        setCarts(updatedCarts);
    };

    const deleteCart = (productId) => 
    {
        // if (confirm(`Xác nhận xóa sản phẩm ID = ${productId}`))
        // {
            setCarts((prevState) => {

                return prevState.filter((value) => value.id !== productId)
            }
            )
        // }
    }


    useEffect(() => {
        // Đây là nơi bạn có thể thực hiện bất kỳ tác vụ nào cần thiết sau khi state `carts` thay đổi.
        // Ví dụ: bạn có thể lưu state `carts` vào local storage ở đây.

        // Nếu bạn không có bất kỳ tác vụ nào cần thực hiện sau khi `carts` thay đổi,
        // bạn có thể bỏ trống hàm này.

    }, [carts]);

    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between">
                <h1>Shoe Shop</h1>
                <p
                    className="fs-3"
                    style={{
                        cursor: 'pointer',
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#cartModal"
                >
                    <i className="fa-solid fa-cart-plus me-2"></i>
                    Giỏ hàng
                </p>
            </div>

            <ProductList
                data={data}
                handleProductDetail={handleProductDetail}
                handleCarts={handleCarts}
            />
            <ProductDetailModal productDetail={productDetail} />
            <CartModal
                carts={carts}
                handleCartQuantity={handleCartQuantity}
                deleteCart={deleteCart}
            />
        </div>
    );
}
