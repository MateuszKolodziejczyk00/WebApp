import React, { useState, useEffect } from 'react'
import PaymentButton from './PaymentButton'

const Payment = () => {
    let [price, setPrice] = useState(null)

    let getFullPrice = () =>
    {
        fetch('/cart/getDishes')
        .then(response =>
        {
            return response.json()
        })
        .then(dishesInCart =>
        {
            let fullPrice = 0
            for(let i = 0; i < dishesInCart.length; i++)
            {
                fullPrice = fullPrice + dishesInCart[i].price
            }

            setPrice(fullPrice.toString())
        })
    }

    useEffect(() =>
    {
      getFullPrice()
    }, [])

    return (
      <div>
          <h1>Wybierz sposób płatności</h1>
          <h1>Do zapłaty: {price}zł</h1>
          { price ? <PaymentButton price = { price } /> : null } 
      </div>
    )
}

export default Payment
