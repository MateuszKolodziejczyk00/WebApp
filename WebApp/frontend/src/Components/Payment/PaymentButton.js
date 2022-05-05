import React, { useEffect, useRef, useState } from 'react'

const PaymentButton = ({price, onApproved}) =>
{
    let createOrderDelegate = (data, actions) =>
    {
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
                    alert("Transakcja wykonana przez " + details.payer.name.given_name)
                })
                .then(() =>
                {
                    onApproved();
                })
            })
    }
 
    const paypal = useRef()

    useEffect(() =>
    {
        window.paypal.Buttons({
            createOrder: createOrderDelegate,
            onApprove: onApproveDelegate,
            onCancel: () => {alert("Transakcja przerwana")},
            onError: (err) => {alert(err)}
        }).render(paypal.current)
    }, [])


    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PaymentButton
