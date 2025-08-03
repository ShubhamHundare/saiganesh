import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Search, Filter, Download, Plus, Fuel, Wrench, AlertTriangle, Calendar } from "lucide-react";

const fuelData = [
  {
    id: "FL001",
    busNumber: "MH-01-1234",
    date: "2024-01-28",
    fuelType: "Diesel",
    quantity: 85,
    cost: 7650,
    mileage: 12.5,
    station: "HP Petrol Pump"
  },
  {
    id: "FL002",
    busNumber: "MH-02-5678",
    date: "2024-01-27",
    fuelType: "Diesel",
    quantity: 72,
    cost: 6480,
    mileage: 13.2,
    station: "Indian Oil"
  },
  {
    id: "FL003",
    busNumber: "MH-03-9012",
    date: "2024-01-26",
    fuelType: "Diesel",
    quantity: 68,
    cost: 6120,
    mileage: 14.1,
    station: "Bharat Petroleum"
  }
];

const maintenanceData = [
  {
    id: "MT001",
    busNumber: "MH-01-1234",
    type: "Regular Service",
    date: "2024-01-25",
    cost: 8500,
    description: "Oil change, brake check, general inspection",
    nextDue: "2024-04-25",
    status: "Completed"
  },
  {
    id: "MT002",
    busNumber: "MH-02-5678",
    type: "Repair",
    date: "2024-01-20",
    cost: 15000,
    description: "Engine repair and coolant replacement",
    nextDue: "2024-04-20",
    status: "Completed"
  },
  {
    id: "MT003",
    busNumber: "MH-04-3456",
    type: "Emergency",
    date: "2024-01-22",
    cost: 12500,
    description: "Tire replacement and wheel alignment",
    nextDue: "2024-04-22",
    status: "In Progress"
  }
];

const fuelConsumption = [
  { month: "Jan", consumption: 2580, cost: 232200 },
  { month: "Feb", consumption: 2750, cost: 247500 },
  { month: "Mar", consumption: 2920, cost: 262800 },
  { month: "Apr", consumption: 2680, cost: 241200 },
  { month: "May", consumption: 3120, cost: 280800 },
  { month: "Jun", consumption: 2980, cost: 268200 }
];

const maintenanceCosts = [
  { month: "Jan", planned: 45000, emergency: 25000 },
  { month: "Feb", planned: 52000, emergency: 18000 },
  { month: "Mar", planned: 48000, emergency: 32000 },
  { month: "Apr", planned: 55000, emergency: 22000 },
  { month: "May", planned: 42000, emergency: 28000 },
  { month: "Jun", planned: 58000, emergency: 15000 }
];

const upcomingMaintenance = [
  { busNumber: "MH-01-1234", type: "Regular Service", dueDate: "2024-02-15", daysLeft: 18 },
  { busNumber: "MH-03-9012", type: "Regular Service", dueDate: "2024-02-20", daysLeft: 23 },
  { busNumber: "MH-05-7890", type: "Inspection", dueDate: "2024-02-10", daysLeft: 13 },
  { busNumber: "MH-02-5678", type: "Tire Check", dueDate: "2024-02-25", daysLeft: 28 }
];

