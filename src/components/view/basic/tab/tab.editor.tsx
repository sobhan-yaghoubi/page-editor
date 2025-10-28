import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/tab"
import { TabSettings } from "@/schemas/components/basic/tab/tab.schema"
import { TabItemSettings } from "@/schemas/components/basic/tab/tabItem.schema"
import { ComponentProps } from "@/types"
import React from "react"

const TabEditor = ({ children }: ComponentProps<TabSettings>) => {
  const validTabItems = React.Children.toArray(children).filter(
    (
      child
    ): child is React.ReactElement<{
      component: ComponentProps<TabItemSettings>
    }> => React.isValidElement(child) && !!child.props.component?.id
  )

  if (validTabItems.length === 0) {
    return null
  }

  const defaultTabId = validTabItems[0].props.component.id

  return (
    <Tabs defaultValue={defaultTabId}>
      <TabsList>
        {validTabItems.map((child) => {
          const { component } = child.props
          const { id, settings } = component

          return (
            <TabsTrigger key={id} value={id}>
              {settings?.itemTitle}
            </TabsTrigger>
          )
        })}
      </TabsList>

      {validTabItems.map((child) => {
        const { id } = child.props.component

        return (
          <TabsContent key={id} value={id}>
            {child}
          </TabsContent>
        )
      })}
    </Tabs>
  )
}

export default TabEditor
