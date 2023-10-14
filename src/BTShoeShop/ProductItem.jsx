import React from 'react'

export const ProductItem = (props) => {
    const { product, handleProductDetail, handleCarts } = props
    return (
        <div className="col-3 mt-3">
            <div className="card">
                <img src={product.image} alt="" />
                <div className="card-body">
                    <p className="card-title">{product.name}</p>
                    <p>{product.price}</p>
                    <div className="d-flex justify-content-between">
                        <button
                            className="btn btn-outline-dark"
                            onClick={() => handleCarts(product)}
                        >
                            Buy
                        </button>
                        <button
                            className="btn btn-outline-success"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => handleProductDetail(product)}
                        >
                            Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
