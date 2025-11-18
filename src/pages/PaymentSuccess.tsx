import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'failed'>('loading');
  const reference = searchParams.get('reference');

  useEffect(() => {
    // In a real implementation, you would verify the payment status
    // by calling your backend to confirm with Paystack
    const verifyPayment = async () => {
      if (!reference) {
        setStatus('failed');
        return;
      }

      // Simulate API call
      setTimeout(() => {
        setStatus('success');
      }, 1500);
    };

    verifyPayment();
  }, [reference]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary via-primary-dark to-primary-darker">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-20 flex items-center justify-center">
        <Card className="max-w-lg w-full bg-card/95 backdrop-blur border-gold/20">
          <CardHeader className="text-center">
            {status === 'loading' && (
              <>
                <Loader2 className="h-16 w-16 text-gold mx-auto mb-4 animate-spin" />
                <CardTitle className="text-foreground">Vérification du paiement...</CardTitle>
                <CardDescription>Veuillez patienter</CardDescription>
              </>
            )}
            
            {status === 'success' && (
              <>
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-foreground">Paiement Réussi !</CardTitle>
                <CardDescription>Votre paiement a été confirmé</CardDescription>
              </>
            )}
            
            {status === 'failed' && (
              <>
                <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-foreground">Échec du Paiement</CardTitle>
                <CardDescription>Une erreur s'est produite</CardDescription>
              </>
            )}
          </CardHeader>

          <CardContent className="space-y-4">
            {status === 'success' && (
              <>
                <div className="bg-background/50 p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Référence</p>
                  <p className="font-mono text-foreground">{reference}</p>
                </div>
                
                <p className="text-sm text-muted-foreground text-center">
                  Un email de confirmation vous a été envoyé. Vous recevrez vos accès sous peu.
                </p>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => navigate('/')}
                    variant="outline"
                    className="flex-1"
                  >
                    Retour à l'accueil
                  </Button>
                  <Button
                    onClick={() => window.open('https://wa.me/+2250777519477', '_blank')}
                    className="flex-1 bg-gold hover:bg-gold-light"
                  >
                    Contactez-nous
                  </Button>
                </div>
              </>
            )}

            {status === 'failed' && (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  Veuillez réessayer ou contactez notre support.
                </p>
                
                <div className="flex gap-3">
                  <Button
                    onClick={() => navigate('/payment')}
                    variant="outline"
                    className="flex-1"
                  >
                    Réessayer
                  </Button>
                  <Button
                    onClick={() => window.open('https://wa.me/+2250777519477', '_blank')}
                    className="flex-1 bg-gold hover:bg-gold-light"
                  >
                    Support
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
