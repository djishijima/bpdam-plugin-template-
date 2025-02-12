import { Box, Text, Button } from '@filekit/ui';
import { useState } from 'react';
import type { PluginUIProps, ProcessResult } from '../types';

export function PluginUI({ file, onProcess }: PluginUIProps) {
  const [result, setResult] = useState<ProcessResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcess = async () => {
    setIsProcessing(true);
    try {
      const data = await onProcess(file);
      setResult({ success: true, data });
    } catch (error) {
      setResult({ success: false, error: error.message });
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Box className="p-4">
      <Button onClick={handleProcess} disabled={isProcessing}>
        {isProcessing ? '処理中...' : '処理開始'}
      </Button>
      {result && (
        <Box className="mt-4">
          <Text>処理結果:</Text>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </Box>
      )}
    </Box>
  );
}