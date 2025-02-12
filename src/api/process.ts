import { ProcessResult } from '../types';

export async function processFile(file: File): Promise<ProcessResult> {
  try {
    // ファイル処理のロジックをここに実装
    return {
      success: true,
      data: {
        fileName: file.name,
        size: file.size,
        type: file.type
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}