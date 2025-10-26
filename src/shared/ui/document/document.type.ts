export type DocumentProps = {
  title: string;
  url?: string;
  variant?: DocumentVariant;
  removable?: boolean;
  onDelete?: () => void;
};

export type DocumentVariant = "success" | "error" | "loading";
