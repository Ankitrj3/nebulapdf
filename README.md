# NebulaPDF - AI-Powered PDF Summarizer

A modern web application that allows users to upload PDF files and generate AI-powered summaries using Google's Gemini API. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Live Demo

[View Live Demo](https://nebulapdf.vercel.app/)

## 🚀 Features

- 📄 PDF file upload with drag-and-drop support
- 🤖 AI-powered PDF summarization using Google Gemini API
- 🎨 Modern and responsive UI with Tailwind CSS
- 📱 Mobile-friendly design
- 🔄 Real-time upload progress and status updates
- 📋 Copy-to-clipboard functionality for summaries
- 🎯 Error handling and user feedback

## 🛠️ Technologies Used

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- React Dropzone
- Sonner (Toast notifications)

### Backend
- Spring Boot
- Java 17
- AWS S3 for file storage
- PDF.co API for PDF processing
- Google Gemini API for text summarization

## 🔌 APIs Used

1. **Google Gemini API**
   - Used for generating intelligent summaries of PDF content
   - Provides natural language understanding and text generation capabilities

2. **PDF.co API**
   - Handles PDF file processing and text extraction
   - Converts PDF documents to text format

3. **AWS S3**
   - Stores uploaded PDF files securely
   - Provides scalable cloud storage solution

## 🏗️ Project Structure

```
nebulapdf/
├── components/
│   ├── common/
│   ├── home/
│   └── ui/
├── config/
├── lib/
├── public/
└── styles/
```

## 🔧 Backend Integration

The project is integrated with a Spring Boot backend repository: [nebulapdf-endPoint](https://github.com/Ankitrj3/nebulapdf-endPoint)

### Backend Features
- RESTful API endpoints
- File upload handling
- PDF processing
- AI summarization
- AWS S3 integration

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/ankitrj3/nebulapdf.git
cd nebulapdf
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
 
## 👥 Authors

- Ankit Ranjan - [GitHub](https://github.com/Ankitrj3)

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for the styling
- [Next.js](https://nextjs.org/) for the framework
- [Spring Boot](https://spring.io/projects/spring-boot) for the backend
- [AWS](https://aws.amazon.com/) for cloud services
- [Google Gemini](https://ai.google.dev/) for AI capabilities
