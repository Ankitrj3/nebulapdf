import { FileText, Sparkles } from "lucide-react";

export default function DemoSection() {
    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center space-y-6">
                    <div className="flex justify-center">
                        <div className="bg-white p-4 rounded-full shadow-lg">
                            <FileText className="w-12 h-12 text-rose-500" />
                        </div>
                        <div className="flex items-center mx-4">
                            <Sparkles className="w-6 h-6 text-rose-500 animate-pulse" />
                        </div>
                        <div className="bg-white p-4 rounded-full shadow-lg">
                            <FileText className="w-12 h-12 text-rose-500" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Watch how NebulaPDF transforms your PDFs
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Upload your PDF and get a concise, easy-to-read summary in seconds
                    </p>
                </div>
            </div>
        </section>
    )
}