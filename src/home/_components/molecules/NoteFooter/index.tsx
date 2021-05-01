import React from 'react';
import IconButton from '../../atoms/IconButton';
import TextButton from '../../atoms/TextButton';
import './index.css';

export interface INoteFooterItem {
  label: string;
  icon?: React.ReactNode;
  isActive: boolean;
  divider: boolean;
  type: 'text' | 'icon';
}

export interface INoteFooter {
  items: INoteFooterItem[];
  onItemClick: Function;
  className?: string;
}

const NoteFooter: React.FC<INoteFooter> = ({
  items,
  className = '',
  onItemClick,
  ...rest
}) => {
  return (
    <div className={`flex  flex-align-center ${className}`} {...rest}>
      {items.map((item) =>
        item.type === 'icon' ? (
          <IconButton
            onClick={onItemClick.bind(null, item.label)}
            isActive={item.isActive}
            title={item.label}
            style={{
              marginRight: item.divider ? 'auto' : '',
            }}
            key={item.label}
          >
            {item.icon}
          </IconButton>
        ) : (
          <TextButton
            onClick={onItemClick.bind(null, item.label)}
            isActive={item.isActive}
            title={item.label}
            style={{
              marginRight: item.divider ? 'auto' : '',
            }}
            key={item.label}
          >
            <p className="paragraph2">{item.label}</p>
          </TextButton>
        ),
      )}
    </div>
  );
};

export default NoteFooter;
