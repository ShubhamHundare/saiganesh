import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, User, Building, Bell, Shield, Palette, Database } from "lucide-react";

export default function Settings() {
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your application settings and preferences
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Main Settings */}
          <div className="md:col-span-2 space-y-6">
            {/* Company Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" defaultValue="Sai Ganesh Tours & Travels" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registration">Registration Number</Label>
                    <Input id="registration" defaultValue="SGTT-2020-001" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea 
                    id="address" 
                    defaultValue="Bhatwadi, Mumbai, Maharashtra - 400086, India"
                    rows={3}
                  />
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="info@saiganesh.com" />
                  </div>
                </div>
                
                <Button>Save Company Information</Button>
              </CardContent>
            </Card>

            {/* User Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  User Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Admin Access</p>
                      <p className="text-sm text-muted-foreground">Full system access and configuration</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Manager Access</p>
                      <p className="text-sm text-muted-foreground">Trip management and employee oversight</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Accountant Access</p>
                      <p className="text-sm text-muted-foreground">Financial reports and transactions</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="new-user-email">Add New User</Label>
                  <div className="flex space-x-2">
                    <Input id="new-user-email" placeholder="user@email.com" className="flex-1" />
                    <Button>Send Invite</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Booking Notifications</p>
                      <p className="text-sm text-muted-foreground">Get notified when new bookings are made</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Maintenance Alerts</p>
                      <p className="text-sm text-muted-foreground">Alerts for upcoming maintenance schedules</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Financial Reports</p>
                      <p className="text-sm text-muted-foreground">Monthly financial summary emails</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">WhatsApp Notifications</p>
                      <p className="text-sm text-muted-foreground">Send booking confirmations via WhatsApp</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Session Timeout</p>
                      <p className="text-sm text-muted-foreground">Auto-logout after 30 minutes of inactivity</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Change Password</Label>
                  <div className="space-y-2">
                    <Input type="password" placeholder="Current password" />
                    <Input type="password" placeholder="New password" />
                    <Input type="password" placeholder="Confirm new password" />
                  </div>
                  <Button variant="outline">Update Password</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Settings Sidebar */}
          <div className="space-y-6">
            {/* Theme Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Appearance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">Toggle dark theme</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Primary Color</Label>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer border-2 border-primary"></div>
                      <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer border-2 border-transparent hover:border-primary"></div>
                      <div className="w-8 h-8 rounded-full bg-purple-500 cursor-pointer border-2 border-transparent hover:border-primary"></div>
                      <div className="w-8 h-8 rounded-full bg-orange-500 cursor-pointer border-2 border-transparent hover:border-primary"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  Data Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    Export All Data
                  </Button>
                  <Button variant="outline" className="w-full">
                    Import Data
                  </Button>
                  <Button variant="outline" className="w-full">
                    Backup Database
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Last Backup</p>
                  <p className="text-sm">January 28, 2024 at 3:00 PM</p>
                </div>
              </CardContent>
            </Card>

            {/* System Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <SettingsIcon className="w-5 h-5 mr-2" />
                  System Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Version:</span>
                  <span>1.0.0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span>Jan 28, 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Database:</span>
                  <span className="text-success">Connected</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Storage Used:</span>
                  <span>2.4 GB</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}