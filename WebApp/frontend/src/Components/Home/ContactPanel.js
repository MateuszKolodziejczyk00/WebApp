import React from 'react'

const ContactPanel = () => {

    let ContactRow = (left, right) =>
    {
        return (
            <div className = "ContactRow">
                <h2 className = "ContactRowKey">{ left }</h2>
                <h2 className = "ContactRowValue">{ right }</h2>
            </div>
        )
    }


  return (
    <div className = "ContactPanel">
        <h1 className = "ContactHeader">Kontakt</h1>
        {
            ContactRow("E-Mail", "Restauracja@restauracja.com")
        }
        {
            ContactRow("Telefon", "123123123")
        }
        <h2 className = "AddressHeader">Adres</h2>
        <h2 className = "AddressContent">Warszawa ul. Marszałkowska 107</h2>
    </div>
  )
}

export default ContactPanel
