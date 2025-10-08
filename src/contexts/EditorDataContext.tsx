"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { DataLoaderMap } from "../types"

const EditorDataContext = createContext<DataLoaderMap | null>(null)

/**
 * A provider component that the consuming application will use to supply
 * its data-fetching logic to the entire editor.
 */
export const EditorDataProvider = ({
  loaders,
  children,
}: {
  loaders: DataLoaderMap
  children: React.ReactNode
}) => {
  return (
    <EditorDataContext.Provider value={loaders}>
      {children}
    </EditorDataContext.Provider>
  )
}

/**
 * A client-side hook that components (like a dynamic select input) will use
 * to request and receive data from a source defined by the application.
 *
 * @param sourceKey The semantic key (e.g., 'productCollections') for the data source.
 */
export const useEditorData = (sourceKey: string) => {
  const loaders = useContext(EditorDataContext)

  const [data, setData] = useState<
    { label: string; value: string | number }[] | null
  >(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loader = loaders?.[sourceKey]

    if (!loader) {
      const errorMessage = `[useEditorData] Developer Error: No loader found for source key: "${sourceKey}". Please provide one in EditorDataProvider.`
      console.error(errorMessage)
      setError(errorMessage)
      setIsLoading(false)
      return
    }

    const fetchData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const result = await loader()
        setData(result)
      } catch (err) {
        console.error(
          `[useEditorData] Error fetching data for source key "${sourceKey}":`,
          err
        )
        setError("Failed to load data.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [sourceKey, loaders])

  return { data, isLoading, error }
}
