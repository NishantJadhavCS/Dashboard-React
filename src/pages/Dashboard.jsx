import React from "react";
import StatsCard from "../components/StatesCard";
import MonthlySales from "../components/MonthlySalesBarChart";
import MonthlyTargetCard from "../components/MonthlyTargetCard";
import StatisticsChart from "../components/StatisticsChart";
import RecentOrder from "../components/RecentOrders";
import CustomersDemographic from "../components/CustomersDemographic";
export default function Dashboard() {
    return (
        <div className="p-1">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            {/* Main 2-column layout */}
            <div className="grid grid-cols-12 gap-4">

                {/* LEFT SIDE (65%) */}
                <div className="col-span-8 flex flex-col gap-4 h-full">
                    <div className="w-full flex gap-4">
                        <StatsCard
                            icon={<i className="text-xl">👥</i>}
                            title="Customers"
                            value="3,782"
                            percentage="11.01%"
                            isPositive={true}
                        />
                        <StatsCard
                            icon={<i className="text-xl">📦</i>}
                            title="Orders"
                            value="5,359"
                            percentage="9.05%"
                            isPositive={false}
                        />
                    </div>

                    <MonthlySales />
                </div>

                {/* RIGHT SIDE (35%) - FULL HEIGHT */}
                <div className="col-span-4 h-full flex">
                    <MonthlyTargetCard className="w-full h-full" />
                </div>

            </div>

            <div className="my-4">
                <StatisticsChart />
            </div>
            <div className="flex gap-4 w-full">
                {/* 40% width */}
                <div className="w-[40%]">
                    <CustomersDemographic />
                </div>

                {/* 60% width */}
                <div className="w-[60%]">
                    <RecentOrder />
                </div>
            </div>

        </div>
    );
}
