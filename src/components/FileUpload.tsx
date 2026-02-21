"use client";

import {
  AlertCircleIcon,
  CheckCircleIcon,
  FileIcon,
  UploadIcon,
  XIcon,
  CameraIcon,
  UploadCloudIcon
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
        className={`relative overflow-hidden transition-all duration-300 ease-in-out border border-dashed rounded-[1.5rem] p-10 text-center ${
          isDragging
            ? "border-neutral-400 bg-neutral-50/50 dark:bg-white/5 scale-[1.02]"
            : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-950"
        }`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 mb-4 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
            <UploadIcon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" strokeWidth={1.5} />
          </div>
          <h3 className="text-[15px] font-medium text-neutral-900 dark:text-white mb-1">Upload a file</h3>
          <p className="text-[14px] text-neutral-500 dark:text-neutral-400 mb-6">
            Drag and drop or click to select
          </p>
          <input
            type="file"
            className="hidden"
            onChange={onFileChange}
            id="file-upload-basic"
          />
          <label
            htmlFor="file-upload-basic"
            className="cursor-pointer inline-flex items-center px-5 py-2.5 text-[14px] font-medium rounded-full text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-sm"
          >
            Select file
          </label>
        </div>
      </div>
      {file && (
        <div className="mt-4 p-4 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-sm flex items-center justify-between">
          <div className="flex items-center space-x-3 truncate">
            <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <FileIcon className="h-4 w-4 text-neutral-600 dark:text-neutral-400" strokeWidth={1.5} />
            </div>
            <p className="text-[14px] font-medium text-neutral-700 dark:text-neutral-200 truncate">
              {file.name}
            </p>
          </div>
          <button 
            onClick={() => setFile(null)} 
            className="p-1 text-neutral-400 hover:text-red-500 transition-colors"
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

interface FileWithProgress extends File {
  id: string;
  progress: number;
  name: string;
  size: number;
}

export const MultiFileUpload: React.FC = () => {
  const [files, setFiles] = useState<FileWithProgress[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const processFiles = (selectedFiles: File[]) => {
    const newFiles = selectedFiles.map((file) => ({
      ...file,
      id: Math.random().toString(36).substr(2, 9),
      progress: 0,
      name: file.name,
      size: file.size,
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    newFiles.forEach((file) => {
      const interval = setInterval(() => {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === file.id
              ? { ...f, progress: Math.min(f.progress + 15, 100) }
              : f
          )
        );
      }, 400);
      setTimeout(() => clearInterval(interval), 3000);
    });
  };

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); setIsDragging(true);
  }, []);
  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); setIsDragging(false);
  }, []);
  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); setIsDragging(false);
    processFiles(Array.from(e.dataTransfer.files));
  }, []);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    processFiles(Array.from(e.target.files || []));
  }, []);

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div 
        className={`border border-dashed rounded-[1.5rem] p-8 text-center transition-all duration-300 ${isDragging ? 'border-neutral-400 bg-neutral-50 dark:bg-neutral-900 border-solid' : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950'}`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <UploadCloudIcon className="mx-auto h-8 w-8 text-neutral-400 dark:text-neutral-500 mb-3" strokeWidth={1.5} />
        <p className="text-[14px] font-medium text-neutral-900 dark:text-white mb-1">Upload multiple files</p>
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400 mb-4">PNG, JPG, PDF up to 10MB</p>
        <input type="file" className="hidden" onChange={onFileChange} id="file-upload-multi" multiple />
        <label
          htmlFor="file-upload-multi"
          className="cursor-pointer inline-flex px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 text-[13px] font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
        >
          Browse files
        </label>
      </div>
      
      {files.length > 0 && (
        <div className="mt-4 flex flex-col gap-2">
          {files.map((file) => (
            <div key={file.id} className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-4 shadow-sm">
              <div className="flex bg-neutral-white items-start justify-between mb-2">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg shrink-0">
                    <FileIcon className="h-4 w-4 text-neutral-500" strokeWidth={1.5} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[13px] font-medium text-neutral-900 dark:text-white truncate pr-4">{file.name}</p>
                    <p className="text-[12px] text-neutral-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button onClick={() => removeFile(file.id)} className="text-neutral-400 hover:text-red-500 shrink-0">
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1 mt-3">
                <div
                  className="bg-neutral-900 dark:bg-white h-1 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${file.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const ImagePreviewFileUpload: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const onImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative group overflow-hidden bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[2rem] aspect-square flex items-center justify-center transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800/80">
        {image ? (
          <>
            <img src={image} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <label htmlFor="image-preview-upload" className="cursor-pointer p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all">
                <UploadIcon className="h-5 w-5" strokeWidth={1.5} />
              </label>
              <button onClick={() => setImage(null)} className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all">
                <XIcon className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center p-6 flex flex-col items-center">
            <div className="w-12 h-12 bg-white dark:bg-neutral-950 rounded-full flex items-center justify-center shadow-sm mb-4">
              <CameraIcon className="h-5 w-5 text-neutral-400" strokeWidth={1.5} />
            </div>
            <p className="text-[14px] font-medium text-neutral-900 dark:text-white">Upload image</p>
            <p className="text-[13px] text-neutral-500 mt-1 mb-4">Click to browse your gallery</p>
            <label htmlFor="image-preview-upload" className="cursor-pointer px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-full text-[13px] font-medium bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
              Browse
            </label>
          </div>
        )}
        <input type="file" className="hidden" onChange={onImageChange} id="image-preview-upload" accept="image/*" />
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
      setError("Invalid file type. Please upload PDF, DOC, or TXT.");
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("File is too large. Maximum size is 5MB.");
      return false;
    }
    setError(null);
    return true;
  }, []);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && validateFile(selectedFile)) {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  }, [validateFile]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border border-neutral-200 dark:border-neutral-800 rounded-[1.5rem] p-8 text-center bg-white dark:bg-neutral-950">
        <UploadIcon className="mx-auto h-8 w-8 text-neutral-400 mb-4" strokeWidth={1.5} />
        <h3 className="text-[15px] font-medium text-neutral-900 dark:text-white mb-1">Strict upload</h3>
        <p className="text-[13px] text-neutral-500 mb-5">PDF, DOC, DOCX, TXT up to 5MB</p>
        <input type="file" className="hidden" onChange={onFileChange} id="file-upload-validator" accept=".pdf,.doc,.docx,.txt" />
        <label htmlFor="file-upload-validator" className="cursor-pointer inline-flex px-5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-[13px] font-medium text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
          Choose Document
        </label>
      </div>

      {error && (
        <div className="mt-4 flex items-center p-3 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 rounded-xl">
          <AlertCircleIcon className="h-4 w-4 text-red-600 dark:text-red-400 mr-2 shrink-0" strokeWidth={2} />
          <span className="text-[13px] font-medium text-red-600 dark:text-red-400">{error}</span>
        </div>
      )}

      {file && !error && (
        <div className="mt-4 flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl">
          <div className="flex items-center gap-2 overflow-hidden">
            <CheckCircleIcon className="h-4 w-4 text-neutral-900 dark:text-white shrink-0" strokeWidth={2} />
            <span className="text-[13px] font-medium text-neutral-900 dark:text-white truncate">{file.name} ready</span>
          </div>
          <button onClick={() => setFile(null)} className="text-neutral-400 hover:text-red-500">
            <XIcon className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export const DropzoneFileUpload: React.FC = () => {
  return <MultiFileUpload />;
};

export const AvatarUpload: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const onImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="relative group w-32 h-32 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 shadow-sm flex items-center justify-center">
        {image ? (
          <img src={image} alt="Avatar profile" className="w-full h-full object-cover" />
        ) : (
          <UserIconPlaceholder />
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer">
          <CameraIcon className="h-6 w-6 text-white mb-1" strokeWidth={1.5} />
          <span className="text-[10px] font-medium tracking-wider text-white uppercase">Edit</span>
        </div>
        <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={onImageChange} accept="image/*" />
      </div>
    </div>
  );
};

const UserIconPlaceholder = () => (
  <svg className="w-12 h-12 text-neutral-300 dark:text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const MinimalDropzoneFileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  
  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative flex items-center justify-between p-2 pl-4 pr-2 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-full shadow-sm">
        <div className="flex items-center gap-3 overflow-hidden">
          <UploadCloudIcon className="h-5 w-5 text-neutral-400 shrink-0" strokeWidth={1.5} />
          <span className="text-[14px] text-neutral-500 truncate select-none">
            {file ? file.name : "Select or drop a file..."}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {file && (
            <button onClick={() => setFile(null)} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-400 transition-colors">
              <XIcon className="h-4 w-4" />
            </button>
          )}
          <label className="cursor-pointer shrink-0 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[13px] font-medium rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
            Browse
            <input type="file" className="hidden" onChange={onFileChange} />
          </label>
        </div>
      </div>
    </div>
  );
};
