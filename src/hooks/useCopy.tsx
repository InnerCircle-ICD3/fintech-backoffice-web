import { toast } from 'sonner';

export const useCopy = () => {
  const handleCopy = async ({ key, message }: { key: string; message: string }) => {
    await navigator.clipboard.writeText(key);
    toast.success(message);
  };

  return handleCopy;
};