const getMaintenanceTypeBadge = (type: string) => {
  switch (type) {
    case "Regular Service":
      return <Badge className="bg-info/10 text-info border-info/20">Regular</Badge>;
    case "Repair":
      return <Badge className="bg-warning/10 text-warning border-warning/20">Repair</Badge>;
    case "Emergency":
      return <Badge className="bg-error/10 text-error border-error/20">Emergency</Badge>;
    case "Inspection":
      return <Badge className="bg-primary/10 text-primary border-primary/20">Inspection</Badge>;
    default:
      return <Badge variant="secondary">{type}</Badge>;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed":
      return <Badge className="bg-success/10 text-success border-success/20">Completed</Badge>;
    case "In Progress":
      return <Badge className="bg-warning/10 text-warning border-warning/20">In Progress</Badge>;
    case "Pending":
      return <Badge className="bg-muted text-muted-foreground">Pending</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getDaysLeftColor = (days: number) => {
  if (days <= 7) return "text-error";
  if (days <= 14) return "text-warning";
  return "text-success";
};

export default function FuelMaintenance() {
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Fuel & Maintenance</h2>
            <p className="text-muted-foreground">
              Track fuel consumption and maintenance schedules
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Fuel Log
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Schedule Maintenance
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Fuel Cost</CardTitle>
              <Fuel className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2,68,200</div>
              <p className="text-xs text-warning">+8.5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Fuel Efficiency</CardTitle>
              <Fuel className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">13.2 km/l</div>
              <p className="text-xs text-success">+0.8 km/l improvement</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Maintenance Cost</CardTitle>
              <Wrench className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹73,000</div>
              <p className="text-xs text-error">+12.3% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Due Maintenance</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">4</div>
              <p className="text-xs text-muted-foreground">Next 30 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Fuel Consumption Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={fuelConsumption}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    name === "consumption" ? `${value} L` : `₹${value?.toLocaleString()}`,
                    name === "consumption" ? "Consumption" : "Cost"
                  ]} />
                  <Line type="monotone" dataKey="consumption" stroke="hsl(var(--primary))" strokeWidth={2} />
                  <Line type="monotone" dataKey="cost" stroke="hsl(var(--secondary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Maintenance Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={maintenanceCosts}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `₹${value?.toLocaleString()}`} />
                  <Bar dataKey="planned" fill="hsl(var(--primary))" name="Planned" />
                  <Bar dataKey="emergency" fill="hsl(var(--error))" name="Emergency" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Maintenance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-warning" />
              Upcoming Maintenance Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {upcomingMaintenance.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{item.busNumber}</h4>
                    {getMaintenanceTypeBadge(item.type)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Due: {new Date(item.dueDate).toLocaleDateString()}</p>
                  <p className={`text-sm font-medium ${getDaysLeftColor(item.daysLeft)}`}>
                    {item.daysLeft} days left
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fuel Logs Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Fuel Logs</CardTitle>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search fuel logs..." className="pl-8 w-64" />
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
                  <TableHead>Log ID</TableHead>
                  <TableHead>Bus Number</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Fuel Type</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Mileage</TableHead>
                  <TableHead>Station</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fuelData.map((fuel) => (
                  <TableRow key={fuel.id}>
                    <TableCell className="font-medium">{fuel.id}</TableCell>
                    <TableCell>{fuel.busNumber}</TableCell>
                    <TableCell>{new Date(fuel.date).toLocaleDateString()}</TableCell>
                    <TableCell>{fuel.fuelType}</TableCell>
                    <TableCell>{fuel.quantity} L</TableCell>
                    <TableCell>₹{fuel.cost.toLocaleString()}</TableCell>
                    <TableCell>{fuel.mileage} km/l</TableCell>
                    <TableCell>{fuel.station}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Maintenance Records Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Maintenance Records</CardTitle>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search maintenance..." className="pl-8 w-64" />
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
                  <TableHead>Record ID</TableHead>
                  <TableHead>Bus Number</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Next Due</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {maintenanceData.map((maintenance) => (
                  <TableRow key={maintenance.id}>
                    <TableCell className="font-medium">{maintenance.id}</TableCell>
                    <TableCell>{maintenance.busNumber}</TableCell>
                    <TableCell>{getMaintenanceTypeBadge(maintenance.type)}</TableCell>
                    <TableCell>{new Date(maintenance.date).toLocaleDateString()}</TableCell>
                    <TableCell className="max-w-xs truncate">{maintenance.description}</TableCell>
                    <TableCell>₹{maintenance.cost.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{new Date(maintenance.nextDue).toLocaleDateString()}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(maintenance.status)}</TableCell>
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