export const MAX_FILES = 2;
export const MAX_FILE_SIZE_MB = 50;

export const formatFileSize = (size: number): string => {
    return size > 1024 * 1024
        ? (size / (1024 * 1024)).toFixed(2) + " MB"
        : (size / 1024).toFixed(2) + " KB";
};
