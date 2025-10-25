import { useEffect } from 'react';

export function useKeyboardShortcuts(
  shortcuts: { [key: string]: () => void },
  enabled: boolean = true
) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      
      // Handle arrow keys for navigation
      if (shortcuts[key]) {
        e.preventDefault();
        shortcuts[key]();
      }
      
      // Handle special keys with modifiers
      if (e.ctrlKey || e.metaKey) {
        const shortcut = `ctrl+${key}`;
        if (shortcuts[shortcut]) {
          e.preventDefault();
          shortcuts[shortcut]();
        }
      }
      
      // Handle escape
      if (e.key === 'Escape' && shortcuts['escape']) {
        e.preventDefault();
        shortcuts['escape']();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [shortcuts, enabled]);
}
