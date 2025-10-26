import cn from 'clsx'

export const pageClassName = (isCurrentPage: boolean) =>
  cn(
    "text-paragraph_m_regular",
    "w-[52px]",
    "inline-flex",
    "justify-center",
    "cursor-pointer",
    "transition",
    isCurrentPage
      ? "text-primary border-t-[2px] border-t-primary"
      : "text-gray_900 hover:text-primary border-t-[2px] border-t-white"
  );
