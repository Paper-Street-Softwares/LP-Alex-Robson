export default function CustomTag({ tagName, children, ...props }) {
  const Tag = tagName || "a";

  return <Tag {...props}>{children}</Tag>;
}
