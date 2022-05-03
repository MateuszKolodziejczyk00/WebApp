import React, { useEffect, useState } from 'react'
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core'

const DishFilter = ({ filterElements, getFilterValue, switchFilterValue }) =>
{
    let [forceUpdateValue, setForceUpdateValue ] = useState(0)

   let forceUpdate = () =>
   {
       return setForceUpdateValue(forceUpdateValue + 1)
   }

   let isChecked = (filterElement) =>
   {
        return getFilterValue(filterElement);
   }

   let onSwitch = (filterElement, e) =>
   {
        switchFilterValue(filterElement)
        forceUpdate()
   }

    return (
      <div>
          <RadioGroup row className = "FilterGroup">
          {
            filterElements.map((element, index) =>
            (
                <FormControlLabel 
                    className = "FilterLabel"
                    key = { index }
                    value = "true"
                    control = {
                        <Radio
                            className = "FilterRadio"
                            checked = { isChecked(element.name) }
                            onClick = {(e) => { onSwitch(element.name, e) } }
                        />
                    }
                    label={element.name}
                    labelPlacement = "bottom"
                />
            ))
          }
          </RadioGroup>
      </div>
    )
}

export default DishFilter
