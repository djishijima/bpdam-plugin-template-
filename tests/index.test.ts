import { processFile } from '../src/api/process';

describe('processFile', () => {
  it('should process a file successfully', async () => {
    const mockFile = new File(['test'], 'test.txt', { type: 'text/plain' });
    const result = await processFile(mockFile);
    expect(result.success).toBe(true);
    expect(result.data).toHaveProperty('fileName', 'test.txt');
  });
});