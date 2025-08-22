import { useState, Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Moon, Star, BookOpen, Calendar as CalIcon, Shuffle, Music, Gem, Crown, Play, Pause, Lock } from "lucide-react";
import Scene3D from "./components/Scene3D";
import ModernCard from "./components/ModernCard";
import ModernButton from "./components/ModernButton";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";

// Utilitário simples para classes
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Dados base (mock)
const MAIORES_ARCANOS = [
  { nome: "O Louco", msg: "Confie no salto de fé. O novo te chama." },
  { nome: "O Mago", msg: "Manifeste. Você tem todas as ferramentas." },
  { nome: "A Sacerdotisa", msg: "Silêncio fértil. Ouça a intuição." },
  { nome: "A Imperatriz", msg: "Criação, prazer e abundância florescem." },
  { nome: "O Imperador", msg: "Estruturas, limites e liderança." },
  { nome: "O Hierofante", msg: "Sabedoria ancestral, ritos e propósito." },
  { nome: "Os Enamorados", msg: "Escolhas com o coração, alinhadas à alma." },
  { nome: "O Carro", msg: "Avanço com foco. Direção é poder." },
  { nome: "A Justiça", msg: "Equilíbrio, verdade e consequências." },
  { nome: "O Eremita", msg: "Retiro sagrado. A lâmpada está em você." },
  { nome: "A Roda da Fortuna", msg: "Ciclos mudam. Renda-se ao fluxo." },
  { nome: "A Força", msg: "Doçura firme doma o leão interno." },
  { nome: "O Enforcado", msg: "Nova perspectiva cura antigos nós." },
  { nome: "A Morte", msg: "Fim fértil. Renascimento inevitável." },
  { nome: "A Temperança", msg: "Alquimia das emoções. Meio-termo sagrado." },
  { nome: "O Diabo", msg: "Desejo, sombra e escolhas conscientes." },
  { nome: "A Torre", msg: "Queda de ilusões. Verdade liberta." },
  { nome: "A Estrela", msg: "Esperança, guia e restauração." },
  { nome: "A Lua", msg: "Mistérios e sonhos pedem discernimento." },
  { nome: "O Sol", msg: "Clareza, vitalidade e alegria." },
  { nome: "O Julgamento", msg: "Chamado da alma. Levante-se." },
  { nome: "O Mundo", msg: "Integração e conclusão de jornada." },
];

function sacarCartas(n) {
  const pool = [...MAIORES_ARCANOS];
  const escolhidas = [];
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    escolhidas.push(pool[idx]);
    pool.splice(idx, 1);
  }
  return escolhidas;
}

// ------------------------------------------------------------
// TELAS
// ------------------------------------------------------------
function Home({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-gold-200 p-6 flex flex-col items-center relative overflow-hidden">
      {/* Fundo 3D */}
      <Suspense fallback={null}>
        <Scene3D variant="home" />
      </Suspense>
      
      {/* Fundo de partículas */}
      <ParticleBackground />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-yellow-400 mb-8 tracking-wide text-center relative z-10 drop-shadow-2xl"
      >
        🌙 Portal Místico Esphera
      </motion.h1>

      {/* Destaque do Dia */}
      <div className="w-full max-w-md relative z-10">
        <ModernCard glowColor="yellow" delay={0.1} hover3D={true}>
          <div className="p-6 flex flex-col items-center text-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Moon className="h-14 w-14 text-yellow-400 mb-4 drop-shadow-lg" />
            </motion.div>
            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">Carta do Dia</h2>
            <p className="text-base text-purple-100 italic leading-relaxed">
              "O Mago — Hoje é dia de manifestar sua força interior e criar sua realidade."
            </p>
          </div>
        </ModernCard>
      </div>

      {/* Ações Rápidas */}
      <div className="grid grid-cols-3 gap-4 mt-12 max-w-md w-full relative z-10">
        <ModernButton 
          onClick={() => onNavigate("oraculos")} 
          variant="primary"
          className="flex flex-col py-8"
          delay={0.2}
        >
          <Star className="h-7 w-7 mb-2" />
          Oráculos
        </ModernButton>
        
        <ModernButton 
          onClick={() => onNavigate("calendario")} 
          variant="secondary"
          className="flex flex-col py-8"
          delay={0.3}
        >
          <CalIcon className="h-7 w-7 mb-2" />
          Calendário
        </ModernButton>
        
        <ModernButton 
          onClick={() => onNavigate("biblioteca")} 
          variant="accent"
          className="flex flex-col py-8"
          delay={0.4}
        >
          <BookOpen className="h-7 w-7 mb-2" />
          Biblioteca
        </ModernButton>
      </div>

      {/* Mensagem Inspiracional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 text-center max-w-md relative z-10"
      >
        <ModernCard glowColor="purple" delay={0.6}>
          <div className="p-4">
            <p className="text-lg italic text-purple-100 leading-relaxed">
              ✨ "Confie no fluxo do universo. Sua energia molda a Esphera ao seu redor." ✨
            </p>
          </div>
        </ModernCard>
      </motion.div>
    </div>
  );
}

function Oraculos({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-gold-200 p-6 relative overflow-hidden">
      {/* Fundo de partículas */}
      <ParticleBackground />
      
      <div className="relative z-10">
        <Header title="Oráculos" onBack={() => onNavigate("home")} />

        <div className="grid gap-6 max-w-2xl mx-auto mt-6 sm:grid-cols-2">
          <ModernCard glowColor="yellow" delay={0.1} hover3D={true}>
            <FeatureCard
              icon={<Shuffle className="h-8 w-8 text-yellow-300" />}
              title="Tarô (rápido)"
              desc="Tiragens de 1, 3 e 5 cartas com insights."
              onClick={() => onNavigate("tarot")}
              modern={true}
            />
          </ModernCard>
          
          <ModernCard glowColor="purple" delay={0.2} hover3D={true}>
            <FeatureCard
              icon={<Shuffle className="h-8 w-8 text-purple-300" />}
              title="Tarô (Cruz)"
              desc="Passado, Presente, Futuro, Conselho e Resultado."
              onClick={() => onNavigate("tarotCruz")}
              modern={true}
            />
          </ModernCard>
          
          <ModernCard glowColor="blue" delay={0.3} hover3D={true}>
            <FeatureCard
              icon={<Gem className="h-8 w-8 text-blue-300" />}
              title="Runas"
              desc="Mensagens dos símbolos nórdicos. (Em breve)"
              modern={true}
            />
          </ModernCard>
          
          <ModernCard glowColor="pink" delay={0.4} hover3D={true}>
            <FeatureCard
              icon={<Music className="h-8 w-8 text-pink-300" />}
              title="Sigilos & Frequências"
              desc="Ativadores vibracionais e sons de cura."
              onClick={() => onNavigate("sigilos")}
              modern={true}
            />
          </ModernCard>
        </div>
      </div>
    </div>
  );
}

