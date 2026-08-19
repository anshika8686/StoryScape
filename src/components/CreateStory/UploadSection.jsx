import { useRef, useState } from "react";
import { FileText, UploadCloud, FileUp } from "lucide-react";

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB in bytes

const UploadSection = ({ onFileSelect }) => {
  const pdfInputRef = useRef(null);
  const txtInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);


  const handleFile =  (file) => {

    if (!file) {
        alert("No file uploaded");
        return;
    }

    if (file.size > MAX_FILE_SIZE) {
        alert("File size exceeds 20MB limit.");
        return;
    }
    setSelectedFile(file);
    onFileSelect(file);
  }

  const handleInputChange = (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2
            className="text-2xl font-semibold text-white lg:text-3xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Upload a File
          </h2>
          <p className="mt-2 text-sm text-gray-300 lg:text-base">
            Upload your story in PDF format
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-gray-300">
          <FileText className="h-4 w-4 text-yellow-300" />
          Max file size: 20MB
        </div>
      </div>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`mt-6 rounded-3xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
          isDragging
            ? "border-yellow-300 bg-yellow-300/10"
            : "border-white/15 bg-black/20"
        }`}
      >
        <div className="mx-auto flex max-w-xl flex-col items-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-white/5">
            <UploadCloud className="h-8 w-8 text-purple-300" />
          </div>

          <p className="mt-4 text-lg text-gray-200">
            Drag &amp; drop your file here
          </p>

          <p className="mt-1 text-sm text-gray-400">or</p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => pdfInputRef.current?.click()}
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-red-400/20 bg-red-400/10 px-5 py-3 text-sm font-medium text-red-200 transition hover:bg-red-400/20"
            >
              <FileUp className="h-4 w-4" />
              Upload PDF
            </button>

          
          </div>

          {selectedFile && (
            <p className="mt-5 text-sm text-gray-300">
              Selected file:{" "}
              <span className="font-medium text-white">
                {selectedFile.name}
              </span>
            </p>
          )}
        </div>

        <input
          ref={pdfInputRef}
          type="file"
          accept=".pdf"
          onChange={handleInputChange}
          className="hidden"
        />
        <input
          ref={txtInputRef}
          type="file"
          accept=".txt"
          onChange={handleInputChange}
          className="hidden"
        />
      </div>
    </section>
  );
};

export default UploadSection;