import { useState } from 'react';

interface IconProps {
  iconType: 'edit' | 'done' | 'check';
}

const Icon = ({ iconType }: IconProps) => {
  switch (iconType) {
    case 'edit':
      return <div>Edit</div>;
    case 'done':
      return <div>Done</div>;
    case 'check':
      return <div>Check</div>;
    default:
      return <div>Default</div>;
  }
};

interface ToggleButtonProps {
  showIcon: boolean;
  label?: string;
}

const ToggleButton = ({ label, showIcon }: ToggleButtonProps) => {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <button onClick={handleToggle}>
      {isOn ? 'On' : 'Off'}
      {label || 'default label'}
      {showIcon && <Icon iconType="edit" />}
    </button>
  );
};

export default ToggleButton;
