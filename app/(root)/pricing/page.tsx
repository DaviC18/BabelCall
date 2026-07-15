"use client"

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  Globe2,
  Languages,
  MessageSquareText,
  Mic2,
  ShieldCheck,
  Sparkles,
  XCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { comparisonRows, faqItems, plans } from "@/constants";

function renderComparisonValue(value: boolean | string) {
  if (value === true) {
    return <CheckCircle2 className="mx-auto size-5 text-primary" />;
  }

  if (value === false) {
    return <XCircle className="mx-auto size-5 text-muted-foreground/50" />;
  }

  return (
    <span className="text-sm font-medium text-muted-foreground">
      {value}
    </span>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_35%),radial-gradient(circle_at_bottom_right,hsl(var(--primary)/0.10),transparent_35%)]" />

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center lg:py-28">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full border border-border bg-card px-4 py-2"
          >
            <Sparkles className="mr-2 size-4 text-primary" />
            Planos do BabelCall
          </Badge>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Comece grátis.
            <span className="block text-primary">
              Escale quando a conversa crescer.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            O BabelCall será pensado para conversas traduzidas em tempo real,
            começando com salas por link, legenda automática e limites de uso
            simples para controlar custo sem matar a experiência.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full px-7">
              <Link href="/room/create" className="flex place-items-center">
                Criar sala grátis
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-7"
            >
              <Link href="/features">Ver recursos</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full">
              Preços
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Planos simples para validar e evoluir o produto.
            </h2>

            <p className="mt-4 text-muted-foreground">
              Os valores abaixo funcionam como uma base inicial de produto. Eles
              podem mudar conforme custo real de IA, latência e volume de uso.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <Card
                  key={plan.name}
                  className={`relative flex rounded-[2rem] ${
                    plan.highlighted
                      ? "border-primary shadow-lg shadow-primary/10"
                      : ""
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="rounded-full px-4 py-1">
                        Mais popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="w-full">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <Badge
                        variant={plan.highlighted ? "default" : "outline"}
                        className="rounded-full"
                      >
                        {plan.badge}
                      </Badge>
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </div>
                    </div>

                    <CardTitle className="text-2xl">{plan.name}</CardTitle>

                    <p className="mt-2 min-h-12 text-sm leading-7 text-muted-foreground">
                      {plan.description}
                    </p>

                    <div className="mt-6 flex items-end gap-1">
                      <span className="text-4xl font-bold tracking-tight text-foreground">
                        {plan.price}
                      </span>

                      {plan.period && (
                        <span className="pb-1 text-sm text-muted-foreground">
                          {plan.period}
                        </span>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col">
                    <Button
                      className="mb-6 rounded-full"
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      <Link href={plan.href} className="flex place-items-center">
                        {plan.cta}
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>

                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                          <span className="text-sm leading-7 text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full">
                Comparação
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Compare os recursos principais.
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                No começo, o foco é provar o uso real. Por isso os planos
                separam o básico gratuito, o uso profissional e os recursos para
                equipes.
              </p>
            </div>

            <Card className="overflow-hidden rounded-[2rem]">
              <CardContent className="p-0">
                <div className="grid grid-cols-4 border-b border-border bg-muted/60 text-sm font-medium">
                  <div className="p-4 text-left">Recurso</div>
                  <div className="p-4 text-center">Free</div>
                  <div className="p-4 text-center">Pro</div>
                  <div className="p-4 text-center">Business</div>
                </div>

                {comparisonRows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-4 border-b border-border last:border-b-0"
                  >
                    <div className="p-4 text-sm text-muted-foreground">
                      {row.feature}
                    </div>

                    <div className="flex items-center justify-center p-4">
                      {renderComparisonValue(row.free)}
                    </div>

                    <div className="flex items-center justify-center p-4">
                      {renderComparisonValue(row.pro)}
                    </div>

                    <div className="flex items-center justify-center p-4">
                      {renderComparisonValue(row.business)}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-[1.5rem]">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Clock3 className="size-6" />
                </div>

                <CardTitle>Minutos importam</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  A cobrança por minuto faz sentido porque áudio, transcrição e
                  tradução consomem recursos a cada conversa.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[1.5rem]">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Zap className="size-6" />
                </div>

                <CardTitle>Começo enxuto</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  Primeiro entra legenda traduzida. Voz traduzida, app mobile e
                  integrações vêm depois, sem atropelar a fundação.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[1.5rem]">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="size-6" />
                </div>

                <CardTitle>Produto escalável</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  O modelo permite evoluir para login, times, planos, histórico,
                  privacidade e recursos profissionais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm sm:p-12">
            <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Globe2 className="size-7" />
            </div>

            <div className="text-center">
              <Badge variant="outline" className="mb-4 rounded-full">
                Observação importante
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Estes planos são uma proposta inicial.
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
                Como o BabelCall ainda está na fase de construção, os preços e
                limites servem como direção estratégica. O ideal é medir o custo
                real por minuto antes de fechar valores definitivos.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background p-5 text-center">
                <Mic2 className="mx-auto mb-3 size-6 text-primary" />
                <p className="text-sm font-medium text-foreground">
                  Custo de áudio
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5 text-center">
                <Languages className="mx-auto mb-3 size-6 text-primary" />
                <p className="text-sm font-medium text-foreground">
                  Custo de tradução
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5 text-center">
                <Bot className="mx-auto mb-3 size-6 text-primary" />
                <p className="text-sm font-medium text-foreground">
                  Custo de IA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full">
              Dúvidas
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Perguntas rápidas, sem enrolação.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5">
            {faqItems.map((item) => (
              <Card key={item.question} className="rounded-[1.5rem]">
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm sm:p-12">
            <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MessageSquareText className="size-7" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Antes de cobrar, faça a sala funcionar.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
              A página de preços já dá visão de produto. Agora o próximo passo
              real é construir a rota de criação de sala e a página da sala.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button  size="lg" className="rounded-full px-7">
                <Link href="/room/create" className="flex place-items-center">
                  Criar primeira sala
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-7"
              >
                <Link href="/features">Ver recursos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}