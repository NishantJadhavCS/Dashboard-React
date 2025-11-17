import React from "react";
import StatsCard from "./StatesCard";
import MonthlyTargetCard from "./MonthlyTargetCard";
import StatisticsChart from "./StatisticsChart";
import MonthlySalesBarChart from "./MonthlySalesBarChart";
import RecentOrdersTable from "./RecentOrdersTable";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">

      {/* 🔹 Top section — Stats Cards + Monthly Target */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="New Customers"
          value="3,782"
          percentage="11.01%"
          isPositive={true}
        />

        <StatsCard
          title="Churn Rate"
          value="1,245"
          percentage="9.05%"
          isPositive={false}
        />

        {/* Stretch MonthlyTargetCard across 2 columns on large screens */}
        <div className="md:col-span-2">
          <MonthlyTargetCard />
        </div>
      </div>

      {/* 🔹 Monthly sales graph (full width) */}
      <div>
        <MonthlySalesBarChart />
      </div>

      {/* 🔹 Statistics Chart (full width) */}
      <div>
        <StatisticsChart />
      </div>

      {/* 🔹 Recent Orders Table (full width) */}
      <div>
        <RecentOrdersTable />
      </div>
    </div>
  );
};

export default Dashboard;
