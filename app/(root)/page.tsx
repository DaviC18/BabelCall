"use client"

import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Languages,
  Mic2,
  PhoneCall,
  Sparkles,
  Waves,
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
import { features, steps, useCases } from "@/constants";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto container overflow-hidden bg-background text-foreground">
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_35%),radial-gradient(circle_at_top_right,hsl(var(--primary)/0.12),transparent_30%)]" />

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-20 text-center lg:pb-28 lg:pt-28">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm"
          >
            <Sparkles className="mr-2 size-4 text-primary" />
            Tradução em tempo real para chamadas e conversas
          </Badge>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Fale no seu idioma.
            <span className="block text-primary">
              Seja entendido no mundo.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            BabelCall é uma plataforma para conversas com tradução por legenda
            em tempo real. Crie uma sala, compartilhe o link e converse com
            pessoas de outros idiomas sem transformar comunicação em
            malabarismo linguístico.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full h-11 px-7">
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
              <Link href="/how-it-works">
                Ver como funciona
              </Link>
            </Button>
          </div>

          <div className="mt-14 grid w-full max-w-5xl gap-4 rounded-3xl border border-border bg-card/70 p-4 shadow-sm backdrop-blur md:grid-cols-3">
            <div className="rounded-2xl bg-muted p-5 text-left">
              <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-background text-primary">
                <Mic2 className="size-5" />
              </div>
              <p className="text-sm text-muted-foreground">Você fala</p>
              <p className="mt-1 font-semibold text-foreground">
                “Olá, quero apresentar meu projeto.”
              </p>
            </div>

            <div className="flex items-center justify-center rounded-2xl border border-border bg-background p-5">
              <div className="flex items-center gap-3 text-primary">
                <Waves className="size-6" />
                <Languages className="size-7" />
                <Waves className="size-6 rotate-180" />
              </div>
            </div>

            <div className="rounded-2xl bg-muted p-5 text-left">
              <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-background text-primary">
                <Globe2 className="size-5" />
              </div>
              <p className="text-sm text-muted-foreground">A outra pessoa vê</p>
              <p className="mt-1 font-semibold text-foreground">
                “Hello, I want to present my project.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border border-border rounded-2xl bg-muted/40 py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full">
              Como funciona
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Uma conversa, dois idiomas, menos confusão.
            </h2>

            <p className="mt-4 text-muted-foreground">
              A primeira versão do BabelCall será focada em salas com legenda
              traduzida. Simples, direto e validável.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Card key={step.title} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </div>

                      <span className="text-4xl font-bold text-muted-foreground/20">
                        0{index + 1}
                      </span>
                    </div>

                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full">
                Recursos
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                O MVP começa pequeno, mas com fundação de produto grande.
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                Nada de tentar dominar todas as chamadas do planeta no primeiro
                commit. O foco inicial é provar o coração do produto: fala,
                transcrição, tradução e legenda dentro de uma sala.
              </p>

              <div className="mt-8">
                <Button className="rounded-full">
                  <Link href="/room/create" className="flex place-items-center">
                    Testar BabelCall
                    <PhoneCall className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <Card key={feature.title}>
                    <CardHeader>
                      <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>

                      <CardTitle className="text-lg">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border border-border rounded-2xl bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full">
                Para quem é
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Feito para brasileiros que querem conversar com o mundo.
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                O primeiro público do BabelCall não é “todo mundo”. É quem tem
                uma dor clara: precisa falar com estrangeiros, mas ainda trava
                no idioma.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {useCases.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-sm leading-7 text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm sm:p-12">
            <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Globe2 className="size-7" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Comece com uma sala. Depois construa a ponte.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
              O próximo passo é criar a primeira sala funcional: digitar ou
              falar em português e receber a tradução em inglês na interface.
              Quando isso funcionar, o BabelCall deixa de ser ideia e vira
              produto.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-7">
                <Link href="/room/create" className="flex h-11 place-items-center">
                  Criar sala
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-7"
              >
                <Link href="#features">
                  Ver recursos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}