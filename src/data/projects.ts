export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  longDescription?: string;
  features?: string[];
  challenges?: string[];
}

export const projects: Project[] = [
  {
    id: 'employee-management',
    title: "Employee Management System",
    description: "A modern employee management system built with React, featuring dynamic data handling, responsive design, and comprehensive CRUD operations for employee records.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    technologies: [
      "React",
      "JSON Server",
      "HTML5",
      "CSS3",
      "JavaScript",
      "React Router",
      "Axios",
      "Jest"
    ],
    githubUrl: "https://github.com/AbuJrVandi/Employee_System.git",
    longDescription: "A comprehensive employee management system that demonstrates modern React development practices. The application features a clean, responsive interface for managing employee records with full CRUD functionality. Built using React components and hooks for state management, the system pulls data dynamically from a JSON file server, making it easily maintainable and scalable.",
    features: [
      "Dynamic employee data table with sorting and filtering",
      "Complete CRUD operations for employee records",
      "Modular React component architecture",
      "Responsive design for all device sizes",
      "Form validation and error handling",
      "JSON server integration for data persistence",
      "Performance optimization with React hooks",
      "Unit testing setup with Jest"
    ],
    challenges: [
      "Implementing efficient state management across components",
      "Creating a responsive and intuitive user interface",
      "Setting up proper routing and navigation flow",
      "Handling asynchronous operations with the JSON server",
      "Maintaining clean code structure and component reusability"
    ]
  },
  {
    id: 'ami-data-analysis',
    title: "Advanced Metering Infrastructure (AMI) Data Analysis",
    description: "A comprehensive data analysis project focusing on smart grid infrastructure data, employing machine learning and GIS techniques for energy consumption insights.",
    image: "https://i.ytimg.com/vi/Lby1sDHpXKo/maxresdefault.jpg",
    technologies: [
      "Python",
      "MySQL",
      "Pandas & NumPy",
      "Matplotlib & Seaborn",
      "Scikit-learn & XGBoost",
      "GeoPandas & Folium"
    ],
    githubUrl: "https://github.com/AbuJrVandi/Advanced-Metering-Infrastructure-AMI-Data-.git",
    longDescription: "This project focuses on analyzing Advanced Metering Infrastructure (AMI) data within a simulated smart grid environment. It applies sophisticated data preprocessing, exploratory data analysis (EDA), machine learning, and GIS techniques to extract valuable insights on energy consumption patterns, detect anomalies, and forecast demand. The analysis includes handling missing values, removing duplicates, data normalization, outlier detection, and implementing various machine learning models for clustering and forecasting.",
    features: [
      "Advanced data preprocessing with multiple techniques",
      "Anomaly detection using statistical and ML approaches",
      "Customer segmentation through K-Means clustering",
      "Load forecasting using LightGBM and ARIMA models",
      "GIS analysis for spatial visualization",
      "Comprehensive billing analysis and validation",
      "Real-time data processing capabilities",
      "Interactive visualization dashboards"
    ],
    challenges: [
      "Handling large-scale AMI data efficiently",
      "Implementing robust anomaly detection algorithms",
      "Optimizing machine learning models for accuracy",
      "Integrating multiple data sources and formats",
      "Creating scalable data preprocessing pipelines"
    ]
  },
  {
    id: 'online-banking',
    title: "Online Banking Application",
    description: "A secure and user-friendly online banking system built with Python, implementing robust financial transaction handling and account management features.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=500&h=300&fit=crop",
    technologies: ["Python", "Object-Oriented Programming", "VS Code", "Math Library", "Git"],
    githubUrl: "https://github.com/AbuJrVandi/Online-Banking-Application.git",
    longDescription: "A comprehensive online banking system that prioritizes security and user experience. Built using Object-Oriented Programming principles in Python, this application provides a robust platform for personal banking needs. The system implements secure user authentication, real-time transaction processing, and advanced financial calculations, demonstrating strong software architecture and secure coding practices.",
    features: [
      "Secure user registration and PIN authentication",
      "Real-time transaction processing (deposits, withdrawals, transfers)",
      "Balance inquiries and account monitoring",
      "Interest calculations (deposit and compound interest)",
      "Secure session management and logout",
      "Modular and maintainable OOP architecture",
      "Robust error handling and data validation",
      "User-friendly command-line interface"
    ],
    challenges: [
      "Implementing secure user authentication system",
      "Ensuring data consistency during transactions",
      "Designing efficient interest calculation algorithms",
      "Building robust error handling mechanisms",
      "Creating a modular and maintainable architecture"
    ]
  },
  {
    id: 'machine-learning-portfolio',
    title: "Machine Learning Classification Projects",
    description: "A comprehensive collection of machine learning projects implementing Logistic Regression and Random Forest models for classification tasks, featuring detailed analysis and visualization.",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=500&h=300&fit=crop",
    technologies: [
      "Python",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "GridSearchCV",
      "joblib"
    ],
    githubUrl: "https://github.com/AbuJrVandi/Machine-Learning-Algorithm.git",
    longDescription: "A collection of two comprehensive machine learning workflows focusing on classification tasks. The first project implements a systematic approach to Logistic Regression, while the second project compares Random Forest and Decision Tree models for Iris dataset classification. Both implementations include thorough data preprocessing, model training, hyperparameter optimization, and detailed performance evaluation with various metrics and visualizations.",
    features: [
      "Comprehensive data preprocessing and exploration pipeline",
      "Advanced model training with GridSearchCV optimization",
      "Detailed model evaluation using multiple metrics",
      "Interactive data visualizations (ROC curves, confusion matrices)",
      "Model persistence for deployment readiness",
      "Cross-validation and learning curve analysis",
      "Feature importance visualization",
      "Automated logging system for model training"
    ],
    challenges: [
      "Implementing robust data preprocessing pipelines",
      "Optimizing model hyperparameters for best performance",
      "Creating comprehensive visualization suite for model evaluation",
      "Handling model persistence and deployment preparation",
      "Developing systematic logging and error handling"
    ]
  }
];
