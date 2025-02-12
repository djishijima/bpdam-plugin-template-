import { PluginConfig } from './types';
import { PluginUI } from './components/ui';
import { processFile } from './api/process';

export const config: PluginConfig = {
  name: 'FileKit Plugin Template',
  version: '1.0.0',
  description: 'A template for FileKit AI Studio plugins'
};

export { PluginUI, processFile };