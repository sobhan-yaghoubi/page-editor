import { SettingsDefinition } from "@/types"

const bannerSettings = [
  {
    key: "images",
    label: "Banner",
    type: "image",
  },
] as const satisfies readonly SettingsDefinition[]

const categoryImageSetting = [
  {
    key: "categories-image",
    label: "Categories Images",
    type: "asyncSelect",
    sourceKey: "categoryCollection",
  },
] as const satisfies readonly SettingsDefinition[]

const brandSetting = [
  {
    key: "brands",
    label: "Brand Selection",
    type: "asyncSelect",
    sourceKey: "brandCollection",
  },
] as const satisfies readonly SettingsDefinition[]

const reviewsSettings = [
  {
    key: "review",
    label: "Customer Reviews Show Count",
    type: "range",
    max: 10,
    min: 3,
    step: 1,
  },
  {
    key: "review-direction",
    label: "Reviews Direction",
    type: "select",
    options: [
      { label: "Carousel", value: "carousel" },
      { label: "Column", value: "column" },
    ],
  },
] as const satisfies readonly SettingsDefinition[]
