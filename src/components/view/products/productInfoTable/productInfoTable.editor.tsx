interface SpecItemProps {
  label: string
  value: string
}

const SpecItem = ({ label, value }: SpecItemProps) => {
  return (
    <div className="spec-item">
      <div className="spec-value-container">
        <div className="spec-value">{value}</div>
      </div>
      <div className="spec-label-container">
        <div className="spec-label">{label}</div>
      </div>
    </div>
  )
}

export default function ProductInfoTableEditor() {
  const specifications = [
    { label: "برند:", value: "daniel klein" },
    { label: "تکنولوژی ساخت:", value: "کوارتز" },
    { label: "تاریخ شمار:", value: "بله" },
    { label: "منبع انرژی:", value: "باتری" },
    { label: "جنس شیشه:", value: "کریستال معدنی" },
    { label: "فرم صفحه:", value: "گرد" },
    { label: "جنس بدنه:", value: "استیل" },
    { label: "نوع موتور:", value: "تک موتوره" },
  ]

  return (
    <div className="product-info-table-view">
      <div className="specs-container">
        {specifications.map((spec, idx) => (
          <SpecItem key={idx} label={spec.label} value={spec.value} />
        ))}
      </div>
    </div>
  )
}
