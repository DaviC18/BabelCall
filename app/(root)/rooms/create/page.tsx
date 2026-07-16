"use client";

import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Languages,
  Link2,
  Loader2,
  Mic2,
  PhoneCall,
  Radio,
  Sparkles,
  Users2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { type FormEvent, useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { benefitsRoom, languages } from "@/constants";

function createRoomId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID().slice(0, 8);
  }

  return Math.random().toString(36).slice(2, 10);
}

export default function CreateRoomPage() {
  const router = useRouter();

  const [roomTitle, setRoomTitle] = useState("Minha primeira sala");
  const [displayName, setDisplayName] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("pt-BR");
  const [targetLanguage, setTargetLanguage] = useState("en-US");
  const [description, setDescription] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sourceLanguageLabel = useMemo(() => {
    return languages.find((language) => language.value === sourceLanguage)?.label;
  }, [sourceLanguage]);

  const targetLanguageLabel = useMemo(() => {
    return languages.find((language) => language.value === targetLanguage)?.label;
  }, [targetLanguage]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(null);

    if (!displayName.trim()) {
      setError("Digite seu nome para criar a sala.");
      return;
    }

    if (!roomTitle.trim()) {
      setError("Digite um título para a sala.");
      return;
    }

    if (sourceLanguage === targetLanguage) {
      setError("Escolha idiomas diferentes para testar a tradução.");
      return;
    }

    setIsCreating(true);

    const roomId = createRoomId();

    const params = new URLSearchParams({
      name: displayName.trim(),
      source: sourceLanguage,
      target: targetLanguage,
      title: roomTitle.trim(),
    });

    if (description.trim()) {
      params.set("description", description.trim());
    }

    router.push(`/room/${roomId}?${params.toString()}`);
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_35%),radial-gradient(circle_at_bottom_right,hsl(var(--primary)/0.10),transparent_35%)]" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <div>
            <Badge
              variant="secondary"
              className="mb-6 rounded-full border border-border bg-card px-4 py-2"
            >
              <Sparkles className="mr-2 size-4 text-primary" />
              BabelCall Rooms
            </Badge>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Crie uma sala.
              <span className="block text-primary">
                Comece a ponte entre idiomas.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Configure os idiomas da conversa, gere um link único e prepare a
              sala onde a tradução em tempo real vai acontecer. Primeiro a
              estrutura. Depois o motor de IA entra rugindo.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefitsRoom.map((benefit) => (
                <div key={benefit} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm leading-7 text-muted-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Card className="rounded-[2rem] shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <Badge variant="outline" className="mb-3 rounded-full">
                    Nova sala
                  </Badge>

                  <CardTitle className="text-2xl">
                    Configure sua conversa
                  </CardTitle>
                </div>

                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <PhoneCall className="size-6" />
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="room-title">Título da sala</Label>
                  <Input
                    id="room-title"
                    value={roomTitle}
                    onChange={(event) => setRoomTitle(event.target.value)}
                    placeholder="Ex: Reunião com cliente internacional"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="display-name">Seu nome</Label>
                  <Input
                    id="display-name"
                    value={displayName}
                    onChange={(event) => setDisplayName(event.target.value)}
                    placeholder="Ex: Davi"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Idioma que você fala</Label>

                    <Select
                      value={sourceLanguage}
                      onValueChange={(value) => value && setSourceLanguage(value)}                    
                      >
                      <SelectTrigger>
                        <SelectValue placeholder="Escolha o idioma" />
                      </SelectTrigger>

                      <SelectContent>
                        {languages.map((language) => (
                          <SelectItem
                            key={language.value}
                            value={language.value}
                          >
                            {language.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Idioma que quer receber</Label>

                    <Select
                      value={targetLanguage}
                      onValueChange={(value) => value && setTargetLanguage(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Escolha o idioma" />
                      </SelectTrigger>

                      <SelectContent>
                        {languages.map((language) => (
                          <SelectItem
                            key={language.value}
                            value={language.value}
                          >
                            {language.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição opcional</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Ex: Conversa para apresentar um projeto, atendimento ou reunião rápida."
                    className="min-h-24 resize-none"
                  />
                </div>

                {error && (
                  <div className="rounded-2xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isCreating}
                  className="w-full rounded-full"
                >
                  {isCreating ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" />
                      Criando sala
                    </>
                  ) : (
                    <>
                      Criar sala
                      <ArrowRight className="ml-2 size-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full">
                Prévia
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A sala já nasce com o fluxo certo.
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                Mesmo antes da IA entrar, a página já organiza o que importa:
                quem está falando, qual idioma entra, qual idioma sai e onde a
                legenda traduzida será exibida.
              </p>
            </div>

            <Card className="overflow-hidden rounded-[2rem]">
              <CardHeader className="border-b border-border bg-muted/40">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <CardTitle>{roomTitle || "Minha primeira sala"}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {sourceLanguageLabel} → {targetLanguageLabel}
                    </p>
                  </div>

                  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Radio className="size-5" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-5 p-6">
                <div className="rounded-2xl bg-muted p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                    <Mic2 className="size-4 text-primary" />
                    {displayName.trim() || "Você"} falou
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">
                    Olá, quero apresentar meu projeto.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 text-primary">
                    <Globe2 className="size-4" />
                    <Languages className="size-5" />
                    <Link2 className="size-4" />
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                    <Languages className="size-4 text-primary" />
                    Legenda traduzida
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">
                    Hello, I want to present my project.
                  </p>
                </div>

                <div className="rounded-2xl border border-dashed border-border bg-background p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                    <Users2 className="size-4 text-primary" />
                    Link da sala
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">
                    Depois de criada, você poderá copiar o link e enviar para
                    outra pessoa entrar.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}