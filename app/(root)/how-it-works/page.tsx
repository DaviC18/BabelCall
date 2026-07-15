"use client"

import {
  ArrowRight,
  CheckCircle2,
  Languages,
  MessageSquareText,
  Mic2,
  PhoneCall,
  Radio,
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
import { differences, futureItems, mainSteps, mvpItems, techFlow } from "@/constants";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_35%),radial-gradient(circle_at_bottom_right,hsl(var(--primary)/0.10),transparent_35%)]" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <Badge
              variant="secondary"
              className="mb-6 rounded-full border border-border bg-card px-4 py-2"
            >
              <Sparkles className="mr-2 size-4 text-primary" />
              Como funciona
            </Badge>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Uma sala.
              <span className="block text-primary">
                Dois idiomas conversando.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              O BabelCall funciona como uma sala de conversa com tradução por
              legenda em tempo real. Uma pessoa fala no próprio idioma, a IA
              transforma a fala em texto, traduz e entrega a legenda para a
              outra pessoa.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-7">
                <Link href="/room/create" className="flex place-items-center">
                  Criar sala
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-7"
              >
                <Link href="/#features">Ver recursos</Link>
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden rounded-[2rem]">
            <CardHeader className="border-b border-border bg-muted/40">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Sala BabelCall</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Português → Inglês
                  </p>
                </div>

                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Radio className="size-5" />
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-5 p-6">
              <div className="rounded-2xl bg-muted p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Mic2 className="size-4 text-primary" />
                  Davi falou
                </div>

                <p className="text-sm leading-7 text-muted-foreground">
                  Olá, tudo bem? Quero apresentar meu projeto.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 text-primary">
                  <Waves className="size-4" />
                  <Languages className="size-5" />
                  <Waves className="size-4 rotate-180" />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <MessageSquareText className="size-4 text-primary" />
                  Tradução recebida
                </div>

                <p className="text-sm leading-7 text-muted-foreground">
                  Hello, how are you? I want to present my project.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full">
              Fluxo principal
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O caminho da conversa é simples.
            </h2>

            <p className="mt-4 text-muted-foreground">
              A primeira versão não tenta abraçar o planeta inteiro. Ela resolve
              um fluxo essencial: criar sala, falar, traduzir e mostrar legenda.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mainSteps.map((step) => {
              const Icon = step.icon;

              return (
                <Card key={step.title}>
                  <CardHeader>
                    <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>

                    <CardTitle className="text-lg">{step.title}</CardTitle>
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

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full">
                Por dentro
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                O que acontece depois que alguém fala?
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                Por baixo da interface, o BabelCall trabalha em camadas. O áudio
                vira texto, o texto vira tradução e a tradução aparece como
                legenda para o outro participante.
              </p>

              <div className="mt-8 rounded-3xl border border-border bg-card p-5">
                <p className="text-sm font-medium text-foreground">
                  Fluxo técnico:
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Microfone → transcrição → tradução → legenda → histórico da
                  conversa.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {techFlow.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title}>
                    <CardHeader>
                      <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>

                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="rounded-[2rem]">
              <CardHeader>
                <Badge className="mb-3 w-fit rounded-full">
                  MVP inicial
                </Badge>

                <CardTitle className="text-2xl">
                  O que a primeira versão precisa fazer
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {mvpItems.map((item) => (
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

            <Card className="rounded-[2rem]">
              <CardHeader>
                <Badge variant="outline" className="mb-3 w-fit rounded-full">
                  Depois do MVP
                </Badge>

                <CardTitle className="text-2xl">
                  O que pode entrar nas próximas fases
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {futureItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <ArrowRight className="mt-0.5 size-5 shrink-0 text-primary" />
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

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full">
              Diferencial
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Não é só traduzir palavra por palavra.
            </h2>

            <p className="mt-4 text-muted-foreground">
              A ideia do BabelCall é transformar tradução em experiência de
              conversa. Menos copiar e colar. Mais comunicação acontecendo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differences.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title}>
                  <CardHeader>
                    <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>

                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <PhoneCall className="size-7" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A primeira meta é fazer uma sala funcionar.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
              Quando uma pessoa conseguir falar em português e outra receber a
              legenda em inglês, o BabelCall deixa de ser só uma ideia bonita e
              vira uma prova real de produto.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-7">
                <Link href="/room/create" className="flex place-items-center">
                  Criar sala
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-7"
              >
                <Link href="/">Voltar para Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}