"use client"

import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Languages,
  MessageSquareText,
  Mic2,
  Radio,
  Rocket,
  Sparkles,
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
import { benefits, futureFeatures, mainFeatures, mvpFeatures } from "@/constants";

export default function FeaturesPage() {
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
            Recursos do BabelCall
          </Badge>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Tradução em tempo real,
            <span className="block text-primary">
              pensada para conversas reais.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            O BabelCall começa com um objetivo claro: permitir que duas pessoas
            conversem em idiomas diferentes usando salas, transcrição,
            tradução automática e legenda ao vivo.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
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
              <Link href="/how-it-works">Como funciona</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full">
              Principais recursos
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O coração do produto em módulos simples.
            </h2>

            <p className="mt-4 text-muted-foreground">
              Cada recurso resolve uma parte da ponte: captar a fala, entender o
              conteúdo, traduzir e entregar a mensagem para a outra pessoa.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card key={feature.title} className="rounded-[1.5rem]">
                  <CardHeader>
                    <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>

                    <CardTitle>{feature.title}</CardTitle>
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
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full">
                MVP
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Primeiro, o BabelCall precisa provar uma coisa.
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                O MVP não precisa ter todas as línguas, app mobile, voz
                traduzida e integração com chamadas reais. Primeiro ele precisa
                provar que uma pessoa fala ou digita, e a outra recebe a
                tradução de forma clara.
              </p>

              <div className="mt-8 rounded-3xl border border-border bg-card p-5">
                <p className="text-sm font-semibold text-foreground">
                  Meta do MVP:
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Criar uma sala onde português vira inglês na interface com
                  fluidez suficiente para uma conversa simples.
                </p>
              </div>
            </div>

            <Card className="rounded-[2rem]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Rocket className="size-5" />
                  </div>

                  <CardTitle>Recursos do MVP inicial</CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {mvpFeatures.map((item) => (
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid gap-5 sm:grid-cols-2">
              {futureFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <Card key={feature.title} className="rounded-[1.5rem]">
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

            <div>
              <Badge variant="outline" className="mb-4 rounded-full">
                Futuro do produto
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Depois da legenda, entram os recursos que fazem o produto
                crescer.
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                A versão inicial é a fundação. Quando a sala, a tradução e o
                histórico estiverem sólidos, o BabelCall pode evoluir para voz
                traduzida, resumos, glossários e planos para empresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full">
              Diferenciais
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Não é só um tradutor. É uma experiência de conversa.
            </h2>

            <p className="mt-4 text-muted-foreground">
              A diferença está em reduzir atrito, manter contexto e preparar o
              produto para uso real em trabalho, atendimento e reuniões.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <Card key={benefit.title} className="rounded-[1.5rem]">
                  <CardHeader>
                    <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>

                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {benefit.description}
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
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-border bg-muted/40 p-8 lg:border-b-0 lg:border-r sm:p-10">
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Radio className="size-7" />
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Sala em tempo real
                </h2>

                <p className="mt-4 leading-8 text-muted-foreground">
                  A sala é o centro do BabelCall. É nela que a conversa
                  acontece, a tradução aparece e o produto mostra valor.
                </p>
              </div>

              <div className="space-y-5 p-8 sm:p-10">
                <div className="rounded-2xl bg-muted p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                    <Mic2 className="size-4 text-primary" />
                    Entrada
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">
                    “Eu consigo apresentar meu serviço para clientes de fora do
                    Brasil.”
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                    <Languages className="size-4 text-primary" />
                    Tradução
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">
                    “I can present my service to clients outside Brazil.”
                  </p>
                </div>

                <div className="rounded-2xl bg-muted p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                    <MessageSquareText className="size-4 text-primary" />
                    Histórico
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">
                    A conversa fica organizada para consulta, resumo e evolução
                    futura do produto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm sm:p-12">
            <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Globe2 className="size-7" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O próximo recurso mais importante é a sala.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
              A página de recursos mostra a visão. Agora o produto precisa
              começar a funcionar: criar sala, entrar por link e preparar a
              base para tradução.
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
                <Link href="/how-it-works">Como funciona</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}