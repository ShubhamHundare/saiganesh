import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { IndianRupee, TrendingUp, Calendar, Users, Car, AlertTriangle } from "lucide-react";

const monthlyRevenue = [
  { month: "Jan", revenue: 485000, bookings: 28 },
  { month: "Feb", revenue: 520000, bookings: 32 },
  { month: "Mar", revenue: 645000, bookings: 41 },
  { month: "Apr", revenue: 590000, bookings: 35 },
  { month: "May", revenue: 720000, bookings: 48 },
  { month: "Jun", revenue: 685000, bookings: 42 }
];

const topPackages = [
  { name: "Char Dham Yatra", bookings: 45, revenue: 675000 },
  { name: "Golden Triangle", bookings: 38, revenue: 570000 },
  { name: "South India Temple Tour", bookings: 32, revenue: 480000 },
  { name: "Rajasthan Heritage", bookings: 28, revenue: 420000 },
  { name: "Kerala Backwaters", bookings: 25, revenue: 375000 }
];

const expenseBreakdown = [
  { name: "Fuel", value: 180000, color: "#8884d8" },
  { name: "Salaries", value: 280000, color: "#82ca9d" },
  { name: "Maintenance", value: 95000, color: "#ffc658" },
  { name: "Insurance", value: 45000, color: "#ff7300" },
  { name: "Others", value: 35000, color: "#0088fe" }
];

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
          <p className="text-muted-foreground">
            Welcome to TourTrack Pro - Your business analytics at a glance
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <IndianRupee className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹36,45,000</div>
              <p className="text-xs text-success flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Trips</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">186</div>
              <p className="text-xs text-success flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">226</div>
              <p className="text-xs text-success flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15.3% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">₹12,10,000</div>
              <p className="text-xs text-success flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +18.7% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Monthly Revenue Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`₹${value?.toLocaleString()}`, "Revenue"]} />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Performing Packages */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Packages</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topPackages}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    name === "bookings" ? value : `₹${value?.toLocaleString()}`,
                    name === "bookings" ? "Bookings" : "Revenue"
                  ]} />
                  <Bar dataKey="bookings" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Expense Breakdown */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={expenseBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {expenseBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `₹${value?.toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New booking for Char Dham Yatra</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                  <div className="text-sm text-success">₹45,000</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Bus MH-01-1234 needs maintenance</p>
                    <p className="text-xs text-muted-foreground">4 hours ago</p>
                  </div>
                  <AlertTriangle className="w-4 h-4 text-warning" />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-info rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Trip to Kerala completed successfully</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                  <div className="text-sm text-success">₹38,500</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New driver Raj Kumar joined</p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                  <Users className="w-4 h-4 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}