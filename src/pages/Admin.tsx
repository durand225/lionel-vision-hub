import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, Filter } from "lucide-react";

type Payment = {
  id: string;
  user_email: string;
  amount: number;
  reference: string;
  status: string;
  metadata: any;
  created_at: string;
};

const Admin = () => {
  const navigate = useNavigate();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [filteredPayments, setFilteredPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchEmail, setSearchEmail] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    checkAdminAccess();
  }, []);

  useEffect(() => {
    if (isAdmin) {
      fetchPayments();
    }
  }, [isAdmin]);

  useEffect(() => {
    filterPayments();
  }, [payments, searchEmail, statusFilter]);

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/");
        return;
      }

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (!roles) {
        navigate("/");
        return;
      }

      setIsAdmin(true);
    } catch (error) {
      console.error("Error checking admin access:", error);
      navigate("/");
    }
  };

  const fetchPayments = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("payments")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPayments(data || []);
    } catch (error) {
      console.error("Error fetching payments:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterPayments = () => {
    let filtered = [...payments];

    if (searchEmail) {
      filtered = filtered.filter((payment) =>
        payment.user_email.toLowerCase().includes(searchEmail.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((payment) => payment.status === statusFilter);
    }

    setFilteredPayments(filtered);
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      success: "default",
      pending: "secondary",
      failed: "destructive",
    };

    return (
      <Badge variant={variants[status] || "secondary"}>
        {status}
      </Badge>
    );
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "XOF",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(dateString));
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-white hover:bg-white/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-white">
              Administration des Paiements
            </CardTitle>
            <CardDescription className="text-gray-200">
              Historique complet des transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Filtres */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher par email..."
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[200px] bg-white/10 border-white/20 text-white">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="success">Réussi</SelectItem>
                  <SelectItem value="pending">En attente</SelectItem>
                  <SelectItem value="failed">Échoué</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card className="bg-white/5 border-white/10">
                <CardHeader className="pb-3">
                  <CardDescription className="text-gray-300">Total des paiements</CardDescription>
                  <CardTitle className="text-2xl text-[#D4AF37]">
                    {filteredPayments.length}
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader className="pb-3">
                  <CardDescription className="text-gray-300">Montant total</CardDescription>
                  <CardTitle className="text-2xl text-[#D4AF37]">
                    {formatAmount(
                      filteredPayments
                        .filter((p) => p.status === "success")
                        .reduce((sum, p) => sum + p.amount, 0)
                    )}
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader className="pb-3">
                  <CardDescription className="text-gray-300">Paiements réussis</CardDescription>
                  <CardTitle className="text-2xl text-[#D4AF37]">
                    {filteredPayments.filter((p) => p.status === "success").length}
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Tableau */}
            {loading ? (
              <div className="text-center text-white py-8">Chargement...</div>
            ) : (
              <div className="rounded-md border border-white/20 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-white/5 border-white/20">
                      <TableHead className="text-gray-200">Email</TableHead>
                      <TableHead className="text-gray-200">Montant</TableHead>
                      <TableHead className="text-gray-200">Référence</TableHead>
                      <TableHead className="text-gray-200">Statut</TableHead>
                      <TableHead className="text-gray-200">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayments.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center text-gray-300 py-8">
                          Aucun paiement trouvé
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredPayments.map((payment) => (
                        <TableRow key={payment.id} className="hover:bg-white/5 border-white/20">
                          <TableCell className="text-white font-medium">
                            {payment.user_email}
                          </TableCell>
                          <TableCell className="text-[#D4AF37] font-semibold">
                            {formatAmount(payment.amount)}
                          </TableCell>
                          <TableCell className="text-gray-300 font-mono text-sm">
                            {payment.reference}
                          </TableCell>
                          <TableCell>{getStatusBadge(payment.status)}</TableCell>
                          <TableCell className="text-gray-300">
                            {formatDate(payment.created_at)}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
