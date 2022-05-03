import React, { useEffect, useState } from 'react'
import AddressForm from './AddressForm'

import Payment from './Payment'

const PaymentFormPage = () => {
    let [addressData, setAddressData] = useState(null)

    useEffect(() =>
    {
        setAddressData(null)
    }, [])

    return (
        <div className = "PaymentPage">
            <div className = "PaymentPageContent">
                { addressData ? <Payment /> : <AddressForm setAddressData={setAddressData} /> }
            </div>
        </div>
    )
}

export default PaymentFormPage
