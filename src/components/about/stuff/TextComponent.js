import LinkComponent from "./LinkComponent";

export default function TextComponent({
  title,
  description,
  className,
  linkUrl, // Optional prop for the link URL
  linkLabel, // Optional prop for the link label
}) {
  return (
    <div className={`max-w-[615px] ${className || ""}`}>
      {/* Title */}
      <h2 className="font-cairo text-[40px] leading-[48px] font-semibold mb-4">
        {title}
      </h2>
      {/* Description */}
      <p
        className="font-cairo text-[32px] leading-[36px] text-[#918E8E]"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {/* Optional Link */}
      {linkUrl && linkLabel && (
        <div className="mt-4">
          <LinkComponent
            url={linkUrl}
            label={linkLabel}
            className="font-cairo text-[#247CFF] text-[20px] hover:underline"
          />
        </div>
      )}
    </div>
  );
}