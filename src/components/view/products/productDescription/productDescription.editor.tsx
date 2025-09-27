"use client"
import { ComponentProps } from "@/types"

const ProductDescriptionEditor = ({ settings }: ComponentProps) => {
  const placeholderText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque aspernatur ut id fugit, obcaecati quidem atque itaque sapiente dolorem sint esse. Accusamus beatae eum incidunt, doloribus vitae dolore, magnam impedit, dolorum quaerat iure eius. Facilis cupiditate doloremque obcaecati provident quasi aspernatur modi, pariatur placeat libero fuga tempore ex non enim minus voluptate, quos atque aperiam dignissimos. Dolorem sit doloremque inventore quaerat quibusdam distinctio eligendi expedita esse commodi enim earum quasi omnis amet, nobis officia iste temporibus! Saepe dignissimos ipsa ut deleniti fugit repellendus sapiente dolorem rem quae veniam consequa"

  const displayText = settings.truncate
    ? placeholderText.substring(0, 150) + "..."
    : placeholderText

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: displayText.replace(/\n/g, "<br />"),
        }}
      />
      {settings.truncate && (
        <button
          style={{
            color: "#3b82f6",
            background: "none",
            border: "none",
            padding: 0,
            marginTop: "8px",
            cursor: "pointer",
          }}
        >
          {settings.showMoreText || "Read more"}
        </button>
      )}
    </div>
  )
}

export default ProductDescriptionEditor
