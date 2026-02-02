export const personalInfo = {
    name: "Adrit Pal",
    title: "AI Solutions Engineer & Data Analyst",
    email: "adritpal4@gmail.com",
    phone: "+91 8328738418",
    location: "Kolkata, India",
    github: "https://github.com/AdritPal08",
    linkedin: "https://www.linkedin.com/in/adrit-pal",
    summary: `Results-driven AI Solutions Engineer & Data Analyst with 5+ years of experience building LLM-powered solutions, agentic workflows, and automation—backed by strong skills in Python, SQL, and Power BI.

Delivered 14+ dashboards and Excel reports used by 32 active users, and built a Teams-based KPI chatbot using Copilot Studio that helps management retrieve insights in seconds.

Hands-on with LangChain/LlamaIndex, modern LLMs, and multi-agent orchestration (LangGraph, CrewAI), focused on practical, business-impact AI systems.`,
    shortBio: `I build AI-driven analytics and automation that reduce manual reporting and improve decision-making. My work sits at the intersection of business data, dashboards, and GenAI—creating tools like KPI chatbots, RAG systems, and agentic workflows that teams can use daily.`,
};

export const skills = {
    programming: {
        title: "Programming & Querying",
        items: ["Python", "SQL", "JavaScript (Basic)"],
        purpose: "Use for: data pipelines, automation scripts, LLM apps, analytics logic."
    },
    dataProcessing: {
        title: "Data Processing & Analytics",
        items: ["Pandas", "NumPy", "Polars", "PySpark", "Prophet", "Statsmodels"],
        purpose: "Use for: cleaning, transformation, feature engineering, forecasting, KPI calculations."
    },
    visualization: {
        title: "Visualization & BI",
        items: ["Power BI", "Google Looker Studio", "Matplotlib", "Seaborn", "Plotly", "Dash"],
        purpose: "Use for: executive dashboards, automated reporting, performance tracking, operational insights."
    },
    mlDl: {
        title: "ML & Deep Learning",
        items: ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "TensorFlow", "PyTorch", "Model Evaluation"],
        purpose: "Use for: prediction, scoring models, evaluation pipelines."
    },
    llms: {
        title: "Large Language Models (LLMs)",
        items: ["GPT (OpenAI)", "Gemini", "Claude", "Mistral", "Llama", "DeepSeek", "vLLM", "Ollama"],
        purpose: "Use for: chat systems, extraction, summarization, tool-calling, automation."
    },
    llmFrameworks: {
        title: "LLM Frameworks",
        items: ["LangChain", "LlamaIndex", "Hugging Face Transformers"],
        purpose: "Use for: RAG pipelines, document loaders, agents/tools, production-ready patterns."
    },
    agents: {
        title: "Agents & Orchestration",
        items: ["LangGraph", "AutoGen", "CrewAI", "Google ADK"],
        purpose: "Use for: multi-step workflows, tool-calling, multi-agent orchestration."
    },
    nocode: {
        title: "AI Orchestration / No-code Automation",
        items: ["OpenAI AgentKit", "LangFlow", "n8n", "Microsoft Foundry"],
        purpose: "Use for: rapid prototyping, workflow automation, connecting tools and APIs."
    },
    databases: {
        title: "Databases & Vector Databases",
        items: ["PostgreSQL", "MongoDB", "Pinecone", "ChromaDB", "FAISS"],
        purpose: "Use for: storage + retrieval, embeddings search, RAG knowledge base."
    },
    mlops: {
        title: "MLOps & DevOps",
        items: ["MLflow", "Docker", "GitHub Actions", "AWS", "Heroku", "Kubernetes"],
        purpose: "Use for: packaging, deployment, experiment tracking, CI/CD."
    },
    monitoring: {
        title: "Monitoring / Observability",
        items: ["LangSmith", "Prometheus/Grafana"],
        purpose: "Use for: tracing chains/agents, monitoring performance, debugging production issues."
    },
    tools: {
        title: "Tools & Workflow Apps",
        items: ["Streamlit", "Gradio", "Google Sheets", "Excel", "AppSheet", "Power Automate"],
        purpose: "Use for: internal apps, dashboards, automated reporting, ERP data-entry workflows."
    }
};

