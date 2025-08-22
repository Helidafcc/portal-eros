import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ModernCard({ 
  children, 
  className = "", 
  glowColor = "yellow", 
  delay = 0,
  hover3D = false 
}) {
  const glowColors = {
    yellow: "shadow-yellow-500/20 hover:shadow-yellow-500/40",
    purple: "shadow-purple-500/20 hover:shadow-purple-500/40",
    pink: "shadow-pink-500/20 hover:shadow-pink-500/40",
    blue: "shadow-blue-500/20 hover:shadow-blue-500/40"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={hover3D ? { 
        scale: 1.05, 
        rotateY: 5, 
        rotateX: 5,
        transition: { duration: 0.3 }
      } : { scale: 1.02 }}
      className="group"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      <Card className={`
        bg-gradient-to-br from-purple-950/40 via-purple-900/30 to-purple-800/40 
        backdrop-blur-xl 
        border border-yellow-500/40 
        rounded-2xl 
        shadow-2xl 
        ${glowColors[glowColor]}
        hover:border-yellow-400/60
        transition-all 
        duration-300 
        relative
        overflow-hidden
        ${className}
      `}>
        {/* Efeito de brilho interno */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Partículas flutuantes */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse" />
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" />
        
        <CardContent className="relative z-10">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
}

