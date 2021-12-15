import productApi from "../../api/productApi";
import React from "react";
import { useEffect, useState } from "react";

const ListProduct = () => {
        const [product, setProduct] = useState([])
        useEffect(() => {
          const getProduct = async () => {
            const { data } = await productApi.getAll()
            console.log(data)
            setProduct(data)
          }
          getProduct()
        }, [])
    return (
        <table className="pl-32" >
          <thead>
            <tr>
            <th>id</th>
              <th>name</th>
              <th>image</th>
              <th>price</th>
              <th>description</th>
            </tr>
          </thead>
      <tbody>
        {product.map((item, index) => {
          return (
            <tr key={index}>
              <td className="">{index}</td>
              <td className="">{item.name}</td>
              <td className=""><img src={item.image}/></td>
              <td className="">{item.price}</td>
              <td className="">{item.description}</td> 
            </tr>
          );
        })}
      </tbody>
    </table>
    )
}

export default ListProduct