export const experience = [
    {
        role: "Data Analyst",
        company: "Sing Fuels",
        date: "Feb 2023 – Present",
        points: [
            "Built and maintained business data sources and reporting systems, including dashboards and supporting databases.",
            "Delivered 14+ Power BI dashboards and Excel reports for financial reporting, sales performance, and operational insights; supported 32 active users across departments.",
            "Developed and deployed an AI-powered data analysis chatbot using Copilot Studio integrated with Teams, enabling 9–10 management users to retrieve FY/month/trader KPIs (sales, qty, GP, NP) in seconds.",
            "Automated email reporting workflows (daily sales, payment alerts, weekly overdue, monthly performance), reducing manual effort by ~2 hours/day and improving reporting consistency."
        ]
    },
    {
        role: "Data Analyst",
        company: "Sheetgo",
        date: "May 2022 – Jan 2023",
        points: [
            "Built analytical reports and interactive dashboards using Google Sheets + Looker Studio to support operations and reporting teams.",
            "Designed ERP workflows and AppSheet data-entry apps to capture/validate inputs and ensure near real-time updates.",
            "Performed data and financial analysis (time-series modeling + forecasting) using Python and Google Sheets to improve planning and efficiency."
        ]
    },
    {
        role: "Data Analyst",
        company: "Tomorrow's Foundation",
        date: "May 2020 – Dec 2020",
        points: [
            "Performed data cleaning, analysis, and reporting using Excel; created structured datasets and insights to support program evaluation.",
            "Maintained spreadsheets and documentation using Microsoft Office tools to ensure accurate data management and timely reporting."
        ]
    }
];

export const genAIProjects = [
    {
        title: "AI Medical Chatbot with RAG",
        outcome: "Reference-backed medical Q&A using RAG over curated documents.",
        problem: "Users need accurate answers with sources, not generic chat replies.",
        solution: "RAG pipeline with embeddings + vector search to answer with references.",
        features: [
            "Retrieval-Augmented Generation for grounded answers",
            "Vector search on curated medical docs",
            "Streamlit UI for interactive queries"
        ],
        stack: ["Python", "Streamlit", "LangChain", "Hugging Face", "FAISS", "Groq LLM", "PyTorch"],
        link: "https://github.com/AdritPal08/AI-Medical-Chatbot-with-RAG"
    },
    {
        title: "AI Medical Chatbot (Vision & Voice)",
        outcome: "Multimodal healthcare assistant for text + vision + voice interactions.",
        problem: "Healthcare support often needs multimodal input (image + voice + text).",
        solution: "Multimodal pipeline with voice I/O + image understanding + LLM responses.",
        features: [
            "Vision + voice + text interface",
            "Speech-to-text and text-to-speech support",
            "Real-time interaction with API backend"
        ],
        stack: ["Python", "Gradio", "FastAPI", "Groq LLM", "SpeechRecognition", "ElevenLabs", "WebSockets"],
        link: "https://github.com/AdritPal08/AI-Medical-Chatbot-Vision-Voice-"
    },
    {
        title: "AI Data Assistant",
        outcome: "Chat with Excel/CSV data to generate insights, charts, and Excel reports.",
        problem: "Non-technical users struggle to analyze data quickly.",
        solution: "LLM chatbot that interprets questions, runs analysis, and produces visuals/reports.",
        features: [
            "Upload Excel/CSV and ask questions in natural language",
            "Auto-generate charts and summary insights",
            "Create Excel reports programmatically"
        ],
        stack: ["Python", "Streamlit", "LangChain", "Groq", "Pandas", "Matplotlib", "Plotly"],
        link: "https://github.com/AdritPal08/DataChat-AI"
    },
    {
        title: "Smart Web Scraper",
        outcome: "Prompt-based scraping that outputs clean tabular datasets ready to download.",
        problem: "Scraping typically requires custom code per website.",
        solution: "AI-assisted scraper that follows natural-language instructions and structures output.",
        features: [
            "Natural-language extraction instructions",
            "Outputs structured tables (export-friendly)",
            "Supports different LLM providers"
        ],
        stack: ["Python", "Streamlit", "Requests", "BeautifulSoup", "Selenium", "Pandas", "Pydantic"],
        link: "https://github.com/AdritPal08/Smart-Web-Scraper-2.0-using-Gen-AI"
    },
    {
        title: "AI Newsletter Generator",
        outcome: "Multi-agent pipeline to fetch, analyze, and summarize news into a newsletter.",
        problem: "Manual newsletter creation is time-consuming and inconsistent.",
        solution: "Multi-agent workflow that automates research + summarization + formatting.",
        features: [
            "Auto news retrieval + ranking",
            "Multi-agent summarization flow",
            "Generates reader-friendly newsletter output"
        ],
        stack: ["Python", "CrewAI", "LangChain", "Serper API", "python-docx"],
        link: "https://github.com/AdritPal08/AI-News-Letter-Generator-with-Crew-AI-Python-and-ChatGPT"
    },
    {
        title: "AI Travel Planner",
        outcome: "Personalized itineraries from natural language with research + budget + planning automation.",
        problem: "Trip planning requires many steps (research, budget, weather, itinerary).",
        solution: "Multi-agent planner that breaks tasks into research + planning + recommendations.",
        features: [
            "Generates itinerary from user preferences",
            "Automates destination research + recommendations",
            "Budget and schedule planning support"
        ],
        stack: ["Python", "CrewAI", "LangChain", "Streamlit", "Unstructured", "Requests"],
        link: "https://github.com/AdritPal08/TravelPlanner-CrewAI-Agents-Streamlit"
    }
];

