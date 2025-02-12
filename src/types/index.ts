export interface PluginConfig {
  name: string;
  version: string;
  description: string;
}

export interface PluginUIProps {
  file: File;
  onProcess: (file: File) => Promise<any>;
}

export interface ProcessResult {
  success: boolean;
  data?: any;
  error?: string;
}