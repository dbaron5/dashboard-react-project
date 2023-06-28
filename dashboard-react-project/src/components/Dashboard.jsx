import Stats from "./Stats/Stats";
import comments from "../assets/icon/comments.png";
import daily_views from "../assets/icon/daily_views.png";
import earning from "../assets/icon/earning.png";
import sales from "../assets/icon/sales.png";

const Dashboard = () => {
  const stats = [
    { name: "Daily Views", icon: daily_views, StatValue: 1504 },
    { name: "Sales", icon: sales, StatValue: 80 },
    { name: "Comments", icon: comments, StatValue: 284 },
    { name: "Earning", icon: earning, StatValue: 7842 },
  ];
  return (
    <>
      <div className="flex justify-center">
        <div>
          <input type="text" placeholder="Search..." /> {/* Search bar */}
        </div>
        <div>
          <img src="avi.jpg" alt="Avatar" /> {/* Image */}
        </div>
      </div>
      <div className="flex justify-center space-x-7 pl-5 pr-5 pt-5">
        {stats.map((stat) => (
          <Stats key={stat.name} stat={stat} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
