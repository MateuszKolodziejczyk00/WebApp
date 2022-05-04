import React, {useState} from 'react'
import { Controller, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const ReservationPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { control, register, handleSubmit } = useForm()

  return (
    <div className = "ReservationPageContent">
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
       <form>
       <Controller
        control={control}
        name='date-input'
        render={({ field }) => (
          <DatePicker 
            popperProps={{strategy: 'fixed'}}
            placeholderText='Select date'
            onChange={(date) => field.onChange(date)}
            selected={field.value}
            />
         )}
        />
      </form>
    </div>
  )
}

export default ReservationPage
