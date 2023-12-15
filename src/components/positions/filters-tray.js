import React, { useRef } from 'react'
import { Card, FormControl, FormLabel, IconButton, Option, Select, Stack } from '@mui/joy'
import { Close as ClearSelectionIcon } from '@mui/icons-material'
import { usePositions } from './context'

const FilterSelect = ({ field, label, options, title, value, onChange }) => {
  const action = useRef(null)

  return (
    <FormControl>
      <FormLabel
        id={ `${ field }-filter-label` }
        htmlFor={ `${ field }-filter-select` }
      >{ label }</FormLabel>
      <Select
        value={ value }
        onChange={ onChange }
        placeholder={ title }
        slotProps={{
          button: {
            id: `${ field }-filter-select`,
            'aria-labelledby': `${ field }-filter-label ${ field }-filter-select`,
            p: 3,
          },
        }}
        {
          // this block conditionally passes props to our Select component
          // to display the clear button and remove select indicator
          // when user has selected a value and remove the clear button and
          // replace the select indicator after its use.
          ...(value && {
            endDecorator: (
              <IconButton
                size="sm"
                variant="plain"
                color="neutral"
                onMouseDown={
                  // don't open the popup when clicking this button.
                  event => event.stopPropagation()
                }
                onClick={
                  // update selection
                  // and put focus in sensible place after using this button.
                  event => {
                    onChange(event, '')
                    action.current?.focusVisible()
                  }
                }
              >
                <ClearSelectionIcon />
              </IconButton>
            ),
            indicator: null,
          })
        }
      >
        {
          options.map(option => (
            <Option
              key={ `${ field }-option-${ option }` }
              value={ option }
            >{ option }</Option>
          ))
        }
      </Select>
    </FormControl>
  )
}

export const FiltersTray = () => {
  const { columns, filters } = usePositions()

  const handleChangeFilter = field => (event, newValue) => {
    filters.set({ ...filters.current, [field]: newValue ?? '' })
  }

  const handleClickClearFilters = () => {
    filters.reset()
  }

  return (
    <Card variant="soft">
      <Stack
        direction="row"
        alignItems="flex-end"
        gap={ 2 }
        sx={{ '.MuiFormControl-root': { flex: 1, } }}
      >
        {
          columns.filter(c => !!c.field).map(column => (
            <FilterSelect
              key={ `${ column.field }-filter` }
              field={ column.field }
              label={ column.title }
              options={ column.options }
              value={ filters.current[column.field] }
              onChange={ handleChangeFilter(column.field) }
            />
          ))
        }
        {
          filters.active.length > 0 && (
            <IconButton onClick={ handleClickClearFilters }>
              <ClearSelectionIcon />
            </IconButton>
          )
        }
      </Stack>
    </Card>
  )
}

