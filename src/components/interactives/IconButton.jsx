export default function IconButton(props) {
  const { icon, label, ariaLabel, className } = props

  return (
    <button
      className={`${className} flex flex-row items-center justify-center transition rounded-[10px] px-[12px] py-[10px] bg-bgSectionDark hover:scale-110 text-white border border-white`}
      aria-label={ariaLabel}
    >
      <div className="flex items-center text-center gap-[10px]">
        <div className="flex flex-col text-white justify-end">{icon}</div>
      </div>
    </button>
  )
}
