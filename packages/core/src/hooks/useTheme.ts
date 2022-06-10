import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

export function useTheme() {
  const { schema, resolvedTheme, setTheme, config } = useContext(ThemeContext);
  return { schema, resolvedTheme, setTheme, config };
}
