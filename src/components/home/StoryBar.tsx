import { Story } from "@/types";

export function StoryBar({
  stories,
  onSelectStory,
}: {
  stories: Story[];
  onSelectStory: (s: Story) => void;
}) {
  return (
    <div className="flex gap-3 overflow-x-auto py-3 no-scrollbar">
      {stories.map((story) => (
        <button key={story.id} onClick={() => onSelectStory(story)} className="flex flex-col items-center gap-1 shrink-0">
          <div className="p-0.5 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400">
            <img src={story.storeAvatar} alt={story.storeName} className="size-14 rounded-full border-2 border-white object-cover dark:border-slate-900" />
          </div>
          <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 max-w-[60px] truncate">{story.storeName}</span>
        </button>
      ))}
    </div>
  );
}
