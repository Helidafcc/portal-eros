import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Moon, Star, BookOpen } from "lucide-react"

// Importando seus fundos
import ParticleBackground from "@/components/ParticleBackground"
import Scene3D from "@/components/Scene3D"

export default function HomeScreen() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-purple-950 via-indigo-900 to-black text-white">
      
      {/* Fundo Animado */}
      <ParticleBackground />
      {/* Caso queira a cena 3D */}
      {/* <Scene3D /> */}

      {/* Conteúdo Principal */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-8 z-10 text-center"
      >
        🌙 Portal Místico Esphera
      </motion.h1>

      {/* Card de Destaque */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-md z-10"
      >
        <Card className="bg-gradient-to-br from-purple-800/80 to-indigo-900/80 border border-purple-500/50 shadow-xl rounded-2xl">
          <CardContent className="p-6 text-center space-y-4">
            <Moon className="mx-auto w-10 h-10 text-yellow-300" />
            <h2 className="text-xl font-semibold">✨ Destaque do Dia ✨</h2>
            <p className="text-gray-200">
              Descubra sua energia para hoje e alinhe-se com o universo.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl shadow-lg">
              Consultar Oráculo
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}