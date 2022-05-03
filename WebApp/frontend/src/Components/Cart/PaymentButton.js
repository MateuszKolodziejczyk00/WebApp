import React, { useEffect, useRef } from 'react'

const PaymentButton = ({price}) =>
{
    let createOrderDelegate = (data, actions) =>
    {
        console.log(price)
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: price
                }
            }]
        })
    }

    let onApproveDelegate = async (data, actions) =>
    {
        return actions.order.capture()
            .then(function (details)
            {
                const request = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                };

                fetch('cart/onPaymentApproved', request)
                .then((response) =>
                {
                    alert("Transations completed by " + details.payer.name.given_name)
                })
            })
    }
 
    const paypal = useRef()

    useEffect(() =>
    {
        window.paypal.Buttons({
            createOrder: createOrderDelegate,
            onApprove: onApproveDelegate
        }).render(paypal.current)
    }, [])


    return (
        <div>
            <h1>{price}</h1>
            <div ref={paypal}></div>
        </div>
    )
}

export default PaymentButton
