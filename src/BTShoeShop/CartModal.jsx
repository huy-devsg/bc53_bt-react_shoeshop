// rafc
import React from 'react'

export const CartModal = ({ carts, handleCartQuantity, deleteCart }) => {

    return (
        <div
            className="modal fade"
            id="cartModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Cart
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        {!carts.length && <h2 className="text-center">Vui lòng chọn sản phẩm</h2>}

                        {!!carts.length && (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((product, index) => {
                                        return (
                                            <tr key={product.id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img
                                                        style={{
                                                            width: 80,
                                                            height: 80,
                                                        }}
                                                        src={product.image}
                                                        alt="..."
                                                    />
                                                </td>
                                                <td>{product.name}</td>
                                                <td>
                                                    <p
                                                        style={{
                                                            maxWidth: 300,
                                                        }}
                                                    >
                                                        {product.description}
                                                    </p>
                                                </td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-outline-success"
                                                        onClick={() =>
                                                            handleCartQuantity(product.id, 1)
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                    <span className="mx-2">
                                                        {product.cartQuantity}
                                                    </span>
                                                    <button
                                                        className="btn btn-outline-danger"
                                                        onClick={() =>
                                                            handleCartQuantity(product.id, -1)
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                </td>
                                                <td>{product.cartQuantity * product.price}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-outline-dark"
                                                        
                                                        onClick={() => deleteCart(product.id)}
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
