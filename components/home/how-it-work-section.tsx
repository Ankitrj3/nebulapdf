import { BrainCircuit, FileOutput, FileText } from "lucide-react";

const steps = [
    {
        icon: FileText,
        title: "Upload your file",
        description: "Upload your PDF file and let NebulaPDF do the rest."
    },
    {
        icon: BrainCircuit,
        title: "Analyze your file",
        description: "NebulaPDF will analyze your file and create a summary."
    },
    {
        icon: FileOutput,
        title: "Download your summary",
        description: "Download your summary and use it as you want."
    }
];

export default function HowItWorkSection() {
    return (
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-8 sm:mb-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-rose-500">How NebulaPDF Works</h2>
                    <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2.5">
                        Transform any PDF into easy-to-digest summary in three simple steps
                    </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="bg-rose-50 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                                <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-rose-500" />
                            </div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center">
                                {step.title}
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 text-center">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}