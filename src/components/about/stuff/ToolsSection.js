import ImageComponent from "./ImageComponent";
import TextComponent from "./TextComponent";

export default function ToolsSection({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageClassName,
  title,
  description,
  textClassName,
  reverseOrder, // Prop to control the order
  linkUrl, // Optional prop for the link URL
  linkLabel, // Optional prop for the link label
}) {
  return (
    <section className="py-[50px]">
      <div className="container mx-auto px-4">
        {/* Use flex-row or flex-row-reverse based on reverseOrder */}
        <div
          className={`flex items-center gap-[100px] ${
            reverseOrder ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {/* Image Component (conditionally rendered) */}
          {imageSrc && (
            <ImageComponent
              src={imageSrc}
              alt={imageAlt || ""}
              width={imageWidth}
              height={imageHeight}
              className={imageClassName}
            />
          )}
          {/* Text Component */}
          <TextComponent
            title={title}
            description={description}
            className={textClassName}
            linkUrl={linkUrl}
            linkLabel={linkLabel}
          />
        </div>
      </div>
    </section>
  );
}