import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, FileText, X } from "lucide-react"

export function UploadFile() {
  const [file, setFile] = useState<File | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1
  })

  const removeFile = () => {
    setFile(null)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Upload PDF</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[40vh] p-4">
        <SheetHeader className="pb-2">
          <SheetTitle className="text-lg">Upload PDF</SheetTitle>
          <SheetDescription className="text-xs">
            Drag and drop your PDF file here or click to browse
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 flex flex-col">
          <div
            {...getRootProps()}
            className={`flex-1 border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors
              ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50'}`}
          >
            <input {...getInputProps()} />
            {file ? (
              <div className="flex flex-col items-center gap-1.5">
                <FileText className="h-8 w-8 text-primary" />
                <p className="text-sm font-medium text-muted-foreground">{file.name}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive h-7"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile()
                  }}
                >
                  <X className="h-3 w-3 mr-1" />
                  Remove
                </Button>
              </div>
            ) : (
              <>
                <Upload className="h-8 w-8 text-muted-foreground" />
                <div className="text-center space-y-0.5">
                  <p className="text-sm font-medium text-muted-foreground">
                    {isDragActive
                      ? "Drop the PDF here"
                      : "Drag and drop a PDF file here, or click to select"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Only PDF files are supported
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <SheetFooter className="pt-3">
          <SheetClose asChild>
            <Button variant="outline" size="sm">Cancel</Button>
          </SheetClose>
          <Button type="submit" size="sm" disabled={!file}>
            Upload PDF
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
