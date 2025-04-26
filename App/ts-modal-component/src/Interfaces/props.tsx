// Props interfaces for the modal component
export interface ModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    children?: React.ReactNode;
    color?: string;
    fontColor?: string;
    width?: string;
    height?: string;
  }
  
  // Props for open modl button 
  export interface OpenModalButtonProps {
    setIsOpen: (value: boolean) => void;
    label?: string;
  }

  // Props for BckgColorSelector component
  export interface ColorSelectorProps {
    value: string;
    onChange: (color: string) => void;
    label: string[];
  }

  // Props for WidthSelector component
  export interface WidthSelectorProps {
    value: string;
    onChange: (width: string) => void;
    label: string[];
  }

  // Props for HeightSelector component
  export interface HeightSelectorProps {
    value: string;
    onChange: (height: string) => void;
    label: string[];
  }

  // Props for FontColorSelector component
  export interface FontColorSelectorProps {
    value: string;
    onChange: (color: string) => void;
    label: string[];
  }