function Tarot() {
  const [cartas, setCartas] = useState([]);
  function sortear(n) { setCartas(sacarCartas(n)); }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-gold-200 p-6 relative overflow-hidden">
      {/* Fundo 3D específico para tarô */}
      <Suspense fallback={null}>
        <Scene3D variant="tarot" />
      </Suspense>
      
      <div className="relative z-10">
        <Header title="Tarô — Tiragem" />

        <div className="max-w-2xl mx-auto">
          <ModernCard glowColor="yellow" delay={0.1}>
            <div className="p-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <ModernButton onClick={() => sortear(1)} variant="primary" size="default">
                  1 carta
                </ModernButton>
                <ModernButton onClick={() => sortear(3)} variant="secondary" size="default">
                  3 cartas
                </ModernButton>
                <ModernButton onClick={() => sortear(5)} variant="accent" size="default">
                  5 cartas
                </ModernButton>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {cartas.length === 0 ? (
                  <div className="col-span-full text-center">
                    <p className="text-purple-100 italic text-lg">Escolha uma tiragem para revelar suas cartas.</p>
                  </div>
                ) : (
                  cartas.map((c, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20, rotateY: 180 }} 
                      animate={{ opacity: 1, y: 0, rotateY: 0 }} 
                      transition={{ delay: i * 0.2, duration: 0.6 }}
                    >
                      <ModernCard glowColor="purple" delay={i * 0.1} hover3D={true}>
                        <div className="p-4">
                          <p className="text-yellow-300 font-semibold mb-2 text-lg">{c.nome}</p>
                          <p className="text-purple-100 text-sm leading-relaxed">{c.msg}</p>
                        </div>
                      </ModernCard>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </ModernCard>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <ModernCard glowColor="blue" delay={0.3}>
              <div className="p-4 text-center">
                <p className="text-sm text-purple-100/90 leading-relaxed">
                  💫 Dica: após a leitura, respire fundo 9 vezes e anote um insight. O ritual fixa a mensagem na Esphera.
                </p>
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function TarotCruz() {
  const [resultado, setResultado] = useState(null);

  const posicoes = [
    { key: "passado", label: "Passado" },
    { key: "presente", label: "Presente" },
    { key: "futuro", label: "Futuro Próximo" },
    { key: "conselho", label: "Conselho" },
    { key: "resultado", label: "Resultado" },
  ];

  function jogar() {
    const cartas = sacarCartas(5);
    setResultado(posicoes.map((p, i) => ({ pos: p.label, carta: cartas[i] })));
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-gold-200 p-6">
      <Header title="Tarô — Tiragem em Cruz" />

      <div className="max-w-3xl mx-auto">
        <Card className="bg-purple-950/40 border border-yellow-500/40 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3">
              <Button onClick={jogar} className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 rounded-xl">Revelar 5 cartas</Button>
            </div>

            {/* Layout em cruz (responsivo simples) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {/* topo */}
              <div className="sm:col-start-2">
                <CartaBloco titulo="Passado" data={resultado?.[0]} />
              </div>
              {/* meio esquerda / centro / direita */}
              <div className="sm:col-start-1"><CartaBloco titulo="Conselho" data={resultado?.[3]} /></div>
              <div className="sm:col-start-2"><CartaBloco titulo="Presente" data={resultado?.[1]} /></div>
              <div className="sm:col-start-3"><CartaBloco titulo="Resultado" data={resultado?.[4]} /></div>
              {/* base */}
              <div className="sm:col-start-2"><CartaBloco titulo="Futuro Próximo" data={resultado?.[2]} /></div>
            </div>

            {resultado && (
              <div className="mt-6 p-4 rounded-xl bg-purple-900/40 border border-yellow-500/30">
                <p className="text-sm text-purple-100/90">
                  Integração: observe como o <span className="text-yellow-300">Conselho</span> modula o <span className="text-yellow-300">Resultado</span>
                  partindo das lições do <span className="text-yellow-300">Passado</span> e do estado do <span className="text-yellow-300">Presente</span>.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CartaBloco({ titulo, data }) {
  return (
    <div className="rounded-2xl border border-yellow-500/40 bg-purple-900/40 p-4 h-full">
      <p className="text-yellow-300 font-semibold mb-1">{titulo}</p>
      {data ? (
        <>
          <p className="text-purple-100 font-medium">{data.carta.nome}</p>
          <p className="text-purple-100/90 text-sm mt-1">{data.carta.msg}</p>
        </>
      ) : (
        <p className="text-purple-100/70 text-sm italic">Clique em "Revelar 5 cartas"</p>
      )}
    </div>
  );
}

function Calendario({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-gold-200 p-6">
      <Header title="Calendário Místico" onBack={() => onNavigate("home")} />

      <div className="max-w-2xl mx-auto grid gap-4">
        <Card className="bg-purple-950/40 border border-yellow-500/40 rounded-2xl">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <Moon className="h-6 w-6 text-yellow-300" />
              <h3 className="text-lg font-semibold text-yellow-300">Fase da Lua (demo)</h3>
            </div>
            <p className="text-purple-100 mt-2">Lua Crescente — energia de crescimento, ação e ajustes finos.</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-950/40 border border-yellow-500/40 rounded-2xl">
          <CardContent className="p-5">
            <h3 className="text-lg font-semibold text-yellow-300">Próximos Portais</h3>
            <ul className="mt-2 list-disc list-inside text-purple-100/90 space-y-1">
              <li>Portal 9/9 — Conclusões e entrega (Ritual de gratidão).</li>
              <li>Equinócio — Reequilíbrio de luz e sombra (Banho de ervas).</li>
              <li>Eclipse — Revelações e reinício (Carta única de direção).</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Biblioteca({ onNavigate }) {
  const itens = [
    { titulo: "Frequência 528 Hz", desc: "Restauração e amor — use em meditações curtas." },
    { titulo: "Sigilo da Rosa Vermelha", desc: "Magnetismo, autoestima e sedução consciente." },
    { titulo: "Arquétipo do Mago", desc: "Manifestação e foco. Ritual de 7 dias." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-gold-200 p-6">
      <Header title="Biblioteca Vibracional" onBack={() => onNavigate("home")} />
      <div className="max-w-2xl mx-auto grid gap-4">
        {itens.map((i, idx) => (
          <Card key={idx} className="bg-purple-950/40 border border-yellow-500/40 rounded-2xl">
            <CardContent className="p-5">
              <h3 className="text-yellow-300 font-semibold">{i.titulo}</h3>
              <p className="text-purple-100 text-sm mt-1">{i.desc}</p>
              <div className="mt-3 flex gap-2">
                <Button className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 rounded-xl">Abrir</Button>
                <Button className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-200/80 rounded-xl">Favoritar</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SigilosEFrequencias({ onNavigate, onRequirePremium }) {
  const [tocando, setTocando] = useState(null);
  const tracks = [
    { id: "528", titulo: "528 Hz — Amor e Restauração", premium: false },
    { id: "432", titulo: "432 Hz — Harmonia Celeste", premium: false },
    { id: "963", titulo: "963 Hz — Portal da Consciência", premium: true },
  ];

  function togglePlay(id, premium) {
    if (premium) { onRequirePremium(); return; }
    setTocando(prev => prev === id ? null : id);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-gold-200 p-6">
      <Header title="Sigilos & Frequências" onBack={() => onNavigate("oraculos")} />
      <div className="max-w-2xl mx-auto grid gap-4">
        {tracks.map(t => (
          <Card key={t.id} className="bg-purple-950/40 border border-yellow-500/40 rounded-2xl">
            <CardContent className="p-5 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-yellow-300 font-semibold flex items-center gap-2">
                  {t.titulo}
                  {t.premium && <span className="inline-flex items-center gap-1 text-xs bg-yellow-500/20 text-yellow-200 px-2 py-0.5 rounded"><Crown className="h-3 w-3"/> Premium</span>}
                </h3>
                <p className="text-purple-100 text-sm mt-1">Player demonstrativo (mock) — sem áudio real.</p>
              </div>
              <div className="flex items-center gap-2">
                <Button onClick={() => togglePlay(t.id, t.premium)} className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 rounded-xl p-2">
                  {tocando === t.id ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ModalPremium({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <Card className="bg-purple-950/90 border border-yellow-500/40 rounded-2xl max-w-md w-full">
        <CardContent className="p-6 text-center">
          <Crown className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Conteúdo Premium</h3>
          <p className="text-purple-100 mb-4">
            Este recurso está disponível apenas para membros premium. Desbloqueie acesso completo ao Portal Místico Esphera.
          </p>
          <div className="flex gap-3">
            <Button onClick={onClose} className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-200/80 rounded-xl flex-1">
              Fechar
            </Button>
            <Button className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 rounded-xl flex-1">
              Upgrade
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Componentes auxiliares
function Header({ title, onBack }) {
  return (
    <div className="max-w-2xl mx-auto mb-4 flex items-center gap-3">
      {onBack ? (
        <Button onClick={onBack} className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 rounded-xl px-3 py-2">Voltar</Button>
      ) : null}
      <h2 className="text-2xl font-semibold text-yellow-300">{title}</h2>
    </div>
  );
}

function FeatureCard({ icon, title, desc, onClick, modern = false }) {
  if (modern) {
    return (
      <div onClick={onClick} className={`cursor-pointer transition-all duration-300 ${onClick ? "" : "opacity-70"}`}>
        <div className="p-6">
          <div className="flex items-start gap-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {icon}
            </motion.div>
            <div>
              <h3 className="text-yellow-300 font-semibold text-lg mb-2">{title}</h3>
              <p className="text-purple-100 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card onClick={onClick} className={cx("cursor-pointer bg-purple-950/40 border border-yellow-500/40 rounded-2xl transition hover:bg-purple-900/50", onClick ? "" : "opacity-70") }>
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          {icon}
          <div>
            <h3 className="text-yellow-300 font-semibold">{title}</h3>
            <p className="text-purple-100 text-sm mt-1">{desc}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ------------------------------------------------------------
// APP (NAVEGAÇÃO SIMPLES)
// ------------------------------------------------------------
export default function App() {
  const [view, setView] = useState("home");
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  function handleRequirePremium() {
    setShowPremiumModal(true);
  }

  return (
    <div>
      {view === "home" && <Home onNavigate={setView} />}
      {view === "oraculos" && <Oraculos onNavigate={setView} />}
      {view === "tarot" && <Tarot />}
      {view === "tarotCruz" && <TarotCruz />}
      {view === "calendario" && <Calendario onNavigate={setView} />}
      {view === "biblioteca" && <Biblioteca onNavigate={setView} />}
      {view === "sigilos" && <SigilosEFrequencias onNavigate={setView} onRequirePremium={handleRequirePremium} />}

      {/* Barra fixa moderna */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex gap-3 bg-purple-950/80 border border-yellow-500/30 rounded-3xl px-4 py-3 backdrop-blur-xl shadow-2xl">
          <ModernButton 
            onClick={() => setView("home")} 
            variant={view === "home" ? "primary" : "secondary"}
            size="sm"
            className="px-4 py-2"
          >
            Home
          </ModernButton>
          <ModernButton 
            onClick={() => setView("oraculos")} 
            variant={view === "oraculos" ? "primary" : "secondary"}
            size="sm"
            className="px-4 py-2"
          >
            Oráculos
          </ModernButton>
          <ModernButton 
            onClick={() => setView("calendario")} 
            variant={view === "calendario" ? "primary" : "secondary"}
            size="sm"
            className="px-4 py-2"
          >
            Calendário
          </ModernButton>
          <ModernButton 
            onClick={() => setView("biblioteca")} 
            variant={view === "biblioteca" ? "primary" : "secondary"}
            size="sm"
            className="px-4 py-2"
          >
            Biblioteca
          </ModernButton>
        </div>
      </motion.div>

      {/* Modal Premium */}
      {showPremiumModal && <ModalPremium onClose={() => setShowPremiumModal(false)} />}
    </div>
  );
}

