import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Search, Filter, Download, Plus, Truck, Wrench, Fuel, Calendar } from "lucide-react";

const fleetData = [
  {
    id: "MH-01-1234",
    model: "Volvo B11R",
    capacity: 49,
    year: 2022,
    status: "Active",
    mileage: 45000,
    fuelType: "Diesel",
    lastService: "2024-01-15",
    nextService: "2024-04-15",
    maintenanceCost: 85000,
    efficiency: 92
  },
  {
    id: "MH-02-5678",
    model: "Tata Starbus",
    capacity: 30,
    year: 2021,
    status: "In Maintenance",
    mileage: 62000,
    fuelType: "Diesel",
    lastService: "2024-01-20",
    nextService: "2024-04-20",
    maintenanceCost: 125000,
    efficiency: 78
  },
  {
    id: "MH-03-9012",
    model: "Ashok Leyland",
    capacity: 25,
    year: 2023,
    status: "Active",
    mileage: 28000,
    fuelType: "Diesel",
    lastService: "2024-01-10",
    nextService: "2024-04-10",
    maintenanceCost: 65000,
    efficiency: 95
  },
  {
    id: "MH-04-3456",
    model: "Volvo B9R",
    capacity: 55,
    year: 2020,
    status: "Active",
    mileage: 78000,
    fuelType: "Diesel",
    lastService: "2024-01-25",
    nextService: "2024-04-25",
    maintenanceCost: 145000,
    efficiency: 85
  },
  {
    id: "MH-05-7890",
    model: "Eicher Skyline",
    capacity: 15,
    year: 2023,
    status: "Idle",
    mileage: 15000,
    fuelType: "Diesel",
    lastService: "2024-01-05",
    nextService: "2024-04-05",
    maintenanceCost: 35000,
    efficiency: 98
  }
];

const fleetUtilization = [
  { month: "Jan", utilized: 85, idle: 15 },
  { month: "Feb", utilized: 92, idle: 8 },
  { month: "Mar", utilized: 88, idle: 12 },
  { month: "Apr", utilized: 95, idle: 5 },
  { month: "May", utilized: 91, idle: 9 },
  { month: "Jun", utilized: 87, idle: 13 }
];

const fleetStatus = [
  { name: "Active", value: 18, color: "#22c55e" },
  { name: "In Maintenance", value: 3, color: "#f59e0b" },
  { name: "Idle", value: 4, color: "#6b7280" }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Active":
      return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
    case "In Maintenance":
      return <Badge className="bg-warning/10 text-warning border-warning/20">Maintenance</Badge>;
    case "Idle":
      return <Badge className="bg-muted text-muted-foreground">Idle</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getEfficiencyColor = (efficiency: number) => {
  if (efficiency >= 90) return "text-success";
  if (efficiency >= 75) return "text-warning";
  return "text-error";
};

export default function Fleet() {
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Fleet Management</h2>
            <p className="text-muted-foreground">
              Monitor and manage your bus fleet operations
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Bus
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Fleet</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
              <p className="text-xs text-muted-foreground">Buses in fleet</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Buses</CardTitle>
              <Truck className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">18</div>
              <p className="text-xs text-muted-foreground">72% of fleet</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Maintenance Due</CardTitle>
              <Wrench className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">5</div>
              <p className="text-xs text-muted-foreground">Next 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Efficiency</CardTitle>
              <Fuel className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89.6%</div>
              <p className="text-xs text-success">+3.2% this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Fleet Utilization Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={fleetUtilization}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, ""]} />
                  <Bar dataKey="utilized" stackId="a" fill="hsl(var(--success))" name="Utilized" />
                  <Bar dataKey="idle" stackId="a" fill="hsl(var(--muted))" name="Idle" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fleet Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={fleetStatus}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {fleetStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Fleet Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Fleet Overview</CardTitle>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search buses..." className="pl-8 w-64" />
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
                  <TableHead>Bus Number</TableHead>
                  <TableHead>Model & Capacity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Mileage</TableHead>
                  <TableHead>Efficiency</TableHead>
                  <TableHead>Last Service</TableHead>
                  <TableHead>Next Service</TableHead>
                  <TableHead>Maintenance Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fleetData.map((bus) => (
                  <TableRow key={bus.id}>
                    <TableCell className="font-medium">{bus.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{bus.model}</p>
                        <p className="text-sm text-muted-foreground">{bus.capacity} Seater ({bus.year})</p>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(bus.status)}</TableCell>
                    <TableCell>{bus.mileage.toLocaleString()} km</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className={`text-sm font-medium ${getEfficiencyColor(bus.efficiency)}`}>
                          {bus.efficiency}%
                        </div>
                        <Progress value={bus.efficiency} className="w-16 h-2" />
                      </div>
                    </TableCell>
                    <TableCell>{new Date(bus.lastService).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{new Date(bus.nextService).toLocaleDateString()}</span>
                      </div>
                    </TableCell>
                    <TableCell>₹{bus.maintenanceCost.toLocaleString()}</TableCell>
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