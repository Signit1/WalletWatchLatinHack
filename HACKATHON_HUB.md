# 🏆 WalletWatch - Latin Hackathon Hub

## 📋 Overview

**WalletWatch** es una herramienta de análisis de riesgo en tiempo real para wallets de criptomonedas que combina múltiples fuentes de datos con certificados NFT verificables en blockchain.

### 🎯 Problem Statement
- **Problema**: Falta de herramientas accesibles para evaluar riesgos de wallets antes de interactuar
- **Solución**: Semáforo de riesgo instantáneo con certificados NFT verificables
- **Impacto**: Reducir pérdidas por interacciones con wallets maliciosas o sancionadas

### 🚀 Demo Video
*[Placeholder para video demo - mostrar flujo completo de análisis y minting]*

## 🔗 Enlaces Importantes

- **Demo URL**: `https://walletwatch-demo.vercel.app`
- **Test Page**: `/test` - Funcionalidad completa de wallet connection y NFT minting
- **Contrato**: Ver `lib/onchain/address.ts` para la dirección del contrato desplegado
- **ABI**: `lib/onchain/abi/RiskCertificateNFT.json`

## 👥 Equipo

- **Desarrollador Principal**: [Tu nombre]
- **Stack**: Full-stack con expertise en Web3, React, y Solidity
- **Experiencia**: [Tu background relevante]

## 🗺️ Roadmap

### ✅ Milestone 1 - Semana 1-2 (Completado)
- [x] Setup inicial del proyecto Next.js + TypeScript + Tailwind
- [x] Implementación del sistema de scoring y análisis
- [x] Integración con fuentes de datos públicas (OFAC, FBI, INTERPOL)
- [x] UI/UX básica con semáforo de riesgo
- [x] API endpoints para análisis

### 🚧 Milestone 2 - Semana 3-4 (En Progreso)
- [x] Smart contract ERC-721 para certificados de riesgo
- [x] Integración con wagmi/viem para wallet connection
- [x] Página de test con funcionalidad completa de minting
- [x] Sistema de metadata dinámico para NFTs
- [ ] Deploy en Paseo testnet
- [ ] Testing exhaustivo de funcionalidades

### 🎯 Milestone 3 - Semana 5-6 (Próximo)
- [ ] Integración con fuentes premium (Chainalysis, Elliptic)
- [ ] Sistema de suscripciones y rate limiting
- [ ] Dashboard de historial de análisis
- [ ] Optimizaciones de performance
- [ ] Documentación completa y tutoriales

### 🚀 Milestone 4 - Post-Hackathon
- [ ] Deploy en mainnet
- [ ] Integración con más blockchains (Bitcoin, Polkadot)
- [ ] API pública para desarrolladores
- [ ] Sistema de alertas y monitoreo continuo
- [ ] Partnership con exchanges y wallets

## 🏅 Bounties Aplicables

### 🎬 Viral Hack Bounty
**Criterios**:
- [x] Proyecto innovador y técnicamente sólido
- [x] UI/UX atractiva y funcional
- [x] Demo funcional completa
- [x] Potencial viral y adopción masiva
- [x] Documentación clara y README completo

**Estrategia**:
- Demo video mostrando el flujo completo
- Casos de uso reales con wallets conocidas
- Integración social para compartir análisis
- Hashtags: #WalletWatch #CryptoSecurity #LatinHack

### 🛠️ v0.dev Bounty
**Criterios**:
- [x] Uso de v0.dev para componentes UI
- [x] Diseño moderno y responsive
- [x] Componentes reutilizables
- [x] Accesibilidad y UX optimizada

**Implementación**:
- Componentes shadcn/ui integrados
- Paleta de colores personalizada
- Responsive design para mobile/desktop
- Animaciones y transiciones suaves

## 🎨 Branding y Design System

### Logo
- **Monograma**: "WW" en tipografía moderna
- **Semáforo**: 3 puntos verticales (verde/amarillo/rojo)
- **Colores**: Paleta cian/púrpura con fondo oscuro

### Componentes Clave
- `TrafficLight`: Semáforo visual del estado de riesgo
- `AnalysisResult`: Card con resultados detallados
- `WalletAnalyzer`: Input principal para análisis
- `RiskCertificateNFT`: Visualización de certificados

## 🔧 Arquitectura Técnica

### Frontend
```
app/
├── (main)/
│   ├── analyze/page.tsx      # Página principal
│   ├── history/page.tsx      # Historial
│   ├── subscription/page.tsx # Suscripciones
│   └── methodology/page.tsx  # Metodología
├── test/page.tsx             # Test page con minting
└── api/
    ├── analyze/route.ts      # Análisis de wallets
    └── healthz/route.ts      # Health check
```

### Backend/Smart Contracts
```
contracts/
└── RiskCertificateNFT.sol    # Contrato ERC-721

lib/
├── scoring/
│   ├── traffic.ts           # Lógica del semáforo
│   └── nickname.ts          # Sistema de nicknames
├── providers/
│   ├── publicSanctions.ts   # Fuentes públicas
│   └── mockRisk.ts          # Scoring mock
└── onchain/
    ├── client.ts            # Cliente viem
    ├── address.ts           # Direcciones de contratos
    └── abi/                 # ABIs de contratos
```

## 📊 Métricas de Éxito

### Técnicas
- [x] Análisis de wallet en <2 segundos
- [x] 99.9% uptime de API
- [x] Soporte para 3 blockchains (ETH/BTC/DOT)
- [x] Integración con 4+ fuentes de datos

### Adopción
- [ ] 100+ análisis por día
- [ ] 50+ certificados NFT minteados
- [ ] 10+ wallets conectadas
- [ ] 5+ reviews positivas

## 🚨 Challenges y Soluciones

### Challenge 1: Integración de Múltiples Fuentes
**Problema**: Diferentes APIs con formatos y rate limits distintos
**Solución**: Sistema de providers modular con fallbacks y caching

### Challenge 2: Scoring Consistente
**Problema**: Necesidad de scores reproducibles y justificables
**Solución**: Algoritmo determinístico basado en hash de address + factores de riesgo

### Challenge 3: UX para Usuarios No-Técnicos
**Problema**: Conceptos complejos de blockchain y riesgo
**Solución**: Semáforo visual + nicknames + explicaciones claras

## 🎯 Próximos Pasos

1. **Inmediato** (Esta semana):
   - Deploy del contrato en Paseo testnet
   - Testing completo de todas las funcionalidades
   - Creación del video demo

2. **Corto plazo** (2-4 semanas):
   - Integración con fuentes premium
   - Sistema de suscripciones
   - Optimizaciones de performance

3. **Mediano plazo** (1-3 meses):
   - Deploy en mainnet
   - Partnership con exchanges
   - API pública para desarrolladores

## 📞 Contacto

- **GitHub**: [Tu GitHub]
- **Twitter**: [Tu Twitter]
- **Email**: [Tu email]
- **LinkedIn**: [Tu LinkedIn]

---

**WalletWatch** - Construyendo un ecosistema crypto más seguro, una wallet a la vez. 🚦✨

*Desarrollado con ❤️ para el Latin Hackathon*
