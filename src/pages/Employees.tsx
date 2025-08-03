import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Search, Filter, Download, Plus, Users, UserCheck, DollarSign, Award } from "lucide-react";

const employeesData = [
  {
    id: "EMP001",
    name: "Raj Kumar",
    role: "Driver",
    experience: 8,
    busAssigned: "MH-01-1234",
    salary: 25000,
    status: "Active",
    phone: "+91 9876543210",
    rating: 4.8,
    trips: 156
  },
  {
    id: "EMP002",
    name: "Suresh Yadav",
    role: "Cleaner",
    experience: 5,
    busAssigned: "MH-01-1234",
    salary: 15000,
    status: "Active",
    phone: "+91 9876543211",
    rating: 4.6,
    trips: 145
  },
  {
    id: "EMP003",
    name: "Amit Singh",
    role: "Driver",
    experience: 12,
    busAssigned: "MH-02-5678",
    salary: 28000,
    status: "Active",
    phone: "+91 9876543212",
    rating: 4.9,
    trips: 248
  },
  {
    id: "EMP004",
    name: "Ravi Sharma",
    role: "Cleaner",
    experience: 3,
    busAssigned: "MH-02-5678",
    salary: 14000,
    status: "Active",
    phone: "+91 9876543213",
    rating: 4.4,
    trips: 89
  },
  {
    id: "EMP005",
    name: "Manoj Tiwari",
    role: "Driver",
    experience: 6,
    busAssigned: "MH-03-9012",
    salary: 26000,
    status: "On Leave",
    phone: "+91 9876543214",
    rating: 4.7,
    trips: 134
  }
];

const departmentStats = [
  { role: "Drivers", count: 18, avgSalary: 26500 },
  { role: "Cleaners", count: 15, avgSalary: 14800 },
  { role: "Mechanics", count: 5, avgSalary: 22000 },
  { role: "Office Staff", count: 8, avgSalary: 18500 }
];

const employeeStatus = [
  { name: "Active", value: 42, color: "#22c55e" },
  { name: "On Leave", value: 3, color: "#f59e0b" },
  { name: "Inactive", value: 1, color: "#ef4444" }
];

const monthlyAttendance = [
  { month: "Jan", attendance: 94 },
  { month: "Feb", attendance: 96 },
  { month: "Mar", attendance: 92 },
  { month: "Apr", attendance: 95 },
  { month: "May", attendance: 93 },
  { month: "Jun", attendance: 97 }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Active":
      return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
    case "On Leave":
      return <Badge className="bg-warning/10 text-warning border-warning/20">On Leave</Badge>;
    case "Inactive":
      return <Badge className="bg-error/10 text-error border-error/20">Inactive</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getRatingStars = (rating: number) => {
  return "★".repeat(Math.floor(rating)) + (rating % 1 ? "☆" : "");
};

export default function Employees() {
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Employee Management</h2>
            <p className="text-muted-foreground">
              Manage drivers, cleaners, and support staff
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Employee
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">46</div>
              <p className="text-xs text-success">+2 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Staff</CardTitle>
              <UserCheck className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">42</div>
              <p className="text-xs text-muted-foreground">91.3% availability</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Payroll</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹9,85,000</div>
              <p className="text-xs text-muted-foreground">All departments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7</div>
              <p className="text-xs text-success">★★★★★ Excellent</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Department Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={departmentStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="role" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    name === "count" ? value : `₹${value?.toLocaleString()}`,
                    name === "count" ? "Employees" : "Avg Salary"
                  ]} />
                  <Bar dataKey="count" fill="hsl(var(--primary))" name="count" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Employee Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={employeeStatus}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {employeeStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Attendance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Attendance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyAttendance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[80, 100]} />
                <Tooltip formatter={(value) => [`${value}%`, "Attendance"]} />
                <Bar dataKey="attendance" fill="hsl(var(--secondary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Employees Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Employee Directory</CardTitle>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search employees..." className="pl-8 w-64" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name & Contact</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Bus Assigned</TableHead>
                  <TableHead>Salary</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employeesData.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-medium">{employee.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-sm text-muted-foreground">{employee.phone}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={employee.role === "Driver" ? "default" : "secondary"}>
                        {employee.role}
                      </Badge>
                    </TableCell>
                    <TableCell>{employee.experience} years</TableCell>
                    <TableCell className="text-sm">{employee.busAssigned}</TableCell>
                    <TableCell>₹{employee.salary.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium">{employee.rating}</span>
                        <span className="text-yellow-500">{getRatingStars(employee.rating)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{employee.trips} trips</p>
                    </TableCell>
                    <TableCell>{getStatusBadge(employee.status)}</TableCell>
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