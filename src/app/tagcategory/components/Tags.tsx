interface TagGroupProps {
  title: string;
  tags: string[];
  onRemove?: (tag: string) => void;
}

function TagGroup({ title, tags, onRemove }: TagGroupProps) {
  return (
    <div className="flex gap-8">
      <div className="w-[120px] text-sm text-gray-600">{title}</div>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
          >
            {tag}
            <button
              onClick={() => onRemove?.(tag)}
              className="text-gray-400 hover:text-black"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TagGroup;
