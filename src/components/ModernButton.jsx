import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ModernButton({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary",
  size = "default",
  icon = null,
  glowEffect = true,
  ...props 
}) {
  const variants = {
    primary: `
      bg-gradient-to-r from-yellow-500/20 via-yellow-400/30 to-yellow-500/20 
      hover:from-yellow-400/30 hover:via-yellow-300/40 hover:to-yellow-400/30
      text-yellow-300 hover:text-yellow-200
      border border-yellow-500/40 hover:border-yellow-400/60
      shadow-lg shadow-yellow-500/20 hover:shadow-yellow-400/30
    `,
    secondary: `
      bg-gradient-to-r from-purple-500/20 via-purple-400/30 to-purple-500/20 
      hover:from-purple-400/30 hover:via-purple-300/40 hover:to-purple-400/30
      text-purple-300 hover:text-purple-200
      border border-purple-500/40 hover:border-purple-400/60
      shadow-lg shadow-purple-500/20 hover:shadow-purple-400/30
    `,
    accent: `
      bg-gradient-to-r from-pink-500/20 via-pink-400/30 to-pink-500/20 
      hover:from-pink-400/30 hover:via-pink-300/40 hover:to-pink-400/30
      text-pink-300 hover:text-pink-200
      border border-pink-500/40 hover:border-pink-400/60
      shadow-lg shadow-pink-500/20 hover:shadow-pink-400/30
    `
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
    icon: "p-3"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        onClick={onClick}
        className={`
          ${variants[variant]}
          ${sizes[size]}
          rounded-2xl
          backdrop-blur-sm
          transition-all
          duration-300
          relative
          overflow-hidden
          group
          ${className}
        `}
        {...props}
      >
        {/* Efeito de brilho ao hover */}
        {glowEffect && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        )}
        
        {/* Conteúdo do botão */}
        <div className="relative z-10 flex items-center justify-center gap-2">
          {icon && (
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="flex-shrink-0"
            >
              {icon}
            </motion.div>
          )}
          {children}
        </div>
      </Button>
    </motion.div>
  );
}

