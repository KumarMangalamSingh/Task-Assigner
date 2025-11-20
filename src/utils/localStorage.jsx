const employees = [
  {
    Id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare Weekly Report",
        taskDescription: "Compile sales and performance metrics.",
        taskDate: "2025-11-10",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Client Sync Call",
        taskDescription: "Discuss project roadmap with client ABC.",
        taskDate: "2025-11-12",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Database Backup",
        taskDescription: "Perform a complete backup of customer DB.",
        taskDate: "2025-11-09",
        category: "IT Ops",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Email Follow-Up",
        taskDescription: "Send follow-up emails to new leads.",
        taskDate: "2025-11-13",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update KPI Dashboard",
        taskDescription: "Refresh dashboards with updated values.",
        taskDate: "2025-11-11",
        category: "Analytics",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    Id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Resolve Login Bug",
        taskDescription: "Fix user login issue in production.",
        taskDate: "2025-11-08",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Review PRs",
        taskDescription: "Review frontend pull requests.",
        taskDate: "2025-11-14",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Training Session",
        taskDescription: "Conduct Git workflow training.",
        taskDate: "2025-11-10",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Write Unit Tests",
        taskDescription: "Add test coverage for user service.",
        taskDate: "2025-11-13",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Query Optimization",
        taskDescription: "Optimize SQL queries for speed.",
        taskDate: "2025-11-09",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    Id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Create UI Mockups",
        taskDescription: "Design mockups for new feature.",
        taskDate: "2025-11-07",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Styling Issues",
        taskDescription: "Resolve CSS bugs on dashboard.",
        taskDate: "2025-11-08",
        category: "UI Fixes",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Deploy to Staging",
        taskDescription: "Deploy version 1.2 to staging server.",
        taskDate: "2025-11-12",
        category: "Deployment",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Write API Docs",
        taskDescription: "Document backend API endpoints.",
        taskDate: "2025-11-11",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Conduct QA Feedback Session",
        taskDescription: "Collect system feedback from QA team.",
        taskDate: "2025-11-15",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    Id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Monitor Servers",
        taskDescription: "Check server uptime and performance.",
        taskDate: "2025-11-10",
        category: "Monitoring",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Clean Old Logs",
        taskDescription: "Delete unnecessary log files.",
        taskDate: "2025-11-08",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Apply Security Patch",
        taskDescription: "Install latest security updates.",
        taskDate: "2025-11-09",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "System Vulnerability Audit",
        taskDescription: "Scan systems for vulnerabilities.",
        taskDate: "2025-11-13",
        category: "Audit",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Set Up Error Tracking",
        taskDescription: "Integrate Sentry for monitoring errors.",
        taskDate: "2025-11-11",
        category: "Monitoring",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    Id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Research Tools",
        taskDescription: "Explore analytics tools for business.",
        taskDate: "2025-11-09",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Competitor Analysis",
        taskDescription: "Prepare competitor insights report.",
        taskDate: "2025-11-10",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Draft Content Plan",
        taskDescription: "Create Q4 content strategy.",
        taskDate: "2025-11-12",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "SEO Audit",
        taskDescription: "Analyze SEO performance of website.",
        taskDate: "2025-11-08",
        category: "SEO",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Launch Ad Campaign",
        taskDescription: "Deploy new Google Ads campaign.",
        taskDate: "2025-11-14",
        category: "Ads",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const Admin = [
  {
    admin: {
      Id: 0,
      email: "admin@example.com",
      password: "123"
    }
  }
];

  
  export const setLocalStorage=()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(Admin))

  }

  export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    
    
  }