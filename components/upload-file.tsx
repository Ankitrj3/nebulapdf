import { Button } from "@/components/ui/button"
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, FileText, X, Sparkles, Copy, Check } from "lucide-react"
import { toast } from "sonner"

export function UploadFile() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [summary, setSummary] = useState("")
  const [isCopied, setIsCopied] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0])
      setUploadError(null)
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
    setUploadError(null)
  }

  const handleSummary = async (url: string) => {
    if (!url) {
      console.error('No URL provided for summary')
      return
    }

    try {
      console.log('Sending summary request with URL:', url)
      
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/public/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          body: url
        })
      })

      if (!res.ok) {
        throw new Error(`Failed to get summary: ${res.statusText}`)
      }

      const data = await res.json()
      console.log('Summary response:', data)
      setSummary(data.body)
      
      // Show success toast for summary
      toast.success('Summary generated!', {
        description: 'Your PDF has been processed successfully.',
        duration: 3000,
        className: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      })
    } catch (error) {
      console.error('Summary error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate summary'
      
      // Show error toast for summary
      toast.error('Summary failed', {
        description: errorMessage,
        duration: 4000,
        className: 'bg-rose-50 text-rose-900 border-rose-200',
      })
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setIsUploading(true)
    setUploadError(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/upload/file', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`)
      }

      const data = await response.json()
      console.log('Upload response:', data) // Log the upload response
      
      // Make sure we have a valid URL from the response
      if (!data.url) {
        throw new Error('No URL received from upload')
      }

      // Show success toast
      toast.success('PDF uploaded successfully!', {
        description: 'Please wait while we process your file.',
        duration: 3000,
        className: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      })

      // Wait a moment before requesting the summary
      setTimeout(() => {
        handleSummary(data.url)
      }, 1000)
      
      // Clear the file after successful upload
      setFile(null)
    } catch (error) {
      console.error('Upload error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Upload failed'
      setUploadError(errorMessage)
      
      // Show error toast
      toast.error('Upload failed', {
        description: errorMessage,
        duration: 4000,
        className: 'bg-rose-50 text-rose-900 border-rose-200',
      })
    } finally {
      setIsUploading(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(summary)
      setIsCopied(true)
      toast.success('Summary copied to clipboard!', {
        description: 'Your PDF has been processed successfully.',
        duration: 3000,
        className: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      })
      setTimeout(() => setIsCopied(false), 2000)
    } catch {
      toast.error('Failed to copy summary', {
        duration: 2000,
        className: 'bg-rose-50 text-rose-900 border-rose-200',
      })
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 transition-all duration-1000 px-8 py-7 text-white border-none shadow-lg hover:shadow-rose-500/20 text-lg font-medium"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Upload PDF
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh] p-6">
        <SheetHeader className="pb-4">
          <SheetTitle className="text-2xl font-bold">Upload PDF</SheetTitle>
          <SheetDescription className="text-sm">
            Drag and drop your PDF file here or click to browse
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 flex flex-col gap-4">
          <div
            {...getRootProps()}
            className={`flex-1 border-2 border-dashed rounded-xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300
              ${isDragActive 
                ? 'border-rose-500 bg-gradient-to-r from-rose-500/5 to-rose-600/5 scale-[1.02] shadow-lg shadow-rose-500/10' 
                : 'border-muted-foreground/25 hover:border-rose-500/50 hover:bg-gradient-to-r hover:from-rose-500/5 hover:to-rose-600/5 hover:scale-[1.01]'}`}
          >
            <input {...getInputProps()} />
            {file ? (
              <div className="flex flex-col items-center gap-3">
                <FileText className="h-12 w-12 text-rose-500 animate-pulse" />
                <p className="text-base font-medium text-muted-foreground">{file.name}</p>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 h-10 font-medium"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile()
                  }}
                >
                  <X className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </div>
            ) : (
              <>
                <Upload className="h-12 w-12 text-muted-foreground animate-bounce" />
                <div className="text-center space-y-2">
                  <p className="text-base font-medium text-muted-foreground">
                    {isDragActive
                      ? "Drop the PDF here"
                      : "Drag and drop your PDF file here, or click to select"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Only PDF files are supported
                  </p>
                </div>
              </>
            )}
          </div>

          {summary && (
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold">PDF Summary</CardTitle>
                <CardDescription>Here is a summary of your PDF content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyToClipboard}
                    className="absolute right-2 top-2 z-10 h-8 w-8 hover:bg-rose-500/10"
                  >
                    {isCopied ? (
                      <Check className="h-4 w-4 text-rose-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-rose-500" />
                    )}
                  </Button>
                  <div className="p-4 bg-muted rounded-lg h-[300px] overflow-y-auto">
                    <p className="whitespace-pre-wrap text-sm">{summary}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="gap-2"
                >
                  {isCopied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy Summary
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
        <SheetFooter className="pt-4 gap-3">
          <SheetClose asChild>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8"
              disabled={isUploading}
            >
              Cancel
            </Button>
          </SheetClose>
          <Button 
            type="submit" 
            size="lg"
            disabled={!file || isUploading}
            onClick={handleUpload}
            className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-white border-none shadow-lg hover:shadow-rose-500/20 transition-all duration-300 px-8"
          >
            {isUploading ? (
              <span className="flex items-center">
                <span className="animate-spin mr-2">⏳</span>
                Uploading...
              </span>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Upload PDF
              </>
            )}
          </Button>
        </SheetFooter>
        {uploadError && (
          <div className="mt-4 text-rose-500 text-sm text-center">
            {uploadError}
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