export const dashboards = [
    {
        title: "Sales Report",
        platform: "Looker Studio",
        purpose: "Track sales performance and trends.",
        insights: ["Sales trends over time", "Performance breakdowns by key dimensions"],
        link: "https://lookerstudio.google.com/reporting/a5664ef0-5899-432f-8f20-b7641696340d"
    },
    {
        title: "Account Receivable Aging Report",
        platform: "Looker Studio",
        purpose: "Monitor receivables and overdue risk.",
        insights: ["Aging bucket distribution", "Overdue visibility for follow-ups"],
        link: "https://lookerstudio.google.com/reporting/e8a2d31c-5256-459a-a273-046e8bb69e7b"
    },
    {
        title: "Profit & Loss Dashboard",
        platform: "Looker Studio",
        purpose: "Profitability tracking and finance overview.",
        insights: ["Revenue vs cost trends", "High-level profitability view"],
        link: "https://lookerstudio.google.com/reporting/3e946ae1-d87e-4060-9682-33e76ead5d8c"
    },
    {
        title: "Cash Flow Analysis Dashboard",
        platform: "Looker Studio",
        purpose: "Cash movement tracking.",
        insights: ["Cash flow overview", "Cash position trend signals"],
        link: "https://lookerstudio.google.com/reporting/efebeae1-cf4a-44c5-8fd2-fe4e7fbe6d83"
    },
    {
        title: "HR Analytics Dashboard",
        platform: "Power BI",
        purpose: "HR reporting and workforce metrics.",
        insights: ["HR KPIs snapshot", "Trends across key HR measures"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiNjY2NmEzYTUtMDA5NS00NWE1LWJlYTItN2EwZTBiZWRjNGMwIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
    },
    {
        title: "Cryptocurrency, Stocks & ETFs Analysis",
        platform: "Power BI",
        purpose: "Market performance tracking.",
        insights: ["Price trend views", "Comparative performance"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiZmM1NzlkNmYtYmMxYS00NjdkLWExYjMtNTgzMjBhODFjMTNlIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
    },
    {
        title: "Personal Financial Dashboard",
        platform: "Power BI",
        purpose: "Personal finance tracking.",
        insights: ["Income/expense overview", "Trend summaries"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiMzk5MzE5MDYtNjdjYi00NzE3LTkyNWItZGU1M2YyZmE3NjFiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
    },
    {
        title: "Supply Chain Analysis Dashboard",
        platform: "Power BI",
        purpose: "Supply chain KPI visibility.",
        insights: ["Operational KPI snapshot", "Category / workflow performance summaries"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiMjEwYTY0YjItZWUyMS00MjFiLTg0ODYtMDFkZjZkNzZlZWJjIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&embedImagePlaceholder=true"
    },
    {
        title: "Export & Import Analysis Dashboard",
        platform: "Power BI",
        purpose: "Trade analysis overview.",
        insights: ["Export/import KPI trends", "Summary performance view"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiMDkxODRhMDktYWU1YS00NTE5LTlkZWEtOGJjNDQ1YjM3NjdkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&embedImagePlaceholder=true"
    }
];

export const languages = ["English", "Hindi", "Bengali"];
export const education = [
    {
        degree: "Bachelor of Technology in Computer Science & Engineering",
        school: "Techno India (Hooghly)",
        year: "2018 – 2022"
    },
    {
        degree: "Higher Secondary (Science)",
        school: "Serampore Union Institution",
        year: "2016 – 2018"
    }
];
