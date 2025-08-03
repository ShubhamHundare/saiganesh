import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { Search, Filter, Download, TrendingUp, TrendingDown, IndianRupee, FileText } from "lucide-react";

const monthlyFinancials = [
  { month: "Jan", revenue: 485000, expenses: 285000, profit: 200000 },
  { month: "Feb", revenue: 520000, expenses: 310000, profit: 210000 },
  { month: "Mar", revenue: 645000, expenses: 385000, profit: 260000 },
  { month: "Apr", revenue: 590000, expenses: 355000, profit: 235000 },
  { month: "May", revenue: 720000, expenses: 425000, profit: 295000 },
  { month: "Jun", revenue: 685000, expenses: 405000, profit: 280000 }
];

const expenseCategories = [
  { category: "Fuel", amount: 180000, percentage: 28.5, color: "#8884d8" },
  { category: "Salaries", amount: 280000, percentage: 44.3, color: "#82ca9d" },
  { category: "Maintenance", amount: 95000, percentage: 15.0, color: "#ffc658" },
  { category: "Insurance", amount: 45000, percentage: 7.1, color: "#ff7300" },
  { category: "Others", amount: 32000, percentage: 5.1, color: "#0088fe" }
];

const revenueByPackage = [
  { package: "Char Dham", revenue: 675000, margin: 28.5 },
  { package: "Golden Triangle", revenue: 570000, margin: 32.1 },
  { package: "South India", revenue: 480000, margin: 26.8 },
  { package: "Rajasthan", revenue: 420000, margin: 29.3 },
  { package: "Kerala", revenue: 375000, margin: 31.2 }
];

const cashFlow = [
  { month: "Jan", inflow: 485000, outflow: 285000, net: 200000 },
  { month: "Feb", inflow: 520000, outflow: 310000, net: 210000 },
  { month: "Mar", inflow: 645000, outflow: 385000, net: 260000 },
  { month: "Apr", inflow: 590000, outflow: 355000, net: 235000 },
  { month: "May", inflow: 720000, outflow: 425000, net: 295000 },
  { month: "Jun", inflow: 685000, outflow: 405000, net: 280000 }
];

const recentTransactions = [
  { id: "TXN001", type: "Revenue", description: "Char Dham booking payment", amount: 45000, date: "2024-01-28", status: "Completed" },
  { id: "TXN002", type: "Expense", description: "Fuel purchase - MH-01-1234", amount: -12500, date: "2024-01-28", status: "Completed" },
  { id: "TXN003", type: "Revenue", description: "Kerala package booking", amount: 38500, date: "2024-01-27", status: "Pending" },
  { id: "TXN004", type: "Expense", description: "Driver salary - Raj Kumar", amount: -25000, date: "2024-01-26", status: "Completed" },
  { id: "TXN005", type: "Expense", description: "Bus maintenance - MH-02-5678", amount: -18500, date: "2024-01-25", status: "Completed" }
];

const getTransactionBadge = (type: string) => {
  return type === "Revenue" 
    ? <Badge className="bg-success/10 text-success border-success/20">Revenue</Badge>
    : <Badge className="bg-error/10 text-error border-error/20">Expense</Badge>;
};

const getStatusBadge = (status: string) => {
  return status === "Completed"
    ? <Badge className="bg-info/10 text-info border-info/20">Completed</Badge>
    : <Badge className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
};

export default function Financial() {
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Financial Reports</h2>
            <p className="text-muted-foreground">
              Comprehensive financial analysis and reporting
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>

        {/* Key Financial Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
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
              <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹24,35,000</div>
              <p className="text-xs text-warning flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">₹12,10,000</div>
              <p className="text-xs text-success flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +18.7% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">33.2%</div>
              <p className="text-xs text-success flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +2.8% improvement
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Revenue vs Profit Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue, Expenses & Profit Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={monthlyFinancials}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `₹${value?.toLocaleString()}`} />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
                <Area type="monotone" dataKey="expenses" stackId="2" stroke="hsl(var(--error))" fill="hsl(var(--error))" fillOpacity={0.6} />
                <Area type="monotone" dataKey="profit" stackId="3" stroke="hsl(var(--success))" fill="hsl(var(--success))" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Charts Row */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Expense Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={expenseCategories}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ category, percentage }) => `${category} ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="amount"
                  >
                    {expenseCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `₹${value?.toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Revenue by Package */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue by Package</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueByPackage}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="package" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    name === "margin" ? `${value}%` : `₹${value?.toLocaleString()}`,
                    name === "margin" ? "Profit Margin" : "Revenue"
                  ]} />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Cash Flow Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Cash Flow Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cashFlow}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `₹${value?.toLocaleString()}`} />
                <Line type="monotone" dataKey="inflow" stroke="hsl(var(--success))" strokeWidth={2} name="Cash Inflow" />
                <Line type="monotone" dataKey="outflow" stroke="hsl(var(--error))" strokeWidth={2} name="Cash Outflow" />
                <Line type="monotone" dataKey="net" stroke="hsl(var(--primary))" strokeWidth={3} name="Net Cash Flow" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Transactions</CardTitle>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search transactions..." className="pl-8 w-64" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.id}</TableCell>
                    <TableCell>{getTransactionBadge(transaction.type)}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell className={transaction.amount > 0 ? "text-success" : "text-error"}>
                      ₹{Math.abs(transaction.amount).toLocaleString()}
                    </TableCell>
                    <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                    <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}