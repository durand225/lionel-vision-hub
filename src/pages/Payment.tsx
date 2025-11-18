import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { CreditCard, Shield, Zap } from 'lucide-react';

const PAYSTACK_PUBLIC_KEY = 'pk_live_xxxxxxxxxxxxxxxxxxxxx'; // REMPLACER par votre clé publique

const Payment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    amount: '',
    name: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('paystack-initialize', {
        body: {
          email: formData.email,
          amount: parseInt(formData.amount),
          metadata: {
            name: formData.name,
            phone: formData.phone,
            custom_fields: [
              {
                display_name: 'Nom',
                variable_name: 'name',
                value: formData.name,
              },
            ],
          },
        },
      });

      if (error) throw error;

      // Redirect to Paystack payment page
      window.location.href = data.authorization_url;
    } catch (error: any) {
      console.error('Payment initialization error:', error);
      toast.error(error.message || 'Erreur lors de l\'initialisation du paiement');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary via-primary-dark to-primary-darker">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Paiement Sécurisé
            </h1>
            <p className="text-lg text-gray-200">
              Commencez votre formation trading avec Institution of Lionel Cameron
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/95 backdrop-blur border-gold/20">
              <CardContent className="pt-6 text-center">
                <Shield className="h-12 w-12 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">100% Sécurisé</h3>
                <p className="text-sm text-muted-foreground">Paiement crypté SSL</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/95 backdrop-blur border-gold/20">
              <CardContent className="pt-6 text-center">
                <CreditCard className="h-12 w-12 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Paystack</h3>
                <p className="text-sm text-muted-foreground">Plateforme de confiance</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/95 backdrop-blur border-gold/20">
              <CardContent className="pt-6 text-center">
                <Zap className="h-12 w-12 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Accès Immédiat</h3>
                <p className="text-sm text-muted-foreground">Dès validation</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/95 backdrop-blur border-gold/20">
            <CardHeader>
              <CardTitle className="text-foreground">Informations de Paiement</CardTitle>
              <CardDescription>Remplissez le formulaire ci-dessous</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom Complet *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Lionel Kouakou"
                      className="bg-background/50 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="bg-background/50 border-border"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+225 XX XX XX XX XX"
                      className="bg-background/50 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Montant (FCFA) *</Label>
                    <Input
                      id="amount"
                      type="number"
                      required
                      min="1000"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      placeholder="50000"
                      className="bg-background/50 border-border"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gold hover:bg-gold-light text-primary-foreground h-12 text-lg font-semibold"
                  >
                    {loading ? 'Redirection...' : 'Procéder au Paiement'}
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  En cliquant sur "Procéder au Paiement", vous serez redirigé vers Paystack
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
