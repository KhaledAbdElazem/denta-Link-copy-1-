export default function LinkComponent({ url, label, className }) {
    if (!url || !label) return null; // Don't render anything if props are missing
  
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block ${className || ""}`}
        style={{
          opacity: 1, // Ensure the link is visible
          fontFamily: "Cairo, sans-serif", // Apply font family
          fontSize: "32px", // Set font size
          fontWeight: "400", // Set font weight
          lineHeight: "52.99px", // Set line height
          letterSpacing: "-0.3px", // Set letter spacing
          textAlign: "left", // Align text to the left
          textDecoration: "none", // Remove underline if not needed
          cursor: "pointer", // Ensure the pointer changes on hover
        }}
      >
        {label} {/* Display the label */}
      </a>
    );
  }