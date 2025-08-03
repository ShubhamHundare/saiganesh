import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Search, Filter, Download, Eye, Edit, Users, Calendar, TrendingUp } from "lucide-react";

const bookingsData = [
  {
    id: "BK001",
    customerName: "Rajesh Kumar",
    package: "Char Dham Yatra",
    bookingDate: "2024-01-15",
    travelDate: "2024-02-20",
    passengers: 4,
    amount: 45000,
    status: "Confirmed",
    phone: "+91 9876543210"
  },
  {
    id: "BK002",
    customerName: "Priya Sharma",
    package: "Golden Triangle",
    bookingDate: "2024-01-18",
    travelDate: "2024-03-05",
    passengers: 2,
    amount: 28000,
    status: "Pending",
    phone: "+91 9876543211"
  },
  {
    id: "BK003",
    customerName: "Amit Patel",
    package: "South India Temple Tour",
    bookingDate: "2024-01-20",
    travelDate: "2024-02-28",
    passengers: 6,
    amount: 68000,
    status: "Confirmed",
    phone: "+91 9876543212"
  },
  {
    id: "BK004",
    customerName: "Sunita Singh",
    package: "Kerala Backwaters",
    bookingDate: "2024-01-22",
    travelDate: "2024-03-15",
    passengers: 3,
    amount: 42000,
    status: "Cancelled",
    phone: "+91 9876543213"
  }
];

const bookingTrends = [
  { month: "Jan", bookings: 28, revenue: 485000 },
  { month: "Feb", bookings: 32, revenue: 520000 },
  { month: "Mar", bookings: 41, revenue: 645000 },
  { month: "Apr", bookings: 35, revenue: 590000 },
  { month: "May", bookings: 48, revenue: 720000 },
  { month: "Jun", bookings: 42, revenue: 685000 }
];

const packageBookings = [
  { package: "Char Dham", bookings: 45 },
  { package: "Golden Triangle", bookings: 38 },
  { package: "South India", bookings: 32 },
  { package: "Rajasthan", bookings: 28 },
  { package: "Kerala", bookings: 25 }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Confirmed":
      return <Badge className="bg-success/10 text-success border-success/20">Confirmed</Badge>;
    case "Pending":
      return <Badge className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
    case "Cancelled":
      return <Badge className="bg-error/10 text-error border-error/20">Cancelled</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function Bookings() {
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Bookings Management</h2>
            <p className="text-muted-foreground">
              Track and manage all customer bookings
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Users className="w-4 h-4 mr-2" />
            New Booking
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">226</div>
              <p className="text-xs text-success flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15.3% this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Confirmed</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">189</div>
              <p className="text-xs text-muted-foreground">83.6% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">28</div>
              <p className="text-xs text-muted-foreground">12.4% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cancelled</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-error">9</div>
              <p className="text-xs text-muted-foreground">4.0% of total</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Booking Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={bookingTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="bookings" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bookings by Package</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={packageBookings}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="package" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="bookings" fill="hsl(var(--secondary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Bookings</CardTitle>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search bookings..." className="pl-8 w-64" />
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
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Package</TableHead>
                  <TableHead>Travel Date</TableHead>
                  <TableHead>Passengers</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookingsData.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{booking.customerName}</p>
                        <p className="text-sm text-muted-foreground">{booking.phone}</p>
                      </div>
                    </TableCell>
                    <TableCell>{booking.package}</TableCell>
                    <TableCell>{new Date(booking.travelDate).toLocaleDateString()}</TableCell>
                    <TableCell>{booking.passengers}</TableCell>
                    <TableCell>₹{booking.amount.toLocaleString()}</TableCell>
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
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