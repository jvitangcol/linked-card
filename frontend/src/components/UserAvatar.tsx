import Image from "next/image";
import { cn } from "@/lib/utils";
import avatarPlaceholder from "@/assets/avatar-placeholder.png";

interface UserAvatarProps {
  image: string | null | undefined;
  size?: number;
  className?: string;
}

export default function UserAvatar({
  image,
  size,
  className,
}: UserAvatarProps) {
  return (
    <Image
      src={image || avatarPlaceholder}
      alt="User avatar"
      width={size || 48}
      height={size || 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className
      )}
    />
  );
}
