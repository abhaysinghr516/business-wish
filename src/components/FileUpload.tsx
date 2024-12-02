"use client";

import {
  AlertCircleIcon,
  CheckCircleIcon,
  FileIcon,
  UploadIcon,
  XIcon,
} from "lucide-react";
import { useCallback, useState } from "react";

export const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  }, []);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={`relative overflow-hidden transition-all duration-300 ease-in-out border-2 border-dashed rounded-2xl p-8 text-center ${
          isDragging
            ? "border-blue-400 bg-blue-50/30 dark:bg-blue-900/30 scale-102"
            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
        }`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50" />
        <div className="relative z-10">
          <UploadIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-300" />
          <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-300">
            Drag and drop your file here, or click to select
          </p>
          <input
            type="file"
            className="hidden"
            onChange={onFileChange}
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="mt-4 inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Select File
          </label>
        </div>
      </div>
      {file && (
        <div className="mt-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-sm">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Selected file: {file.name}
          </p>
        </div>
      )}
    </div>
  );
};

interface FileWithProgress extends File {
  id: string;
  progress: number;
  name: string;
}

export const MultiFileUpload: React.FC = () => {
  const [files, setFiles] = useState<FileWithProgress[]>([]);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const newFiles = selectedFiles.map((file) => ({
      ...file,
      id: Math.random().toString(36).substr(2, 9),
      progress: 0,
      name: file.name,
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    newFiles.forEach((file) => {
      const interval = setInterval(() => {
        setFiles((prevFiles) =>
          prevFiles.map((f) =>
            f.id === file.id
              ? { ...f, progress: Math.min(f.progress + 10, 100) }
              : f
          )
        );
      }, 500);

      setTimeout(() => clearInterval(interval), 5000);
    });
  }, []);

  const removeFile = useCallback((id: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 rounded-2xl p-8 text-center transition-all duration-300">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50 rounded-2xl" />
          <div className="relative z-10">
            <UploadIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-300" />
            <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-300">
              Select multiple files to upload
            </p>
            <input
              type="file"
              className="hidden"
              onChange={onFileChange}
              id="file-upload"
              multiple
            />
            <label
              htmlFor="file-upload"
              className="mt-4 inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Select Files
            </label>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                {file.name}
              </span>
              <button
                onClick={() => removeFile(file.id)}
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-blue-500 h-1.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${file.progress}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 inline-block">
              {file.progress}% uploaded
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ImagePreviewFileUpload: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const onImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    []
  );

  const removeImage = useCallback(() => {
    setImage(null);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 rounded-2xl p-8 text-center transition-all duration-300">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50 rounded-2xl" />
          <div className="relative z-10">
            {image ? (
              <div className="relative">
                <img
                  src={image}
                  alt="Uploaded preview"
                  className="mx-auto max-h-64 rounded-xl shadow-lg transition-transform duration-300 hover:scale-102"
                />
                <button
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1.5 hover:bg-red-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <UploadIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-300" />
                <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                  Upload an image to see a preview
                </p>
              </>
            )}
            <input
              type="file"
              className="hidden"
              onChange={onImageChange}
              id="image-upload"
              accept="image/*"
            />
            <label
              htmlFor="image-upload"
              className="mt-4 inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {image ? "Change Image" : "Select Image"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const allowedFileTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];

export const FileTypeValidatorFileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateFile = useCallback((file: File) => {
    if (!allowedFileTypes.includes(file.type)) {
      setError(
        "Invalid file type. Please upload a PDF, DOC, DOCX, or TXT file."
      );
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("File size exceeds 5MB limit.");
      return false;
    }
    setError(null);
    return true;
  }, []);

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile && validateFile(selectedFile)) {
        setFile(selectedFile);
      } else {
        setFile(null);
      }
    },
    [validateFile]
  );

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 rounded-2xl p-8 text-center transition-all duration-300">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50 rounded-2xl" />
          <div className="relative z-10">
            <UploadIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-300" />
            <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-300">
              Upload a PDF, DOC, DOCX, or TXT file (max 5MB)
            </p>
            <input
              type="file"
              className="hidden"
              onChange={onFileChange}
              id="file-upload"
              accept=".pdf,.doc,.docx,.txt"
            />
            <label
              htmlFor="file-upload"
              className="mt-4 inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Select File
            </label>
          </div>
        </div>
      </div>
      {error && (
        <div className="mt-4 flex items-center p-4 bg-red-50 dark:bg-red-900/30 rounded-xl">
          <AlertCircleIcon className="h-5 w-5 text-red-500 mr-2" />
          <span className="text-sm text-red-600 dark:text-red-400">
            {error}
          </span>
        </div>
      )}
      {file && !error && (
        <div className="mt-4 flex items-center p-4 bg-green-50 dark:bg-green-900/30 rounded-xl">
          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
          <span className="text-sm text-green-600 dark:text-green-400">
            File "{file.name}" is ready to upload
          </span>
        </div>
      )}
    </div>
  );
};

interface UploadedFile {
  id: string;
  name: string;
  size: number;
}

export const DropzoneFileUpload: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  }, []);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    addFiles(selectedFiles);
  }, []);

  const addFiles = (newFiles: File[]) => {
    const updatedFiles = newFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
    }));
    setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
  };

  const removeFile = useCallback((id: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  }, []);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={`relative overflow-hidden transition-all duration-300 ease-in-out border-2 border-dashed rounded-2xl p-8 text-center ${
          isDragging
            ? "border-blue-400 bg-blue-50/30 dark:bg-blue-900/30 scale-102"
            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
        }`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50" />
        <div className="relative z-10">
          <UploadIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-300" />
          <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-300">
            Drag and drop your files here, or click to select
          </p>
          <input
            type="file"
            className="hidden"
            onChange={onFileChange}
            id="file-upload"
            multiple
          />
          <label
            htmlFor="file-upload"
            className="mt-4 inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Select Files
          </label>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 space-y-4">
          {files.map((file) => (
            <div
              key={file.id}
              className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileIcon className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
