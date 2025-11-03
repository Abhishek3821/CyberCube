import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";
import { useInView } from "react-intersection-observer";

const Home_2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeUp = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
  };

  const ArrowRightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );

  const ActivityLineChart = () => {
    const data = [
      { name: "Jan", activity: 30 },
      { name: "Feb", activity: 45 },
      { name: "Mar", activity: 40 },
      { name: "Apr", activity: 60 },
      { name: "May", activity: 55 },
      { name: "Jun", activity: 75 },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: -20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis
            dataKey="name"
            stroke="#94a3b8"
            fontSize={14}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#94a3b8"
            fontSize={14}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(30, 41, 59, 0.9)",
              borderColor: "#334155",
              borderRadius: "0.5rem",
              padding: "8px 12px",
              fontSize: "14px",
              color: "#e0e7ff",
            }}
          />
          <Line
            type="monotone"
            dataKey="activity"
            stroke="#0ea5e9"
            strokeWidth={3}
            dot={{ r: 5, fill: "#38bdf8", stroke: "#0284c7", strokeWidth: 1.5 }}
            activeDot={{ r: 7, strokeWidth: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  const ThreatLevelGauge = () => {
    const threatData = [
      { name: "Low", value: 20 },
      { name: "Medium", value: 30 },
      { name: "High", value: 40 },
      { name: "Critical", value: 10 },
    ];
    const colors = ["#22c55e", "#facc15", "#f97316", "#ef4444"];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={threatData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {threatData.map((_, i) => (
              <Cell key={i} fill={colors[i]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  };

  const VulnerabilityBarChart = () => {
    const data = [
      { name: "Network", count: 12 },
      { name: "App", count: 21 },
      { name: "DB", count: 8 },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 5, left: -20, bottom: 10 }}
        >
          <XAxis
            dataKey="name"
            stroke="#94a3b8"
            fontSize={14}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#94a3b8"
            fontSize={14}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(30, 41, 59, 0.9)",
              borderColor: "#334155",
              borderRadius: "0.5rem",
              padding: "8px 12px",
              fontSize: "14px",
              color: "#e0e7ff",
            }}
          />
          <Bar
            dataKey="count"
            fill="#818cf8"
            radius={[6, 6, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  const RiskTrendAreaChart = () => {
    const data = [
      { name: "Q1", risk: 2.1 },
      { name: "Q2", risk: 3.5 },
      { name: "Q3", risk: 2.8 },
      { name: "Q4", risk: 4.2 },
      { name: "Q1", risk: 3.9 },
      { name: "Q2", risk: 5.1 },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 20, left: -20, bottom: 10 }}
        >
          <defs>
            <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis
            dataKey="name"
            stroke="#94a3b8"
            fontSize={14}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#94a3b8"
            fontSize={14}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(30, 41, 59, 0.9)",
              borderColor: "#334155",
              borderRadius: "0.5rem",
              padding: "8px 12px",
              fontSize: "14px",
              color: "#e0e7ff",
            }}
          />
          <Area
            type="monotone"
            dataKey="risk"
            stroke="#a78bfa"
            strokeWidth={3}
            fill="url(#colorRisk)"
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  };

  const ChartCard = ({ title, children }) => (
    <div
      className="bg-gradient-to-tr from-slate-800/80 to-slate-900/80 border border-slate-700 rounded-2xl p-6 shadow-2xl shadow-cyan-600/40 hover:shadow-cyan-500/60 transition-all duration-500 relative overflow-hidden"
      style={{
        ...fadeUp,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <h3 className="text-sm font-semibold text-cyan-400 mb-3 tracking-wide">
        {title}
      </h3>
      <div className="h-48">{children}</div>
    </div>
  );

  return (
    <div
      ref={ref}
      className="min-h-screen  text-gray-100 flex items-center justify-center px-6 py-12 sm:py-20"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div style={fadeUp} className="space-y-6 px-2 sm:px-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight tracking-tighter">
              Delivering the world's leading cyber risk analytics
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-md">
              Powered by AI and guided by our experts to keep you ahead in
              cybersecurity.
            </p>
            <button
              className="mt-8 inline-flex items-center gap-3 px-10 py-4 bg-cyan-600 rounded-xl shadow-lg shadow-cyan-500/50 hover:bg-cyan-500 focus:ring-4 focus:ring-cyan-400 transition"
              aria-label="View Products"
            >
              VIEW PRODUCTS <ArrowRightIcon />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <ChartCard title="Activity Monitor">
              <ActivityLineChart />
            </ChartCard>
            <ChartCard title="Threat Level">
              <ThreatLevelGauge />
            </ChartCard>
            <ChartCard title="Vulnerabilities">
              <VulnerabilityBarChart />
            </ChartCard>
            <ChartCard title="Risk Trend">
              <RiskTrendAreaChart />
            </ChartCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_2;
