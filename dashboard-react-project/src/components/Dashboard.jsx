import Stats from "./Stats";
import TaskTable from "./TaskTable";
import UserTable from "./UserTable";
import comments from "../assets/icon/comments.png";
import daily_views from "../assets/icon/daily_views.png";
import earning from "../assets/icon/earning.png";
import sales from "../assets/icon/sales.png";
import image0copy from "../assets/icon/image0copy.png";

const Dashboard = () => {
  const stats = [
    { name: "Daily Views", icon: daily_views, StatValue: "1,504" },
    { name: "Sales", icon: sales, StatValue: "80" },
    { name: "Comments", icon: comments, StatValue: "284" },
    { name: "Earning", icon: earning, StatValue: "7,842" },
  ];

  const users = [
    {
      id: 1,
      name: "John Doe",
      title: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "UX Designer",
    },
    {
      id: 3,
      name: "Michael Johnson",
      title: "Quality Assurance Analyst",
    },
    {
      id: 4,
      name: "Sarah Williams",
      title: "Technical Writer",
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "Code review for new feature",
      state: "In Progress",
      description:
        "Perform a comprehensive code review for a new feature implementation in the Google application.",
      assignee: 1,
    },
    {
      id: 2,
      title: "Bug triaging",
      state: "Pending",
      description:
        "Review and prioritize reported bugs in the Google search engine for further investigation and resolution.",
      assignee: 3,
    },
    {
      id: 3,
      title: "Documentation update",
      state: "Completed",
      description:
        "Update the developer documentation for Google Cloud Platform's new API functionalities and provide accurate information for developers.",
      assignee: 4,
    },
    {
      id: 4,
      title: "UI design review",
      state: "In Progress",
      description:
        "Collaborate with the design team to review and provide feedback on the user interface design of an upcoming Google product.",
      assignee: 2,
    },
    {
      id: 5,
      title: "Data analysis for ad campaign",
      state: "Pending",
      description:
        "Analyze user engagement data and metrics to measure the effectiveness of a Google Ads campaign and make data-driven recommendations for optimization.",
      assignee: 1,
    },
    {
      id: 6,
      title: "Security audit",
      state: "Completed",
      description:
        "Conduct a comprehensive security audit of Google's internal systems to identify vulnerabilities and propose necessary security measures.",
      assignee: 3,
    },
    {
      id: 7,
      title: "Performance optimization",
      state: "In Progress",
      description:
        "Identify and optimize performance bottlenecks in the Google Chrome browser to improve overall speed and user experience.",
      assignee: 1,
    },
    {
      id: 8,
      title: "Feature brainstorming session",
      state: "Scheduled",
      description:
        "Participate in a brainstorming session to generate innovative ideas for new features and enhancements in Google Workspace applications.",
      assignee: 2,
    },
    {
      id: 9,
      title: "Customer support escalation",
      state: "In Progress",
      description:
        "Investigate and resolve escalated customer support issues related to Google Cloud Platform services, ensuring customer satisfaction.",
      assignee: 4,
    },
    {
      id: 10,
      title: "API integration testing",
      state: "Pending",
      description:
        "Perform integration testing for a newly developed API to ensure seamless integration with external systems and platforms.",
      assignee: 1,
    },
    {
      id: 11,
      title: "Training session preparation",
      state: "In Progress",
      description:
        "Prepare training materials and presentations for an upcoming internal training session on Google Ads best practices.",
      assignee: 4,
    },
    {
      id: 12,
      title: "Competitive analysis",
      state: "Completed",
      description:
        "Conduct a competitive analysis of rival products and services in the market, gathering insights for Google's strategic planning and product differentiation.",
      assignee: 3,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center pl-96">
          <input
            type="text"
            placeholder="Search..."
            className="border-gray-400 border rounded-3xl px-3 py-1 text-gray-500 leading-tight"
            style={{ width: "200px" }}
          />
        </div>
        <div>
          <img
            src={image0copy}
            alt="Avatar"
            className="h-8 w-8 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center space-x-7 pl-5 pr-5 pt-2">
        {stats.map((stat) => (
          <Stats key={stat.name} stat={stat} />
        ))}
      </div>
      <div className="p-10 h-4/5 justify-evenly flex">
        <div>
          <TaskTable key={tasks.title} tasks={tasks} />
        </div>
        <div>
          {users.map((user) => (
            <UserTable key={user.title} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
