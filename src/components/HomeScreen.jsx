import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Moon, Star, BookOpen } from "lucide-react";

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-gold-200 p-6 flex flex-col items-center">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-yellow-400 mb-6 tracking-wide text-center"
      >
        🌙 Portal Místico Esphera
      </motion.h1>

      {/* Destaque do Dia */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-md"
      >
        <Card className="bg-purple-950/40 backdrop-blur-xl border border-yellow-500/40 rounded-2xl shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Moon className="h-12 w-12 text-yellow-400 mb-3" />
            <h2 className="text-xl font-semibold text-yellow-300">Carta do Dia</h2>
            <p className="text-base text-purple-100 mt-2 italic">
              "O Mago — Hoje é dia de manifestar sua força interior e criar sua realidade."
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Ações Rápidas */}
      <div className="grid grid-cols-3 gap-4 mt-10 max-w-md w-full">
        <Button className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 rounded-2xl flex flex-col py-6">
          <Star className="h-6 w-6 mb-2" />
          Oráculos
        </Button>
        <Button className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 rounded-2xl flex flex-col py-6">
          <Moon className="h-6 w-6 mb-2" />
          Calendário
        </Button>
        <Button className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 rounded-2xl flex flex-col py-6">
          <BookOpen className="h-6 w-6 mb-2" />
          Biblioteca
        </Button>
      </div>

      {/* Mensagem Inspiracional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 text-center max-w-md"
      >
        <p className="text-lg italic text-purple-100">
          ✨ "Confie no fluxo do universo. Sua energia molda a Esphera ao seu redor." ✨
        </p>
      </motion.div>
    </div>
  );
}

