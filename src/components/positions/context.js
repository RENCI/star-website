import React, { createContext, useContext, useMemo, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
const PositionsContext = createContext({ })
export const usePositions = () => useContext(PositionsContext)

/*
 * This utility function turns strings in an array
 * into properrties in an object, all of whose values
 * are set to a given initial value.
 */
function objectFromArray(keysArray, initialValue = '') {
  if (
    !Array.isArray(keysArray) ||
    keysArray.some(v => typeof value !== 'string')
  ) { return {} }
  return keysArray.reduce((acc, col) => {
    acc[col.field] = initialValue
    return acc
  }, {})
}

export const PositionsProvider = ({ children }) => {
  /*
   * this query grabs all the position data that is
   * coming directly from the monday source plugin.
   */
  const data = useStaticQuery(graphql`
    query PositionsQuery {
      allMondayColumn {
        nodes {
          id
          field
          title
          options
        }
      }
      allMondayItem {
        nodes {
          id
          name
          program
          domain
          group
          division
          semester
          startDate
          duration
          abstract
          description
          pay
          url
        }
      }
    }
  `)

  // extract the data nodes.
  const columns = useMemo(() => data?.allMondayColumn?.nodes ?? [], [data])
  const positions = useMemo(() => data?.allMondayItem?.nodes ?? [], [data])
  // filters is an object whose keys are position
  // properties and whose values are ones to match
  // on positions in the respective property.
  const [filters, setFilters] = useState(() => objectFromArray(columns), [columns])
  // activeFilters is an array of filter keys that are in use
  const activeFilters = useMemo(() => Object.keys(filters)
    .filter(key => !!filters[key]), [filters])
  // updating on changes to the filters, filteredPositions
  // will contain those positions that match active filter values.
  // if there are no active filters, this returns all positions.
  const filteredPositions = useMemo(() => {
    if (!activeFilters.length) {
      return positions
    }
    // this is an inclusive or. which may not match user expectations. 
    return positions
      .filter(position => {
        return activeFilters
          .some(key => position[key] === filters[key])
      })
  }, [activeFilters, filters, positions])

  const resetFilters = () => setFilters(objectFromArray(columns))

  if (!data) {
    // todo: implement a more appropriate loading indicator
    return 'Loading...'
  }

  return (
    <PositionsContext.Provider
      value={{
        // monday board columns.
        // this gets turned into filters ui,
        // which can probably just happen here.
        // ^ todo
        columns,
        // all positions are available,..
        positions,
        // ...as well as the filtered positions.
        filteredPositions,
        // all filtering functionality lives
        // inside this filters property
        filters: {
          // alias for filters
          current: filters,
          // alias for setFilters
          set: setFilters,
          // clear all filters
          reset: resetFilters,
          // array of active filter keys
          active: activeFilters,
        },
      }}
    >{ children }</PositionsContext.Provider>
  )
}
