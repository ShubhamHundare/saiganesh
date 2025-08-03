import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Search, Filter, Download, Plus, Calendar, MapPin, Users, IndianRupee } from "lucide-react";

const tripsData = [
  {
    id: "TR001",
    destination: "Char Dham Yatra",
    startDate: "2024-02-20",
    endDate: "2024-02-28",
    bus: "MH-01-1234 (49 Seater)",
    driver: "Raj Kumar",
    cleaner: "Suresh Yadav",
    passengers: 45,
    revenue: 675000,
    status: "Upcoming",
    profit: 185000
  },
  {
    id: "TR002",
    destination: "Golden Triangle",
    startDate: "2024-01-15",
    endDate: "2024-01-22",
    bus: "MH-02-5678 (30 Seater)",
    driver: "Amit Singh",
    cleaner: "Ravi Sharma",
    passengers: 28,
    revenue: 420000,
    status: "Completed",
    profit: 125000
  },
  {
    id: "TR003",
    destination: "Kerala Backwaters",
    startDate: "2024-03-05",
    endDate: "2024-03-12",
    bus: "MH-03-9012 (25 Seater)",
    driver: "Manoj Tiwari",
    cleaner: "Dinesh Kumar",
    passengers: 22,
    revenue: 385000,
    status: "Upcoming",
    profit: 115000
  },
  {
    id: "TR004",
    destination: "Rajasthan Heritage",
    startDate: "2024-01-28",
    endDate: "2024-02-05",
    bus: "MH-04-3456 (55 Seater)",
    driver: "Sandeep Gupta",
    cleaner: "Ramesh Singh",
    passengers: 52,
    revenue: 780000,
    status: "Completed",
    profit: 245000
  }
];

const packagePerformance = [
  { package: "Char Dham", trips: 12, revenue: 1620000, profit: 445000 },
  { package: "Golden Triangle", trips: 15, revenue: 1575000, profit: 425000 },
  { package: "Kerala", trips: 8, revenue: 920000, profit: 265000 },
  { package: "Rajasthan", trips: 10, revenue: 1250000, profit: 385000 },
  { package: "South India", trips: 9, revenue: 1080000, profit: 315000 }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed":
      return <Badge className="bg-success/10 text-success border-success/20">Completed</Badge>;
    case "Upcoming":
      return <Badge className="bg-info/10 text-info border-info/20">Upcoming</Badge>;
    case "In Progress":
      return <Badge className="bg-warning/10 text-warning border-warning/20">In Progress</Badge>;
    case "Cancelled":
      return <Badge className="bg-error/10 text-error border-error/20">Cancelled</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function Trips() {
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Trips & Packages</h2>
            <p className="text-muted-foreground">
              Manage tour packages and track trip performance
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            New Trip
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Trips</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">186</div>
              <p className="text-xs text-success">+8.2% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Packages</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Across India</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Occupancy</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-success">+5.2% improvement</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Profit Margin</CardTitle>
              <IndianRupee className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28.5%</div>
              <p className="text-xs text-success">+2.8% this quarter</p>
            </CardContent>
          </Card>
        </div>

        {/* Package Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Package Performance Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={packagePerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="package" />
                <YAxis />
                <Tooltip formatter={(value, name) => [
                  name === "trips" ? value : `₹${value?.toLocaleString()}`,
                  name === "trips" ? "Trips" : name === "revenue" ? "Revenue" : "Profit"
                ]} />
                <Bar dataKey="revenue" fill="hsl(var(--primary))" name="revenue" />
                <Bar dataKey="profit" fill="hsl(var(--secondary))" name="profit" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Trips Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Trips</CardTitle>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search trips..." className="pl-8 w-64" />
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
                  <TableHead>Trip ID</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Bus & Staff</TableHead>
                  <TableHead>Passengers</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Profit</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tripsData.map((trip) => (
                  <TableRow key={trip.id}>
                    <TableCell className="font-medium">{trip.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{trip.destination}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      {Math.ceil((new Date(trip.endDate).getTime() - new Date(trip.startDate).getTime()) / (1000 * 3600 * 24))} days
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm font-medium">{trip.bus}</p>
                        <p className="text-xs text-muted-foreground">Driver: {trip.driver}</p>
                        <p className="text-xs text-muted-foreground">Cleaner: {trip.cleaner}</p>
                      </div>
                    </TableCell>
                    <TableCell>{trip.passengers}</TableCell>
                    <TableCell>₹{trip.revenue.toLocaleString()}</TableCell>
                    <TableCell className="text-success">₹{trip.profit.toLocaleString()}</TableCell>
                    <TableCell>{getStatusBadge(trip.status)}</TableCell>
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