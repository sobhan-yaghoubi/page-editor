"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root> & {
  "disable-default-style"?: "true" | "false"
}

type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List> & {
  "disable-default-style"?: "true" | "false"
}

type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  "disable-default-style"?: "true" | "false"
}

type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>

function Tabs({
  className,
  "disable-default-style": disableStyle,
  ...props
}: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      dir="rtl"
      className={
        disableStyle === "true"
          ? className ?? ""
          : `tabs-root ${className ?? ""}`.trim()
      }
      {...props}
    />
  )
}

function TabsList({
  className,
  "disable-default-style": disableStyle,
  ...props
}: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={
        disableStyle === "true"
          ? className ?? ""
          : `tabs-list ${className ?? ""}`.trim()
      }
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  "disable-default-style": disableStyle,
  ...props
}: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={
        disableStyle === "true"
          ? className ?? ""
          : `tabs-trigger ${className ?? ""}`.trim()
      }
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={`tabs-content ${className ?? ""}`.trim()}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
