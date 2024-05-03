import React, { createContext, useContext, useMemo, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
const PositionsContext = createContext({ })
export const usePositions = () => useContext(PositionsContext)

/*
 * This utility function turns strings in an array
 * into properties in an object, all of whose values
 * are set to a given initial value.
 * 
 * @param      {string[]} keysArray   strings to be used as
 *                                    the returned object keys 
 * @param      {any}      initialValue=''   value to initialize
 *                                          the object with
 * 
 * @return     {object}   incoming strings as properties and
 *                        values equal to the initial value.
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
  // this query grabs all the position data that is
  // coming directly from the monday source plugin.
  const data = useStaticQuery(graphql`
    query PositionsQuery {
      allPositionColumn {
        nodes {
          id
          field
          title
          options
        }
      }
      allPositionItem(filter: {status: {eq: "Reviewed"}}) {
        nodes {
          id
          name
          education
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
  const columns = useMemo(() => data?.allPositionColumn?.nodes ?? [], [data])
  const positions = useMemo(() => data?.allPositionItem?.nodes ?? [], [data])
  // `filters` is an object whose keys are position
  // properties and whose values are ones to match
  // on positions in the respective property,
  // e.g., { education: '', domain: 'Research', ... }.
  const [filters, setFilters] = useState(() => objectFromArray(columns), [columns])
  // activeFilters is an array of filter keys that are in use,
  // e.g., ['domain'].
  const activeFilters = useMemo(() => Object.keys(filters)
    .filter(key => !!filters[key]), [filters])
  // `filteredPositions` contains those positions that
  // match active filter values, and it updates on
  // changes to `filters`. if there are no active filters,
  // all positions are returned.
  const filteredPositions = useMemo(() => {
    if (!activeFilters.length) {
      return positions
    }
    // this is an inclusive or, which may not match user expectations. 
    return positions
      .filter(position => {
        return activeFilters
          .some(key => position[key] === filters[key])
      })
  }, [activeFilters, filters, positions])

  // sets all filter properties to the empty string.
  const resetFilters = () => setFilters(objectFromArray(columns))

  if (!data) {
    // todo: implement a more appropriate fallback.
    return 'There is no data.'
  }

  return (
    <PositionsContext.Provider
      value={{
        // monday board columns.
        // this gets turned into filters ui,
        // which can probably just happen here.
        // ^ todo: turn columns into filters here.
        // there is no need for any part of this application
        // to know anything about monday.com, and "columns"
        // is an implementation detail of monday.com that
        // can be handled here.
        columns,
        // all positions are available,..
        positions,
        // ...as well as the filtered positions.
        filteredPositions,
        // all filtering functionality lives
        // inside this filters property
        filters: {
          // alias for `filters`
          current: filters,
          // alias for `setFilters`
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
