import React, { useState, useEffect } from 'react'
import DishesInCartList from '../Cart/DishesInCartList'
import PaymentButton from './PaymentButton'

const Payment = ({ addressData }) => {
    let [price, setPrice] = useState("")
    let [dishes, setDishes] = useState([])

    let getDishesInCart = async () => 
    {
        let response = await fetch('/cart/getDishes')
        let data = await response.json()
        setDishes(data)
    }

    let getFullPrice = () =>
    {
        let fullPrice = 0
        for(let i = 0; i < dishes.length; i++)
        {
            fullPrice = fullPrice + dishes[i].price
        }

        setPrice(fullPrice.toString())
    }

    useEffect(() =>
    {
        getDishesInCart()
    }, [])

    useEffect(() =>
    {
        getFullPrice()
    }, [dishes])

    let addressRow = (key, value) =>
    {
        return (
            <div className = "PaymentAddressRow">
                <h3 className = "PaymentAddressKey">{ key }</h3>
                <h3 className = "PaymentAddressValue">{ value }</h3>
            </div>
        )
    }

    return (
      <div className = "PaymentPanel">
          <h1 className = "PaymentTitle">Wybierz sposób płatności</h1>
          <h1>Do zapłaty: {price}zł</h1>
          { dishes ? <DishesInCartList dishesInCart={ dishes } /> : null }
          { addressRow("E-mail: ", addressData.email) }
          { addressRow("Miejscowość: ", addressData.town) }
          { addressRow("Kod pocztowy: ", addressData.postalCode) }
          { addressRow("Ulica: ", addressData.street) }
          { addressRow("Nr domu: ", addressData.houseNumber) }
          { addressRow("Nr mieszkania: ", addressData.apartmentNumber) }
          { price ? <PaymentButton price = { price } /> : null } 
      </div>
    )
}

export default Payment
