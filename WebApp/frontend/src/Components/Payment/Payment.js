import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DishesInCartList from '../Cart/DishesInCartList'
import PaymentButton from './PaymentButton'

const Payment = ({ addressData, history }) => {
    let [price, setPrice] = useState("")
    let [dishes, setDishes] = useState([])
    let [approved, setApproved] = useState(false)

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

        setPrice(fullPrice)
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

    let paymentButton = () =>
    {
        return (
          <div>
            { price > 0 ? <PaymentButton price = { price } history = {history} onApproved = {() => setApproved(true)} /> : null } 
          </div>
        )
    }

    let onApprovedComponent = () =>
    {
        return (
            <div>
                <h1>Dziękujemy za zakupy</h1>
                <Link to = '/'>
                    <h2 className = "PaymentReturn">Zakończ</h2>
                </Link>
            </div>
        )
    }

    let paymentTitle = () =>
    {
        return (
          <div>
            <h1 className = "PaymentTitle">Wybierz sposób płatności</h1>
            { false ? <h1>Do zapłaty: {getFullPrice()}zł</h1> : null }
          </div>
        )
    }

    return (
      <div className = "PaymentPanel">
          {approved ? onApprovedComponent() : paymentTitle()}
          <DishesInCartList dishesInCart={ dishes } />
          { addressRow("E-mail: ", addressData.email) }
          { addressRow("Miejscowość: ", addressData.town) }
          { addressRow("Kod pocztowy: ", addressData.postalCode) }
          { addressRow("Ulica: ", addressData.street) }
          { addressRow("Nr domu: ", addressData.houseNumber) }
          { addressRow("Nr mieszkania: ", addressData.apartmentNumber) }
          { approved ? null : paymentButton() }
      </div>
    )
}

export default Payment
