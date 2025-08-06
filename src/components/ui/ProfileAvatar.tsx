import React from 'react';
import { cn } from '@/lib/utils';
import profileImage from '@/assets/profile-picture.jpg';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showStatus?: boolean;
  alt?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ 
  size = 'md', 
  className,
  showStatus = false,
  alt = "Profile picture"
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32'
  };

  return (
    <div className={cn('relative', className)}>
      <div className={cn('profile-avatar', sizeClasses[size])}>
        <img
          src={profileImage}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {showStatus && (
        <div className="absolute -bottom-1 -right-1">
          <div className="status-indicator">
            <div className="w-4 h-4 bg-success rounded-full border-2 border-background"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;