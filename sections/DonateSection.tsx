import React, { useState } from 'react';
import { Smartphone, TrendingUp, Building2, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const donationOptions = [
  {
    icon: Smartphone,
    title: 'Doação via PIX',
    description: 'Rápido, seguro e sem taxas. Doe qualquer valor instantaneamente.',
    button: 'DOAR COM PIX',
    btnClass: 'btn-navy',
    detail: 'Chave PIX: doacao@institutoceu.org',
    action: 'pix',
  },
  {
    icon: Globe,
    title: 'Doação Internacional',
    description: 'Doe de qualquer país do mundo via Stripe. Seguro e confiável.',
    button: 'DOAR INTERNACIONALMENTE',
    btnClass: 'btn-gold',
    detail: 'Aceita cartões de crédito internacionais',
    action: 'stripe',
  },
  {
    icon: TrendingUp,
    title: 'Doação Mensal',
    description: 'Seja um construtor mensal. Apoio contínuo para impacto duradouro.',
    button: 'QUERO DOAR MENSAL',
    btnClass: 'btn-navy',
    detail: 'A partir de R$ 30/mês',
    action: 'monthly',
  },
  {
    icon: Building2,
    title: 'Parceria Empresarial',
    description: 'Sua empresa pode fazer parte da transformação social. Match de doações, voluntariado e mais.',
    button: 'SER PARCEIRO',
    btnClass: 'btn-gold',
    detail: 'Programa de Matching Corporativo',
    action: 'partnership',
  },
];

export const DonateSection: React.FC = () => {
  const headerRef = useScrollAnimation();
  const [selectedDonation, setSelectedDonation] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showDonationModal, setShowDonationModal] = useState(false);

  const handleDonationClick = (action: string) => {
    setSelectedDonation(action);
    setShowDonationModal(true);
  };

  const handleStripeCheckout = () => {
    const amount = customAmount || '100';
    // Integração com Stripe - será configurada com variáveis de ambiente
    const stripePublicKey = (import.meta as any).env.VITE_STRIPE_PUBLIC_KEY;
    if (stripePublicKey) {
      // Aqui será feito o redirect para o Stripe Checkout
      window.location.href = `/api/donate?amount=${amount}&method=stripe`;
    } else {
      alert('Stripe não está configurado. Entre em contato conosco.');
    }
  };

  // const handlePayPalCheckout = () => {
  //   const amount = customAmount || '100';
  //   // Integração com PayPal - será configurada com variáveis de ambiente
  //   const paypalClientId = (import.meta as any).env.VITE_PAYPAL_CLIENT_ID;
  //   if (paypalClientId) {
  //     window.location.href = `/api/donate?amount=${amount}&method=paypal`;
  //   } else {
  //     alert('PayPal não está configurado. Entre em contato conosco.');
  //   }
  // };

  const handlePIXCopy = () => {
    const pixKey = 'doacao@institutoceu.org';
    navigator.clipboard.writeText(pixKey);
    alert('Chave PIX copiada para a área de transferência!');
  };

  return (
    <section id="como-doar" className="w-full bg-cream py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-gold mb-4">
            COMO DOAR
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Cada contribuição constrói um futuro melhor
          </h2>
          <p className="font-sans text-lg text-text-secondary max-w-[600px] mx-auto">
            Escolha a forma que melhor se adequa a você. Todas as doações são seguras, transparentes e 100% destinadas aos nossos programas.
          </p>
        </div>

        {/* Donation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children mb-12">
          {donationOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="animate-on-scroll bg-white rounded-2xl p-8 md:p-10 text-center border border-navy/5 
                shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover cursor-pointer"
                onClick={() => handleDonationClick(option.action)}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-navy/5">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  {option.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                  {option.description}
                </p>
                <button className={`${option.btnClass} w-full text-sm`}>
                  {option.button}
                </button>
                <p className="font-sans text-xs text-text-muted mt-4">
                  {option.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Donation Modal */}
        {showDonationModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-2xl font-bold text-navy">Fazer Doação</h3>
                <button
                  onClick={() => setShowDonationModal(false)}
                  className="text-text-muted hover:text-navy text-2xl"
                >
                  ×
                </button>
              </div>

              {selectedDonation === 'pix' && (
                <div className="space-y-4">
                  <p className="font-sans text-text-secondary mb-4">
                    Copie a chave PIX abaixo e faça a transferência pelo seu banco ou aplicativo:
                  </p>
                  <div className="bg-navy/5 p-4 rounded-lg flex items-center justify-between">
                    <code className="font-mono text-sm text-navy">doacao@institutoceu.org</code>
                    <button
                      onClick={handlePIXCopy}
                      className="btn-gold text-xs ml-2"
                    >
                      Copiar
                    </button>
                  </div>
                  <p className="font-sans text-xs text-text-muted">
                    Após fazer a transferência, você receberá um comprovante de doação por email.
                  </p>
                </div>
              )}

              {selectedDonation === 'stripe' && (
                <div className="space-y-4">
                  <p className="font-sans text-text-secondary mb-4">
                    Digite o valor que deseja doar (em reais):
                  </p>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="100"
                    className="w-full px-4 py-2 border border-navy/20 rounded-lg focus:outline-none focus:border-gold"
                  />
                  <button
                    onClick={handleStripeCheckout}
                    className="btn-gold w-full"
                  >
                    Continuar com Stripe
                  </button>
                  <p className="font-sans text-xs text-text-muted">
                    Você será redirecionado para o checkout seguro do Stripe.
                  </p>
                </div>
              )}

              {selectedDonation === 'monthly' && (
                <div className="space-y-4">
                  <p className="font-sans text-text-secondary mb-4">
                    Escolha o valor mensal de sua doação:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {['30', '50', '100', '250'].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setCustomAmount(amount)}
                        className={`py-2 px-4 rounded-lg font-sans font-medium transition-all ${
                          customAmount === amount
                            ? 'btn-gold'
                            : 'border border-navy/20 text-navy hover:border-gold'
                        }`}
                      >
                        R$ {amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Outro valor"
                    className="w-full px-4 py-2 border border-navy/20 rounded-lg focus:outline-none focus:border-gold"
                  />
                  <button
                    onClick={handleStripeCheckout}
                    className="btn-gold w-full"
                  >
                    Configurar Doação Mensal
                  </button>
                </div>
              )}

              {selectedDonation === 'partnership' && (
                <div className="space-y-4">
                  <p className="font-sans text-text-secondary mb-4">
                    Para parcerias empresariais, entre em contato com nosso time:
                  </p>
                  <a
                    href="mailto:parcerias@institutoceu.org"
                    className="btn-gold w-full text-center block"
                  >
                    Enviar Email
                  </a>
                  <p className="font-sans text-xs text-text-muted">
                    Responderemos em até 2 dias úteis com informações sobre programas de matching e benefícios corporativos.
                  </p>
                </div>
              )}

              <button
                onClick={() => setShowDonationModal(false)}
                className="btn-ghost w-full mt-6"
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        {/* Trust Section */}
        <div className="mt-16 pt-12 border-t border-navy/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gold mb-2">100%</div>
              <p className="font-sans text-sm text-text-secondary">
                Transparência em cada doação
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">Seguro</div>
              <p className="font-sans text-sm text-text-secondary">
                Processamento certificado e protegido
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">Impacto</div>
              <p className="font-sans text-sm text-text-secondary">
                Cada real transforma vidas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
